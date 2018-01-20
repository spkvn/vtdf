<template>
	<div class="container has-text-centered">
		<div class="columns">
			<div class="column is-half is-offset-one-quarter">
				<h1 class="title">
					VueToDo
				</h1>
				<h2 class="subtitle">
					Log In
				</h2>
				<div class="column is-half is-offset-one-quarter">
					<label class="label" for="email">Email:</label>
					<input class="input" type="email" name="email" v-model="email" placeholder="email@sp.com">
					<label class="label" for="password">Password:</label>
					<input class="input" type="password" name="password" v-model="password" placeholder="skdjfglskjdgf">	
				</div>
				<button class="button is-primary" @click='submit'>Log In</button>
			</div>
		</div>		
	</div>
</template>

<script>
export default {
	data(){
		return{
			email : "", 
			password : ""
		}
	},
	methods : {
		submit () {
			axios.post("http://back.vuetodo.com/api/login",{
				"email" : this.email,
				"password" : this.password
			})
			.then(function(response){
				this.saveUser(response.data.data);
				this.$router.push('/tasks');
			}.bind(this)).catch(function(err){
				console.log("Failure");
				console.log(err);
			})
		},
		saveUser (data) {
			window.user = {
				name  : data.name,
				id    : data.id,
				email : data.email,
				token : data.api_token,
			}
		}
	}
}
</script>
<style>
.label{
	color:white;
}
</style>