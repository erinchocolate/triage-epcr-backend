# Triage-Plus EPCR

## About

Electronic Patient Care Record (EPCR) is a mobile application that has been designed and developed to help improve the collection and sharing of patient information in emergencies. The application enables emergency responders, including paramedics and first responders, to capture patient data in a digital format at the incident site, which can be quickly and easily passed on to hospitals and ambulances. The application is expected to be used on tablets, particularly Android devices commonly used by hospitals and ambulances.

## Features

The app allows emergency responders to:

- Create new EPCR
- Preview EPCR
- Print EPCR
- Share EPCR with google drive or email
- Retrieve EPCR
- Search and retrieve EPCR

## Stacks

Front end: React Native

Back end: Node.js + Express.js + MySQL

## Installation

### How to run the server

Clone the repo:

`git clone https://github.com/erinchocolate/triage-epcr-backend`

Add .env file to include your database information:

![img](https://lh6.googleusercontent.com/RebZrc9OueEKPnOP1qdCy0cUmI45d8X4hRPOxWbL6Ap5ujNvCF8imfAlUROKgZYqCLrcDJ3iLh53XAgmvJHbVv-9-4MVayDI9wMKAIWiXB-wku-Tj5rmybQuN5BydF5XGAN5OcttB-T_rPAQxCp4Ug)

Open the repo in IDE and install packages by running:

`npm install`

Run the server:

`npm start`

### How to create the database on your local machine and connect it with the server

Run the query below to create a database in MySQL:

`CREATE DATABASE `epcr

Run the query to create table:

```sql
CREATE TABLE `records` ( `incident_id` int NOT NULL AUTO_INCREMENT, `first_name` varchar(45) DEFAULT NULL, `middle_name` varchar(45) DEFAULT NULL, `last_name` varchar(45) DEFAULT NULL, `nhi_number` varchar(45) DEFAULT NULL, `dob` varchar(45) DEFAULT NULL, `gender` varchar(45) DEFAULT NULL, `age` varchar(45) DEFAULT NULL, `address` varchar(255) DEFAULT NULL, `patient_medication` varchar(255) DEFAULT NULL, `patient_allergy` varchar(255) DEFAULT NULL, `incident_type` varchar(45) DEFAULT NULL, `incident_note` varchar(255) DEFAULT NULL, `notified_time` varchar(45) DEFAULT NULL, `responded_time` varchar(45) DEFAULT NULL, `located_time` varchar(45) DEFAULT NULL, `departed_time` varchar(45) DEFAULT NULL, `destination_time` varchar(45) DEFAULT NULL, `incident_location` varchar(255) DEFAULT NULL, `subjective_note` varchar(255) DEFAULT NULL, `objective_note` varchar(255) DEFAULT NULL, `assessment_note` varchar(255) DEFAULT NULL, `plan_note` varchar(255) DEFAULT NULL, `vehicle` varchar(45) DEFAULT NULL, `transport_status` varchar(255) DEFAULT NULL, `destination` varchar(45) DEFAULT NULL, `estimate_arrival_time` varchar(45) DEFAULT NULL, `incident_medication` longtext, `cardioversion` int DEFAULT NULL, `pacing` int DEFAULT NULL, `cardiac_arrest` int DEFAULT NULL, `rsi` int DEFAULT NULL, `mechanical_ventilation` int DEFAULT NULL, `cpap` int DEFAULT NULL, `surgical_cric` int DEFAULT NULL, `needle_decompression` int DEFAULT NULL, `finger_thoracostomy` int DEFAULT NULL, `fi_block` int DEFAULT NULL, `bp` varchar(45) DEFAULT NULL, `heart_rate` varchar(45) DEFAULT NULL, `resp_rate` varchar(45) DEFAULT NULL, `temp` varchar(45) DEFAULT NULL, `bsl` varchar(45) DEFAULT NULL, `spo2` varchar(45) DEFAULT NULL, `etco2` varchar(45) DEFAULT NULL, `monitor` int DEFAULT NULL, `manual` int DEFAULT NULL, `palpatation` int DEFAULT NULL, `gcs` int DEFAULT NULL, `eye_response` varchar(45) DEFAULT NULL, `voice_response` varchar(45) DEFAULT NULL, `motor_response` varchar(45) DEFAULT NULL, `four_lead_ecg` varchar(45) DEFAULT NULL, `twelve_lead_ecg` varchar(45) DEFAULT NULL, `opa` int DEFAULT NULL, `opa_size` varchar(45) DEFAULT NULL, `lma` int DEFAULT NULL, `lma_size` varchar(45) DEFAULT NULL, `ett` int DEFAULT NULL, `ett_size` varchar(45) DEFAULT NULL, `suction` int DEFAULT NULL, `suction_catheter` varchar(45) DEFAULT NULL, `peep` int DEFAULT NULL, `peep_note` varchar(255) DEFAULT NULL, `bvm` varchar(45) DEFAULT NULL, `interventions` longtext, PRIMARY KEY (`incident_id`) ) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## Demos

Create

![demo1](https://github.com/erinchocolate/triage-epcr-frontend/blob/master/demos/create.gif)

Preview

![demo1](https://github.com/erinchocolate/triage-epcr-frontend/blob/master/demos/preview%20with%20more%20info.gif)

Save and retrieve

![demo1](https://github.com/erinchocolate/triage-epcr-frontend/blob/master/demos/save%26retrieve.gif)
