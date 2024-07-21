import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName('setdeletetime')
    .setDescription('Set time to autodelete in seconds')
    .addIntegerOption(option =>
        option.setName('time')
            .setDescription('time to autodelete (seconds)')
            .setRequired(true));

export async function execute(interaction) {
    console.log(`set delete time to ${interaction.options.getInteger('time')} seconds`);
    interaction.reply(`set delete time to ${interaction.options.getInteger('time')} seconds`);
    return interaction.options.getInteger('time');
}

    