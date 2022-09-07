pipeline {
    agent {
        docker { image 'node' }
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building ..'
            }
        }
        stage('Test') {
            steps {
                sh 'npm ci'
                sh 'npm run mocha'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying ..'
            }
        }
    }
}
