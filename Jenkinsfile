node {
    stage ('Build') {
    	echo "Build"
	sh "date"
	sh "apt install node"
	sh "node -v"
    }
    stage ('Test') {
	echo "Test"
    }
    stage ('Deploy') {
	echo "Deployed"
	echo $GIT_BRANCH
    }
}
