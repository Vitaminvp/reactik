# Create a React lite Framework for educational purposes.

## Setup

Install `babel` and command line interface

`npm install --save-dev @babel/core @babel/cli`

then install JSX compiler

`npm install --save-dev @babel/plugin-transform-react-jsx`

Create babel configuration file `.babelrc`

```yaml
{ "plugins": ["@babel/plugin-transform-react-jsx"] }
```

Add `build` script to `pakage.json`

```yaml
"scripts": {
  "build": "babel src -d public"
},
```

Use `npm run build` to compile JSX from `src` folder to `public`
