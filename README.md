# cs465-fullstack
CS-465 Full Stack Development with MEAN

**Project Overview**
***
<hr/>

This project is a RESTful full stack web application for Travlr Getaways, a travel booking website. They request a front-end website for customers to create an account, search for travel packages by location and price point, and book reservations with the travel agency. The website should allow customers to see their itineraries prior to travel. They also require an admin-only site to maintain a customer base, available trip packages, and pricing for each item and package.

**Architecture**
***
-
<hr/>

This frontend webpage of this project uses Express HTML, JavaScript, and a Single-Page Application (SPA). The Express HTML provided a way to handle HTTP (Get, post, put, delete) requests as well as the static files. It uses a Handlebars View Engine (HBS) which is a template engine that allows for simple, scalable, and maintainable code. We used JSON which allowed JavaScript on the server side. It is designed for scalable network applications and RESTful APIs. This handled the server-side portion of the Single-Page Application using Model View Controller Routing.

The Single-Page Application is a web application that uses client-side requests and routes them to the intended navigational element. This allows for seamless navigation by only reloading necessary information. The backend uses a NoSQL MongoDB database. This provides scalability and flexibility with web applications to store and retrieve data in JSON format.  

**Functionality**
***
-
<hr/>
JSON is used to pass data from the server to the website. In this project, trip data is stored as JSON files which are sent to the client-side website. Prior to setting up API endpoints, changes were made to the JSON files directly. After setting up APIs, changes were made using MongoDB, Postman, and the SPA. JavaScript is a programming language that works with JSON files and renders the website screen. 

There were numerous instances where I had to refactor code to improve functionality and efficiencies. The most notable was the use of Handlebars. These allow data to pass from the server side HTML templates and display them on the client side. This reduced the redundancy of repeating all the same code in each HTML file. 

**Testing**
***
-
<hr/>

API endpoints are secured by JSON web tokens which generate an encrypted password while storing user accounts. This validates that an account is authenticated. Ensuring a user is authenticated adds an extra layer of security to prevent misuse of data. I was able to test API endpoint functionality using the MongoDB application in conjunction with Google Chromes built-in developer tools to verify the correctness of GET and PUT functions within the Travlr application. I also cross-referenced MongoDB to confirm corresponding changes were reflected in the database documents.

**Reflection**
***
-
<hr/>

Taking a full stack course provided me with a valuable skill set in my professional development. This course has allowed me to showcase frontend and backend development as well as working with a noSQL database. These skills will make me more marketable going forward in software development and I hope I get the chance to take on more exciting projects in the future.
