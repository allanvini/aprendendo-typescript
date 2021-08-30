import { Schema } from "mongoose";
import bcrypt from 'bcrypt';

const ClientSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    events: [
        {
            title: { type: String, required: true },
            description: { type: String, required: true },
            startDate: {
                day: { type: Number, required: true },
                month: { type: Number, required: true },
                year: { type: Number, required: true },
                hours: { type: Number, required: true },
                minutes: { type: Number, required: true }
            },
            endDate: {
                day: { type: Number, required: true },
                month: { type: Number, required: true },
                year: { type: Number, required: true },
                hours: { type: Number, required: true },
                minutes: { type: Number, required: true }
            },
            images: {
                eventBackgroundImage: {type: String, default: ''}
            }
        }
    ]
})
