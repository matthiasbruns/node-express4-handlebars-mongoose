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

#  The MIT License (MIT)

**Copyright (c) 2016 Matthias Bruns**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
