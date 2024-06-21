CREATE TABLE TestResults (
    ResultID INT PRIMARY KEY AUTO_INCREMENT,
    OrderID INT,
    TechnicianID INT,
    ResultDate DATETIME,
    Result TEXT,
    Comments TEXT,
    FOREIGN KEY (OrderID) REFERENCES TestOrders(OrderID),
    FOREIGN KEY (TechnicianID) REFERENCES LabTechnicians(TechnicianID)
);
