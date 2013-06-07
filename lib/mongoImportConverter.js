var fs = require('fs');

(function() {

	var importPath = 'import';
	var exportPath = 'export';

	exports.set = function set(key, value){
		switch(key)
		{
			case 'importFile' :
				importPath = value;
				break;
			case 'exportFile' :
				exportPath = value;
				break;
		}
		return this;
	}

	exports.start = function() {

		//passes the collection to the callback function
		exports.getCollection = function(cb) {

			fs.readFile(importPath, "utf8", function(err, data) {

				if( err ) return console.log("Reading File Failed");

				var coll = JSON.parse(data);
				cb(coll);

			});

		};

		exports.writeCollection = function(coll) {

			var cards = [];

			var collKeys = Object.keys(coll.cards).sort();
			var endPoint = collKeys[collKeys.length-1]*1;

			for(var i = 0; i < endPoint ; i++)
			{
				if(coll.a[i+""])
					cards.push(JSON.stringify(x.a[i+""]));
			}

			var str = cards.join('\r\n');

			fs.writeFile(exportPath, str, function(err) {

				if(err) return console.log("Failed to write to file");

			});

		};

	};

})();