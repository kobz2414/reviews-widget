# reviews-widget

This is a reviews widget program built with Node.js, Express, React, Docker, and MongoDB. The program allows users to submit and view reviews for a product.

## Features

- Users can submit reviews with a title, description, and star rating.
- Reviews are stored in a MongoDB database.
- Users can view the list of reviews with their respective details.
- The program is containerized using Docker for easy deployment and scalability.

## Technologies Used

- Node.js: Server-side JavaScript runtime environment.
- Express: Web application framework for Node.js.
- React: JavaScript library for building user interfaces.
- MongoDB: NoSQL database for storing reviews.
- Docker: Containerization platform for easy deployment and management.

## Installation

1. Clone the repository:

```bash
  git clone https://github.com/kobz2414/reviews-widget.git
```

2. Install the dependencies for both the backend and frontend:

```bash
  cd reviews-widget/backend
  npm install

  cd ../frontend
  npm install
```

3. Set up the MongoDB connection:

- Ensure you have MongoDB installed and running on your system.
- Update the MongoDB connection URL in the backend configuration file: `reviews-widget/backend/.env`

4. Start the application:

```bash
  # Start the backend server
  cd reviews-widget/backend
  npm start

  # Start the frontend development server
  cd ../frontend
  npm run dev
```

5. Access the application in your web browser at `http://localhost:4001`

## Deployment with Docker

To deploy the reviews widget program using Docker, follow these steps:

1. Install Docker on your system: `https://docs.docker.com/engine/install/`
2. Build the Docker image:

```bash
  cd reviews-widget
  docker-compose up --build
```

3. Access the application in your web browser at `http://localhost:4001`
