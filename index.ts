import { Client } from "tmi.js";
import { TmiClient } from "./types/TmiClient";
import { loadEvents } from "./loader/eventLoader"; './loader/eventLoader';
import { loadCommands } from './loader/commandLoader';
import { I18n } from "i18n";
import dotenv from 'dotenv';

dotenv.config();
// Create an instance of your custom client
const client = new TmiClient();

// Load commands from the commands directory
loadCommands(client);

// Connect to Twitch
client.connect();

loadEvents(client);
console.info(`Loaded ${client.commands.size} commands!`);