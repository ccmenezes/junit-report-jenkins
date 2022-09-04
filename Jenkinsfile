pipeline {
	agent any
	options {
		skipStagesAfterUnstable()
	}
    stage ('Build') {
    	echo "Build"
	sh "npm install node"
        sh "date"
    }
    stage ('Test') {
	echo "Test"
    }
    stage ('Deploy') {
	echo "Deploy"
    }
}
