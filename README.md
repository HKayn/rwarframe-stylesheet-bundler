# r/Warframe Stylesheet Bundler

A Node project that bundles SCSS files containing the styling of subreddits of the r/Warframe family into CSS stylesheets using Vite. 

By separating the styling that is common across all subreddits from the bits that make up each subreddit's individual theme, changes to the styling can be applied to all subreddits in a more comfortable manner. 

Additionally, stylesheets built with Vite are minified, saving a tiny bit of space.

## Project Setup

Install Node & NPM, then run the following: 

```npm install```

After making changes to either the common stylesheet or one of the subreddit's themes, build the CSS stylesheets for use on Reddit by running: 

```npm run build```

## To-Do

[ ] Transfer the current stylesheet into the project
[ ] Automatically apply new stylesheets on every new commit to main