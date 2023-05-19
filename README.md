# QA Cinema

## About

- 2-week team project
- Website for "QA Cinema"
- Including movies, ticket bookings, payments, discussion board

## The Team: "Sky Oyster"

- Abdul
  - main focus: frontend
- Helen
  - main focus: frontend
- Jovi (scrum master, week 2)
  - main focus: backend
- Rutely (scrum master, week 1)
  - main focus: backend

---

## Key Languages / Tools

### Frontend

- React / JavaScript
- Tailwind CSS
- Other tools
  - react-router-dom
  - axios
  - material-tailwind
  - emailjs
  - leo-profanity

### Backend

- Express.js
- Node.js
- MongoDB Atlas
  - Mongoose
- Testing
  - mocha
  - chai / chai-http
  - nyc
- Other tools
  - mongoose
  - stripe
  - cors
  - nodemon

---

## Testing

- Test coverage: 84% (backend)

![screenshot](/docs/230518-1-test-coverage.JPG)

---

## Stripe Payments

- While payments done on this website are done in **test mode** with no real transactions, please **do not** use any real payment card details

---

## Installation

### Prerequisites

- Ensure you have installed latest versions of:
  - Node.js (18.16.0 onwards)
  - npm (9.5.1 onwards)
  - nodemon (2.0.22 onwards)
  - Tailwind CSS (3.3.2 onwards)

### Clone the repository

- use git to clone this repo to your local environment

### Backend

```
cd QA-Cinema/backend
```

#### Install dependencies

```
npm install
```

Run tests

```
npm test
```

Run tests with coverage repot

```
npm run coverage
```

Start the server

```
npm start
```

### Frontend

```
cd QA-Cinema/frontend
```

#### Install dependencies

```
npm install
```

Start tailwind (ensure you have already have Tailwind CSS installed)

```
npm run tailwind
```

Start the server / React website

```
npm start
```

Navigate to the website using this URL

```
http://localhost:3000/
```

---

### Credits

- British Board of Film Classification
  - [BBFC](https://en.wikipedia.org/wiki/British_Board_of_Film_Classification)
  - [BBFC age symbols user guide](https://en.wikipedia.org/wiki/British_Board_of_Film_Classification)
- OMDb API - The Open Movie Database
  - [OMDB](https://www.omdbapi.com/)

---
