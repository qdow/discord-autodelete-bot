import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName('autodelete')
    .setDescription('Turns autodelete on or off')
    .addStringOption(option =>
        option.setName('onoff')
            .setRequired(true)
            .setDescription('Choose on or off')
            .addChoices(
                { name: 'on', value: 'on' },
                {name: 'off', value: 'off'}
            ));

export async function execute(interaction) {
    var status = interaction.options.getString('onoff');
    interaction.reply(`autodelete is now ${status}`)
    if (status == 'on') {
        return true;
    } else if (status == 'off') {
        return false;
    }

}

  