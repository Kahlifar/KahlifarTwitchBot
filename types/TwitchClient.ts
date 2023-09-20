import { I18n } from 'i18n';
import { Timer } from './Timer';
import { ChatClient } from '@twurple/chat';
import { AppTokenAuthProvider } from '@twurple/auth';
import { AuthProvider } from '@twurple/auth';
import { ApiClient } from '@twurple/api';
import { loadEvents } from '../loader/eventLoader';

// Define a new class that extends the tmi.js Client class
export class TwitchClient {
    config: any;
    commands: Map<String, any>;
    localizator: I18n;
    timers: Map<String, Timer>;

    authProvider: AuthProvider;

    apiClient: ApiClient;

    chatClient: ChatClient;

    // apiClient:
    constructor() {
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
        // console.log(process.env.TWITCH_CLIENT_ID, process.env.TWITCH_CLIENT_SECRET);
        this.authProvider = new AppTokenAuthProvider(process.env.TWITCH_CLIENT_ID as any, process.env.TWITCH_CLIENT_SECRET as any);
        console.log(this.authProvider);
        this.apiClient = new ApiClient({ authProvider: this.authProvider });
        this.chatClient = new ChatClient({
            channels: [this.config.channel],
            // authProvider: this.authProvider,
        });
    }

    connect() {
        console.log('Connecting to Twitch...');
        this.chatClient.connect();

        console.info(`Loading Events...`);
        loadEvents(this);
    }

    disconnect() {
        this.chatClient.quit();
    }
}