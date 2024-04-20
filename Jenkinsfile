node {
    def app
    stage('Clone repository') {
        git branch: "master", url: "https://github.com/shreegowtham27/node-docker.git"
    }
    stage('Build image') {
        app = sh "docker build -t docker-node ."
    }
    stage('Security Scanning - Trivy') {
        steps {
            script {
                def trivyOutput = sh(script: "trivy image docker-node", returnStdout: true).trim()
                echo "Trivy Scan Results:\n${trivyOutput}"
                
                // Check if Trivy scan output contains high vulnerabilities
                if (trivyOutput.contains("High")) {
                    error("High vulnerabilities found! Exiting pipeline.")
                }
            }
        }
    }
    stage('tag image') {
        sh "docker tag docker-node:latest 228645407764.dkr.ecr.us-east-1.amazonaws.com/docker-node:latest"
    }
    stage('Push image') {
        docker.withRegistry('https://228645407764.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1:AWS') {
            sh "docker push 228645407764.dkr.ecr.us-east-1.amazonaws.com/docker-node:latest"
        }
    }
}
