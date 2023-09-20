import { TwitchClient } from "../types/TwitchClient";

module.exports = {
    name: 'help',
    description: 'Help command',
    execute(message: string, channel: string, tags: ChatUserstate, self: boolean, client: TwitchClient) {
        client.say(channel, client.localizator.__('commandHelp'));
    }
}