# Company Users API

This is the API documentation and implementation for managing users in a company, built using **OpenAPI 3.0**. The API allows you to create, read, update, and delete users. It also supports the use of API keys for authentication.

## Table of Contents

- [Overview](#overview)
- [API Endpoints](#api-endpoints)
  - [Get User by ID](#get-user-by-id)
  - [Create a New User](#create-a-new-user)
  - [Update User by ID](#update-user-by-id)
  - [Delete User by ID](#delete-user-by-id)
- [Schemas](#schemas)
- [Authentication](#authentication)
- [How to Use](#how-to-use)
- [Installation](#installation)
- [Running the API](#running-the-api)

---

## Overview

This API provides a set of endpoints to manage users of a company. It includes CRUD operations such as:

- **Create**: Add a new user
- **Read**: Fetch details of an existing user
- **Update**: Modify user information
- **Delete**: Remove a user from the system

### Base URL

The base URL for this API depends on where it’s deployed. For local development, it could be something like:

```
http://localhost:3000
```

## API Endpoints

### Get User by ID

```http
GET /users/{userId}
```

- **Description**: Fetch a user by their unique ID.
- **Path Parameters**:
  - `userId` (string, required): The unique identifier for the user.
- **Responses**:
  - `200 OK`: Returns the user details.
  - `404 Not Found`: No user found with the provided `userId`.

### Create a New User

```http
POST /users
```

- **Description**: Add a new user to the company.
- **Request Body**:
  - The new user's details in JSON format.
- **Responses**:
  - `201 Created`: The new user is successfully created.
  - `400 Bad Request`: Invalid user input.

### Update User by ID

```http
PUT /users/{userId}
```

- **Description**: Update an existing user's details.
- **Path Parameters**:
  - `userId` (string, required): The unique identifier for the user.
- **Request Body**:
  - The updated user details in JSON format.
- **Responses**:
  - `200 OK`: Returns the updated user.
  - `404 Not Found`: No user found with the provided `userId`.

### Delete User by ID

```http
DELETE /users/{userId}
```

- **Description**: Delete an existing user by their unique ID.
- **Path Parameters**:
  - `userId` (string, required): The unique identifier for the user.
- **Responses**:
  - `204 No Content`: The user was successfully deleted.
  - `404 Not Found`: No user found with the provided `userId`.

## Schemas

### User

A user object contains the following fields:

- `id` (string): The unique identifier for the user.
- `name` (string): The name of the user.
- `email` (string): The user's email address.
- `role` (string): The role of the user. One of:
  - `admin`
  - `employee`
  - `manager`
- `description` (string, optional): A short description about the user.

### Error

An error object contains the following field:

- `message` (string): A human-readable error message.
<!-- Removed for testing purposes
## Authentication

This API requires an API key to access the endpoints. You must include the following header in all your requests:

```
X-Api-Key: <your-api-key>
```
-->

## How to Use

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Make sure you have the necessary environment variables set up, such as the API key, if applicable.

## Installation

1. Install the dependencies for running the API:

   ```bash
   npm install
   ```

2. Ensure the API is set up to handle incoming requests by running the necessary scripts or commands for your specific environment (e.g., Express.js, Node.js, etc.).

## Running the API

1. Start the server:

   ```bash
   npm start
   ```

2. To start the server in development mode with automatic restarts, run:

   ```bash
   npm run dev
   ```

3. The API will be accessible on `http://localhost:3000` or the deployed URL.

---
