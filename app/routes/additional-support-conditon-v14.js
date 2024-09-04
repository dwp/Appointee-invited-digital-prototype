const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

//Isolated journey
  router.post('/v14/additional-support-conditions/condition', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const condition = req.session.data['condition-name']
    const startDate = req.session.data['condition-start-date']
    const section = req.session.data.source
    const queriesCondition = req.session.data.queriesCondition || []
    queriesCondition.push({ condition, startDate })
    req.session.data.queriesCondition = queriesCondition

  //  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
    req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

   res.redirect('/v14/additional-support-conditions/another-condition')
})

   router.post('/v14/additional-support-conditions/another-condition', function(req, res) {
       if (req.session.data['condition2'] == "Yes") {
                  res.redirect('/v14/additional-support-conditions/condition-additional')
                } else {
                  res.redirect('/v14/additional-support-conditions/check-answers-condition')
                }
  })

  // routes for controlling adding another condition name in option 1
  router.post('/v14/additional-support-conditions/condition-additional', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const condition = req.session.data['condition-name']
    const startDate = req.session.data['condition-start-date']
    const queriesCondition = req.session.data.queriesCondition || []
    queriesCondition.push({ condition, startDate })
    req.session.data.queriesCondition = queriesCondition

  //  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
    //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
      res.redirect('/v14/additional-support-conditions/another-condition')
  })

  router.post('/v14/additional-support-conditions-PIP2/condition', function(req, res) {
    console.log('is-this-calling', req.session.data)
    const condition = req.session.data['condition-name']
    const startDate = req.session.data['condition-start-date']
    const section = req.session.data.source
    const queriesCondition = req.session.data.queriesCondition || []
    queriesCondition.push({ condition, startDate })
    req.session.data.queriesCondition = queriesCondition

  //  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
    req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

   res.redirect('/v14/additional-support-conditions/another-condition')
})

router.post('/v14/additional-support-conditions-PIP2/another-condition', function(req, res) {
    if (req.session.data['condition2'] == "Yes") {
               res.redirect('/v14/additional-support-conditions-PIP2/condition-additional')
             } else {
               res.redirect('/v14/additional-support-conditions-PIP2/check-answers-condition')
             }
})


router.post('/v14/additional-support-conditions/condition', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const section = req.session.data.source
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

 res.redirect('/v14/additional-support-conditions/another-condition')
})

 router.post('/v14/additional-support-conditions/another-condition', function(req, res) {
     if (req.session.data['condition2'] == "Yes") {
                res.redirect('/v14/additional-support-conditions/condition-additional')
              } else {
                res.redirect('/v14/additional-support-conditions/check-answers-condition')
              }
})

// routes for controlling adding another condition name in option 1
router.post('/v14/additional-support-conditions/condition-additional', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/v14/additional-support-conditions/another-condition')
})

router.post('/v14/additional-support-conditions-PIP2/condition-additional', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const section = req.session.data.source
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

 res.redirect('/v14/additional-support-conditions-PIP2/another-condition')
})



//Journey in PIP1 flow
router.post('/v14/condition', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const section = req.session.data.source
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

 res.redirect('/v14/check-answers-condition')
})

 router.post('/v14/another-condition', function(req, res) {
     if (req.session.data['condition2'] == "Yes") {
                res.redirect('/v14/condition-additional')
              } else {
                res.redirect('/v14/check-your-answers-your-conditions')
              }
})

// routes for controlling adding another condition name in option 1
router.post('/v14/condition-additional', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/v14/another-condition')
})

router.post('/v14/additional-support-conditions-PIP2/condition', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const section = req.session.data.source
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

 res.redirect('/v14/additional-support-conditions/another-condition')
})

router.post('/v14/condition-pip2', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const section = req.session.data.source
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

 res.redirect('/v14/check-answers-condition-pip2')
})

router.post('/v14/hcp-pip2', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const hcpName = req.session.data['hcp-name']
  const hcpProfession = req.session.data['hcp-profession']
  const hcpPhone = req.session.data['hcp-phone']
  const hcpAddressOne = req.session.data['hcp-address-line-one']
  const hcpAddressTwo = req.session.data['hcp-address-line-two']
  const hcpAddressTown = req.session.data['hcp-address-town']
  const hcpAddressCounty = req.session.data['hcp-address-county']
  const hcpAddressPostcode = req.session.data['hcp-address-postcode']
  const hcpLastContact = req.session.data['hcp-last-contact']
  const section = req.session.data.source
  const queriesHCP = req.session.data.queriesHCP || []
  queriesHCP.push({ hcpName, hcpProfession, hcpPhone, hcpAddressOne, hcpAddressTwo, hcpAddressTown, hcpAddressCounty, hcpAddressPostcode, hcpLastContact  })
  req.session.data.queriesHCP = queriesHCP

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesHCP[req.session.data.queriesHCP.length - 1].action

 res.redirect('/v14/check-health-professionals')
})

router.post('/v14/about_your_health/hcp-1', function(req, res) {
  console.log('health professionals calling', req.session.data)
  const hcpName = req.session.data['hcp-name']
  const hcpProfession = req.session.data['hcp-profession']
  const hcpPhone = req.session.data['hcp-phone']
  const hcpAddressOne = req.session.data['hcp-address-line-one']
  const hcpAddressTwo = req.session.data['hcp-address-line-two']
  const hcpAddressTown = req.session.data['hcp-address-town']
  const hcpAddressCounty = req.session.data['hcp-address-county']
  const hcpAddressPostcode = req.session.data['hcp-address-postcode']
  const hcpLastContact = req.session.data['hcp-last-contact']
  const section = req.session.data.source
  const queriesHCP = req.session.data.queriesHCP || []
  queriesHCP.push({ hcpName, hcpProfession, hcpPhone, hcpAddressOne, hcpAddressTwo, hcpAddressTown, hcpAddressCounty, hcpAddressPostcode, hcpLastContact  })
  req.session.data.queriesHCP = queriesHCP

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesHCP[req.session.data.queriesHCP.length - 1].action

 res.redirect('/v14/check-your-answers-your-health')
})


}
