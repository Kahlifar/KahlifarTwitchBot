import { ChatUserstate } from "tmi.js";
import { TwitchClient } from "../types/TwitchClient";

module.exports = {
    name: 'socials',
    description: 'List all socials',
    execute(message: string, channel: string, tags: ChatUserstate, self: boolean, client: TwitchClient) {
        client.say(channel, client.localizator.__('commandSocials'));
    }
}
