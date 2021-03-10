// DEPENDENCIES
const path = require('path');
const fs = require('fs');

// ROUTING
module.exports = (app) => {
    // HTML GET requests
    app.get('/api/notes', (req, res) => {
        // Using 'fs' module to grab info from database
        const database = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8');

        // Return the response as JSON
        res.json(JSON.parse(database));
    });

    // POST requests
    app.post('/api/notes', (req, res) => {
        // Using 'fs' module to grab info from database
        const database = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8');

        // Parses info from database into JSON
        const parsedData = JSON.parse(database);

        // Pushes new note into parsed data
        parsedData.push(req.body);

        // Stringifies parsed data, then rewrites database to include new notes
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(parsedData));

        res.json(true);
    });
};