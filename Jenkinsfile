pipeline {
  agent any
 
  tools {nodejs "node"}
 
  stages {	  
    stage('Cloning Git') {
      steps {
        git 'https://github.com/avmesquita/angular-buscarcep'
      }
    }        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }     
  }
}
