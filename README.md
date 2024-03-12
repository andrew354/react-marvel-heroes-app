<div align="center">
  <h2>Marvel Project App<br/>React + Typescript + SCSS</h2>
</div>

## Starter template

This starter template includes:

- [Webpack](https://webpack.js.org/)
- [React v18](https://beta.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
- [React Router](https://reactrouter.com/en/main)
- [React Query](https://tanstack.com/query/v3/)
- [Jest](https://jestjs.io/)
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [SASS](https://sass-lang.com/)
- Linters:
  - [eslint](https://eslint.org/) + [prettier](https://prettier.io/) + [stylelint](https://stylelint.io/) + [lintstaged](https://github.com/okonet/lint-staged)
  - [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - Automatic Class Sorting with Prettier

### Clone the repository and install dependencies

```sh
git clone https://github.com/andrew354/react-marvel-heroes-app
```

```sh
yarn
```

# or

```sh
npm install
```

### Open project in the browser

```sh
yarn dev
```

### Run test

```sh
yarn test
```

### Advantages and disadvantages of the design.

- Given the requirements for the project I set up a global provider for the entire application, called _HeroesProvider_. The provider essentially contains the array of Marvel heroes.
  I set up another Provider _FavHeroesProvider_ to keep track of the favourites heroes selected by the user.
  I used _react-query_ to handle Promise and axios for http request to the marvel API.
  Regarding the design pattern, I tried as much possible to separate those components that contain the actual logic from those components that are only use for representational purpuses. I also used custom hooks to extract and isolate the core logic of the application.
  I used contextAPI in order to keep a central store for the application that allow to consume the global state by every component in the application, avoiding prop drilling.
  The main advantage in the design is that the majority of the components have little logic and are easy to test and to maintain.
  The main disadvantages is that it is not scalable and there is not the implication of a state management library such as Redux. Moreover, it lack the implementation of a web server and a database where to store the actual state.
  I used webpack and differenciate between the development mode and the production mode.

## Structure of the project

- public
- src
  - components
  - hooks
  - pages
    - landingPage
      - components
      - **test**
      - Landing.tsx
  - providers
  - router
  - styles
