const express = require('express');
const router = express.Router();
const db = require('../config/db');

// @route GET - /epcrs/
// @desc Get all EPCRs
router.get("/", (req, res) => {
  const sql = `SELECT * FROM records`;
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

// @route POST - /epcrs/
// @desc Create a new EPCR
router.post("/", (req, res) => {
  const sql = `INSERT INTO records (first_name, middle_name, last_name, nhi_number, dob, gender, age, address, patient_medication, patient_allergy, incident_type, incident_note, notified_time, responded_time, located_time, departed_time, destination_time, location_note, subjective_note, objective_note, assessment_note, plan_note, vehicle, transport_status, destination, estimate_arrival_time, incident_medication, cardioversion, pacing, cardiac_arrest, rsi, mechanical_ventilation, cpap, sugical_cric, needle_decompression, finger_thoracostomy, fi_block, bp, heart_rate, resp_rate, temp, bsl, spo2, etco2, monitor, manual, palpatation, eye_response, voice_response, motor_response, four_lead_ecg, twelve_lead_ecg, opa, opa_size, opa_location, lma, lma_size, lma_location,npa, npa_size, npa_location, ett, ett_size, ett_location, peep, peep_note, suction, suction_catheter, bvm) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const patientData = [
    req.body.first_name,
    req.body.middle_name,
    req.body.last_name,
    req.body.nhi_number,
    req.body.dob,
    req.body.gender,
    req.body.age,
    req.body.address,
    req.body.patient_medication,
    req.body.patient_allergy,
    req.body.incident_type,
    req.body.incident_note,
    req.body.notified_time,
    req.body.responded_time,
    req.body.located_time,
    req.body.departed_time,
    req.body.destination_time,
    req.body.location_note,
    req.body.subjective_note,
    req.body.objective_note,
    req.body.assessment_note,
    req.body.plan_note,
    req.body.vehicle,
    req.body.transport_status,
    req.body.destination,
    req.body.estimate_arrival_time,
    req.body.incident_medication,
    req.body.cardioversion,
    req.body.pacing,
    req.body.cardiac_arrest,
    req.body.rsi,
    req.body.mechanical_ventilation,
    req.body.cpap,
    req.body.sugical_cric,
    req.body.needle_decompression,
    req.body.finger_thoracostomy,
    req.body.fi_block,
    req.body.bp,
    req.body.heart_rate,
    req.body.resp_rate,
    req.body.temp,
    req.body.bsl,
    req.body.spo2,
    req.body.etco2,
    req.body.monitor,
    req.body.manual,
    req.body.palpatation,
    req.body.eye_response,
    req.body.voice_response,
    req.body.motor_response,
    req.body.four_lead_ecg,
    req.body.twelve_lead_ecg,
    req.body.opa,
    req.body.opa_size,
    req.body.opa_location,
    req.body.lma,
    req.body.lma_size,
    req.body.lma_location,
    req.body.npa,
    req.body.npa_size,
    req.body.npa_location,
    req.body.ett,
    req.body.ett_size,
    req.body.ett_location,
    req.body.peep,
    req.body.peep_note,
    req.body.suction,
    req.body.suction_catheter,
    req.body.bvm,
  ];

  db.query(sql, patientData, (err, result) => {
    if (err) return res.json(err);
    const insertedIncidentId = result.insertId;
    return res.json(insertedIncidentId);
  });
});
  
// @route GET - /epcrs/id
// @desc Get an EPCR 
router.get("/:id", (req, res) => {
  let id = req.params.id;
  const sql = `SELECT * FROM records WHERE incident_id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  })
})

// @route PUT - /epcrs/id
// @desc Update an EPCR
router.put("/:id", (req, res) => {
  let id = req.params.id;
  const patientData = [
    req.body.first_name,
    req.body.middle_name,
    req.body.last_name,
    req.body.nhi_number,
    req.body.dob,
    req.body.gender,
    req.body.age,
    req.body.address,
    req.body.patient_medication,
    req.body.patient_allergy,
    req.body.incident_type,
    req.body.incident_note,
    req.body.notified_time,
    req.body.responded_time,
    req.body.located_time,
    req.body.departed_time,
    req.body.destination_time,
    req.body.location_note,
    req.body.subjective_note,
    req.body.objective_note,
    req.body.assessment_note,
    req.body.plan_note,
    req.body.vehicle,
    req.body.transport_status,
    req.body.destination,
    req.body.estimate_arrival_time,
    req.body.incident_medication,
    req.body.cardioversion,
    req.body.pacing,
    req.body.cardiac_arrest,
    req.body.rsi,
    req.body.mechanical_ventilation,
    req.body.cpap,
    req.body.sugical_cric,
    req.body.needle_decompression,
    req.body.finger_thoracostomy,
    req.body.fi_block,
    req.body.bp,
    req.body.heart_rate,
    req.body.resp_rate,
    req.body.temp,
    req.body.bsl,
    req.body.spo2,
    req.body.etco2,
    req.body.monitor,
    req.body.manual,
    req.body.palpatation,
    req.body.eye_response,
    req.body.voice_response,
    req.body.motor_response,
    req.body.four_lead_ecg,
    req.body.twelve_lead_ecg,
    req.body.opa,
    req.body.opa_size,
    req.body.opa_location,
    req.body.lma,
    req.body.lma_size,
    req.body.lma_location,
    req.body.npa,
    req.body.npa_size,
    req.body.npa_location,
    req.body.ett,
    req.body.ett_size,
    req.body.ett_location,
    req.body.peep,
    req.body.peep_note,
    req.body.suction,
    req.body.suction_catheter,
    req.body.bvm,
  ];
  const sql = `UPDATE records SET first_name = ?, middle_name = ?, last_name = ?, nhi_number = ?, dob = ?, gender = ?, age = ?, address = ?, patient_medication = ?, patient_allergy = ?, incident_type = ?, incident_note = ?, notified_time = ?, responded_time = ?, located_time = ?, departed_time = ?, destination_time = ?, location_note = ?, subjective_note = ?, objective_note = ?, assessment_note = ?, plan_note = ?, vehicle = ?, transport_status = ?, destination = ?, estimate_arrival_time = ?, incident_medication = ?, cardioversion = ?, pacing = ?, cardiac_arrest = ?, rsi = ?, mechanical_ventilation = ?, cpap = ?, sugical_cric = ?, needle_decompression = ?, finger_thoracostomy = ?, fi_block = ?,bp= ?, heart_rate= ?, resp_rate= ?, temp= ?, bsl= ?, spo2= ?, etco2= ?, monitor= ?, manual= ?, palpatation= ?, eye_response= ?, voice_response= ?, motor_response= ?, four_lead_ecg= ?, twelve_lead_ecg= ?, opa= ?, opa_size= ?, opa_location= ?, lma= ?, lma_size= ?, lma_location= ?,npa= ?, npa_size= ?, npa_location= ?, ett= ?, ett_size= ?, ett_location= ?, peep= ?, peep_note= ?, suction= ?, suction_catheter= ?, bvm= ? WHERE incident_id = ${id}`;
  db.query(sql, patientData, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  })
})

module.exports = router;
