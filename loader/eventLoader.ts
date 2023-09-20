import fs from 'fs';
import { TwitchClient } from '../types/TwitchClient';

// Function to load events from the events directory
export function loadEvents(client: TwitchClient) {
  const eventFiles = fs.readdirSync(`${process.cwd()}/events`).filter(file => file.endsWith('.ts'));

  for (const file of eventFiles) {

    const event = require(`${process.cwd()}/events/${file}`);

    if (event.once) {
      client.once(event.name, (...args) => {
        event.execute(...args, client)
      });
    } else {
      client.on(event.name, (...args) => {
        event.execute(...args, client)
      });
    }
  }
}