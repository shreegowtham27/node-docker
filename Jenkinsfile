node {
    def app
    stage('Clone repository') {
        git branch: "master", url: "https://github.com/shreegowtham27/node-docker.git"
    }
    stage('Build image') {
        app = sh "docker build -t docker-node ."
    }
    stage('tag image') {
        sh "docker tag docker-node:latest 228645407764.dkr.ecr.us-east-1.amazonaws.com/docker-node:latest"
    }
    stage('Push image') {
        docker.withRegistry('https://228645407764.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-west-2:aws-ecr') {
            sh "docker push 228645407764.dkr.ecr.us-east-1.amazonaws.com/docker-node:latest"
        }
    }
}