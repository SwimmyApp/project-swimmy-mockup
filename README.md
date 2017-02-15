# Project Swimmy Mockup

## Documentation
See prototype kick-off document here: https://docs.google.com/document/d/1sOWH_MXyaKAorE015E9fBT5P1q6rGTOhVw5-MFgwC94/edit?usp=sharing

And the dev trello board for tasks: https://trello.com/b/UeMUEmNh/swimmy-dev-board

## Source control
We are using gitflow for source control (for more info, see: http://danielkummer.github.io/git-flow-cheatsheet/). It is highly recommended that you use SourceTree to manage your git branches, because it has gitflow functionality baked into it, making it much easier to wrap your head around. 

If you are building new functionality, it must be based off of the develop branch, and NOT master! In most cases, we'll be using feature branches off of develop (i.e., when you are building a feature to search for groups). But if it's more generic in nature (i.e., when you need to add a new post-css webpack loader), these can be based directly off of develop since they are not feature-based.

## Setup
After you have cloned the repo and followed the instructions above for using gitflow, you can setup the app as follows:

```
npm install
npm start
open http://localhost:3000
```

## Linting
Please use 2 spaces for indents. To make sure your code is up to snuff, simply run `npm run lint` before you make a commit.

## Styling
We are using SCSS for styling. For things like colors or font families, please create variables in src/shared/styles/_variables.scss so they can be reused. We also have postcss-autoprefixer installed, so you don't have to worry about additional prefixing for older browsers. More general styles can be added in shared/styles/globalStyles.scss, but styles specific to individual components can be added within the component's folder and imported to that component in particular.

## Production build (for non-tech team members to view)
This is a work in progress. We can build for hosting on a server by running `webpack -p` from the root. However, I'm not sure yet what the best build process would be in terms of using /static/bundle.js as the javascript source in index.html (local development, hot-reloading) vs. using /dist/bundle.js for production. It might be a bit clunky, but maybe for now, in index.html, just manually change from /static/bundle.js to /dist/bundle.js for the js src before pushing to the server, then change it back (don't push the change to the repo). We'll need to discuss with folks who are more conversant with webpack and build processes. Grunt/gulp is another option? Not sure. We will most likely host code on either surge or github pages while we're still in the front-end prototyping phase.


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
