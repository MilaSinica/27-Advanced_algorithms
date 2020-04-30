# FALSY VALUES : 6 :
* `NaN`, `undefined`, `null`, `0`, `false`, `''` < empty string

# VAR vs LET vs CONST 
* [var] had a lexical scope, [let] and [const] have block scope. Introducesd ES6. 
* If used outside block - not defined, var would be undefined. const can't be changed if primitives, can be ressigned if not.

# REFS VS VALUES
* Primitives - copy is independant value. Object etc - copy is a [refs] (changing 1 - change other). Immutability [...arr], {...obj}

# MAP() vs FILTER() vs REDUCE()
* [map]() - iterate, create new arr. [forEach]() - modifies arr. [filter]() - filter only true condition values. 
* [reduce]() return accumulated value (can be sum only, or even modified|filterd array) - more powerful

# GLOBAL VARS
* JS doesn't relly have [globals] (document, window). Otherwise - too fragile and unreliabe, affected by everything. Bad coding.

# THIS
* Access current `context` | `scope` - window, class or object you inside 
* `Arrow` function breaks this context

# == AND !==
* [==] checks value only [===] checks type too (number and string). Better data control, safer

# TYPEOF
* [typeOf] returns type of value we pass. For all non-primitives (regex too) returns object. Function returns function. Array can be checked 
* with [isArray](). null is object but not instanceOf object

# DELETE
* Delete [property] of object, not just value. Usually not wanted. 
* [Ex] Used in Events library class with data structure {event: callback, ...})

# OBJECT NOTATION
* `.` notation and `[]` notation. `Brackets usage`: in loop if not sure what keys are - pass var (Iterating over keys and accessing values)

# STRICT MODE
* stricter code - liner like. `use strict` on top of docs --> no globally assigned vars, deletinng keys, duplicating names of parametrs
* general good practicies, depricated by linters. Throws an `error` not recommendation

# ANONYMOUS FUNCTION
* Function `assigned to var`. [Usage]: closure, pass as argument to other function.

# CALLBACk
* Function to `invoke later`. [Usage]: events, maps in array, promise. Functions we're passing which are going to be called to later. 

# CLOSURE
* Nested function with access to parent scope even after it was closed. Has private variables. Instead of using global var.
* [Ex] anonymous self-innvokinng function which returns a counter function, has private count var and keeps track of it even after closed -
            var add = (function () {
                var counter = 0;
                return function () {counter += 1; return counter}
            })();
            add();

# NAMING
* vars - `camelCase`, `isProperty` - bool, `getSmth` - function returns smth, `onObjectEvent` - event callback, 
* `handleObjectEvent` - event prop handler, `updateSmth` - function changes smth. `Uppercase` - for constants. 
* For in and for of is more readable than for loop

# EMPTY ARRAY
* arr = `[]`;   arr.`splice(0)`;   while(arr.length) arr.`pop()` || arr.`shift()`;   arr.`length = 0`; 

# MUL FUNCTION
* Utilizing ananymous functions in other function call - returning funstion in function. `Nested closure `
    function mul (x) {
        return function (y) { // anonymous function
            return function (z) { // anonymous function
                return x * y * z;
            };
        };
    }
    mul(2)(3)(4)

# CREATE ARRAY
* arr = `[]`; arr = `new Array()`(bad - can overwrite some library properties annd methods); `map()` returns new arr, `reduce` with set []

# UNDEFINED vs NULL vs UNDECLARED
* [undefined] - hasn't been assigned a value var x;. [null] is assigned value - no value yet var x = null; 
* [undeclared] - doesn't exists at all = error `is not defined`

# 0.2+0.1
* Returns not 0.3 but 0.300000001, because how numbers in js works. So it's better to handle calculations on backend
* Use to fixed (0.1+0.2).`toFixed(2)` = 0.30 -> set the precision, `Math.round()`

# instanceOf
* What a `prototype or class` for object id

# IIFE - immediately invoced function expression
* `anonymous function immedeatelly invoked.` To init something, for safety purposes - having private functions and vars you can not change.

# MAINTAIN STATE & LOCAL STORAGE
* `Redux`, cookies, local storage, global variables, session storage. 
* `localStorage`.getItem('name', 'Mila') | .setItem('name'). Can save retrieve object with JSON.stringify() nad JSON.parse() - 5mb
* `cookies` - 4kb. Travel with http request. All other like local storage: document.cookie = "name=Mila". Can have expiration date
* `sessionStorage` same as localStorage except it expires when page session ends

# OBJECT AND ARRAY DESTRUCTURING
* `unpack values` of array and object to distinct variables - cleaner and descriptive code
* arr = [15, 01, 1990] --> const [day, month, year] = arr. 
* Can assign `aliaces`: obj ={name: 'mila', surname: 'sinica'}, const (me: name, me2: surname) = mila;

# SPREAD OPERATOR
* `Unwrap` values of object or arr [...arrr] {...obj}

# REST PARAMETR
* {...rest} -> can destructure part and pass aother as rest in React for inheritance purposes. 
* `indefinite number of arguments` in function

# ARROW FUNCTIONS
* Shorter syntax and `no binding it's own this` - if you need to references something outside context like route or in 
* React the component itself. Otherwise - bind it or save to variable 'self'.

# NaN
* type is number

# DOM SELECTORS
* `getElementById`, `getElementsByTagName`, `getElementsByClassName`, `QuerySelector` - the slowest

# COPY OBJECT
* using spread operator obj = `{...obj}`, `JSON.stringify(obj) => JSON.parse(newObj)`, `iterate` through properties and add to new obj 

# COMPARING OBJECTS
* `Object.is(obj1, obj2)`. If assumping that keys must be in the same order -> `stringify and compare`. 
* `Object.getOwnPropertyNames(obj1)` - compare all properties as arrays (length first, then loop and compare)
* + go through both objects (1 may have some additional props), if has nested arr or obj - go and compare them inside too (recursion). 
    const obj1 = {
    name: "Mila"
    }
    const obj2 = {
    name: "Mila"
    }
    isSameObject(obj1, obj2) {
        props1 = Object.getOwnPropertyNames(obj1);
        props2 = Object.getOwnPropertyNames(obj2);
        if(props1.length !== props2.length) return false;
        for(prop of props1) {
            if(obj1[prop] !== obj2[prop]) return false;
        }
        return true;
    }

# SERVICE WORKER
* `Script runs on backgroun`d separately from browser thread - intercepting `network requests`, `caching` or retrieving resources from the 
* cache, and delivering `push messages`. Catch resourses before they fire off - cashing. `Middle man` `before request goes to api`
* if offline - have cache to use; faster speed, less pressure on servers. If app not active - still can use push notifications. 
* Only runs with https (big security risks), can't use localstorage, can't access DOM directly (use postMessage and message event listener)

# SET vs ARRAY
* `set` includes only unique values

# ARRAY REMOVE DUPLICATS
* unwrap `to set`, which doesn't include duplicates. set = new Set(), arr.forEach(el => set.add(el))
* Iterate through with `include()` method. If array includes non-primitives - iterate with more complex function
* arr.forEach(el => if(!arr.icludes(el) newArr.push(el)))

# HHTP METHODS
* [put] - update data models, [get] - get data, [post] - create brand new data model, [delete] - delete from server, 
* [patch] - update small part of model

# HTTP STATUS CODES
* `100` - information, `200` - success (200 - ok, 201 - created, 202 - accpeted), `300` - redirect (301- moved, 302- found, 307 - temp red), 
* `400` - error in client site (400- bad request, 401 - unauthorised,  403- forbidden, 404- not found, 409 - conflict), 
* `500` - server level error (500 - internal server error, 501- not implemented, 502 - bad gateway, 503 - serbice unavailable, 504 - timeout)

# REST API STANDARDS
* series of `architecture patterns` to build APIs, `versioning` - v1.1.1 - `major.minor.patch`. `Naming` - / separates hierarchy, 
* '-' word separator for readability, lowercase, singular or plural, {id} for concrete item, cerb for controler cart/checkout

# SYNC VS ASYNC
* `sync` goes in order of actions, `async` if async piece of code is hit (user input and http request - takes time) - we can await for result
* or continue syncronous task until we get the result. Multiple things in a same time.

# TIMERS
* `setTimeout()` - single delay the code `setInterval()` - continual loop for every interval - every 1 minute. `clearTimeout()` - stop timer

# PROMISES
* way to handle asynchronus data (like get data from API or user input). Previously - try/catch. Async/await - much esier way to handle
* to handle errors: `throw new Error()` | .try `.catch(err)` | await `Promise.reject(new Error());`

# VISIBILITY HIDDEN vs DISPLAY NONE
* both cases still on the DOM. `diplay: none` - takes out all the space it was taking, `visibility: hidden` - leaves the space empty

# RULE vs PROPERTY vs VALUE
* `RULE` all together : `selector`: div `property`: display, `value`: none, `declaration`: display: none

# DATA ATTRIBUTE
* The way of data binding between html and js: <h1 data-test="h1"> would add to tag object extra property with key test and value h1
* can be used for testinng, as css selector

# SPECIFISITY
* how css rules overwrites each other. `*, tag, class, id`. Same level - the last declared. `Chaining elements` - selecting childs *
* or siblings`inline styles` - max stecific, but bad convention, using `!important ` - also bad convention

# RESPONSIVITY
* how app looks/works on different screen sizes/devices.` Media queries`, `bootstrap grid system` (12 columns) - now have nnatively
* `css-flexbox` and `css-grid`

# BOX MODEL
* every html element has box model assotiated with it: `padding - inside`, `border - frmainnng`, `margin - around`

# CSS PREPROCESSORS
* `Sass`, `less`, `stylus` - generate css file from preprocessor syntax, allows to have `mixins` (global function 
* like transform properties or gradients, browser compibality), `extend` - attach props from 1 class to other, `loops`, `nesting`,
* `pre-built functions`. 

# STYLED COMPONENTS
* CSS-in-JS styling framework that uses tagged template literals in JavaScript - write actual CSS to style react components. 
* Native mobile support, scoped styles, use propsinstead of classes, css snapshot testing - Jest Styled Components, Sass and polished support

# PSEUDO CLASS
* Additional selector types reflects element state: element order (`:first-of-type`, `nth-of-type`, `:last-child`), 
* user interaction (`:hover`, `:active`, `:visited`, `:focus`)

# PSEUDO ELEMENTS
* Actual elements, not state (`::first-line`, `::first-letter`, `::before`, `::after`, )

# SYMANTIC HTML
* Clean and meaningful code - `<footer>`, `<header>`, `<nav>`, `<side>`, `<article>`, `<main>`, `<banner>`

# HEAD TAG
* Only one not renedered to DOM - stores `external dependancies` - stylesheets, libraries, and `meta information` - title, author, viewport
* charset, description, keywords - for CEO, browser, responsive design, screen-readers

# ACCESSABILITY
* website accessible to everyone with screen-readers. Responsive design, color-`contrast`, `labels`, `emphasys` like bold and italic,
* bigger buttons, good semantyc tags, better planed content. Run `lighthouse` and other extensions to test your app.

# CSS CUSTOM PROPERTIES
* emulating vaiables - new feature, replace preprocessors. Can be passed to function. Easy to change. Use root - to set available globally
:root {
    --heading-color: green;
}
h1 {
    color: var(--heading-color);
}

# CSS PRINCIPLES 
* Naming conventions, reusability, specific selectors, global styles, less css - better

# INSTALL FONT
* Google fonts - inject link to <head>, `@import` in css file and pass url, 
* include the font file on your web server and use `@font-face`

# ADD CSS
* `inline` with style attr (separation of content), `<style>` tag (separation of content), import `local` stylesheet, import `external` 
* stylesheet

# VENDOR PREFIXES
* vendor == browsers == browser support. Getting better. Nonstandard CSS properties prefixed by browser (`-webkit-`, `-moz-`, `-o-`, `-ms-`)
* Way for browser makers to add support for new CSS features before those features are fully supported

# CSS GRID vs FLEXBOX
* Both handle responsive design. `Grid` - focus on horizontal AND vertical setup of whole layout (newer, can have incompability). 
* `Flexbox` - more single direction row OR column, focus for individual.

# CSS LIBRARY
* Like `bootstrap` +fast, +easy, +uniform, +js components, +grid system, +maintenance, +stability, -difficulties with custom design, 
* -follow their html stucture, -unnecessary code, -learning, -dependance, -difficult to overwrite, -difficult to migrate from

# Z-INDEX
* Layers - items on top of each other, z-coordinate, for modals

# SPEEDING UP SLOW APP
* Check speed diagnostics in chrome developer tools lighthouse - narrow down the issue. Check network calls. Cashing and load balancer.
* Figure out what is slowing the app (tables - pagination, api calls slow - unnecessary calls or memory leak, images slow - size/format, 
* certain devices, certain browsers, endpoints - not effective sql, compress files, break up the bundles of js files). 

# DEPENDANCY INJECTION
* Separated business logic as services to inject in classes. User Service - preset api calls in 1 place and use in multiple locations.
* Inject instance of this userService (new UserService()) and has access to it's methods inside class or file - don't recreate all logic.

# AGILE DEVELOPMENT
* `Iterative development` - collaborative effort of self-organizing and cross-functional teams and their customers. It advocates adaptive planning, evolutionary development, early delivery, and continual improvement, and it encourages rapid and flexible response to change.

# SCRUM
* Team breaks their work into goals that can be completed within timeboxed iterations, called `sprints`, no longer than one month and most commonly two weeks, planning - tasks based on history and experience, then track progress and re-plan in 15-minute time-boxed daily meetings, called `daily scrums` (morning standups).

# LANGUAGE-AGNOSTIC
* Language is chosen because it`s appropriate for a particular task. (Java team might choose to use Ruby for some particular work)

# SOLID PRINCIPLES
- understandable, maintanable, flexible
* `Single responsibility` - method/class manage single part of functionality, class has 1 reason to change
* `Open/Close` - open for extensions, closed for modification. Extend class without modifying it. Inheritance.
* `Liskov substitution` - inheritance. The possibility to substitute child with parent. Don't overrwrite parent properties - extend.
* `Interface segregation` - don't couple code so tightly that can't make change without changing multiple places. Abstraction, small classes
* `Dependency inversion` - High-level modules should not depend on low-level modules. Both should depend on abstractions. 

# DEBUGGING
* Browser inspector + network calls + audits, extensions - vue and react `devTools`, write test cases, think ahead scenarios annd edge cases

# BROWSER COMPABILITY
* test in browser, docs - `canIUse`, `w3School`. Testing on mobile. `Browser Stack` - emulating work in different browsers

# WEB PAGE
* Website use `domain name system` - url references address to find via Internet server it lives and retrieves info. 
* [Authentication] - alongside send token or username/password to check it or makes additional request. Server return index page,
* other assets and fire off and load dependancies (imagies, js, stylesheets) from other locations and apis.  
*

# STATIC vs DINAMYC typed languages
* `JS dynamycly typed` - easy to convert types, no type checking, easy to reassign value of other type. Static TS - less type errors,
* less bugs, meet standarts of basic functional programming principles.

# OOP
* `Object and class` setup to encapsulate logic and later interact with one another. OOP focuses on the objects that developers want to 
* manipulate rather than the logic required to manipulate them. Reusability, scalability and efficiency. `Polymorphism` - objects can take 
* more than one form depending on the context.`Inheritance` - extend class for reusability, `Encapsulation` - implementation and state of 
* object are hiden, avalilable only public methods. `Abstraction` - high-level classes are abstract available for extension and reuse.

# FUNCTIONAL PROGRAMMING
* Redux, React - composing `pure functions`, avoiding shared state (shared vars), mutable data (don't change object after creation), and 
* side-effects (only change - returned value). `Pure functions` - no sideffects, passing * same value - always same effect. 
* Contrast with `OOP` -  OOP application state is usually shared and colocated with methods in objects. 

# GIT VERSION CONTROL
* Clone repo, pull, create branch for ticket, stage, commit, pull deva nad compare, solve conflicts, push it. 

# COMPONENTS
* HTML template, which can be referenced by defined tag name. Can pass data, properties + js functionality, export. Reusability.
* Building blocks for do not repeat yourself.

# ANGULAR VS REACT VS VUE
* `Angular` - Google - similar to Vue, slow performance, `React` - Facebook, fast, popular, well supported, very functional 
* (opposite to OOP), too flexible - people obuse it, high entry point, big chances of mistakes and memory leaks. 
* `Vue` - good documentation, easy, straight-forward, tiny size, not so many libraries, not so well maintained and supported.

# TESTING
* Check out multiple browsers, check logs, run linter, unitests - Jest, Jasmine.

# PACKAGE MANGER
* `Node` package manager - comes with Node, most popular. `Yarn` - faster, Facebook develop[ed yarn to address npm security issues. Allows to use dependancies. In `package.json` - manages them, updates, keeps tranck of versions. `Dev-dependancies` - not needed in prod (Typescript, gulp, linter, prettier). 

# SPA - SINGLE PAGE APP
* Easy `property binding` - from html to js. Dynamic content frequently updating. Easy, `dynamic`, `preload peacies`, fast. `Router` - easy page refresh. `Single load` - for dependencies, even lazy loading. `Components` - little reusable logic blocks. 

# TOOLS
* `Devtools` - react, redux and vue devtools, quokka, `terminal` for running tests and git communication, `VS` embed tools (for conflicts), `Linter`, `Prettier`, `Postman` for API calls, JSON formatter for chrome, `JSON Placeholder`, `yarn` and `npm`

# QUESTIONS
* Code quality standards - unitests? 
* What team and project will be? 