const fs = require('fs');
const path = require('path');
const rootDir = require('../helpers/path');

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		if (err) return cb([]);
		cb(JSON.parse(fileContent));
	});
};

const saveProduct = (obj) => {
	fs.readFile(p, (err, content) => {
		let products = [];
		if (!err) {
			products = JSON.parse(content);
		}
		products.push(obj);
		fs.writeFile(p, JSON.stringify(products), (err) => console.log(err));
	});
};

module.exports = class Product {
	constructor(title) {
		this.title = title;
	}

	save() {
		saveProduct(this);
	}

	static fetchAll(cb) {
		getProductsFromFile(cb);
	}
};
