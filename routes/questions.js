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
        explaination: req.body.explaination
    });
    Question.postCreateQuestion(newQuestion, (err, newQuestion) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to create question' });
        } else {
            res.json({ success: true, msg: 'Question created' });
        }
    });
});
router.put("/create", (req, res, next) => {
    let updatedQuestion = new Question({
        _id: req.body._id,
        id: req.body.id,
        answer: req.body.answer,
        questionType: req.body.questionType,
        difficulty: req.body.difficulty,
        question: req.body.question,
        options: req.body.options,
        explaination: req.body.explaination
    });
    Question.putCreateQuestion(req.body._id, updatedQuestion, (err, updatedQuestion) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to update question' });
        } else {
            res.json({ success: true, msg: 'Question updated' });
        }
    });
});

router.get("/getQuestions", (req, res, next) => {
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