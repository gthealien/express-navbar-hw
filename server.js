// server.js

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

//root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
    res.redirect("https://github.com/gthealien/ClimateChange");
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
    res.redirect("https://github.com/gthealien/js-object-manipulation");
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
    res.redirect("https://github.com/gthealien/Four-Sorting-Algorithms");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});