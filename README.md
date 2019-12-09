# 3D designer with VueJS & BabylonJS

The focus is to create a PoC of an interactive 3D view which can load a 3D model (i.e. obj file) venue, zoom & look around with a camera & add stuff(external 3d models, models built on coordinates) into it with clickable events that loads data and show.

## How to get started?
It can be easy to start a project with VueJS but complicated to understand the prerequisites or initial configuration process because there are many options. There are few different ways to create a project, with NPM, CDN, Vue create and Vue init with webpack. My goal was to take the easiest approach that requires minimum number of config files in the project directory.


## Install Vue
```
npm install -g @vue/cli
```

## Create project

This will create a simple project that's ready to build. Check the **package.json**. Commands specified under "scripts" can be run as **npm run serve**

Default vue config with **Babel** (JS compiler) & **ESlint** (JS linter)
```
vue create --default myProject
```
To follow a browser UI for project configuration
```
vue ui
```
If webpack configuration is preffered (legacy)
```
vue init webpack myProject
```

## Babel / ESLint (configs: recommended, standard, google, airbnb) / Prettier

- Babel is the JavaScript Compiler.

- ESLint is a code linter: the most popular JavaScript linter, a tool that analyzes code for errors which can include stylistic errors but also coding errors that lead to bugs.

- Prettier is a code formatter: an opinionated code formatter that comes with a pre set of rules designed to uniform code style across developers or project.

- vue create --default will give you eslint with recommended config (error prevention only) or check [here] (https://www.robinwieruch.de/prettier-eslint) to configure eslint with prettier.

## BabylonJS

To start playing with 3D in Babylonjs
```
npm install vue-babylonjs babylonjs/core babylonjs/loaders
```

## Project setup to follow after git clone
```
npm install
```

### To compile and hot-reload for development
```
npm run serve
```

### To compile and minifie for production
```
npm run build
```

### To lint and fix files
```
npm run lint
```



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
