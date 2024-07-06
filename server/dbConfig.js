// mongodb+srv://admin:<password>@cluster0.s5rkin0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// what's the password

import mongoose from 'mongoose';

export async function connect() {
    try {
        const res = await mongoose.connect(
          "mongodb+srv://admin:123@cluster0.s5rkin0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("DB Connected >>>");
    } catch (err) {
        console.log(err);
    }
}

connect();
