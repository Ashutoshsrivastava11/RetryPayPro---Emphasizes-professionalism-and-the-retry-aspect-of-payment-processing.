CREATE TABLE payments (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    customer_name NVARCHAR(255),
    amount DECIMAL(10, 2) NOT NULL,
    status NVARCHAR(255)
);
