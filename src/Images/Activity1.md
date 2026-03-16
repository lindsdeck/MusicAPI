# CST391 - Activity 1: Express API - 
# Lindsey DeDecker
### March 16th, 2026

## Video Link
https://youtu.be/Hp9zqV5o9Rs

## Video Explanation
In the above video, I demonstrate the functionality of the MusicAPI app within the localhost and Postman.  We can see the API respond to many different requests. The project is fully funcitoning with retrieving, creating and deleting albums and retrieving artist information. 

## Explanation of one API Method
The Albums endpoint that retrieves the album data involves the router, controller and DAO. 

**Router**
- The router defines the endpoint and determines which controller method should handle the request.  When a GET request to /albums comes in, the router is going to direct the request to the readAlbums controller method.

**Controller**
- The controller processes the request and determines what data should be returned.  IT will check the query parameter which in this case is AlbumId.  If it gets a specific ID that exists it will return it and if not it will return nothing.

**Data Access Object**
- The DAO is what communicated with the MySQL database by executing the DQL queries.  The queries are processed with a MySQL connection pool.

## Explanation of Express API project
In this project, I created a RESTful API called MusicAPI using Node.js, Express and TypeScript. The purpose of the application is all for managing music data from MySQL.  The API followed the MVC architecture. 

The project also includes middleware such as logging, CORS and Helmet. These are used to handle requests and allow cross-origin communication.  Enviornment variables are stored within the .env file. This is where the database configuration and connection happens. 

