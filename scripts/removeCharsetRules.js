/*

Removes any instance of "@charset "UTF-8";" 
that is found at the start of .css files in the output folder.

This is necessary as those aren't accepted by Reddit's stylesheet validator.

*/

const fs = require('fs/promises');
const path = require('path');

const outputDirName = "output";

fs.opendir(outputDirName)
.then(outputDir => removeCharsetRuleFromCssFilesInDir(outputDir));

async function removeCharsetRuleFromCssFilesInDir(dir) {
	for await (const file of dir) {
		if(/.*-min\.css$/.test(file.name)) {
			let content = await fs.readFile(`${dir.path}/${file.name}`, {
				encoding: "utf-8"
			})
			fs.writeFile(`${dir.path}/${file.name}`, content.replace('@charset "UTF-8";', ""));
		}
	}
}

