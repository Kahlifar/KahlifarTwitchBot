import { ChatUserstate } from 'tmi.js';
import { TmiClient } from '../types/TmiClient';

module.exports = {
    name: 'message',
    once: false,
    execute(channel: string, user: ChatUserstate, message: string, self: boolean, client: TmiClient) {
    }
}