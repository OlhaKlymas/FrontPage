module.exports = function(config){
	config.set({
		basePath : "./tests",
		frameworks : ['jasmine'],
		autoWatch : true,
		files : [
			{pattern:'./*.js'}
		]
	});
};