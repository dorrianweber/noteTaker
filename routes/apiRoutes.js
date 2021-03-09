// GET /api/notes
// POST /api/notes

// DEPENDENCIES
const path = require('path');
const fs = require('fs');

// ROUTING
module.exports = (app) => {
    // HTML GET Requests
    app.get('/api/notes', (req, res) => {
        const database = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8');

        console.log(database);

        res.json(JSON.parse(database));
    });
};