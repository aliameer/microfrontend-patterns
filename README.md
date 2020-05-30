# Microfrontend Patterns

This project is part of a Master's thesis that investigated the different microfrontend
implementation patterns. As part of the thesis, this project implements the frontend of
a sample microservices application using numerous (7 out of 9) patterns identified during
the thesis.

The thesis, including the full list of patterns can be seen at the following url: 
[link-to-thesis-here](https://www.google.com).

## List of patterns
1. Server-Side Microfrontend per View (not implemented)
2. Server-Side Includes (SSI)
3. Edge-Side Includes (ESI) (variant of pattern 2.)
4. Client-Side Code Level Integration.
5. Client-Side Includes (CSI)
6. Client-Side Microfrontend per View (not implemented)
7. Client-Side Multiple Microfrontends per View (variant of pattern 6.)
8. Client-Side Composition using Iframes
9. Hybrid Composition of Fragments

## Sample microservices application
Recently, several projects have appeared that present reference applications for microservices.
For this project, the [Sock Shop](https://github.com/microservices-demo/microservices-demo) project
was used.

The [Sock Shop](https://github.com/microservices-demo/microservices-demo) project contains a sample
microservices application for a typical eCommerce website that sells socks. The application contains
microservices for each (typical eCommerce) domain such as user, payment, shipping, orders, carts,
and catalogue. Additionally, it also contains an Edge Router as well as a
[Backend-for-Frontend (BFF)](https://samnewman.io/patterns/architectural/bff/). Finally, the
services as well as the persistence are polyglot.

For the purpose of this thesis, only the `user`, `carts`, and `catalogue` microservices were used in
order to scope down the project to make it more manageable within the timeframe. A typical user
journey for this scoped-down application requires a user,
 
 1. To register and/or login (handled by the `user` microservice).
 2. To view a list of socks (handled by the `catalogue` microservice).
 3. To add an item in the catalogue to the user's cart (handled by the `carts` service).

To achieve this, the frontend of the Sock Shop project was first simplified and refactored to
generate a monolithic frontend application that uses as few (extra) frontend resources as possible:
jQuery, js-cookie, and Twitter Bootstrap only. This led to the following implementations,

1. Baseline (simplified) monolithic application.
2. Single Page Application (SPA) of the monolithic application implemented using ReactJS.
3. The monolithic application implemented using (7 out of 9) microfrontend patterns.
