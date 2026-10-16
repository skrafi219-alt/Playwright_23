pipeline{

agent any
    stages{

        stage('checkout scm'){

            steps{
                checkout scm
            }
        }

        stage('Insiall Dependencies'){

            steps{
                bat 'npm ci'
            }
        }

        stage('install playwrtight browsers'){

            steps{
                bat 'npx playwright install'
            }
        }

        stage('Run Playwrigh tests'){

            steps{
               bat 'npx playwright test'
            }
        }
    }
}