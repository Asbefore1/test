const path=require('path');
//HtmlWebpackPlugin相当于一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//导出配置
module.exports={
	//模式
	mode:'development',
	//指定入口文件,名字是自己取的
	entry:'./src/index.js',
	//指定出口文件
	output:{
		//出口文件名称
		// filename:'bundle.js',
		filename:'bundle.js',
		//指定文件存储路径
		path:path.resolve(__dirname,'dist')
	},
	//配置loader
	module: {
	    rules: [
	      	{
		        test: /\.css$/,
		        use: [
		          'style-loader',
		          'css-loader'
		        ]
	      	},
	      	{
		        test:/\.(png|jpg|gif)$/,
		        use:[
		          'url-loader'
		        ]
	      	},
	      	//添加webpack配置babel
	      	{
		        test:/\.js$/,
		        exclude: /(node_modules)/,
		        use: {
		            loader: 'babel-loader',
		            options: {
		                presets: ['env', 'react'],
		                //按需加载
				        plugins: [
						    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
						] 
		            }
		        }		                     
        	}
	    ]
  	},
  	plugins: [
  		//new了一个实例对象
  		//配置html
    	new HtmlWebpackPlugin({
    		//配置的文件(需要自己建)
    		template: './src/index.html',
    		//在dist中打包好的文件的名字,可以自己命名
    		filename:'index.html',
    		
    		inject:true,
    		
    		//hash给生成的js/css文件添加一个唯一的hash
    		hash:true
    	}),
    	//刪除多余的文件夹
    	new CleanWebpackPlugin(['dist'])
  	],
  	//自动打开页面,每次不用刷新,会自动更新, npm start 启动
  	devServer:{
  		contentBase:'./dist',
  		port:3000
  	}
}

