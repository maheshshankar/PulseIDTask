(function(){
	'use strict';
	const mongoose = require('mongoose');

	function connectDB(app){
		mongoose.connect(process.env.dbURL, (err) => {
			if(err){
				console.log('ERR in connecting DB', err);
			}	

			console.log('DB Connected...!');

		})
	}

	module.exports = connectDB;

})()