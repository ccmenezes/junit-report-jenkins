node {
    stage ('Build') {
	echo "date"
	sh "node -v"
	echo "$BRANCH_NAME"
   }
    stage ('Test') {
	echo "Test"
    }
    stage ('Deploy') {
	echo "Deployed"
	echo "$GIT_BRANCH"
    }
}
