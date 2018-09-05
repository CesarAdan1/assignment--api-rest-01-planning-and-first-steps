const express = require("express");
const app = express();
const port = 3000;

const ABSOLUTE_INDEX_HTML_FILE = `${__dirname}/index.html`;

function handleRequest(request, response) {
	response.sendFile(ABSOLUTE_INDEX_HTML_FILE);
} 

function start() {
	console.log("REST API running on port: 3000");
}

app.use("/", handleRequest);

app.listen(port, start);