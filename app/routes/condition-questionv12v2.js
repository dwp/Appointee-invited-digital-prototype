const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

  router.post('/v12/condition-questions/another-condition', function(req, res) {
      if (req.session.data['condition2'] == "Yes") {
                 res.redirect('/v12/condition-questions/condition-additional')
               } else {
                 res.redirect('/v12/condition-questions/check-answers')
               }
  })

  // router.post('/v12/condition-questions/condition-additional', function(req, res) {
  //     if (req.session.data['condition2'] == "Yes") {
  //                res.redirect('/v12/condition-questions/condition-another')
  //              } else {
  //                res.redirect('/v12/condition-questions/check-answers')
  //              }
  // })


router.post('/v12/condition-questions/option-two/another-condition', function(req, res) {
    if (req.session.data['condition2'] == "Yes") {
               res.redirect('/v12/condition-questions/option-two/condition')
             } else {
               res.redirect('/v12/condition-questions/option-two/check-answers')
             }
})


router.post('/v12/condition-questions/option-two/consent', function(req, res) {
    if (req.session.data['consent'] == "Yes, I agree") {
               res.redirect('/v12/condition-questions/option-two/hcp-1')
             } else {
               res.redirect('#')
             }
})

router.post('/v12v2/condition-questions/option-two/condition', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name-1']
  const section = req.session.data.source
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, section })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

 res.redirect('/v12v2/condition-questions/option-two/another-condition')

})

// routes for option 1a.
router.post('/v12v2/condition-questions/option-three/condition', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const section = req.session.data.source
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

 res.redirect('/v12v2/condition-questions/option-three/another-condition')

})

// routes for controlling adding another condition name in option 1
router.post('/v12v2/condition-questions/option-three/condition-additional', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/v12v2/condition-questions/option-three/another-condition')
})

router.post('/v12v2/condition-questions/option-three/another-condition', function(req, res) {
    if (req.session.data['condition2'] == "Yes") {
               res.redirect('/v12v2/condition-questions/option-three/condition-additional')
             } else {
               res.redirect('/v12v2/condition-questions/option-three/check-answers-condition')
             }
})

// routes for controlling medication details radio buttons
router.post('/v12v2/condition-questions/option-three/your-medication', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const medication = req.session.data['medication-name']
  const dosage = req.session.data['dosage-name']
  const sideEffects = req.session.data['side-effects-name']
  const queriesMedication = req.session.data.queriesMedication || []
  queriesMedication.push({ medication, dosage, sideEffects })
  req.session.data.queriesMedication = queriesMedication

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/v12v2/condition-questions/option-three/check-answers')
})

// routes for controlling adding another medication
router.post('/v12v2/condition-questions/option-three/your-medication-another', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const medication = req.session.data['medication-name']
  const dosage = req.session.data['dosage-name']
  const sideEffects = req.session.data['side-effects-name']
  const queriesMedication = req.session.data.queriesMedication || []
  queriesMedication.push({ medication, dosage, sideEffects })
  req.session.data.queriesMedication = queriesMedication

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/v12v2/condition-questions/option-three/check-answers')
})

// routes for controlling check answers treatments
router.post('/v12v2/condition-questions/option-three/your-treatment', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const treatment = req.session.data['treatment-name']
  const treatmentSideEffect = req.session.data['treatment-side-effect']

  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatment, treatmentSideEffect })
  req.session.data.queriesTreatment = queriesTreatment

    res.redirect('/v12v2/condition-questions/option-three/treatment-check-answers')
})

// routes for controlling condition name in option 1
router.post('/v12v2/condition-questions/condition', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/v12v2/condition-questions/conditions-details')
})

// routes for controlling condition name in option 1
router.post('/v12v2/condition-questions/condition', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/v12v2/condition-questions/conditions-details')
})

// routes for controlling adding another condition name in option 1
router.post('/v12v2/condition-questions/condition-additional', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/v12v2/condition-questions/conditions-details')
})

// routes for controlling treatment details radio buttons
router.post('/v12v2/condition-questions/option-three/your-treatment', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const treatment = req.session.data['treatment-name']
  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatment })
  req.session.data.queriesTreatment = queriesTreatment

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/v12v2/condition-questions/option-three/treatment-summary')
})

// routes for controlling treatment add another button
router.post('/v12v2/condition-questions/option-three/your-treatment-another', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const treatment = req.session.data['treatment-name']
  const treatmentSideEffect = req.session.data['treatment-side-effect']
  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatment, treatmentSideEffect })
  req.session.data.queriesTreatment = queriesTreatment

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/v12v2/condition-questions/option-three/treatment-check-answers')
})


// routes for controlling medication radio buttons
router.post('/v12v2/condition-questions/option-three/medication', function(req, res) {
    if (req.session.data['do-you-take-medication'] == "Yes") {
               res.redirect('/v12v2/condition-questions/option-three/your-medication')
             } else {
               res.redirect('/v12v2/condition-questions/option-three/further-treatments')
             }
})

// routes for controlling treatments radio buttons
router.post('/v12v2/condition-questions/option-three/further-treatments', function(req, res) {
    if (req.session.data['further-treatments'] == "Yes") {
               res.redirect('/v12v2/condition-questions/option-three/your-treatment')
             } else {
               res.redirect('/v12v2/condition-questions/option-three/list-1')
             }
})

// routes for controlling side effects radio buttons
router.post('/v12v2/condition-questions/option-three/side-effects', function(req, res) {
    if (req.session.data['do-you-get-side-effects'] == "Yes") {
               res.redirect('/v12v2/condition-questions/option-three/side-effects-detail')
             } else {
               res.redirect('/v12v2/condition-questions/option-three/list-1')
             }
})

//DWP add another pattern for medication -- amend medication

// const amendMedication = (medications, medication) => {
//     const index = medication.findIndex(p => p.id === medication.id);
//     medications.splice(index, 1);
//     medications.push(medication);
//     return medications;
//   }
//
//   // clear any temp condition data on add another
//   router.get('/medication', (req, res, next) => {
//     const { edit } = req.query;
//     const { data } = req.session;
//     let originalChoice;
//     if(edit) {
//       originalChoice = data?.medication?.type;
//     } else {
//       req.session.data.medication = {};
//     }
//     res.render('v12/condition-questions/option-three/your-medication-another', { choice: originalChoice });
//   })
//
// //message when no medications exist
//   router.post('/select-size', (req, res, next) => {
//     res.render('v11/about_your_health/condition-summary.html')
//   })
//
//   router.get('/check-medication', (req, res, next) => {
//     const { medicationId } = req.query;
//     const { data } = req.session;
//     const medication = data.medicationOrder.filter((p) => p.id === parseInt(medicationId));
//     data.medication = medication[0];
//     const selectedMedication = medication[0];
//     res.render('/v12/condition-questions/option-three/your-medication-another.html', { medication: selectedMedication });
//   })
//
//   router.post('/check-medication', (req, res, next) => {
//     const { data } = req.session;
//     const medication = data.medication;
//
//     if(medication.id) {
//       amendMedication(data.medicationOrder, medication);
//     } else {
//       // give condition an id - to find in amend step
//       medication.id = data.conditionOrder.length + 1;
//       data.medicationOrder.push(medication);
//     }
//
//     res.render('v12/condition-questions/option-three/medication-summary.html', { medication: data.medication });
//   })
//
//   // last page before submission
//   router.get('/condition-summary', (req, res, next) => {
//     res.render('v12/condition-questions/option-three/medication-summary.html');
//   })
//
//   // remove condition from order
//   router.get('/remove-condition', (req, res, next) => {
//     const { conditionId } = req.query;
//     const { data } = req.session;
//     const condition = data.conditionOrder.filter((p) => p.id === parseInt(conditionId));
//     res.render('v12/condition-questions/option-three/remove-condition.html', { binnedCondition: condition[0] });
//   })
//
//   router.post('/remove-condition', (req, res, next) => {
//     const { binCondition, binnedConditionId } = req.body;
//     const { data } = req.session;
//     if(binCondition === "yes"){
//       const index = data.conditionOrder.findIndex(p => p.id === parseInt(binnedConditionId));
//       data.conditionOrder.splice(index, 1)
//     }
//     res.render('v12/condition-questions/option-three/medication-summary.html');
//   })
//
//
//   router.get('/submit', (req, res, next) => {
//     req.session.data.conditionOrder = [];
//     req.session.data.condition = {};
//     res.render('v11/about_your_health/consent.html');
//   })

  // Add another condition end

// // edit medications
// router.post('/check-medication', (req, res, next) => {
//   const { data } = req.session;
//   const medication = data.medication;
//   console.log('is-this-calling', data.medication)
//
//   if(medication.id) {
//   amendMedication(data.medCheck, medication);
//   } else {
//   // give pizza an id - to find in amend step
//   medication.id = data.medCheck.length + 1;
//   data.medCheck.push(medication);
//   console.log('is-this-calling', medication.id)
//   }
//
//   res.render('v12/condition-questions/option-three/your-medication.html', { medication: data.medication });
//   })

}
