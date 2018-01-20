<template>
	<div class="tile is-ancestor">
		<div class="tile is-8 is-parent">
			<article v-if="createForm" class="tile is-child notification">
				<h1 class="title is-gray">
					Create Form
				</h1>
				
			</article>
			<article v-if="!createForm" class="tile is-child notification">
				<h1 class="title is-gray">{{activeTask.name}}</h1>
				<p class="is-gray">
					{{activeTask.description}} 
				</p>
			</article>
		</div>
		<div class="tile is-vertical is-parent">
			<article class="tile is-child notification task-tile" @click="createForm = true">
				<nav class="level">
					<h1 class="title level-item has-text-centered is-gray">
						+
					</h1>
				</nav>
			</article>
			<article v-for="task in tasks" class="tile is-child notification task-tile" @click="selectTask(task)">

				<nav class="level" >
					<div class="level-left">
						<div class="level-item">
							<h1 class="title is-gray">
								{{task.name.substring(0,15)}}
							</h1>			
						</div>
					</div>
					<div class="level-right">
						<div class="level-item">
							<p class="subtitle is-gray">
								{{task.id}}
							</p>		
						</div>
					</div>
				</nav>
				<p class="is-gray">
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
				activeTask : {},
				createForm : true
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
		},
		methods : {
			selectTask(task){
				this.activeTask = task;
				this.createForm = false;
			}
		}
	}
</script>

<style>
.is-gray{
	color:gray !important;
}
article.task-tile:hover{
	background:#DCDCDC !important;
}
</style>