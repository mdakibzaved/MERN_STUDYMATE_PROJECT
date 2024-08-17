import mongoose from "mongoose";

// Creating Schema
const bookSchema = mongoose.Schema({
    name:String,
    price:String,
    category:String,
    image :String,
    titile:String

})
const Book = mongoose.model("Book",bookSchema)

export default Book;


