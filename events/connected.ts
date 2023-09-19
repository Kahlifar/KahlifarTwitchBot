import { TmiClient } from '../types/TmiClient'

module.exports = {
    name: 'connected',
    once: true,
    execute(client: TmiClient) {
        console.log(`Connected to kahlifar's channel`);
    },
}