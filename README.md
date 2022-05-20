# SantanderCodingExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Styling was accomplished with the help of the Bootstrap library

Please follow the procedure here: https://stackoverflow.com/a/39693770/9858653

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). The candidate would prefer using Jest, but in the interests of time, Karma (the default) was used.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Other notes
1. Standard query parameters from the jsonplaceholder API were used to set a start and limit - for more information see https://github.com/typicode/jsonplaceholder/issues/65.
2. A sample .png was placed in the /assets folder to simulate downloads - in a production app, the downloadable files would be present on the server.
3. If no limit was set for the json placeholder API, 5000 records were returned. Therefore, a hard-coded max {{ start }} parameter of 5000 was hard-coded for purposes of this exercise.
4. When attempting to install the FontAwesome library using npm install as described at https://blog.logrocket.com/how-to-add-font-awesome-angular-project/, MANY errors were encountered. In the interests of time, a <script> tag with a `src` attribute set to the FA CDN - https://use.fontawesome.com/releases/v5.15.4/js/all.js - was used.
5. All Karma unit tests passed.
