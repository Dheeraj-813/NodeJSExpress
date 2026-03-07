// TO use express, we need to install it first by running the command "npm install express" in the terminal. 
// After that, we can create a file named "Demo.js" and add the following code to set up a basic Express server:
// for that we need to import the express here. for e.g.,

// const express = require('express');

// After importing express, We need to use express function and assign it to a variable. This is called create instance of express for e.g.,
// const app = express();

// app.get("/", (req,res) => {});
// app.get() is a method in Express that defines a route handler for GET requests to a specific path. 
// In this case, it is defining a route handler for the root path ("/"). 
// When a client makes a GET request to the root path, the callback function provided as the second argument will be executed, allowing you to send a response back to the client.
// Here,req and res are objects, req represents the incoming request object, and res represents the response object that you can use to send a response back to the client.
// For example, you can send a simple text response like this:
// app.get("/", (req,res) => {
//     res.send("Hello, World!");
// });
// you can create different routes like:-
// app.get("/about", (req,res) => {
//     res.send("This is the about page.");
// });
// app.get("/contact", (req,res) => {
//     res.send("This is the contact page.");
// });

// app.use('/api/Users', require("./routes/api/Users"));

// app.listen(3000,() => {
//     console.log("server started on port 3000");
// });
// app.listen() is a method in Express that starts the server and listens for incoming requests on a specified port. 
// In this case, it is starting the server on port 3000. 
// The callback function provided as the second argument will be executed once the server is successfully started, allowing you to perform any necessary setup or log a message to indicate that the server is running.

// To see the output of this code, you can run the command "node Demo.js" in the terminal.
// After running the server, you can open a web browser and navigate to "http://localhost:3000" to see the response "Hello, World!" displayed on the page.
// You can also navigate to "http://localhost:3000/about" to see the response "This is the about page." and "http://localhost:3000/contact" to see the response "This is the contact page."

// But if you server is running and you update the code in Demo.js, you need to stop the server and start it again to see the changes.
// To avoid this, you can use a package called "nodemon" which automatically restarts the server whenever you make changes to the code. 
// You can install nodemon globally by running the command "npm install -g nodemon" in the terminal. 
// After installing nodemon, you can start the server using the command "nodemon Demo.js" instead of "node Demo.js". 
// This way, whenever you make changes to the code in Demo.js, nodemon will automatically restart the server and you can see the changes without having to manually stop and start the server.

// Environment Variables.......

// Environment variables are a way to store configuration settings and sensitive information outside of your application's code. 
// They allow you to keep sensitive data, such as API keys, database credentials, and other configuration settings, separate from your codebase. 
// This is important for security reasons, as it prevents sensitive information from being exposed in your code and allows you to easily change configuration settings without modifying your code.
// In Node.js, you can access environment variables using the process.env object.
// For example, if you have an environment variable named "PORT" set to 3000, you can access it in your code like this:
// const port = process.env.PORT || 3000;
// This code will check if the PORT environment variable is set, and if it is, it will use that value. If the PORT environment variable is not set, it will default to 3000.
// Then we simply use the port variable in the app.listen() method like this:
// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });
// This way, you can easily change the port number by setting the PORT environment variable without having to modify your code.

// Route Parameters.......

// Route parameters are a way to capture values from the URL in Express.
// They allow you to define dynamic routes that can accept different values in the URL and use those values in your route handlers.
// For example, if you want to create a route that accepts a user ID as a parameter, you can define the route like this:
// app.get("/users/:id", (req,res) => {});
// In this example, ":id" is a route parameter that will capture the value of the user ID from the URL.
// When a client makes a GET request to "/users/123", the value "123" will be captured as the "id" parameter and can be accessed in the route handler using req.params.id.
// For example, you can send a response that includes the user ID like this:
// app.get("/users/:id", (req,res) => {
//     const userId = req.params.id;
//     res.send(`User ID: ${userId}`);
// });
// When a client makes a GET request to "/users/123", the response will be "User ID: 123".
// req.params is an object that contains the values of the route parameters defined in the URL.
// In the example above, req.params.id will contain the value of the "id" route parameter, which can be accessed and used in the route handler to perform operations based on the captured value.
// res.send() is a method in Express that sends a response back to the client.
// It can be used to send various types of responses, such as strings, objects, arrays, or even HTML.
// When you call res.send(), it will automatically set the appropriate Content-Type header based on the type of data being sent and send the response back to the client.

// The Most Important things required to use express are:-
// 1. Importing the express module.
// const express = require('express');
// 2. Creating an instance of the express application.
// const app = express();
// 3.Defining the routes and their corresponding handlers.
// app.get("/", (req,res) => {
//   res.send("Hello, World!");
// });
// 4. Starting the server to listen for incoming requests.
// app.listen(3000,() => {
//     console.log("server started on port 3000");
// });
// ---------------------------------------------------------------------------------------------------------------


// Handling multiple routing.......

// Http Get Request.......

// In Express, you can handle multiple routes by defining different route handlers for each route.
// For example, you can define routes for different paths like this:
// Lets create one array of courses:-
// const courses = [
//     {id: 1, name: "Course 1"},
//     {id: 2, name: "Course 2"},
//     {id: 3, name: "Course 3"}
// ];
// then if want data of a specific id, we can define a route like this:
// app.get("/courses/:id", (req,res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));          -->req.params.id is a string, so we need to parse it to an integer using parseInt() before comparing it with the course id.
//     if(course){
//         res.send(course);
//     }else{
//         res.status(404).send("Course not found");                -->Error handling with stats code.
//     }
// });
// In this example, we have defined a route that accepts a course ID as a parameter and returns the corresponding course object if it exists. 
// If the course is not found, it sends a 404 response with a message "Course not found".
// You can define as many routes as needed to handle different paths and operations in your Express application.

// same way we can find course by name also like this:-
// app.get("/courses/name/:name", (req,res) => {
//     const course = courses.find(c => c.name === req.params.name);   
//     if(course){
//         res.send(course);
//     }else{
//         res.status(404).send("Course not found");
//     }
// });
// In this example, we have defined a route that accepts a course name as a parameter and returns the corresponding course object if it exists. 
// If the course is not found, it sends a 404 response with a message "Course not found".
// ----------------------------------------------------------------------------------------------------------------


// HTTP Post Request.......

// HTTP POST request is used to send data to the server to create a new resource.
// In Express, you can handle POST requests by defining a route handler for the POST method.
// For example, if you want to create a new course, you can define a route like this:
// app.post("/courses", (req,res) => {
//     const newCourse = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(newCourse);
//     res.status(201).send(newCourse);
// });
// In this example, we have defined a route that handles POST requests to "/courses". 
// When a client sends a POST request to this route with JSON data in the request body, 
// the route handler will create a new course object and add it to the courses array.
// It will then send a 201 Created response with the newly created course object.

// To handle POST requests and access the data sent in the request body, you need to use middleware to parse the incoming JSON data.
// In Express, you can use the built-in express.json() middleware to parse JSON data in the request body.
// In short, if you want pass the data like const newCourse object in the above example, you need to use the express.json() middleware in your Express application.
// You can add this middleware to your Express application like this:

// app.use(express.json());
// express.json() is a built-in middleware function in Express that parses incoming requests with JSON payloads and is based on body-parser. 
// It is used to handle JSON data sent in the request body. 
// When you use express.json(), it allows your Express application to understand and process JSON data sent by clients, making it easier to work with APIs that communicate using JSON format.

// To check this on Postman, you can send a POST request to "http://localhost:3000/courses" with the following JSON data in the request body:
// Select the "Body" tab in Postman, choose "raw" and then select "JSON" from the dropdown menu and enter the following JSON data:
// {
//     "name": "Course 4"
// }
// After sending the request, you should receive a response with the newly created course object, which will look like this:
// {
//     "id": 4,
//     "name": "Course 4"
// }
// ----------------------------------------------------------------------------------------------------------------


// HTTP PUT Request.......

// HTTP PUT request is used to update an existing resource on the server.
// In Express, you can handle PUT requests by defining a route handler for the PUT method.
// For example, if you want to update an existing course, you can define a route like this:
// app.put("/courses/:id", (req,res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(course){
//         course.name = req.body.name;
//         res.send(course);
//     } else {
//         res.status(404).send("Course not found");
//     }
// });
// In this example, we have defined a route that handles PUT requests to "/courses/:id". 
// When a client sends a PUT request to this route with JSON data in the request body, 
// the route handler will find the course with the specified ID and update its name with the new value provided in the request body. 
// If the course is found and updated successfully, it sends the updated course object in the response. 
// If the course is not found, it sends a 404 response with a message "Course not found".

// To check this on Postman, you can send a PUT request to "http://localhost:3000/courses/1" with the following JSON data in the request body:
// Select the "Body" tab in Postman, choose "raw" and then select "JSON" from the dropdown menu and enter the following JSON data:
// {
//     "name": "Updated Course 1"
// }
// After sending the request, you should receive a response with the updated course object, which will look like this:
// {
//     "id": 1,
//     "name": "Updated Course 1"
// }
// ----------------------------------------------------------------------------------------------------------------

// HTTP DELETE Request.......

// HTTP DELETE request is used to delete an existing resource on the server.
// In Express, you can handle DELETE requests by defining a route handler for the DELETE method.
// For example, if you want to delete an existing course, you can define a route like this:
// app.delete("/courses/:id", (req,res) => {
//     const courseIndex = courses.findIndex(c => c.id === parseInt(req.params.id));
//     if(courseIndex !== -1){
//         const deletedCourse = courses.splice(courseIndex, 1);
//         res.send(deletedCourse[0]);
//     } else {
//         res.status(404).send("Course not found");
//     }
// });

// OR using filter method:-
// app.delete("/courses/:id", (req,res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(course){
//         courses = courses.filter(c => c.id !== parseInt(req.params.id));
//         res.send(course);
//     } else {
//         res.status(404).send("Course not found");
//     }
// });

// In this example, we have defined a route that handles DELETE requests to "/courses/:id". 
// When a client sends a DELETE request to this route, the route handler will find the index of the course with the specified ID and remove it from the courses array using the splice() method. 
// If the course is found and deleted successfully, it sends the deleted course object in the response. 
// If the course is not found, it sends a 404 response with a message "Course not found".

// To check this on Postman, you can send a DELETE request to "http://localhost:3000/courses/1".
// After sending the request, you should receive a response with the deleted course object, which will look like this:
// {
//     "id": 1,
//     "name": "Updated Course 1"
// }
// If you try to delete the same course again, you will receive a 404 response with the message "Course not found" since it has already been deleted.
// ----------------------------------------------------------------------------------------------------------------


// Middleware in Express.......

// Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle.
// Middleware functions can perform various tasks such as executing code, modifying the request and response objects, ending the request-response cycle, or calling the next middleware function in the stack.
// In Express, you can use middleware functions to perform tasks such as logging, authentication, error handling, and more.
// For example, you can create a simple logging middleware that logs the request method and URL for each incoming request like this:
// app.use(express.json()); // Middleware to parse JSON data in the request body
// For middleware, we need to create separate folder and file for that. 
// For e.g., we can create a folder named "middleware" and inside that folder, we can create a file named "logger.js" and add the following code to create a logging middleware:
// logger.js
// module.exports = (req,res,next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// };

// OR using simple function:-
// const logger = (req,res,next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// };
// module.exports = logger;
// To use above middleware in your Express application, you can import it and use it with app.use() like this:
// const logger = require("./middleware/logger");
// app.use(logger);
// ------------------------------------------------------------------------------------------------------------------


// Custom Middlewares.........

// Next method:-
// It is used to pass control to the next middleware function in the stack.
// For example, you can create a custom middleware that logs the request method and URL for each incoming request like this:
// app.use((req,res,next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// });
// In this example, we have defined a custom middleware function that logs the HTTP method and URL of each incoming request. 
// The next() function is called at the end of the middleware to pass control to the next middleware function in the stack. 
// If you don't call next(), the request will be left hanging and the server will not respond to the client.
// You can define multiple middleware functions in your Express application, and they will be executed in the order they are defined. 
// This allows you to create a chain of middleware functions that can perform various tasks before sending a response back to the client.
// Basically, Next method is used to pass control to the next middleware function in the stack. 
// It is essential for ensuring that the request-response cycle continues and that all middleware functions are executed in the correct order.
// -----------------------------------------------------------------------------------------------------------------------------


// Third-party Middleware.........

// In addition to built-in middleware functions, Express also allows you to use third-party middleware packages that can be installed via npm.
// For example, you can use the "morgan" package for logging HTTP requests.
// To use morgan, you can install it by running the command "npm install morgan" in the terminal. 
// After installing morgan, you can import it and use it as middleware in your Express application like this:
// const morgan = require("morgan");
// app.use(morgan("dev"));
// In this example, we have imported the morgan package and used it as middleware in our Express application. 
// The "dev" option is a predefined format string that tells morgan to log the HTTP method, URL, status code, response time, and other details for each incoming request. 
// You can choose from various predefined formats or create your own custom format for logging requests using morgan.
// Third-party middleware packages like morgan can help you add additional functionality to your Express application without having to write the code yourself, making it easier to implement features such as logging, authentication, and more.


// app.use(express.urlencoded({extended:false}));
// express.urlencoded() is a built-in middleware function in Express that parses incoming requests with URL-encoded payloads. 
// It is used to handle form data sent in the request body. 
// When you use express.urlencoded(), it allows your Express application to understand and process URL-encoded data, which is commonly used when submitting HTML forms. 
// The extended option allows you to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true).


