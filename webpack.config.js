var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

var BUILD_DIR = path.resolve(__dirname, 'public/scripts');
var APP_DIR = path.resolve(__dirname, 'src/');

//export config object
module.exports = {
    //Start looking for files in our main js file, and fill in gaps using babel fill ins (polyfills)
    entry: APP_DIR + '/index.jsx',
    output: {
        //Output bundle to ./public/javascripts/bundle.js
        path: BUILD_DIR,
        filename: "bundle.js",
        //The location on the public path of your bundle file
        publicPath: "/scripts"
    },

    node: {
      fs: "empty"
    },

    module: {
        loaders: [
            //eslint loader
            {
                //make sure we lint before we transform code
                enforce: "pre",
                //only test js and jsx files
                test: [/\.js$/, /\.jsx$/],
                //only include files in the client directory (so we don't compile our node modules or server side code)
                include: APP_DIR,
                loader: 'eslint-loader',
            },
            //Babel javascript loader, convert jsx or js files to es5 javascript
            {
                //only test js and jsx files
                test: [/\.js$/, /\.jsx$/],
                //only include files in the client directory (so we don't compile our node modules or server side code)
                include: APP_DIR,
                loader: 'babel-loader',
                query: {
                    //use es6 and or jsx syntax
                    presets: ['react', 'es2015'],
                    // makes output more concise
                    plugins: ['transform-runtime'],
                }
            },

          //CSS loader: Allows you to import CSS and SASS files. This version runs postcss to add vendor prefixes and uses the CSS module pattern. We also run the extract text plugin to bundle the css into its own single file
          //
          //More information about the CSS Module pattern can be found:
          //https://glenmaddern.com/articles/css-modules
          //https://github.com/css-modules/css-modules
            {
                test: [/\.css$/, /\.scss$/, /\.sass$/],
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader!postcss-loader'
                })
            },

            //Loader for .png and .jpg files
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=./public/images/[hash].[ext]'
            }
        ]
    },

    // Set where we are going to extract the css bundle
    plugins: [
        new ExtractTextPlugin("./public/stylesheets/styles.css"),
        new webpack.LoaderOptionsPlugin({
         options: {
           // configure the postcss loader to user autoprefixer
           postcss: [ autoprefixer({ browsers:['last 2 versions'] }) ]
         }
       })
    ],

    resolve: {
        // look for modules in node_modules and the client directory for imports
        modules: [
          path.join(__dirname, ''),
          'node_modules',
          'client'
        ],
        // resolve below file types
        extensions: ['.js', '.jsx', 'css']
    }

}
