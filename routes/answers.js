var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : process.env.DB_HOST || 'localhost',
	user     : process.env.DB_USER || 'root',
	password : process.env.DB_PW || '',
	database : process.env.DB_DB || 'calc'
});

/* GET answers */
router.get('/', function(req, res, next) {
	let sql = 'select flow from complete'
	connection.query(sql, {}, function (error, results, fields) {
		if (error) throw error;
		
		res.json(results);
	});
});

/* POST answers */
router.post('/', function(req, res, next) {
	let sql = 'insert into complete (flow) values (?)'
	connection.query(sql, [JSON.stringify(req.body)], function (error, results, fields) {
		if (error) throw error;
		
		res.json({success: true});
	});
});

module.exports = router;
