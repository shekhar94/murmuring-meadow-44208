const mongoose = require('mongoose');
const config = require('../config/database');
const _ = require('lodash');

// User Schema 
const QuestionSchema = mongoose.Schema({
    id: {
        type: String
    },
    questionType: {
        type: String
    },
    difficulty: {
        type: String
    },
    question: {
        type: String
    },
    options: {
        type: [String]
    },
    answer: {
        type: Number
    },
    explaination: {
        type: String,
    }
});

const Question = module.exports = mongoose.model('Question', QuestionSchema);

module.exports.postCreateQuestion = function(newQuestion, callback) {
    newQuestion.save(callback);
};
module.exports.putCreateQuestion = function(id, updatedQuestion, callback) {
    Question.findByIdAndUpdate(id, { $set: updatedQuestion }, { new: true }, callback);

};
module.exports.getQuestionById = function(id, callback) {
    Question.findById(id, callback);
};

module.exports.getQuestions = function(query, callback) {
    // no string notation is needed when called from postman
    Question.find(query, callback);
};
/* 
questions: Question[] = [{ 
    "id": "1",
    "questionType": "Permutations and combinations",
    "difficulty": "Easy",
    "question": "<sup>6</sup>P<sub>4</sub> is equal to",
    "options": ["18",
      "12",
      "6",
      "0"],
    "answer": 2
  }, {
    id: "2",
    questionType: "Permutations and combinations",
    difficulty: "Easy",
    question: "An arrangement of finite numbers of objects taken some or all at a time is called their",
    options: [
      "A.P",
      "Combination",
      "Sequence",
      "Permutation"
    ],
    answer: 3
  }];
*/