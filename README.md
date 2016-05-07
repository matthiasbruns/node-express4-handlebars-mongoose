# node-express4-handlebars-mongoose

## About
This project provides a simple demo application,
which uses [Node.js](https://nodejs.org/), [Express4](http://expressjs.com/),
[Handlebars](http://handlebarsjs.com/) and [Mongoose](http://mongoosejs.com/).

## Usage
You can download or clone this repository for your project.

## Structure

* assets/
  * _stores frontend files, which will be compiled_
  * css/ - contains SCSS files
  * js/ - will be bundles with browserify
* bin/
  * build_css - uses node-sass to build scss files
  * www - holds server code
* config/
  * default.json - stores development configuration
  * production.json - stores production configuration  
* controller/
  * _handles routing_
  * auth - routes for authentication
  * helpers - shared middleware functions
  * index - sets up the routes
* i18n/
  * localization data
  * can be also used in handlebars via the __ helper
* models/
  * mongoose Schema models
  * index - connects to database
* public/
  * static and compiled frontend files
* services/
  * business logic can be added here
  * utility functions like config reading and logging
* views/
  * handlebars views
  * layouts/ - folder for master layouts
  * partials/ - reusable handlebars templates
