/*
 * Fake CDN
 */

var express = require("express");
var compression = require("compression");

var app = express();

app.use(compression());

app.get("/kurjun/rest/raw/info", function(req, res) {
    var name = req.query["name"];
    res.sendFile("info/" + name);
});

app.get("/kurjun/rest/raw/download", function(req, res) {
    var name = req.query["name"];
    res.sendFile("download/" + name);
});

/* 
 * vim: ts=4 et nowrap autoindent
 */