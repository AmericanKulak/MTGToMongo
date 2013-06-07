var converter = require('./mongoImportConverter');

(function(){

	exports.set = function set(key, value){
		switch(key)
		{
			case 'importFile' :
			case 'exportFile' :
				converter.set(key, value);
				break;
		}
		return this;
	}

	exports.start = function start(){
		converter.start();

		converter.getCollection(converter.writeCollection);
	}
})();
