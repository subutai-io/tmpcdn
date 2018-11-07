/*
 * Fake CDN
 */

var express = require("express");
var compression = require("compression");

var app = express();

app.use(compression());

app.get("/kurjun/rest/raw/id", function(req, res) {
    var name = req.query["name"];
    res.type("text/plain");
    res.setHeader('Content-disposition', 'attachment; filename' + name);
    res.sendFile("id/" + name, {root: "./"});
});

app.get("/kurjun/rest/raw/info", function(req, res) {
    var name = req.query["name"];
    res.type("text/plain");
    res.setHeader('Content-disposition', 'attachment; filename' + name);
    res.sendFile("info/" + name, {root: "./"});
});

app.get("/kurjun/rest/raw/download", function(req, res) {
    var name = req.query["name"];
    var id = req.query["id"];
    res.setHeader('Content-disposition', 'attachment; filename' + name);
    
    if (name) {
        res.sendFile("download/" + name, {root: "./"});
    } else {
        res.sendFile("download/" + id, {root: "./"});   
    }
});

app.listen(18338);

/* 
 * vim: ts=4 et nowrap autoindent
 */
