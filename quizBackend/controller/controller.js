


import questModel from "../model/ques.js";
import resultModel from "../model/result.js";
import userModel from "../model/user.js";
import questions, { answers } from '../data/data.js'

export async function getQuestions(req, res){
    try {
        const q = await questModel.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

export async function insertQuestions(req, res){
    try {
        questModel.insertMany({ questions, answers }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}


export async function dropQuestions(req, res){
    try {
         await questModel.deleteMany();
         res.json({ msg: "Questions Deleted Successfully...!"});
    } catch (error) {
         res.json({ error })
    }
 }



 export async function getResult(req, res){
    try {
        const r = await resultModel.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}


export async function storeResult(req, res){
    try {
         const { username, result, attempts, points, achived } = req.body;
         if(!username && !result) throw new Error('Data Not Provided...!');
 
         resultModel.create({ username, result, attempts, points, achived }, function(err, data){
             res.json({ msg : "Result Saved Successfully...!"})
         })
 
    } catch (error) {
         res.json({error})
    }
 }


 export async function dropResult(req, res){
    try {
        await resultModel.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

export async function getUser(req, res){
    try {
        const q = await userModel.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

export async function storeUser(req, res){
    try {
        userModel.insertMany({ email, password }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}