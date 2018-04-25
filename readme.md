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


 - without cli (src2)
 	+ using `build`:"webpack" in package.json file
 	+ just by executing npm run + build

- webpack with watch (src3)
	+ `watch`: "webpack --w"
	+ and just run npm run `watch` 
	+ i have in the past added a third script, whenever I wanted to run a few npm scripts
	  in a single line and call them with a `&&` but watch by itself works fine here.

- webpack with babel-loader - transpile
	+ baberc file - presets: env
	+ es6 - es5 transformation
	+ bundle file created
	+ on a folder/path/file set with webpack.
	+ npm script exec
    
    
- webpack to load css -  styles
    + using style-loader and css-loader
    + and to import file to the page it is being applied on.
    + npm run script

- webpack to compile SCSS
    + using sass-loader and node-sass
    + npm run script (build)

- webpack to load images 
    + using url loader and file loader
    + npm run script (build) 
    + used only url-loader in config file to run this task








