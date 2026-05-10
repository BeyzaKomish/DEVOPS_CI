This repo is a practice for DevOps prcoessesMarkdown
# SWE304 Project 3 - Library CRUD Application

**Author:** Beyza Komiş

## 📖 Overview
This project is a full-stack web application featuring a React (Vite) frontend, a Java Spring Boot backend, and a PostgreSQL database. The primary focus of this project is the implementation of a modern, containerized CI/CD (Continuous Integration and Continuous Deployment) pipeline using Docker, GitHub Actions, and AWS EC2.

## 🏗️ Architecture & Tech Stack
* **Frontend:** React.js (Vite), Nginx
* **Backend:** Java 21, Spring Boot, Gradle
* **Database:** PostgreSQL 13
* **Containerization:** Docker & Docker Compose
* **CI/CD:** GitHub Actions
* **Cloud Hosting:** AWS EC2 (Ubuntu)

## 🚀 CI/CD Pipeline Workflow
The deployment process is fully automated. Whenever a developer pushes to the `main` branch or merges a Pull Request, the GitHub Actions pipeline (`ci-cd.yml`) triggers the following sequence:

1.  **Checkout Code:** Retrieves the latest repository state.
2.  **Build Backend:** Uses Eclipse Temurin (Java 21) to run `./gradlew clean bootJar` and generate the backend artifact.
3.  **Build Frontend:** Compiles the Vite/React application into static assets.
4.  **Dockerize & Push:** Builds two Docker images (`librarycrud` and `librarycrud-frontend`) and securely pushes them to DockerHub.
5.  **Secure Transfer:** Uses SCP to securely transfer `docker-compose.yml` and `deploy.sh` to the AWS EC2 instance.
6.  **Remote Execution:** Connects to the EC2 instance via SSH, injects secure environment variables, and executes the deployment script to pull the latest images and restart the containers without database downtime.

## 🛠️ Local Development Setup

### Prerequisites
* Docker & Docker Desktop installed
* Java 21 & Gradle installed (for backend development)
* Node.js v20+ (for frontend development)

### Running Locally with Docker
To spin up the entire application locally using the pre-configured containers:
1. Ensure your Docker daemon is running.
2. Navigate to the project root.
3. Run the following command:
   ```bash
   docker compose up -d
The frontend will be available at http://localhost:80 and the backend API at http://localhost:8080.

Database Persistence
The PostgreSQL database utilizes a named Docker volume (postgres_data). Running docker compose down will destroy the containers, but your database records will be safely preserved for the next startup. To completely wipe the database, run docker compose down -v.

🔐 Environment Variables
Production variables are securely managed via GitHub Secrets and injected at runtime. Required secrets include:

DOCKERHUB_USERNAME / DOCKERHUB_TOKEN

EC2_HOST / EC2_USER / EC2_SSH_KEY

POSTGRES_USER / POSTGRES_PASSWORD / POSTGRES_DB

VITE_API_URL


***

### How to use the Image for Proj3

Depending on whether you mean the **Architecture Block Diagram from the PDF** or your **Docker Images**, here is how to use both for your project submission:

**1. If you mean the Block Diagram from `pro3.pdf`:**
To include the "Figure 1. Project 3 block diagram" in your README to secure top marks for documentation:
1. Open your `pro3.pdf` and take a screenshot of the flowchart.
2. Save the screenshot as `architecture.png`.
3. Create a new folder in your repository root called `docs` and place the image inside (`docs/architecture.png`).
4. Add this markdown line to the `README.md` under the Architecture section to display it:
   `![Project Architecture Diagram](docs/architecture.png)`

**2. If you mean the Docker Images (`librarycrud` and `librarycrud-frontend`):**
You do not need to manually move or manage these images! Your project is already perfectly utilizing them:
* **On GitHub:** The Action pipeline automatically uses the `Dockerfile` in each folder to build the application into an image and pushes it to DockerHub.
* **On EC2:** When `deploy.sh` runs, the EC2 instance automatically reaches out to DockerHub, downloads your finished images, and runs them via `docker-compose.yml`. 

