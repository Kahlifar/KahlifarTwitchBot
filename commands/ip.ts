import { ChatUserstate } from 'tmi.js';
import { TmiClient } from '../types/TmiClient';

module.exports = {
    name: 'ip',
    description: 'Says the IP of the server!',
    execute(message: string, channel: string, tags: ChatUserstate, self: boolean, client: TmiClient) {
        client.say(channel, `The IP of the server is ${client.config.serverIP}`);
    }
}
