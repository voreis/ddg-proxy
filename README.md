### DuckDuckGo Search Proxy

The purpose of this project is use NodeJS as backend and ReactJS + Redux as frontend to search and store the search history inside a file.

### How to start

To run:
`$ cd src`
`$ npm run dev`

To test:
`$ cd src`
`$ npm test`

### Technologies

- **Backend:** NodeJS + Express
- **Frontend:** ReactJS + Redux

### File organization - Backend

- **client:** frontend project to maintain easily inside the same repository
- **config: **files to store variables per environment
- **errors:** error handlers (notFound, notAuthorized, etc)
- **middleware: **middlewares to run before the request, in this case to store the query parameter in file async
- **routes:** files to organize the api routes
- **use_cases:** depending on the architecture this files act like an application service layer, in this case is just to centralize how to handle external requests and acess to file system (but could be organized using infra concept)

### File organization - Frontend

- **public:** static files
- **src**
	- **actions** : organized actions by features 
	- **containers**: organized by features and divided in page outside the components
		 - **components**: components used in the feature area
	- **redux**: files using redux and reac-redux
		- **reducers**: reducers divided by features

### Tests

- **tape.js**: used to do unit test in the backend project with NodeJs. (In this cenario there is almost no file to test, but in a huge system each piece of code have a .tape.js associated to be easier to maintain)

### Improvements

- Frontend:
	- Do a prettier layout :)
	- Handle loading and error with alerts and page handlers
- Backend
	- Organized the tests by feature/files
	- Async and await handlers
	- It's not a boilerplate, so need to be architected depending on the business requirements (microservices, clean code, huge api, etc)
	- Improve the unit tests and code coverage, in this project I tested only the basics

### Observations

It was a two day project with a tech stack that I am not familiar with, so with more time and effort could be so much better.


