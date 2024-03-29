const express = require('express')
const { createSurvey, getAllSurveys, getSurveyById, updateSurvey, deleteSurvey } = require('../controllers/surveyController')
const app = express()
const surveyRouter = express.Router()
app.use(express.json())



surveyRouter.post('/survey',createSurvey)
surveyRouter.get('/survey',getAllSurveys)
surveyRouter.get('/survey/:id',getSurveyById )
surveyRouter.put('/survey/:id',updateSurvey)
surveyRouter.delete("/survey/:id",deleteSurvey)
module.exports = {
    surveyRouter
}