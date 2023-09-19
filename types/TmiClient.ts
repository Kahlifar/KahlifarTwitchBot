import { I18n } from 'i18n';
import { Client } from 'tmi.js';
import { Timer } from './Timer';
// Define a new class that extends the tmi.js Client class
export class TmiClient extends Client {
    config: any;
    commands: Map<String, any>;
    localizator: I18n;
    timers: Map<String, Timer>;
    constructor() {
        super({
            options: { 
                debug: false, 
            },
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

        this.config = require(`${process.cwd()}/properties.json`);
        this.commands = new Map();
        this.timers = new Map();
        this.localizator = new I18n({
            locales: ['de', 'en'],
            directory: './locales',
            defaultLocale: 'en',
            objectNotation: true,
            register: global,
            updateFiles: false,
            indent: '  ',
            extension: '.json'
        });
    }
}