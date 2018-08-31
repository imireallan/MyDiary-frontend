const path = require("path");

module.exports = {

    mode: "development",

    // define entry points
    entry: {
        app: "./src/js/main.js",
        signup: "./src/js/signup.js",
        signin: "./src/js/signin.js",
        dashboard: "./src/js/dashboard.js",
        addEntry: "./src/js/addEntry.js",
        contents: "./src/js/contents.js"

    },
    // define output point
    output:{
        path: path.resolve(__dirname, "src/dist"),
        filename: "[name].min.js",
    },
    module: {
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            use:[{
                loader:"babel-loader",
                options:{
                    presets:["env"]
                }
            }]
        },
        {
            test:/\.css$/,
            use:[
                "style-loader",
                "css-loader"
            ]
        },
        {
            test:/\.(jpg | png)$/,
            use:[
                "file-loader",
                {
                    loader: "image-webpack-loader",
                    options:{
                        name:"[name].[ext]",
                        outputPath:"/img/",
                        publicPath:"/img/"
                    }
                }
                
            ]
        }
]
    }
}