import { Client } from 'tmi.js';
// Define a new class that extends the tmi.js Client class
export class TmiClient extends Client {
    config: any;
    commands: Map<String, any>;
    constructor() {
        super({
            options: { debug: true },
            connection: {
                reconnect: true,
                secure: true
            },
            identity: {
                username: 'kahlifarbot',
                password: process.env.TWITCH_OAUTH_TOKEN
            },
            channels: ['kahlifar']
        });

        // Add your custom properties to the client instance
        this.config = require(`${process.cwd()}/properties.json`);
        this.commands = new Map();
    }
}