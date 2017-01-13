# Project Swimmy Mockup

See prototype kick-off document here: https://docs.google.com/document/d/1sOWH_MXyaKAorE015E9fBT5P1q6rGTOhVw5-MFgwC94/edit?usp=sharing

And the dev trello board for tasks: https://trello.com/b/UeMUEmNh/swimmy-dev-board 

We can build for hosting on a server by running `webpack -p` from the root. However, I'm not sure yet what the best build process would be in terms of using /static/bundle.js as the javascript source in index.html (local development, hot-reloading) vs. using /dist/bundle.js for production. It might be a bit clunky, but maybe for now, in index.html, just manually change from /static/bundle.js to /dist/bundle.js for the js src before pushing to the server, then change it back (don't push the change to the repo). We'll need to discuss with folks who are more conversant with webpack and build processes. Grunt/gulp is another option? Not sure. 


mobx-react-boilerplate
=====================

A minimal application that combines [MobX](https://mobxjs.github.io/mobx) with [React](https://facebook.github.io/react).
Supports ES6 and JSX compilation through babel.

* For a more sophisticated project to start with, see the full TodoMVC implementation: [mobx-react-todomvc](https://github.com/mobxjs/mobx-react-todomvc).

### Run the example

```
npm install
npm start
open http://localhost:3000
```


### Credits

* [Mendix](http://github.com/mendix) for providing the opportunity to battle test this approach (we're hiring!).
