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
  - [eslint](https://eslint.org/) + [prettier](https://prettier.io/)

### Clone the repository and install dependencies

```sh
git clone https://github.com/andrew354/react-marvel-heroes-app
```

```sh
yarn
```
or

```sh
npm install
```

### Open project in the browser in development mode

```sh
yarn dev
```

### Run test

```sh
yarn test
```
### Run linter

```sh
yarn lint
```
### Run prettier

```sh
yarn format
```
### Run build in production mode

```sh
yarn build
```

### Design and architecture.

- Given the requirements for the project I set up a global provider for the entire application, called _HeroesProvider_. The provider essentially contains the array of Marvel heroes.
  I set up another Provider _FavHeroesProvider_ to keep track of the favourites heroes selected by the user.
  I used the _react-query_ library for state management and to handle Promises, and axios for HTTP request to the marvel API.
  Regarding the design pattern, I tried as much possible to separate those components that contain the actual logic from those components that are only use for representational purpuses.
  I also used custom hooks to extract and isolate the core logic of the application and for retrieve the data from the API.
  I used contextAPI in order to keep a central store for the application that allow to consume the global state by every component in the application, and avoiding prop drilling.
  The main advantage in the design is that the majority of the components have little logic and are easy to test and to maintain.
  I used webpack and differenciate between the development mode and the production mode to minimize the assets.

## Structure of the project

- public
- src
  - assets
  - components
    - Header
      - Header.tsx
      - header.spec.tsx
      - header.scss
  - hooks
    - useGetHeroes.ts
    - useGetHeroes.spec.tsx
  - pages
    - landing
      - components
      - landing.spec.tsx
      - landing.scss
      - Landing.tsx
  - providers
  - router
  - styles
  - types
