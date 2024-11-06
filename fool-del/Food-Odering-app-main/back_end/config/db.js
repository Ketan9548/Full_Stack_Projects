import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kapilchauhan221999:9EEtv6HZs89H1VTr@food1.muaansa.mongodb.net/?retryWrites=true&w=majority&appName=Food1').then(()=>console.log("DB Connected"))
}
