# API-Rate-Limiter

### Deployed link
- https://api-rate-limiter.onrender.com/

### What is Api-Rate-Limiter
- API rate limiter is a technique used to prevent the excessive use of API resources by limiting the number of requests that can be made within a certain time period. 
The rate limiter helps to protect the API from malicious attacks, denial-of-service (DoS) attacks, and excessive usage by legitimate users.
- The rate limiter is usually implemented as a middleware component that intercepts API requests and checks if the request is within the allowable limit for the given time period.
If the request exceeds the limit, the middleware returns an error response indicating that the request is blocked for a certain period of time. If the request is within the limit, it is allowed to proceed.


### About the API-Rate_LImiter that i created in this repository
- By default, the rate limiter allows a maximum of 10 requests per minute per IP address. If an IP address exceeds this limit, it will be blocked for 1 minute before it can make additional requests.
- we can use api-rate-limiter as a middleware.
- The rate limiter is implemented using a MongoDB database to store request data. No external modules are used, and all data is stored in memory.

