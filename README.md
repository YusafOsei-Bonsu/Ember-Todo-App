# my-app

This project represents an application that was derived from completing section 1-6 on the following Udemy course: *Build Web Apps Using EmberJS: The Complete Course*.

Below are the sections I completed (in order):
1. Introduction
2. Getting Started With Ember
3. Routing with Ember
4. Templates & Controllers
5. Models & Data
6. Components

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd my-app`
* `npm install`

## Running / Development

* `npm start`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## Blockers/Resolutions
| Blockers | Resolutions |
|----------|-------------|
| How to pass data from controller into template | [Ember.js tutorial for beginners #03 Router & Controller (2020)](https://www.youtube.com/watch?v=Toz-zPkzUgM) |
| `Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning.` | File > Preferences > Settings > Search "Javascript.ImplicitProjectConfig.ExperimentalDecorators" > Press the below checkbox (enable/disable) |
| `Uncaught (in promise) Error: Assertion Failed: You attempted to generate a link for the "cars.edit" route, but did not pass the models required for generating its dynamic segments. You must provide param car_id to generate`. | Wrote `car.id` inside the link-to helper like so... `{{#link-to 'cars.edit' car.id}}Edit{{/link-to}}`|
| How to pass values into the template from the component-class | Use the `@tracked` in the [Component class](https://guides.emberjs.com/release/components/component-state-and-actions/) |
| How to pass models into components | Pass models as handlebars `<MyGithubRepos @model={{@model}}/>` |
