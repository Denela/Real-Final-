const path = require("path");

// this object is what webpack is going to check when i run it
module.exports = {
    mode:"development",
     //this is the file i will start by using
    entry:path.resolve(__dirname, `src`, `app`),
     // this is kinda the path of what my app is going to become
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // the path in which my code expects to find the file bundle.js
        publicPath:'/'
    },
    resolve: {
        extensions : ['.js', '.jsx']
    },
    devServer:{
        historyApiFallback: true
    },
    // this puts out how i want the app to be compiled
    module: {
        rules: [{
             // the line below means any file with js or jsx extension matches the test
            test: /\.jsx?/,
            loader:'babel-loader'
        }]
    }
}