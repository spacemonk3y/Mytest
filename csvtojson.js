const csv    = require('csvtojson')//->Module to convert .csv data into .json data from *Module Hint*
const fs     = require('fs')

const csvFileInputPath   = 'customer-data.csv'
const jsonFileOutputPath = 'customer-data.json'

csv()
.fromFile(csvFileInputPath)
.then((jsonObj)=>{
	
	const jsonStr = JSON.stringify(jsonObj, null, 4);
	fs.writeFile(jsonFileOutputPath, jsonStr, (err) => {
		if (err) {
			console.error(err);
			return;
		};
		console.log("File has been created");
	});
})