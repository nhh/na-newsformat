# Na newsformat (Spike)

## Goals

* Check feasibility
* Check testability
* Wrapping my head around this topic

## Code Structure

`test/` and `src/` are strictly sharing the same directory structure.

``src`` contains all source files. The goal is, to provide an abstraction layer on top of the drafjs lib.
Additionally we must transform the generated html to a valid newsformat.

## Releases

This library is getting releases as ES5 and ES3 build, for both supporting browser and typescript.

## Commands & Scripts

Run tests
`npx jest`

Build
`npx tsc && npx webpack`

Create a npm package
`npm pack`

Publish npm pacakge
`npm publish`

Build Steps:

ES7 -> (npx tsc) -> ES5 -> (npx webpack) -> ES3 🤪

