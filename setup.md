npm init -y
npm install
npm install webpack@4.0.1 --save-dev
npm install webpack-cli@2.0.9 --save-dev
package.json > under scripts > "build": "webpack" > npm run > npm run build > ERROR in Entry module not found: Error: Can't resolve './src' in '/Users/cereal/Desktop/journal' > You will need to create a file called webpack.config.js
create dist/index.html folder and files
src/main.js and src/journal.js folder and files, all JS source code will go inside src and bundled code goes inside dist
npm run build > should not work

npm install style-loader@0.20.2 css-loader@0.28.10 --save-dev  > add css to files
npm run build > npm ERR! journal@1.0.0 build: `webpack`  > update build to "build": "webpack --mode development" > still doesn't work > we may need to update to lastest version of webpack > application still works without it. > fixed the issue, missed a comma

moved index.html from dist to src folder > add webpack plugin > npm install html-webpack-plugin@3.0.6 --save-dev > update webpack.config.js > to include HtmlWebpackPlugin  > remove script tag at top of index.html > npm run bundle > this creates a new index.html file in the dist folder and creates the script at the bottom.


npm install clean-webpack-plugin@0.1.18 --save-dev > we install this to tell clear out the dist folder since everytime we npm run install it created a index.html folder.


 npm install uglifyjs-webpack-plugin@1.2.2 --save-dev > minify the code > bundle.js is suppose to be reduced to a single line > saw no changes.

npm install webpack-dev-server@3.1.0 --save-dev >  and update webpack.config for new UglifyJsPlugin({ sourceMap: true }), and add dev tools > npm run build > now bundle.js is is smaller > dev-server is used to setup live development (localhost) > npm run start > to start localhost
