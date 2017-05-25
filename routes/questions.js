var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : process.env.DB_HOST || 'localhost',
	user     : process.env.DB_USER || 'root',
	password : process.env.DB_PW || '',
	database : process.env.DB_DB || 'calc'
});

/* GET questions */
router.get('/', function(req, res, next) {
	let sql = 'select q.id as q_id, a.id as a_id, q.name, q.module, q.description, a.value, a.amount from question q inner join answer a on a.question_id = q.id'
	connection.query(sql, {}, function (error, results, fields) {
		if (error) throw error;
		
		res.json(formatQuiz(results));
	});
});

formatQuiz = function(results) {
	var combined = {};
	var array =  [];

	for (let r of results) {
		if (combined[r.q_id]) {
			combined[r.q_id].answers.push({a_id: r.a_id, value: r.value, amount: r.amount});
		} else {
			combined[r.q_id] = {id: r.q_id, question: r.name, module: r.module, desc: r.description, answers: [{a_id: r.a_id, value: r.value, amount: r.amount}]};
		}
	}

	return combined
}

module.exports = router;
