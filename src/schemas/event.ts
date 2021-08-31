import { Schema, model, Document } from "mongoose";
import bcrypt from 'bcrypt';

interface EventInterface extends Document{
    ownerId: string,
    isPublic: boolean,
    title: string,
    description: string,
    startDate: {
        day: number,
        month: number,
        year: number,
        hours: number,
        minutes: number
    },
    endDate: {
        day: number,
        month: number,
        year: number,
        hours: number,
        minutes: number
    },
    images: {
        eventBackgroundImage: string
    },
    speakers: [
        {
            name: string,
            cargo: string,
            about: string,
            company: string,
            avatar: string
        }
    ]
}

const EventSchema = new Schema<EventInterface>({
    ownerId: {type: String, required: true},
    isPublic: {type: Boolean, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    startDate: {
        day: {type: Number, required: true},
        month: {type: Number, required: true},
        year: {type: Number, required: true},
        hours: {type: Number, required: true},
        minutes: {type: Number, required: true}
    },
    endDate: {
        day: {type: Number, required: true},
        month: {type: Number, required: true},
        year: {type: Number, required: true},
        hours: {type: Number, required: true},
        minutes: {type: Number, required: true}
    },
    images: {
        eventBackgroundImage: {type:String, default: ''}
    },
    speakers: [{default: []}]
})

export default model<EventInterface>('event', EventSchema);