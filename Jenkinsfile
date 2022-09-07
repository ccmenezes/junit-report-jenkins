node {
    stage ('Build') {
    	echo "Build"
	sh "date"
	echo "apt install node"
	echo "$BRANCH_NAME"
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
