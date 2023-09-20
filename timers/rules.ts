import { Timer } from "../types/Timer";
import { TwitchClient } from "../types/TwitchClient";


module.exports = new Timer(
    'rules',
    5 * 60,
    0,
    (client: TwitchClient) => {
        client.say(client.config.channel, client.localizator.__('rules'));
    }
)
