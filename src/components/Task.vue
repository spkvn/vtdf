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
				<button class="button" v-if="!timerRunning" @click="startTimer(activeTask.id)">
					Start Timer
				</button>
				<button class="is-danger button" 
					 	v-if="timerRunning" @click="stopTimer(activeTask.id)">
					Stop Timer
				</button>
				<table class="table">
					<thead>
						<tr>
							<th>Index</th>
							<th>Started</th>
							<th>Stopped</th>
							<th>Elapsed</th>
						</tr>
					</thead>
						<tbody>
							<tr v-for="entry in timeEntries">
								<td>{{entry.id}}</td>
								<td>{{entry.started}}</td>
								<td>{{entry.stopped}}</td>
								<td>{{elapsed(entry.started, entry.stopped)}}</td>
							</tr>
							<tr v-if="timeEntries.length == 0">
								<td></td>
								<td>No Entries</td>
								<td></td>
							</tr>
						</tbody>
				</table>
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
				timeEntries: [], 
				currentEntry: {},
				createForm : true,
				timerRunning: false
			}
		},
		computed:{
			
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
			elapsed(start, stop){
				if(stop !== null){
					var startDate = Date.parse(start);

					var stopDate  = Date.parse(stop);
					
					var hours = Math.round(Math.abs(startDate - stopDate) / (1000*60*60));
					if(hours > 0){
						return hours + " Hours";
					} else {
						return Math.round(Math.abs(startDate - stopDate) / (1000*60)) +" Mins";
					}	
				}else { 
					return "";
				}
			},
			selectTask(task){
				this.activeTask = task;
				this.createForm = false;
				this.fetchEntries(task.id)
			},
			fetchEntries(taskId){
				axios.post("http://back.vuetodo.com/api/tasks/entries",{task_id : taskId}, {
					headers:{'Authorization' : 'Bearer ' + window.user.token}
				}).then(function(response){
					this.timeEntries = response.data;
					for(var i = 0; i < Object.keys(this.timeEntries).length; i++){
						if(this.timeEntries[i].stopped == null){
							this.timerRunning = true;
						}
					}
				}.bind(this)).catch(function(err){
					console.log(err);
				});
			},
			startTimer(taskId){
				axios.post("http://back.vuetodo.com/api/tasks/entries/create",
					{task_id: taskId, startTime: new Date().toISOString().slice(0, 19).replace('T', ' ')},
					{headers:{'Authorization' : 'Bearer ' + window.user.token}}
				).then(function(response){
					this.timerRunning = true;
					this.fetchEntries(taskId);
				}.bind(this)).catch(function(error){
					console.log(error);
				});
			},
			stopTimer(taskId){
				axios.post("http://back.vuetodo.com/api/tasks/entries/stop",
					{task_id: taskId, stopTime: new Date().toISOString().slice(0, 19).replace('T', ' ')},
					{headers:{'Authorization' : 'Bearer ' + window.user.token}}
				).then(function(response){
					this.timerRunning = false;
					this.fetchEntries(taskId);
				}.bind(this)).catch(function(errors){
					console.log(errors);
				});
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