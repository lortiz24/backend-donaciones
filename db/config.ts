import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://donaciones:VrR4IJd7bPGGURhY@cluster0.pmj9moh.mongodb.net/?retryWrites=true&w=majority');
        console.log('Database online')
    } catch (error:any) {
        throw new Error(error.toString());
    }
}