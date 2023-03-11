Folder Structure (Express)

=> `view` -> templates

=> `routes` -> files contains module of the system
        example: (e-commerce)
            /products/:id   --> show you the product
            /products/category/:categoryName   --> show you all products in a category

            /user/login
            /user/signup
            /user/:id   --> show info about a user
        
        * products.js
        * user.js
        * order.js

=> `public` -> static assets of the website

=> `tests` -> tests of the server

=> `model` -> database fn / ORM specific fn

=> `bin` -> binary -> how the server will start (startup code)



------------------------------------------------------------------------------------


<--> express.Router() <-->

`app` file has `app` variable

    - app file needs `data` file

`data` file needs `app` file for `app` variable
    