import { ChatUserstate } from 'tmi.js';
import { TwitchClient } from '../types/TwitchClient';

module.exports = {
    name: 'ip',
    description: 'Says the IP of the server!',
    execute(message: string, channel: string, tags: ChatUserstate, self: boolean, client: TwitchClient) {
        client.say(channel, `${client.localizator.__('commandIp')}`);
    }
}
