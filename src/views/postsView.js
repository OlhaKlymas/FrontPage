export default{
		data() {
		    return {
		    	posts: []
		    }
		},
		methods:{
			init: function(url = 'https://jsonplaceholder.typicode.com/posts'){
			  return fetch(url)
			  .then(response => response.json())
			  .then(json => this.posts = json);
			 	let div = document.getElementsByClassName('posts');
      			let classes = ['success', 'info', 'error', 'warning'];
      			let classDiv = Math.floor(Math.random() + classes.length);
     			for (var i = 0; div.length > i; i++) {
      			div[i].classList.add(classes[classDiv]);
				}
			}	
		},
		created: function(){
			this.init()
		}
	}