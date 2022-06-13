import { model, Schema } from "mongoose"

const BookSchema=new Schema({
    title: {
        type: String,
        required: [true, "El titulo es requerido"],

    },
    autores:{
        type: Array,
        required: [true, "El/los autor/es es requerido"],
    },
    paginas: {
        type:String,
    },
    portada: {
        type:String,
        required: [true, "La portada es requerida"],
    },
    genero: {
        type:String,
        required: [true, "El genero es requerido"],
    },
    estado: {
        type:Boolean,
        default: true,
    }
})
BookSchema.methods.toJSON = function(){
    const {__v,...usuario}=this.toObject();
    return usuario;
}
export default model('book', BookSchema)