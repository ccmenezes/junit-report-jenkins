node {
    stage ('Build') {
    	echo "Build"
	sh "date"
	echo "apt install node"
	echo $GIT_BRANCH
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
