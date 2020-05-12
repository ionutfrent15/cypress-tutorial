# cypress-tutorial
# install
npm init  
npm install cypress --save-dev  
npx cypress open  
# mochawasome
npm install mochawasome  
add to cypress.json:  
{  
  "reporter": "mochawesome"  
}  
npx cypress run --spec "test.js"  
