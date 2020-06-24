# mtplBackend

Contains all apis except login

prerequisite:
postgresql should be there on the machine.

Steps to use :
1. clone the repo
2. use "npm install" to install dependencies
3. then run "npm start" to run the application

Use following postman collection:
https://www.getpostman.com/collections/06934cd792ca750d18e9

1. get/setupDb - to create tables
2. get/provincesList - to get array of provinces in bulgaria
3. post/getInstallmentOptions - to get options for installments (dummy data return for now)
4. post/purchasePolicy - to store purchase policy data
5. post/mtplCalculator - to store mtpl calculator data