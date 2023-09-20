import { Timer } from '../types/Timer';
import { TwitchClient } from '../types/TwitchClient';

module.exports = new Timer(
    'socials',
    5 * 60,
    2.5 * 60,
    (client: TwitchClient) => {
        console.log('socials');
        client.say(client.config.channel, client.localizator.__('commandSocials'));
    });