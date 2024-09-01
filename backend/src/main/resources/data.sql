-- src/main/resources/data.sql

-- Insert initial records into the payments table
INSERT INTO payments (customer_name, amount, status) VALUES ('John Doe', 100.00, 'PENDING');
INSERT INTO payments (customer_name, amount, status) VALUES ('Jane Smith', 250.00, 'SUCCESS');
INSERT INTO payments (customer_name, amount, status) VALUES ('Alice Johnson', 300.00, 'FAILED');
