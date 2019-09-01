<h1 align="center">
    <img alt="GoStack MeetApp" src="https://res.cloudinary.com/lukemorales/image/upload/v1567376018/readme_logos/meetapp_mljojp.png" />
    <br>
    Bootcamp GoStack Meetapp
</h1>

<h4 align="center">
  A FullStack App that allows users to organize and subscribe to meetapps.
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/lukemorales/gostack-fullstack-meetapp.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/lukemorales/gostack-fullstack-meetapp.svg">

  <a href="https://www.codacy.com/app/lukemorales/gostack-fullstack-meetapp?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=lukemorales/gostack-fullstack-meetapp&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://api.codacy.com/project/badge/Grade/691b85e51bf240b997ae6ff82ea41590">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lukemorales/gostack-fullstack-meetapp.svg">
  <a href="https://github.com/lukemorales/gostack-fullstack-meetapp/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lukemorales/gostack-fullstack-meetapp.svg">
  </a>

  <a href="https://github.com/lukemorales/gostack-fullstack-meetapp/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/lukemorales/gostack-fullstack-meetapp.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/lukemorales/gostack-fullstack-meetapp.svg">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Technologies

This project was developed at the [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/bootcamp) with the following technologies:

- [NodeJS](https://nodejs.org)
- [ReactJS](https://reactjs.org/)
- [React Native](https://facebook.github.io/react-native/)
- [react-navigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [styled-components](https://www.styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Immer](https://github.com/immerjs/immer)
- [date-fns](https://date-fns.org/)
- [Reactotron](https://infinite.red/reactotron)
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]
- And another bunch of packages....

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer and the [GoBarber API](https://github.com/lukemorales/gostack-fullstack-meetapp).
You'll also need to setup and run a Postgres and a Redis database and insert the access informations into a .env file, based on a .env.example file that is provided in the backend folder.
From your command line:

```bash
# Clone this repository
$ git clone https://github.com/lukemorales/gostack-fullstack-meetapp

# Go into the repository
$ cd gostack-fullstack-meetapp

# Install dependencies for the backend
$ cd backend
$ yarn install

# Run migrations to your database
$ yarn migrate

# Run the backend server
$ yarn dev
$ yarn queue

# Install dependencies for the frontend and run the server
$ cd frontend
$ yarn install
$ yarn start

# Install dependencies for the mobile
$ cd mobile
$ yarn install

# Start React Native Server
$ react-native start

# Run the app (iOS)
$ react-native run-ios --simulator="iPhone XS Max"

# Run the app (Android)
$ react-native run-android
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/lukemorales/gostack-fullstack-meetapp/blob/master/LICENSE) for more information.

---

Made with ♥ by Luke Morales :wave: [Get in touch!](https://www.linkedin.com/in/lukemorales/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
