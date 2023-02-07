const express = require('express');
const router = express.Router();
const db = require('../config/db');

// @route GET - /epcrs/
// @desc Get all EPCRs
router.get("/", (req, res) => {
  const patientSql = `SELECT * FROM patient 
  LEFT JOIN patient_medication ON patient_id_medication=patient_id
  LEFT JOIN patient_allergy ON patient_id_allergy=patient_id
  `;

  const incidentSql = `SELECT * FROM incident
  LEFT JOIN incident_assessment ON incident_id_assessment=incident_id
  LEFT JOIN incident_medication ON incident_id_medication=incident_id
  LEFT JOIN incident_procedure ON incident_id_procedure=incident_id
  `;

  db.query(patientSql, (err, patientResult) => {
    if (err) return res.json(err);

    db.query(incidentSql, (err, incidentResult) => {
      if (err) return res.json(err);

      const combinedResults = { patientResult, incidentResult };
      return res.json(combinedResults);
    });
  });
})

// @route POST - /epcrs/
// @desc Create a new EPCR
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
  
// @route GET - /epcrs/id
// @desc Get an EPCR
router.get("/:id", (req, res) => {
  let id = req.params.id;
  const sql = `SELECT * FROM books WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  })
})

// @route PUT - /epcrs/id
// @desc Update an EPCR
router.put("/:id", (req, res) => {
  let id = req.params.id;
  const sql = `UPDATE books SET title = ?, cover = ? WHERE id = ?`;
  db.query(sql, [req.body.title,req.body.cover,id], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  })
})

module.exports = router;
