const path = require('path')
//在内存中,指定模板页面,在内存中生成一份,并把打包好的bundle.js 注入到页面底部中
const htmlWebpackPlugin = require('html-webpack-plugin')

//在 vue-loader 中,15的版本号后,都需要引入 vue-loader 里面的插件

const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    //入口文件
    entry: path.join(__dirname,'./src/main.js'),
    //输出文件
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    //文件标明是在生成阶段
    mode:'development',
    plugins:[
        //所有插件的配置节点
        new htmlWebpackPlugin({
            //指定模板文件
            template: path.join(__dirname,'./src/index.html'),
            //指定在内存中生成页面的名称
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            // 匹配 css 文件
            { test:/\.css$/,use:['style-loader','css-loader']},
            //匹配 less 文件
            { test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //匹配 scss 文件
            { test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            // 匹配图片格式
            { test:/\.(png|jpg|jpeg)$/,use:'url-loader?limit=9000&name=[hash:8]-[name]-[ext]'},
            // 匹配高级 js 语法 排除正常语法
            { test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            //匹配vue文件
            { test:/\.vue$/,use:'vue-loader'},
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
        ]
    },
    resolve:{
        alias:{
            // "vue$":"vue/dist/vue.js"
        }
    }
}