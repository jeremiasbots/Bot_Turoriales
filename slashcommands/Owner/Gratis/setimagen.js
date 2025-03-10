module.exports = {
	name: "setimagen", //Nombre del comando
	description: "Ponga una imagen animada", //Descripción del comando
	options: [
		{
			name: "imagen",
			description: "Selecciona la imagen",
			type: 11,
			required: true,
		},
	],

	async execute(client, interaction) {
		const owner = "991412175203733584";
		if (interaction.user.id !== owner) {
			return interaction.reply({
				content: "No tienes los permisos requeridos, para usar este comando",
			});
		}

		const avatar = interaction.options.getAttachment("imagen");

		await client.user.setAvatar(avatar.url);

		interaction.reply({ content: "La imagen ha sido cargada con exito" });
	},
};

/*
╔═══════════════════════════════════════════════════╗
║  || - ||   Código por ALDA#8939/el_alda   || - |  ║
║     --|   https://discord.gg/JpKGJFZCzK    |--    ║
╚═══════════════════════════════════════════════════╝
*/
