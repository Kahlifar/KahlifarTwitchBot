import { ChatUserstate } from "tmi.js";
import { TmiClient } from "../types/TmiClient";
module.exports = {
    name: 'hello',
    description: 'Says hello!',
    execute(message: string, channel: string, tags: ChatUserstate, self: boolean, client: TmiClient) {
        client.say(channel, `Hey @${tags.username}, glad you found the way!`);
    }
}