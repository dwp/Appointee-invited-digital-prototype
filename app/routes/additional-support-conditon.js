const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

//Isolated journey
  router.post('/v13/additional-support-conditions/condition', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const condition = req.session.data['condition-name']
    const startDate = req.session.data['condition-start-date']
    const section = req.session.data.source
    const queriesCondition = req.session.data.queriesCondition || []
    queriesCondition.push({ condition, startDate })
    req.session.data.queriesCondition = queriesCondition

  //  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
    req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

   res.redirect('/v13/additional-support-conditions/another-condition')
})

   router.post('/v13/additional-support-conditions/another-condition', function(req, res) {
       if (req.session.data['condition2'] == "Yes") {
                  res.redirect('/v13/additional-support-conditions/condition-additional')
                } else {
                  res.redirect('/v13/additional-support-conditions/check-answers-condition')
                }
  })

  // routes for controlling adding another condition name in option 1
  router.post('/v13/additional-support-conditions/condition-additional', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const condition = req.session.data['condition-name']
    const startDate = req.session.data['condition-start-date']
    const queriesCondition = req.session.data.queriesCondition || []
    queriesCondition.push({ condition, startDate })
    req.session.data.queriesCondition = queriesCondition

  //  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
    //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
      res.redirect('/v13/additional-support-conditions/another-condition')
  })

  router.post('/v13/additional-support-conditions-PIP2/condition', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const condition = req.session.data['condition-name']
    const startDate = req.session.data['condition-start-date']
    const section = req.session.data.source
    const queriesCondition = req.session.data.queriesCondition || []
    queriesCondition.push({ condition, startDate })
    req.session.data.queriesCondition = queriesCondition

  //  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
    req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

   res.redirect('/v13/additional-support-conditions/another-condition')
})

router.post('/v13/additional-support-conditions-PIP2/another-condition', function(req, res) {
    if (req.session.data['condition2'] == "Yes") {
               res.redirect('/v13/additional-support-conditions-PIP2/condition-additional')
             } else {
               res.redirect('/v13/additional-support-conditions-PIP2/check-answers-condition')
             }
})


router.post('/v13/additional-support-conditions/condition', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const section = req.session.data.source
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

 res.redirect('/v13/additional-support-conditions/another-condition')
})

 router.post('/v13/additional-support-conditions/another-condition', function(req, res) {
     if (req.session.data['condition2'] == "Yes") {
                res.redirect('/v13/additional-support-conditions/condition-additional')
              } else {
                res.redirect('/v13/additional-support-conditions/check-answers-condition')
              }
})

// routes for controlling adding another condition name in option 1
router.post('/v13/additional-support-conditions/condition-additional', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/v13/additional-support-conditions/another-condition')
})

router.post('/v13/additional-support-conditions-PIP2/condition-additional', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const section = req.session.data.source
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

 res.redirect('/v13/additional-support-conditions-PIP2/another-condition')
})



//Journey in PIP1 flow
router.post('/v13/condition', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const section = req.session.data.source
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

 res.redirect('/v13/another-condition')
})

 router.post('/v13/another-condition', function(req, res) {
     if (req.session.data['condition2'] == "Yes") {
                res.redirect('/v13/condition-additional')
              } else {
                res.redirect('/v13/check-answers-condition')
              }
})

// routes for controlling adding another condition name in option 1
router.post('/v13/condition-additional', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/v13/another-condition')
})

router.post('/v13/additional-support-conditions-PIP2/condition', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const section = req.session.data.source
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

 res.redirect('/v13/additional-support-conditions/another-condition')
})

}
