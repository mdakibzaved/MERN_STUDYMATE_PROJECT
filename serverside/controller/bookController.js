import Book from "../model/bookModel.js"

export const getBook = async(req,res)=>{
    try{
        const book = await Book.find()
        res.status(200).json(book)    //200 success code
    }catch(e){
        console.log("Err:" ,e)
        res.status(500).json(e)  //500 internal server error code
    }
}




