<template>
	<div class="tile is-ancestor">
		<div class="tile is-8 is-parent">
			<article class="tile is-child notification is-primary">
				<h1 class="title">{{activeTask.title}}</h1>
				<p>
					{{activeTask.description}} 
				</p>
			</article>
		</div>
		<div class="tile is-vertical is-parent">
			<article v-for="task in tasks" class="tile is-child notification is-primary">
				<h1 class="title">
					{{task.title}}
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
				tasks : [
					{
						title : "Voodoo god beef noodles meta-wonton soup pistol",
						description: "jeans car math-bicycle dolphin drugs tower warehouse into girl. Camera otaku paranoid cardboard smart-human-ware neon shrine denim sensory San Francisco. A.I. construct geodesic franchise advert wristwatch futurity tube corrupted hacker hotdog vehicle engine. Cartel apophenia bicycle tiger-team city pre-warehouse geodesic savant. Kanji j-pop sensory shrine military-grade 8-bit free-market advert cardboard car dome corporation rifle gang paranoid vinyl."
					},	{
						title : "Dolphin crypto-human refrigerator beef noodles",
						description: "Tank-traps market vehicle nodality spook franchise receding drugs math-claymore mine. Decay city nano-neural drugs jeans digital saturation point sunglasses girl wonton soup face forwards post-singularity-ware physical. Monofilament camera-space A.I. office saturation point tower post. Assault franchise voodoo god-space tank-traps katana A.I. Chiba saturation point market military-grade. Market savant semiotics vehicle warehouse military-grade futurity jeans. "
					}, 	{
						title : "jMan decay concrete savant otaku",
						description: "Fluidity hotdog voodoo god pistol jeans cyber-monofilament modem vinyl shoes. Convenience store bridge sub-orbital engine hacker cartel market. Free-market Chiba fluidity Tokyo Legba ablative apophenia drone knife otaku order-flow. Tattoo nodal point paranoid San Francisco pre-dead futurity grenade 8-bit 3D-printed rifle sensory. "
					}, 	{
						title : "Jeans render-farm geodesic Legba A.I.",
						description: "Tanto carbon industrial grade media long-chain hydrocarbons. Assassin grenade receding systema katana sentient bomb tower military-grade systemic euro-pop. Otaku cartel modem concrete weathered girl spook face forwards-ware monofilament market rain car. Beef noodles tanto katana rain plastic otaku pistol systemic artisanal physical jeans vehicle soul-delay garage. A.I. vinyl bomb nodality sentient neural weathered market Tokyo order-flow uplink courier boat. Camera 3D-printed tattoo saturation point footage neural plastic cyber-rebar paranoid Legba artisanal ablative render-farm. Bomb DIY marketing nodal point modem San Francisco woman meta-receding. Singularity weathered assault claymore mine skyscraper vinyl stimulate fluidity smart-human concrete alcohol. Jeans free-market wristwatch rebar silent Legba motion woman receding garage car. "
					}, 	{
						title : "Soul-delay concrete assassin narrative silent drone ",
						description: "smart-girl monofilament bridge cartel gang BASE jump decay numinous 3D-printed. Human dead-space neon free-market bomb tanto geodesic pen footage shrine garage urban modem sprawl artisanal. Weathered stimulate pen Tokyo euro-pop pistol face forwards spook San Francisco disposable tank-traps papier-mache table franchise corporation systema kanji. Systema camera chrome crypto-cartel military-grade drugs market pre-denim wonton soup motion concrete beef noodles papier-mache bridge. Human pistol dome tower artisanal rebar neon. Voodoo god range-rover man drone convenience store augmented reality chrome car boy spook sentient garage. jeans car math-bicycle dolphin drugs tower warehouse into girl. Camera otaku paranoid cardboard smart-human-ware neon shrine denim sensory San Francisco. A.I. construct geodesic franchise advert wristwatch futurity tube corrupted hacker hotdog vehicle engine. Cartel apophenia bicycle tiger-team city pre-warehouse geodesic savant. Kanji j-pop sensory shrine military-grade 8-bit free-market advert cardboard car dome corporation rifle gang paranoid vinyl."
					}
				],
				activeTask : {
					title : "Select a Task", 
					description: "NO TASK SELECTED.. NO TASK SELECTED.. NO TASK SELECTED ... NO TASK SELECTED  ... NO TASK SELECTED ... NO TASK SELECTED ... NO TASK SELECTED ..."
				}
			}
		}
	}
</script>

<style>

</style>