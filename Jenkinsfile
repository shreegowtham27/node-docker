node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'DockerHub') {
        def customImage = docker.build("shreegowtham27/docker-node")
        /* Push the container to the custom Registry */
        customImage.push()
    }
    
    // Stage 3docker Hub to Ecs
}
