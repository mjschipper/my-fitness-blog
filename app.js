const express = require('express');
const bodyParser = require('body-parser');
const marked = require('marked');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let workoutPlan = `
# Workout Plan
**Day 1: Lower Body Strength**
- Squats: 3 sets of 10 reps
- Deadlifts: 3 sets of 10 reps
`;

app.get('/', (req, res) => {
    res.render('index', { workoutPlan: marked(workoutPlan) });
});

app.post('/progress', (req, res) => {
    const { exercise, sets, reps, weight } = req.body;
    // Save progress to the database (placeholder)
    console.log(`Exercise: ${exercise}, Sets: ${sets}, Reps: ${reps}, Weight: ${weight}`);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});