import mongoose from 'mongoose';

const result = mongoose.Schema({
    username :{type: String},
    result :{ type: Array, default:[]},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})


const resultModel = mongoose.model("result",result);


export default resultModel;

