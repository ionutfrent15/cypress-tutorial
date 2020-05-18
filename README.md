# cypress-tutorial
# install - cypress
npm init  
npm install cypress --save-dev  
npx cypress open  
# report - mochawasome
npm install mochawasome  
add to cypress.json:  
{  
  "reporter": "mochawesome"  
}  
npx cypress run --spec "cypress/integration/test.spec.js"  
