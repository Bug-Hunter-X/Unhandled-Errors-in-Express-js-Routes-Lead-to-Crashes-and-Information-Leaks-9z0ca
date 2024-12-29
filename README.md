# Unhandled Errors in Express.js Routes

This repository demonstrates a common error in Express.js applications: improper error handling during database operations.  Failing to gracefully handle errors can lead to application crashes, unexpected behavior, and potential security vulnerabilities. 

## Bug Description

The `bug.js` file contains an Express.js route that fetches user data from a database.  If the database query fails (e.g., due to an invalid user ID), the application currently crashes without providing any meaningful error message to the client. This could expose internal application details or database structure.

## Solution

The `bugSolution.js` file demonstrates a more robust solution. It uses try...catch blocks to handle potential errors and returns appropriate HTTP error codes (e.g., 404 Not Found) to the client. This approach improves the application's stability and security by preventing crashes and avoiding information leakage.

## How to Run

1.  Clone this repository.
2.  Install the dependencies: `npm install`
3.  Run the buggy code: `node bug.js` (observe the crash)
4.  Run the fixed code: `node bugSolution.js` (observe the graceful error handling)