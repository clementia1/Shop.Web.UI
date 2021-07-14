const express = require('express');
const path = require('path');

let app = express();

app.set('port', (process.env.PORT || 3000));

app.get(['/*',], (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(app.get('port'), function () {
    console.log('App is running on port', app.get('port'));
});

module.exports = app;