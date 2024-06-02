# Max-Taskdemo

This project is on [Angular CLI](https://github.com/angular/angular-cli) version 18 with node 20.14

## Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Angular and upgrading

This app is on Angular 17. Update to latest Angular 11 with:
`ng update @angular/cli@17 @angular/core@17`

Follow the instructions eventualy for fixes

## From Angular 10+ warnings

In angular.json, to avoid CommonJs warnings, add **allowedCommonJsDependencies** in the options section for **qrcode**:

```bash
"builder": "@angular-devkit/build-angular:browser",
          "options": {

            "allowedCommonJsDependencies": [
              "qrcode",
              "url"
            ],

```

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
