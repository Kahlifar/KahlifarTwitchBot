import { Timer } from '../types/Timer';
import { TmiClient } from '../types/TmiClient';

module.exports = new Timer(
    'socials',
    5 * 60,
    (client: TmiClient) => {
        console.log('socials');
        client.say(client.config.channel, client.localizator.__('commandSocials'));
    });