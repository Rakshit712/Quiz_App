import mongoose from 'mongoose';

const quest = mongoose.Schema({
    question : {type : Array , default : []},
    answer :{ type: Array, default : []},
    createdAt : {  type : Date , default : new Date()}
})
const questModel = mongoose.model("question",quest);

export default questModel;
