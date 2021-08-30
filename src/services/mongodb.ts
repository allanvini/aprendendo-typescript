import mongoose, { Callback } from 'mongoose';

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

const MONGO_HOST: string = 'mongodb://localhost:27017/plataforma-netglobe';

mongoose.connect(MONGO_HOST, MONGO_OPTIONS)