pipeline {
    agent any
    
    stages {
        // stage('Checkout') {
        //     steps {
        //         git branch: 'main', url: 'https://github.com/Pravalika7-V/todo.git'
        //     }
        // }
        stage('Build Docker Image') {
            steps {
                script {
                    bat 'docker build -t todo-application3 .'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                   bat 'docker run -d -p 3000:3000 --name todo-app-container todo-application3'
                }
            }
        }
    }
    post {
        always {
            script {
                // Cleanup after build
                bat 'docker stop todo-app-container || echo "Container not running"'
                bat 'docker rm todo-app-container || echo "Container not found"'
            }
        }
    }
}
