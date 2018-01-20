<template>
	<div class="tile is-ancestor">
		<div class="tile is-8 is-parent">
			<article class="tile is-child notification is-white">
				<h1 class="title">{{activeTask.title}}</h1>
				<p>
					{{activeTask.description}} 
				</p>
			</article>
		</div>
		<div class="tile is-vertical is-parent">
			<article v-for="task in tasks" class="tile is-child notification is-white">
				<h1 class="title">
					{{task.name}}
				</h1>
				<p class="subtitle">
					{{task.description}}
				</p>
			</article>
		</div>
	</div>
</template>

<script>
	export default { 
		data(){
			return {
				tasks : [],
				activeTask : {}
			}
		},
		mounted(){
			//get all user tasks
			if(window.hasOwnProperty('user')){
				axios.get("http://back.vuetodo.com/api/tasks",{
					headers : {
						'Authorization' : 'Bearer ' + window.user.token
					}, 
					params : { 'user' : window.user.id }
				}).then(function(response){
					this.tasks = response.data;
				}.bind(this)).catch(function(err){
					console.log(err);	
				});	
			} else { 
				this.$router.push('/');
			}
		}
	}
</script>

<style>
.is-white > *{
	color:gray !important;
}
</style>