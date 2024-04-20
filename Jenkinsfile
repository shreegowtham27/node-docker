pipeline {
    agent any
    
    stages {
        stage('Clone repository') {
            steps {
                git branch: "master", url: "https://github.com/shreegowtham27/node-docker.git"
            }
        }
        
        stage('Trufflehog scan') {
            steps {
                sh 'trufflehog --regex https://github.com/shreegowtham27/node-docker.git'
            }
        }
        
        stage('Build image') {
            steps {
                script {
                    sh "docker build -t docker-node:${env.BUILD_NUMBER} ."
                }
            }
        }
        
        stage('Trivy scan') {
            steps {
                sh "trivy --severity HIGH,CRITICAL docker-node:${env.BUILD_NUMBER}"
            }
        }
        
        stage('Tag image') {
            steps {
                sh "docker tag docker-node:latest 228645407764.dkr.ecr.us-east-1.amazonaws.com/docker-node:latest"
            }
        }
        
        stage('Push image') {
            steps {
                script {
                    docker.withRegistry('https://228645407764.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1:AWS') {
                        sh "docker push 228645407764.dkr.ecr.us-east-1.amazonaws.com/docker-node:latest"
                    }
                }
            }
        }
    }
}
