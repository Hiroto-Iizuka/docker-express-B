var express = require('express');
var router = express.Router();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql_db', 'root', 'root', {
  host: 'mysql',
  dialect: 'mysql',
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  try {
    await sequelize.authenticate();
    console.log('接続成功');
  } catch (error) {
    console.log('失敗:', error)
  }
  res.send('respond with a resource');
});

module.exports = router;
