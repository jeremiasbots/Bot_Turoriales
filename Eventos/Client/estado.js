const { ActivityType } = require("discord.js")

module.exports = {
	name: "ready",
	once: true,

	async execute(client, interaction){

		console.log("» | Estado cargado con exito")

		let statusarray = [
		
		{
			name: "Jugando",
			type: ActivityType.Listening,
			status: "idle"
		},
		{
			name: "Jugando 1,2, 3",
			type: ActivityType.Listening,
			status: "idle"
		}
		]

		setInterval(() => {
			const option = Math.floor(Math.random() * statusarray.length)

			client.user.setPresence({
				activities:
				[{
					name: statusarray[option].name,
					type: statusarray[option].type,
					url: statusarray[option].url
				}],
				status: statusarray[option].status
			})
		},5000)//5000 = 5 segundos | 10000 = 10 segundos
	}
}