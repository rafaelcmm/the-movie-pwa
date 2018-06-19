// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiKey: 'd17c3475585769f8e34fb35ed646cd58',
  baseUrl: 'https://api.themoviedb.org/3',
  firebase: {
    apiKey: "AIzaSyBn8vygKIm6tVtccVoOUXcqWsXB84JKVmM",
    authDomain: "teste-movie.firebaseapp.com",
    databaseURL: "https://teste-movie.firebaseio.com",
    projectId: "teste-movie",
    storageBucket: "teste-movie.appspot.com",
    messagingSenderId: "926321019400"
  }
};
