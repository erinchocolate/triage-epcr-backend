const express = require('express');
const router = express.Router();
const db = require('../config/db');

// @route GET - /ecprs/
// @desc Get all ECPRs
router.get("/", (req, res) => {
  const sql = 'SELECT * FROM books';
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  })
})

// @route POST - /ecprs/
// @desc Create a new ECPR
router.post("/", (req, res) => {
  const sql = 'INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)';
  const values = [
  req.body.title,
  req.body.desc,
  req.body.cover,
  ];

  db.query(sql, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  })
}) 
  
// @route GET - /ecprs/id
// @desc Get an ECPR
router.get("/:id", (req, res) => {
  let id = req.params.id;
  const sql = `SELECT * FROM books WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  })
})

// @route PUT - /ecprs/id
// @Update an ECPR
router.put("/:id", (req, res) => {
  let id = req.params.id;
  const sql = `UPDATE books SET title = ?, cover = ? WHERE id = ?`;
  db.query(sql, [req.body.title,req.body.cover,id], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  })
})

module.exports = router;
