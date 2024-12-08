pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image with the correct name
                    bat 'docker build -t todo-application3 .'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container with the specified image name
                    bat 'docker run -d -p 3000:3000 --name todo-app-container todo-application3'
                }
            }
        }
    }
    post {
        always {
            script {
                // Stop and remove the container after the pipeline execution
                bat 'docker stop todo-app-container || echo "Container not running"'
                bat 'docker rm todo-app-container || echo "Container not found"'
            }
        }
    }
}
