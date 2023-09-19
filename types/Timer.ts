import { TmiClient } from "./TmiClient";
import Timeout = NodeJS.Timeout;

export class Timer {
    name: string;
    interval: number;
    callback: Function;

    intervalId: Timeout | number | null = null;

    constructor(name: string, interval: number, callback: Function) {
        this.name = name;
        this.interval = interval;
        this.callback = callback;
    }

    start(client: TmiClient) {
        this.intervalId = setInterval(() => this.callback(client), this.interval * 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}