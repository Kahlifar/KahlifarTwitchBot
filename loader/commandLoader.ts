import fs from 'fs'
import { TwitchClient } from '../types/TwitchClient';
// Function to load commands from the commands directory
export function loadCommands(client: TwitchClient) {
  const commandFiles = fs.readdirSync(`${process.cwd()}/commands`).filter(file => file.endsWith('.ts'));
  for (const file of commandFiles) {
    const command = require(`${process.cwd()}/commands/${file}`);
    client.commands.set(command.name, command);
  }
}