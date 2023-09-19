import { ChatUserstate } from "tmi.js";
import { TmiClient } from "../types/TmiClient";

module.exports = {
    name: 'socials',
    description: 'List all socials',
    execute(message: string, channel: string, tags: ChatUserstate, self: boolean, client: TmiClient) {
        client.say(channel, client.localizator.__('commandSocials'));
    }
}
