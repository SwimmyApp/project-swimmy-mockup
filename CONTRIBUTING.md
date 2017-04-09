## Resources

Most of the info in this CONTRIBUTING.md is taken from these resources:

* [Dev Process and Strategy](https://docs.google.com/document/d/17qHDNBxWHG5bEIOusqF48_HoNU_5d5cN9OaER0Ujb5A/): Matt Mallon, the previous Project Maintiner, made this great writeup in Google Drive on project maintenance and rationale for the tech stack.
* [How to Contribute to an Open-Source Project](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github): Egghead.io has an entire video series dedicated to this topic. It's 40 minutes and it's completely free.
* [Open Source Guides](https://opensource.guide/): It's from the guys who made Github.

## How to Get the Source Code

Note that GitHub refers to the website, and that Git referes to the CLI. Github is built on Git.

1. [Make a GitHub account.](https://github.com/join)

2. Install Git. Type `git --version` into your shell.  If you get a version printed out here, then you are good to go. You have Git installed. If you don't get a version, then go to the [Git SCM website](https://git-scm.com/) and download it.

2. Configure Git. We do this so that any time we make a commit, Git knows who to associate that commit with. Type `config --global user.name` and then your name. For example, `config --global user.name geoffreyyip`. Do the same with `git config --global user.email` and then put your email. Make sure the email matches what you used to sign up for GitHub. For example,
`config --global user.email example@gmail.com`.

3. Fork the project. Go to the main [repo page](https://github.com/SwimmyApp/project-swimmy-mockup) and click on the Fork button in the top-right corner. This will create your own personalized copy of the project. This copy will be separate from the main repo. Changes you make to your copy will not affect the original **upstream repository**. (Upstream is another name for the original repo.)

4. Create a local clone of your fork. Click [here](https://help.github.com/articles/fork-a-repo/#step-2-create-a-local-clone-of-your-fork) for steps.

5. Configure Git to sync up to the original **upstream branch**. Click [here](https://help.github.com/articles/fork-a-repo/#step-3-configure-git-to-sync-your-fork-with-the-original-spoon-knife-repository) for steps. Note that `git remote` lets you establish connections to other copies of your project. You do not have any control over those copies, and those remote copies can change at any moment. Think of remote branches as web bookmarks. Websites can change between visits, and remote branches can change between visits.

6. Install Gitflow. Gitflow is both a branching model and a set of git extensions accessible with the command line. Cheatsheet and installation instructions are located [here](http://danielkummer.github.io/git-flow-cheatsheet/).

7. Build the project. Run `npm install` to install the modules to your local repository. Run `npm start` to spin up a local dev server. Finally, open `http://localhost:3000`. Your terminal should automatically open a link in your default browser. If it doesn't, copy and paste the link into your favorite web browser.

And that's it! You're ready to tinker around with the source code and explore the demo.

## Taking on a Feature, Issue or Task

1. Get access to the Trello board. Make a Trello account, and then message a Project Maintainer on ProgCode Slack (at time of writing, @geoffreyyip is the only active maintainer) for access.

2. Assign yourself to a card. Trello is our single source of truth. Discussions, issues, and proposals should go there.

3. Talk to a Project Maintainer and talk your approach over with them. This ensures that you don't duplicate code that someone else is already working on. This also helps you clarify your approach and check your assumptions.

4. Navigate your terminal to your local Project Swimmy repo, type `git flow feature start MYFEATURE`, and start coding! If you know how to sync up with the original **upstream branch**, make sure you do that every once in a while. If you don't, it's not a big deal. The project's small enough that Project Maintainers can comfortably resolve merge conflicts.

## About Our Software Stack

You should know the basics of React and MobX before contributing to the project. Check out the official [React tutorial](https://facebook.github.io/react/tutorial/tutorial.html) and this interactive [MobX tutorial](https://mobx.js.org/getting-started.html). 

We use React as a MVC library, MobX for state management, Bootstrap as a UI library, and SCSS for styling. React is a standard choice for MVC frameworks. MobX is a bit unconventional as Redux is the standard state management tool. We used MobX because it contains less boilerplate and it's easier to onboard new developers with. Bootstrap is used for accessiblity reasons. SCSS is used so we can reuse font and color variables across components.

We use Webpack and Babel for our build and transpilation process. Knowledge of these two libraries is not neccessary to contribute, though it will be useful when we want to optimize performance.

## About Commenting, and Commit Messages

* Be explicit. Verbose is better than concise. More comments are better than less comments. Too much documentation is easy to delete. Too little documentation is hard to fix and understand.
* [Write good git commit messages.](https://chris.beams.io/posts/git-commit/) Here's a model git commit message:
```
Capitalized, short (50 chars or less) summary

More detailed explanatory text, if necessary.  Wrap it to about 72
characters or so.  In some contexts, the first line is treated as the
subject of an email and the rest of the text as the body.  The blank
line separating the summary from the body is critical (unless you omit
the body entirely); tools like rebase can get confused if you run the
two together.

Write your commit message in the imperative: "Fix bug" and not "Fixed bug"
or "Fixes bug."  This convention matches up with commit messages generated
by commands like git merge and git revert.

Further paragraphs come after blank lines.

- Bullet points are okay, too

- Typically a hyphen or asterisk is used for the bullet, followed by a
  single space, with blank lines in between, but conventions vary here

- Use a hanging indent
```
* Not all Git messages need a detailed summary. However, they should have a succint and easy-to-digest title.

Why is this important? Project Swimmy runs under the ProgCode umbrella, which means that leadership here should be fluid and changing. It's important that future Contributors and Maintainers have easy-to-understand documentation. Otherwise, the knowledge is either living in someone's head, or it needs to be scavenged from multiple scattered sources.

## Folder Structure

Unless stated otherwise, we are talking about folders inside `src/`.

* All code, except for SVGs and pictures, should be defined within `src/`. 
* `stores/` and `models/` are related. Each of the `*Store.js` files imports from a corresponding `*Model.js` file (e.g. `UserStore` and `UserModel`)
* `config/views` and `screens/` are related. `config/views` contains links to all `*Screen` components.
* Folder structures should be as flat as possible. For example, a nested folder structure would look like this:

```
src/
--components/
----appWrapper/
------index.js
------style.scss
------spec.js
----bannerNav.js
--screens/
----styles/
------loginScreen.scss
------splashScreen.scss
----loginScreen.js
----splashScreen.js
--App.jsx
--index.jsx
```

And a flat folder structure would look like this:

```
src/
--components/
----appWrapper.js
----appWrapper.scss
----appWrapper.test.js
----bannerNav.js
--screens/
----loginScreen.js
----loginScreen.scss
----splashScreen.js
----splashScreen.scss
--App.jsx
--index.jsx
```

Why flat and not nested? It's more intuitive and easier to follow. Flat folder structures may become a problem when our project get big and our folders start to have 50+ files inside them, but our project is still in an infant stage.

## Coding Style Tests

Indent with 2 spaces. Use semicolons. Run `npm lint` before making a commit.

(2017/04/09 Geoff: There are two lint configs: eslint and jshint. I believe only one is being used. We should delete the other one. Or if both are being used, consolidate the rules down to one config.)

(2017/04/09 Geoff: We should add a config to enforce the @inject, @observer decorator pattern, and flag the observer(['store'], class) pattern. They both do the same thing, but it's confusing to have both.)

## About CSS and Styling

We are using SCSS for styling. For things like colors or font families, please create variables in `src/shared/styles/variables.scss` so they can be reused. Don't worry about vendor prefixing; we have post-css-prefixer for that. General styles can be added in the shared/styles folder, but styles specific to individual components should be defined within the same folder as the individual component.

## About the RootStore MobX pattern

(Technical writeup needed!)

We are using the `RootStore` design pattern to maintain state. Instead of React components accessing individual stores (e.g. `GroupList` importing `GroupStore`), React components will have access to a `RootStore` that has all other stores defined on it (e.g. `GroupList` will access `rootStore.groupStore`).

RootStore is made possible through a <Provider> component. A technical writeup is in the works on this topic.

## About Gitflow

We are using Gitflow for source control. Gitflow is both a branching model and a set of git extensions accessible with the command line. It was originally popularized through a blog post, [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/).

Matt Mallon, the previous Project Maintainer, highly recommends that you use the SourceTree GUI to manage your git branches, because it has gitflow functionality baked into it, and it's easier to wrap your head around. Geoffrey Yip, the current Project Maintainer, likes using the CLI. Either or works. It's up to you.

If you are building new functionality, it must be based off of the develop branch, and NOT master! In most cases, we'll be using feature branches off of develop (i.e., when you are building a feature to search for groups). But if it's more generic in nature (i.e., when you need to add a new post-css webpack loader), these can be based directly off of develop since they are not feature-based.

If you're unsure, the safe practice is to create a new feature branch with `git flow feature start MYFEATURE`.

## About What We're Not Working On

(2017/04/09 Geoff: Testing is not a priority. Project is small enough that we can manually hunt down bugs. As the app gets bigger, we can discuss what kinds of tests we want to add.)
 
(2017/04/09 Geoff: Deployment process is not a priority at the moment. Let's get our MVP done first.)
