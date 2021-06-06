# React.js Websites by Tommy P. Keane

These are React.js website examples created by me, Tommy P. Keane -- provided here for reference and educational purposes.

<!-- MarkdownTOC autolink="true" -->

- [Original Setup](#original-setup)
- [Example Apps](#example-apps)
  - [`tommypkeane_com`](#tommypkeane_com)
- [How to Develop](#how-to-develop)
  - [React.js Debugging Links](#reactjs-debugging-links)

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

Note that `create-react-app` will create an embedded `.git` directory as a git repostitory, which you may not want -- I didn't. So, you'll have to run:

```bash
rm -rf tommypkeane_com/.git/
```

That will get rid of the embedded git repo, and you can just use the outer project repo. I prefer this because then you can manage one or more react apps in the same project (repo), and you can also have control over `npm` and `python` with `direnv` when initially setting-up the app.

## Example Apps

These are the example React.js apps made available in this repo.

To use the build and use these apps locally, you will want to `cd` into the app directory, and then run the following:

```bash
npm run start
```

This will create the local development build after a minute, and you'll see a message like this, and then your default web-browser will open to the `localhost` address:

```bash
Compiled successfully!

You can now view tommypkeane_com in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.999.999:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

As it says at the end, if you want to "build" the app to host on a server, you can run `npm run build` and you'll find a full, hostable app in the `build` directory.

If you have access to a webserver and your webserver application is pointing to `/var/www/html/`, as an example, then you'll want to copy the `build/` directory contents into that directory, so that you should see a file like `/var/www/html/index.html` in your server's filesystem.

The server is the computer running the webserver application (Apache, Nginx, etc.).

If the webapp has been updated with a testing framework like `jest` or `storybook`, you should also have `npm run test` as a script/command that can run (per the `package.json`) to confirm the functionality of the unit-tests.

### `tommypkeane_com`

Personal website of me, Tommy P. Keane, created in June 2021 as a personal portfolio and educational infotainment website.

Visit https://www.tommypkeane.com to see this site live.

See the local [README.md](./tommypkeane_com/README.md) for more details.

## How to Develop

This section has some links and details related to how to develop a React.js app. The code provided should give some different examples with different degrees of complexity, but it may help to also have some standalone explanations and reference links.

### React.js Debugging Links

Some links that may help with debugging React.js code and dealing with any confusing issues.

- https://stackoverflow.com/questions/45930746/module-not-found-when-import-jsx-file
