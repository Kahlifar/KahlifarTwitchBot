import { Timer } from "../types/Timer";
import { TmiClient } from "../types/TmiClient";


module.exports = new Timer(
    'rules',
    5 * 60,
    0,
    (client: TmiClient) => {
        client.say(client.config.channel, client.localizator.__('rules'));
    }
)
