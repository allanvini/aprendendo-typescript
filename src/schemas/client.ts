import { Schema, model, Document } from "mongoose";
import bcrypt from 'bcrypt';

interface ClientInterface extends Document{
    name: string,
    email: string,
    password: string,
    events: string[],
    zoomCredentials: {
        zoomEmail: string,
        zoomJwtApiKey: string,
        zoomJwtApiSecret: string,
        zoomJwtToken: string
    },
    logo: string,
    colorSchema: {
        backgroundColor: string,
        menuColor: string,
        
    }
}

const ClientSchema = new Schema<ClientInterface>({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        events: [{default: []}],
        zoomCredentials: {
            zoomEmail: { type: String, required: true },
            zoomJwtApiKey: { type: String, required: true },
            zoomJwtApiSecret: { type: String, required: true },
            zoomJwtToken: { type: String, required: true }
        },
        logo: { type: String, default: '' }
    }, { timestamps: true }
)

export default model<ClientInterface>('client', ClientSchema);