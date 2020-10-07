// code for module.js

// import os
const os = require('os');

// return the number of cpu cores
function getCores() {
	return os.cpus().length;
}

module.exports = {getCores};