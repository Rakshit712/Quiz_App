import express from 'express';

const router = express.Router();

import {
    getUser,
    storeUser,
    getQuestions,
    insertQuestions,
    dropQuestions,
    getResult,
    storeResult,
    dropResult
  } from '../controller/controller.js';



router.get("/questions",getQuestions );
router.post("/questions",insertQuestions);
router.delete( "/questions" , dropQuestions) ;



router.get("/result", getResult ) 
router.post('/result', storeResult);
router.delete('/result', dropResult)


router.get("/user", getUser ) 
router.post('/user', storeUser);


export default router;