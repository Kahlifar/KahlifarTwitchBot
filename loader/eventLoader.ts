import fs from 'fs';
import { TmiClient } from '../types/TmiClient';

// Function to load events from the events directory
export function loadEvents(client: TmiClient) {
  const eventFiles = fs.readdirSync(`${process.cwd()}/events`).filter(file => file.endsWith('.ts'));
  
  for (const file of eventFiles) {

    const event = require(`${process.cwd()}/events/${file}`);
    
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client));
    } else {
      client.on(event.name, (...args) => event.execute(...args, client));
    }
  }
}