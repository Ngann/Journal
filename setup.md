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
