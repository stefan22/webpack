## webpack

- takes modules with dependencies and generates static assets representing those modules. 
  (***wikipedia***)

- a build tool that puts all of your assets, including javascript, images, fonts and css in a  
  dependency graph. It lets you use `require()` in your source code to point to local files like images and decide how they're processed (like replacing the path with a URL or pointing to a CDN)

 ### webpack files

 - creates bundle.js. (src)
 	+ node_modules/.bin/webpack.  


 - change location of dist folder using path module and webpack (src)
 	+ path: path.join(__dirname, "../dist")  //to root


 - without cli
 	+ using `build`:"webpack" in package.json file
 	+ just by executing npm run + build
