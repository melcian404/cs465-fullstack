var fs = require('fs');
// Read trips data from JSON file
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// GET travel view
const travel = (req, res) => {              // pass trips data into handlebar view
    res.render('travel', { title: 'Travlr Getaways', trips});
};

module.exports = {
    travel
};