# Commands
    npm init
    mkdir src public
    npm i react react-dom
	npm i -D typescript @types/react @types/react-dom
	npm i -D @babel/core @babel/cli @babel/preset-env @babel/preset-typescript @babel/preset-react
	npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader html-webpack-plugin clean-webpack-plugin

# Copy Files
index.html to public/
index.tsx to src/
tsconfig.json to ./
webpack.config.js to ./

# package.json Scripts
start: `webpack serve --config webpack.config.js --env env=development`
build: `webpack --config webpack.config.js --env env=production`

