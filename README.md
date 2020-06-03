# Microfrontend Patterns

This project is part of a Master's thesis that investigated the different microfrontend
implementation patterns. As part of the thesis, this project implements the frontend of
a [sample microservices application](#sample-microservices-application) using numerous (7 out of 9)
patterns identified during the thesis.

The thesis, including the details of the patterns can be seen at the following url: 
[link-to-thesis-here](https://www.google.com).

## Sample microservices application
Recently, several projects have appeared that present reference applications for microservices.
For this project, the [Sock Shop](https://github.com/microservices-demo/microservices-demo) project
is used.

The [Sock Shop](https://github.com/microservices-demo/microservices-demo) project contains a sample
microservices application for a typical eCommerce website that sells socks. The application contains
microservices for each (typical eCommerce) domain such as user, payment, shipping, orders, carts,
and catalogue. Additionally, it also contains an Edge Router as well as a
[Backend-for-Frontend (BFF)](https://samnewman.io/patterns/architectural/bff/). Finally, the
services as well as the persistence are polyglot.

For the purpose of this thesis, only the `user`, `carts`, and `catalogue` microservices are used in
order to scope down the project to make it more manageable within the timeframe. A typical user
journey for this scoped-down application requires a user,
 
1. To register and/or login (handled by the `user` microservice).
2. To view a list of socks (handled by the `catalogue` microservice).
3. To add an item in the catalogue to the user's cart (handled by the `carts` service).

To achieve this, the frontend of the Sock Shop project was first simplified and refactored to
generate a monolithic frontend application that uses as few (extra) frontend resources as possible:
[jQuery](https://jquery.com/), [js-cookie](https://github.com/js-cookie/js-cookie), and Twitter
[Bootstrap](https://getbootstrap.com/) only. This led to the following implementations,

1. Baseline (simplified) monolithic application.
2. Single Page Application (SPA) of the baseline monolithic application implemented using
[ReactJS](https://reactjs.org/).
3. The baseline monolithic application implemented using each of (7 out of 9)
microfrontend patterns.

## Project details
- This project is implemented as an [ExpressJS](https://expressjs.com/) application.
- Each microfrontend pattern is implemented as a route in the application.
- The backend is provided by the [Sock Shop](https://github.com/microservices-demo/microservices-demo)
project and it is run locally as a set of Docker containers.

## List of patterns

### Server-Side patterns
#### 1. Server-Side Microfrontend per View (not implemented) 

#### 2. Server-Side Includes (SSI)
This pattern is implemented using the "include" feature of the *twig* view engine in ExpressJS.

#### 3. Edge-Side Includes (ESI) (variant of pattern 2.)
This pattern is implemented using the [nodesi](https://www.npmjs.com/package/nodesi) package.

### Client-Side patterns
#### 4. Client-Side Code Level Integration.
This pattern is implemented using local [npm](https://www.npmjs.com/) packages that are combined
using [GulpJS](https://gulpjs.com/). 

#### 5. Client-Side Includes (CSI)
This pattern is implemented using jQuery's [load](https://api.jquery.com/load/) feature.

#### 6. Client-Side Microfrontend per View (not implemented)

#### 7. Client-Side Multiple Microfrontends per View (variant of pattern 6.)
This pattern is implemented using the [Single-SPA](https://single-spa.js.org/) framework.

#### 8. Client-Side Composition using Iframes
This pattern is implemented using the browser native iframes and the
[postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API for
communication.

### Hybrid Patterns
#### 9. Hybrid Composition of Fragments
This pattern is implemented using the [OpenComponents](https://opencomponents.github.io/)
framework.

## Running this project
1. At the root of this project, open a terminal and run: `docker-compose up` to spin up the API
provided by the [Sock Shop](https://github.com/microservices-demo/microservices-demo) project.
Run `sudo docker-compose up` instead if you are running Linux.
2. Ensure that you have a recent version of `node` and `npm` installed.
3. At the root of this project, open another terminal and run: `npm run install` to install all the
dependencies.
4. After all the dependencies are properly installed, run: `npm run start:dev` to start the project.
5. Then, navigate to [API docs](http://localhost:3000/docs) to see the available routes. 
