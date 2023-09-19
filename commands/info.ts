import { ChatUserstate } from 'tmi.js';
import { TmiClient } from '../types/TmiClient';
module.exports = {
    name: 'info',
    description: 'Info about the bot',
    execute(message: string, channel: string, tags: ChatUserstate, self: boolean, client: TmiClient) {
        client.say(channel, client.localizator.__('commandInfo'));
    }
}