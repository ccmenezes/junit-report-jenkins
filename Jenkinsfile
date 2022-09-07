node {
    stage ('Build') {
	echo 'date'
	sh 'echo "Fail!"; exit 1'
   }
    stage ('Test') {
	echo "Test"
    }
    stage ('Deploy') {
	echo "Deployed"
	echo "Node name -> ${NODE_NAME}"
    }
}
