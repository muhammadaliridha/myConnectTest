# MyConnect Automation Testing

This repository contains automation tests for the [Kasir Demo web application](https://kasirdemo.belajarqa.com/). This project is created to demonstrate my skills in automated testing using Cypress with JavaScript.

## Background
Due to the lack of access to my previous project and the use of corporate email and laptop, I have created this automation project independently.

## Features
- Authentication Tests: Tests for user registration and login.
- Category Management: Tests for adding new categories.
- Product Management: Tests for adding new products.
- Sales Transactions: Tests for adding new sales transactions.

## Tech Stack
- Cypress: End-to-end testing framework.
- JavaScript: Programming language used for writing tests.

## Page Object Model (POM)
The project uses the Page Object Model to organize the test code. Each page of the application has a corresponding page object class in the cypress/support/pages directory, encapsulating interactions with that page.

## Custom Commands
Common actions such as logging in are defined as Cypress custom commands in the cypress/support/commands.js file.

## Unique Data Generation
Utility functions for generating unique names and prices are defined in the cypress/support/functions directory.
