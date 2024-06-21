# Pathology Center Database

This repository contains SQL scripts to create and manage a database for a pathology center.

## Database Schema

### Patients Table
```sql
CREATE TABLE Patients (
    PatientID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DOB DATE,
    Gender VARCHAR(10),
    Address VARCHAR(255),
    Phone VARCHAR(15),
    Email VARCHAR(50),
    MedicalHistory TEXT
);
