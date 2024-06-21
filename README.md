
</head>
<body>
    <div class="container">
        <h1>Pathology Center Database</h1>
        <p>This repository contains SQL scripts to create and manage a database for a pathology center. The database is designed to store and manage patient information, doctor details, test records, appointment schedules, and test results.</p>

        <div class="purpose">
            <h2>Purpose</h2>
            <p>The primary goal of this database is to streamline the operations of a pathology center by providing a centralized system for storing and retrieving important medical records. This system helps in maintaining accurate patient histories, scheduling appointments, tracking test orders, and storing test results.</p>
        </div>

        <div class="technologies">
            <h2>Technologies Used</h2>
            <p>This project uses the following technologies:</p>
            <ul>
                <li><strong>SQL:</strong> For database schema creation and data manipulation.</li>
                <li><strong>Git:</strong> For version control.</li>
                <li><strong>GitHub:</strong> For hosting the repository and collaborative development.</li>
            </ul>
        </div>

        <h2>Database Schema</h2>

        <h3>Patients Table</h3>
        <pre><code>CREATE TABLE Patients (
    PatientID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DOB DATE,
    Gender VARCHAR(10),
    Address VARCHAR(255),
    Phone VARCHAR(15),
    Email VARCHAR(50),
    MedicalHistory TEXT
);</code></pre>

        <h3>Doctors Table</h3>
        <pre><code>CREATE TABLE Doctors (
    DoctorID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Specialization VARCHAR(50),
    Phone VARCHAR(15),
    Email VARCHAR(50)
);</code></pre>

        <h3>Tests Table</h3>
        <pre><code>CREATE TABLE Tests (
    TestID INT PRIMARY KEY AUTO_INCREMENT,
    TestName VARCHAR(100),
    Description TEXT,
    Cost DECIMAL(10, 2)
);</code></pre>

        <h3>Appointments Table</h3>
        <pre><code>CREATE TABLE Appointments (
    AppointmentID INT PRIMARY KEY AUTO_INCREMENT,
    PatientID INT,
    DoctorID INT,
    AppointmentDate DATETIME,
    Purpose TEXT,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);</code></pre>

        <h3>Test Orders Table</h3>
        <pre><code>CREATE TABLE TestOrders (
    OrderID INT PRIMARY KEY AUTO_INCREMENT,
    PatientID INT,
    DoctorID INT,
    TestID INT,
    OrderDate DATETIME,
    Status VARCHAR(20),
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID),
    FOREIGN KEY (TestID) REFERENCES Tests(TestID)
);</code></pre>

        <h3>Test Results Table</h3>
        <pre><code>CREATE TABLE TestResults (
    ResultID INT PRIMARY KEY AUTO_INCREMENT,
    OrderID INT,
    TechnicianID INT,
    ResultDate DATETIME,
    Result TEXT,
    Comments TEXT,
    FOREIGN KEY (OrderID) REFERENCES TestOrders(OrderID),
    FOREIGN KEY (TechnicianID) REFERENCES LabTechnicians(TechnicianID)
);</code></pre>

        <div class="usage">
            <h2>Usage</h2>
            <p>1. Clone the repository.</p>
            <p>2. Run the SQL scripts in the following order to create the database schema:</p>
            <ul>
                <li><code>patients.sql</code></li>
                <li><code>doctors.sql</code></li>
                <li><code>tests.sql</code></li>
                <li><code>appointments.sql</code></li>
                <li><code>test_orders.sql</code></li>
                <li><code>test_results.sql</code></li>
            </ul>
        </div>

        <div class="license">
            <h2>License</h2>
            <p>This project is licensed under the MIT License.</p>
        </div>
    </div>
</body>
</html>
