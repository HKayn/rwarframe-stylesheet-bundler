# r/Warframe Stylesheet Bundler

A Node project that bundles SCSS files containing the styling of subreddits of the r/Warframe family into CSS stylesheets, then compresses those aggressively using [clean-css](https://github.com/clean-css/clean-css). 

This project's aim is to simplify applying updates to the styling to all subreddits that use a CSS theme derived from the r/Warframe theme, as well as enabling streamlined development of the stylesheet using Sass features.

## Project Setup

[Install Node.js & NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), then run: 

```npm install```

After making changes to either the common stylesheet or one of the subreddit's themes, build the CSS stylesheets for use on Reddit by running: 

```npm run build```

Do note that Reddit only supports a subset of CSS and imposes additional restrictions. Those can be viewed [in Reddit's CSS validator](https://github.com/reddit-archive/reddit/blob/master/r2/r2/lib/cssfilter.py).

## To-Do

- [x] Transfer the current stylesheet into the project

- [ ] Separate stylesheet into common and subreddit-specific SCSS files

- [ ] Automatically apply new stylesheets on every new commit to main

- [ ] Validate stylesheets according to Reddit's own validator when building