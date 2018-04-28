const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Question = require('../models/question');

router.post("/create", (req, res, next) => {
    let newQuestion = new Question({
        id: req.body.id,
        answer: req.body.answer,
        questionType: req.body.questionType,
        difficulty: req.body.difficulty,
        question: req.body.question,
        options: req.body.options,
    });
    Question.postCreateQuestion(newQuestion, (err, newQuestion) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to create question' });
        } else {
            res.json({ success: true, msg: 'Question created' });
        }
    });
});

router.get("/getQuestions", (req, res, next) => {
    // if (_.isEmpty(req.query)) {
    //     console.log("query parameter missing");
    //     throw new Error("query parameter missing");
    // }
    const query = {
        "questionType": req.query.questionType,
        "difficulty": req.query.difficulty
    };
    Question.getQuestions(query, (err, questionsArr) => {
        if (err) {
            res.json({ success: false, msg: 'Error in fetching question' });
        } else {
            // Questions fetched from db: success
            res.send(questionsArr); // update for uniformity add success: true
        }
    });
});

module.exports = router;