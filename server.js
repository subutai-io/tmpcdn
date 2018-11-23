/*
 * Fake CDN
 */

var express = require("express");
var compression = require("compression");

var app = express();

app.use(compression());

app.get("/kurjun/rest/raw/id", function (req, res) {
    var name = req.query["name"];
    res.type("text/plain");
    res.sendFile("id/" + name, {root: "./"});
});

app.get("/kurjun/rest/raw/info", function (req, res) {
    var name = req.query["name"];
    var id = req.query["id"];
    res.type("text/plain");
    
    if (name) {
        res.sendFile("info/" + name, {root: "./"});
    } else {
        res.sendFile("info/" + id, {root: "./"});
    }
});
    

app.get("/kurjun/rest/raw/download", function (req, res) {
    var name = req.query["name"];
    var id = req.query["id"];

    if (name) {
        res.download("download/" + name);
    } else if (id) {
        var fs = require('fs');
        var json = JSON.parse(fs.readFileSync('./info/' + id, 'utf8'));
        res.download("download/" + json.name);
    } else {
        res.status(404).send('Not found');
    }
});

app.listen(18338);

/* 
 * vim: ts=4 et nowrap autoindent
 */
