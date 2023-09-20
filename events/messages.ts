import { TwitchClient } from '../types/TwitchClient';

module.exports = {
    name: 'message',
    once: false,
    execute(channel: string, user: ChatUserstate, message: string, self: boolean, client: TwitchClient) {
    }
}