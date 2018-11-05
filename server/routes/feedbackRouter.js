const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/results', (req, res) => {
   pool.query('SELECT * from "feedback";')
      .then((result) => {
         res.send(result.rows);
      })
      .catch((error) => {
         console.log('Error receiving data from database:', error)
         res.sendStatus(500);
      });
})

router.post('/addToDatabase', (req, res) => {
   let dataObj = req.body;
   let sqlText = `INSERT INTO feedback(
      "feeling", "understanding", "support", "comments",)
      VALUES ($1, $2, $3, $4)`
   pool.query(sqlText, [dataObj.feeling, dataObj.understanding, dataObj.support, dataObj.comments])
      .then((result) => {
         res.send(result.rows);
      })
      .catch((error) => {
         console.log('Error receiving data from database:', error)
         res.sendStatus(500);
      });
})

module.exports = router;