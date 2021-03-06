import { EventEmitter } from 'events';

import { Connection } from './connection';
import { Record } from './record';
import { Channel } from './channel';
import { Topic } from './topic';

export interface StreamingMessage {
    event: {
        type: object
        createdDate: any;
    };
    sobject: Record
}

export class Streaming extends EventEmitter {
    constructor(connection: Connection);

    channel(channelId: string): Channel;
    subscribe(name: string, listener: StreamingMessage): any; // Faye Subscription
    topic(namne: string): Topic;
    unsubscribe(name: string, listener: StreamingMessage): Streaming;
}
