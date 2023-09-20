import { ChatUserstate } from 'tmi.js';
import { TwitchClient } from '../types/TwitchClient';
module.exports = {
    name: 'info',
    description: 'Info about the bot',
    execute(message: string, channel: string, tags: ChatUserstate, self: boolean, client: TwitchClient) {
        client.say(channel, client.localizator.__('commandInfo'));
    }
}