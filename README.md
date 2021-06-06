# React.js Websites by Tommy P. Keane

These are React.js website examples created by me, Tommy P. Keane -- provided here for reference and educational purposes.

<!-- MarkdownTOC -->
<!-- /MarkdownTOC -->

## Original Setup

To create a basic React.js Webapp, we need to first setup `npm` using `nvm`, and then we can run the `create-react-app` command.

First, to install `nvm` you can use `brew install nvm` on macOS (or look [here](https://github.com/nvm-sh/nvm) for other OSes.

We want to then create a  new `.nvmrc` file in our project directory and put these contents in there:

```bash
v16.3.0
```

We then call `nvm use` to install and switch to the stated version of `npm`.

You should now be able to see a result when you call `which npm`, like this:

```bash
❯ which npm
~/.nvm/versions/node/v16.3.0/bin/npm
```

Now, if we want our React.js site to be `tommypkeane_com` for example (for `www.tommypkeane.com`), then we can use the `npx create-react-app tommypkeane_com` command as follows:

```bash
❯ npx create-react-app tommypkeane_com
Need to install the following packages:
  create-react-app
Ok to proceed? (y) y

Creating a new React app in /Users/tommy/dev/website_reactjs/tommypkeane_com.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1944 packages, and audited 1945 packages in 2m
```

Note that we use `npx` and not `npm`; this is an executable runner for `npm` "scripts" (packages/tools), but it is install alongside `npm`, so you should have it if you've followed the setup above.

And now we have a basic example app that we can then configure.

We'd of course suggest setting up `git` and creating a  `.gitignore` file with the following contents:

```bash
# direnv Virtual Environments
.direnv/

# node.js (npm) Modules and Packages
**/node_modules/**
```
