import fs from 'fs'
import { TwitchClient } from '../types/TwitchClient';
import { Timer } from '../types/Timer';
// Function to load commands from the commands directory
export function loadTimer(client: TwitchClient) {
  const timerFiles = fs.readdirSync(`${process.cwd()}/timers`).filter(file => file.endsWith('.ts'));
  for (const file of timerFiles) {
    const timer: Timer = require(`${process.cwd()}/timers/${file}`);
    client.timers.set(timer.name, timer);
    timer.start(client);
  }
}