# React-Todo-List
ReactJS Todo list project

## Scripts

* **build** : webpack build project
* **develop** : start webpack-dev-server
* **proxy** : start webpack-dev-server and proxy server for external access
* **lint** : eslint rule check
* **lint-fix** : modify the code to eslint rules

## Config

`scripts/config.js`

* **src** : source code directory path
* **out** : build result directory path
* **assets** : assets directory path
* **public** : public directory path
* **useLint** : if useLint is true, Check the eslint rules
* **useAnalyzer** : if useAnalyzer is true, Visualize the capacity of the bundle
* **usePWA** : if usePWA is true, Apply settings required for pwa
* **showLintError** : if showLintError is true, Show errors in eslint
* **`devServer`**
  * **host** : development server host
  * **port** : development server port
  * **proxy** : development server proxy port
* **`analyzer`**
  * **host** : analyzer page server host
  * **port** : analyzer page server port