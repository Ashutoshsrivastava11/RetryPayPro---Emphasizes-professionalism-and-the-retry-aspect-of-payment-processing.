# RetryPayPro
RetryPayPro is a sophisticated and resilient system designed to handle payment retries efficiently. It ensures that transactions are processed smoothly and reliably, even when initial attempts fail. 
Built with Java, Spring Boot, SQL, and React, this full-stack application offers a seamless experience for both developers and users.
## Project Overview
RetryPayPro is crafted to handle payment processing retries with precision and ease. The system is composed of two core components:

### Backend
**Java and Spring Boot:** The backend is developed using Java and Spring Boot, which manage payment processing, retry logic, and interact with the database. It includes:

**Payment Processing:** Handles the creation and management of payment records.

**Retry Logic:** Implements the algorithms and policies for retrying failed payments.

**Database Interactions:** Uses SQL to store and retrieve payment data, with schema and initialization scripts provided in schema.sql and data.sql.


### Frontend
**React:** The frontend is built with React, providing a responsive and user-friendly interface for interacting with payments and viewing their status. It includes:

**HTML:** Defines the structure and layout of the web pages through React components, which render HTML elements in the browser.

**CSS:** Styles the appearance of the web pages, ensuring a cohesive and visually appealing design. This is managed through stylesheets like App.css.

**JavaScript:** Adds interactivity and dynamic behavior to the web pages. React components (PaymentForm.js, PaymentStatus.js, etc.) are written in JavaScript, controlling the UI's functionality and user interactions.


## Features
**Automatic Payment Retries:** Automatically retries failed payments based on configurable rules to ensure transaction success.

**Real-Time Status Updates:** Provides users with immediate feedback on payment statuses and retry outcomes.

**Intuitive User Interface:** A sleek and responsive UI built with React for an optimal user experience.

**Comprehensive Error Handling:** Global exception handling for consistent and informative error messages. 
