# Express with Handlebars Template

A template for creating web backends using Express. Uses Handlebars as the render engine.

## Usage

Get a copy from Github

```
git clone https://github.com/tomrickard/npm-typescript-template.git
```

Install the NPM dependencies:

```
npm install
```

Remove or rename the Git `remote` with:

```
// Remove
git remote rm origin
// Rename
git remote rename origin old-origin
```

Rename the package.json name and version to you project name and version:

```
{
  "name": "YOUR-PACKAGE-NAME",
  "version": "1.0.0",
  ....

  "author": "YOUR-NAME",
  ...

  }
}
```

Add your git repo `remote`
```
// Github example
git remote add https://github.com/<USER>/<REPO-NAME>.git

// Bitbucket example
git remote add https://<USER>@bitbucket.org/<USER>/<REPO-NAME>.git
```

Write some code!

## NPM scripts

```
npm run start      // start the web server on port 3000
npm run test       // starts Mocha up, runs tests in the /test/ folder. Uses mocha.opts
npm run stylus     // runs Stylus compiler (looks in stylus folder)
npm run stylus-w   // runs Stylus compiler in watch mode
```

# License

MIT