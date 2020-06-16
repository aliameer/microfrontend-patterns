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
2. Single Page Application (SPA) version of the baseline monolithic application implemented using
[ReactJS](https://reactjs.org/).
3. The baseline monolithic application implemented using each of (7 out of 9)
microfrontend patterns.

## Project details
- This project is implemented as an [ExpressJS](https://expressjs.com/) application.
- Each microfrontend pattern is implemented as a route in the application.
- The backend is provided by the [Sock Shop](https://github.com/microservices-demo/microservices-demo)
project and it is run locally as a set of Docker containers.

## List of patterns

### Baseline applications
#### 0a. Monolithic application.
- Implemented as a single flat HTML file.
- Each domain (user, carts, catalogue) has a corresponding HTML element in the document with the
relevant ID. For example, the user domain it is: `<li class="nav-item dropdown" id="user">...</li>`.
- Each domain assumes the presence of jQuery, js-cookies, and Twitter Bootstrap (CSS and JS).
- Each domain uses namespaces for HTML, and JS to avoid collisions. For example, all JS functions
for the `user` domain are prefixed with `user_` and those for the `catalogue` domain are prefixed
with `catalogue_`.
- Communication between domains is performed using jQuery custom events. The names of the custom
events to follow pre-agreed conventions; the events are triggered on the HTML element designated
with the ID of the relevant domain. For example, the `user` domain can trigger an "initialize cart"
event on the `carts` domain by calling: `$('carts').trigger('carts:initialize-cart')`.
The carts domain then needs to perform the relevant actions in response. 

#### 0b. Monolithic SPA.
- Implemented as a ReactJS SPA, created using the
[creat-react-app](https://reactjs.org/docs/create-a-new-react-app.html) utility.
- The base dependencies (jQuery, js-cookie, Twitter Bootstrap) are bundled with the SPA.
- Each domain is implemented as a separate ReactJS component; for example, `<User />` component for
the `user` domain and so on.  
- [Redux](https://redux.js.org/) is used for state management as is very common for SPAs these days;
Redux is also used for communication between the domains where one domain *subscribes* to a certain
part of the state and another domain pushes changes to the state thereby allowing the first domain
to respond to changes.

### Server-Side patterns
#### 1. Server-Side Microfrontend per View (not implemented) 

#### 2. Server-Side Includes (SSI)
- Implemented using the "include" feature of the [*twig*](https://www.npmjs.com/package/twig)
view engine in ExpressJS.
- Each microfrontend is represented as a partial template that is included in the base template
during runtime. 

#### 3. Edge-Side Includes (ESI) (variant of pattern 2.)
- Implemented using the [nodesi](https://www.npmjs.com/package/nodesi) package.
- Each microfrontend is represented as an HTML snippet that is included in the base template during
runtime from a remote URL, using an [esi:include](https://www.w3.org/TR/esi-lang/) tag.
This therefore requires each microfrontend to be served as an HTTP response. 

### Client-Side patterns
#### 4. Client-Side Code Level Integration.
- Implemented using local [npm](https://www.npmjs.com/) packages that are combined
using [GulpJS](https://gulpjs.com/) into a single JS artifact.
- Each microfrontend is assigned an HTML element (with a prescribed ID) in the base HTML document.
The JS for each microfrontend then takes care of inserting the relevent content as children of the
base HTML element of each microfrontend. 

#### 5. Client-Side Includes (CSI)
- Implemented using jQuery's [load](https://api.jquery.com/load/) feature.
- Each microfrontend is assigned an HTML element (with a prescribed ID) in the base HTML document.
The content for each microfrontend is loaded from a remote URL and inserted as children of the base
HTML element of each microfrontend

#### 6. Client-Side Microfrontend per View (not implemented)

#### 7. Client-Side Multiple Microfrontends per View (variant of pattern 6.)
- Implemented using the [Single-SPA](https://single-spa.js.org/) framework.
- User microfrontend implemented using ReactJS.
- Carts microfrontend implemented using VueJS.
- Catalogue microfrontend implemented using Angular.
- Each microfrontend was created using the 
[create-single-spa](https://single-spa.js.org/docs/create-single-spa/) utility.
- The base HTML document contains designated HTML elements for each microfrontend; the Single SPA
framework takes care of bootstrapPing and mounting the relevant SPA to that HTML element.
- Single-SPA bundles each microfrontend using SystemJS and also prescribes using SystemJS for shared
dependencies such as (jQuery, js-cookies, and Twitter Bootstrap etc.).
- The microfrontends communicate with each other using
[CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).

#### 8. Client-Side Composition using Iframes (partial implementation only)
- Unfortunately, the current use-case cannot be fully implemented using the iframes pattern.  
- The use-case requires certain microfrontends (user, carts) to show UI elements such as dropdowns
and modals. If the microfrontends are implemented as iframes, they are unable to show these elements
outside of the space designated to their iframes. For example, the `user` microfrontend is
designated a small (49px by 30px) slot in the navigation bar of the page.
As the icon representing the `user` microfrontend is clicked, it must show a dropdown with certain
options such as "login", "register" and clicking on these options needs to show modals that overlay
everything.
- *Partially* implemented using the browser native iframes and the
[postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API for
communication.

### Hybrid Patterns
#### 9. Hybrid Composition of Fragments
- Implemented using the [OpenComponents](https://opencomponents.github.io/) framework.
- Each microfrontend is implemented as a "Component" and is served by the OpenComponents
[registry](https://github.com/opencomponents/oc/wiki#editing-debugging-testing).
- Each microfrontend is embedded in the base HTML file as the
`<oc-component href="..."></oc-component>` HTML element.
- The base HTML file also contains a reference to OpenComponent's JS browser client that parses the
`oc-component` elements and fetches them from the registry.
- The user and carts microfrontends are rendered on the client-side, whereas the `catalogue`
microfrontend is rendered on the server-side.

## Running this project
1. At the root of this project, open a terminal and run: `docker-compose up` to spin up the API
provided by the [Sock Shop](https://github.com/microservices-demo/microservices-demo) project.
Run `sudo docker-compose up` instead if you are running Linux.
2. Ensure that you have a recent version of `node` and `npm` installed.
3. At the root of this project, open another terminal and run: `npm run install` to install all the
dependencies.
4. After all the dependencies are properly installed, run: `npm run start:dev` to start the project.
5. Then, navigate to [API docs](http://localhost:3000/docs) to see the available routes.
6. For a test account, use the following credentials,
  - Username: user 
  - Password: password
