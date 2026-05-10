This repo is a practice for DevOps processes.

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

### Prerequisitess
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
