import mongoose, { Callback } from 'mongoose';

interface ConnectOptions extends mongoose.ConnectOptions {
    useUnifiedTopology: boolean,
    useNewUrlParser: boolean
}

const MONGO_OPTIONS: ConnectOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

const MONGO_HOST: string = 'mongodb://localhost:27017/plataforma-netglobe';

export function mongoConnect(): void {
    mongoose
        .connect(MONGO_HOST, MONGO_OPTIONS)
        .then(() => {
            console.log('mongo connected')
        })
        .catch((err) => {
            console.log(err)
        })
        
}