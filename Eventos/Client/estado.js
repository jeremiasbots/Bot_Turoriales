const { ActivityType } = require("discord.js");
const mongoose = require("mongoose");

module.exports = {
	name: "ready",
	once: true,

	async execute(client) {
		await mongoose
			.connect(process.env.MONGODB, {})
			.then(() => {
				console.log("» | Conectado a la base de datos".green);
			})
			.catch(() => {
				console.log("» | No se puede conectar a la base de datos".red);
			});

		console.log("» | Estado cargado con exito".cyan);

		const statusarray = [
			{
				name: "Jugando",
				type: ActivityType.Listening,
				status: "idle",
			},
			{
				name: "Jugando 1,2, 3",
				type: ActivityType.Listening,
				status: "idle",
			},
		];

		setInterval(() => {
			const option = Math.floor(Math.random() * statusarray.length);

			client.user.setPresence({
				activities: [
					{
						name: statusarray[option].name,
						type: statusarray[option].type,
						url: statusarray[option].url,
					},
				],
				status: statusarray[option].status,
			});
		}, 5000); //5000 = 5 segundos | 10000 = 10 segundos
	},
};

/*
╔═══════════════════════════════════════════════════╗
║  || - ||   Código por ALDA#8939/el_alda   || - |  ║
║     --|   https://discord.gg/JpKGJFZCzK    |--    ║
╚═══════════════════════════════════════════════════╝
*/
