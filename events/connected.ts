import { loadTimer } from '../loader/timersLoader'
import { TmiClient } from '../types/TmiClient'

module.exports = {
    name: 'connected',
    once: true,
    execute(host: string, port: Number, client: TmiClient) {
        // Log: ORANGE username, BLUE logged in to, LIGHTGREY host:port BLUE and listening on ORANGE channelamount BLUE channels
        loadTimer(client)
        console.info(`\x1b[33m${client.getUsername()}\x1b[34m, logged in to\x1b[0m \x1b[37m${host}:${port}\x1b[34m and listening on\x1b[0m \x1b[33m${client.getOptions().channels?.length}\x1b[34m channels\x1b[0m`)
    },
}