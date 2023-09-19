import { ChatUserstate } from 'tmi.js';
import { TmiClient } from '../types/TmiClient';

module.exports = {
    name: 'message',
    once: false,
    execute(channel: string, user: ChatUserstate, message: string, self: boolean, client: TmiClient) {
        if (self) return; // Ignore messages from the bot itself
        const PREFIX = client.config.prefix;
        if (message.startsWith(PREFIX)) {
            const args: String[] = message.slice(PREFIX.length).trim().split(' ');
            if (args && args.length > 0) {
                const commandName: string | undefined = args.shift()?.toLowerCase();

                if (commandName) {
                    if (client.commands.has(commandName)) {
                        const command = client.commands.get(commandName);

                        // Execute the command
                        command.execute(message, channel, user, self, client);
                    }
                } else {
                    // Handle the case where commandName is undefined or empty
                    console.error('commandName is undefined or empty');
                }
            } else {
                // Handle the case where args is undefined or empty
                console.error('args is undefined or empty');
            }
        }
    }
}
