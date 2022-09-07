node {
    stage ('Build') {
	echo "date"
	PWD = sh(script: 'pwd', returnStdout: true)
	echo "print name of current/working directory -> ${PWD}"
   }
    stage ('Test') {
	echo "Test"
    }
    stage ('Deploy') {
	echo "Deployed"
	echo "Node name -> ${NODE_NAME}"
    }
}
