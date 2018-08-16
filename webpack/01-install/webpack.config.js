const path=require('path');

module.exports={
	mode:'development',
	//指定入口文件
	// entry:'./src/index.js',
	entry:{
		common:'./src/common/data/common.js',
		index:'./src/index/index.js'
	},
	//指定出口文件
	output:{
		//出口文件名称
		// filename:'bundle.js',

		//hash一样,但每次执行时不一样,chunkhash每次不一样,两者不能同时使用
		filename:'[name].[chunkhash].bundle.js',
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
	      }
	    ]
  	}
}

