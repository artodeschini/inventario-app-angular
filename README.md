# SistemaIntentarioAppAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## bootstrap

Este projeto utiliza o framework [bootstrap](https://getbootstrap.com/) na versão 5.3

## Api Rest Java spring

A [Api desenvolvida com spring](https://github.com/artodeschini/inventario-api-spring)

## acesso a console do h2

[h2console](http://localhost:8080/h2-console)

`url`: `jdbc:h2:mem:testdb`
`user`: `sa`
`pass`: `sa`

## comando para a criar os elementos do projeto

```bash
# criando o app
npx -p @angular/cli ng new sistema-intentario-app-angular

# criando classe model produto
npm run ng g class produto --skip-tests

# criando componente de listagem de produtos
npm run ng g c listar-produto --skip-tests

# criando o servico
npm run ng g s produto --skip-tests

# adicionar produtos
npm run ng g c adicionar-produto --skip-tests

# editar produto
npm run ng g c editar-produto --skip-tests
```

## Development server

Run `npm run ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
