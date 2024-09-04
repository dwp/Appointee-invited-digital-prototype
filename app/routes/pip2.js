const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

// // Code supplied by Gary for dealing with query strings
// app.use(function(req, res, next){
//   Object.assign(res.locals,{
//     postData: (req.body ? req.body : false)
//   });
//
//   Object.assign(res.locals,{
//     getData: (req.query ? req.query : false)
//   });
//
//   next();
// });

module.exports = function (router) {
//ABOUT YOUR HEALTH
// About your health journey
router.post('/PIP2/condition', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const section = req.session.data.source
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  req.session.data.queriesCondition[req.session.data.queriesCondition.length - 1].action

 res.redirect('/PIP2/another-condition')

})

router.post('/PIP2/condition-additional', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const condition = req.session.data['condition-name']
  const startDate = req.session.data['condition-start-date']
  const queriesCondition = req.session.data.queriesCondition || []
  queriesCondition.push({ condition, startDate })
  req.session.data.queriesCondition = queriesCondition

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/PIP2/another-condition')
})

router.post('/PIP2/another-condition', function(req, res) {
    if (req.session.data['condition2'] == "Yes") {
               res.redirect('/PIP2/condition-additional')
             } else {
               res.redirect('/PIP2/check-answers-condition')
             }
})


//MEDICATION AND TREATMENTS SECTION
// medication journey - starting from tasklist
router.post('/PIP2/your-medication', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const medication = req.session.data['medication-name']
  const dosage = req.session.data['dosage-name']
  const sideEffects = req.session.data['side-effects-name']
  const queriesMedication = req.session.data.queriesMedication || []
  queriesMedication.push({ medication, dosage, sideEffects })
  req.session.data.queriesMedication = queriesMedication

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/PIP2/check-answers')
})

// routes for controlling adding another medication
router.post('/PIP2/your-medication-another', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const medication = req.session.data['medication-name']
  const dosage = req.session.data['dosage-name']
  const sideEffects = req.session.data['side-effects-name']
  const queriesMedication = req.session.data.queriesMedication || []
  queriesMedication.push({ medication, dosage, sideEffects })
  req.session.data.queriesMedication = queriesMedication

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/PIP2/check-answers')
})

// routes for controlling check answers treatments
router.post('/PIP2/your-treatment', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const treatment = req.session.data['treatment-name']
  const treatmentSideEffect = req.session.data['treatment-side-effect']

  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatment, treatmentSideEffect })
  req.session.data.queriesTreatment = queriesTreatment

    res.redirect('/PIP2/treatment-check-answers')
})

// routes for controlling treatment details radio buttons
router.post('/PIP2/your-treatment', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const treatment = req.session.data['treatment-name']
  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatment })
  req.session.data.queriesTreatment = queriesTreatment

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/PIP2/treatment-summary')
})

// routes for controlling treatment add another button
router.post('/PIP2/your-treatment-another', function(req, res) {
  console.log('is-this-calling', req.session.data)
  const treatment = req.session.data['treatment-name']
  const treatmentSideEffect = req.session.data['treatment-side-effect']
  const queriesTreatment = req.session.data.queriesTreatment || []
  queriesTreatment.push({ treatment, treatmentSideEffect })
  req.session.data.queriesTreatment = queriesTreatment

//  req.session.data.queriesTakeNutrition[req.session.data.queriesTakeNutrition.length - 1].content = req.session.data['query-content']
  //req.session.data.queriesMedication[req.session.data.queriesMedication.length - 1].action = req.session.data['medication-name']
    res.redirect('/PIP2/treatment-check-answers')
})


// routes for controlling medication radio buttons
router.post('/PIP2/medication', function(req, res) {
    if (req.session.data['do-you-take-medication'] == "Yes") {
               res.redirect('/PIP2/your-medication')
             } else {
               res.redirect('/PIP2/further-treatments')
             }
})

// routes for controlling treatments radio buttons
router.post('/PIP2/further-treatments', function(req, res) {
    if (req.session.data['further-treatments'] == "Yes") {
               res.redirect('/PIP2/your-treatment')
             } else {
               res.redirect('/PIP2/tasklist')
             }
})

// routes for controlling side effects radio buttons
router.post('/PIP2/side-effects', function(req, res) {
    if (req.session.data['do-you-get-side-effects'] == "Yes") {
               res.redirect('/PIP2/side-effects-detail')
             } else {
               res.redirect('/PIP2/tasklist')
             }
})

//ACTIVITIES
// Preparing food
  router.post('/PIP2/preparing-food/index-answer', function(req, res) {

    let question = req.session.data['preparingfood-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Eating and drinking
    router.post('/PIP2/eating-and-drinking/index-answer', function(req, res) {

      let question = req.session.data['eatinganddrinking-question']

      if (question === 'Yes') {
          res.redirect('feeding-tube')
        } else {
          res.redirect('check')
        }
    });

   // Managing treatments
    router.post('/PIP2/managing-treatments/index-answer', function(req, res) {

      let question = req.session.data['managingtreatments-question']

      if (question === 'Yes') {
          res.redirect('details')
        } else {
          res.redirect('check')
        }
    });

     // Washing and bathing
    router.post('/PIP2/washing-and-bathing/index-answer', function(req, res) {

      let question = req.session.data['washingandbathing-question']

      if (question === 'Yes') {
          res.redirect('details')
        } else {
          res.redirect('check')
        }
    });

     // Managing toilet needs
    router.post('/PIP2/managing-toilet-needs/index-answer', function(req, res) {

      let question = req.session.data['managingtoiletneeds-question']

      if (question === 'Yes') {
          res.redirect('details')
        } else {
          res.redirect('check')
        }
    });

   // Dressing and undressing
    router.post('/PIP2/dressing-and-undressing/index-answer', function(req, res) {

      let question = req.session.data['dressingandundressing-question']

      if (question === 'Yes') {
          res.redirect('details')
        } else {
          res.redirect('check')
        }
    });

  // Talking and listening
      router.post('/PIP2/talking-and-listening/index-answer', function(req, res) {

      let question = req.session.data['talkingandlistening-question']

      if (question === 'Yes') {
          res.redirect('details')
        } else {
          res.redirect('check')
        }
    });

    // Reading
    router.post('/PIP2/reading/index-answer', function(req, res) {

      let question = req.session.data['reading-question']

      if (question === 'Yes') {
          res.redirect('details')
        } else {
          res.redirect('check')
        }
    });

     // Mixing with other people
    router.post('/PIP2/mixing-with-other-people/index-answer', function(req, res) {

      let question = req.session.data['mixingwithotherpeople-question']

      if (question === 'Yes') {
          res.redirect('details')
        } else {
          res.redirect('check')
        }
    });

   // Managing money
    router.post('/PIP2/managing-money/index-answer', function(req, res) {

      let question = req.session.data['managingmoney-question']

      if (question === 'Yes') {
          res.redirect('details')
        } else {
          res.redirect('check')
        }
    });

   // Planning and following a journey
    router.post('/PIP2/planning-and-following-a-journey/index-answer', function(req, res) {

      let question = req.session.data['planningandfollowingajourney-question']

      if (question === 'Yes') {
          res.redirect('details')
        } else {
          res.redirect('check')
        }
    });

    // Moving around
    router.post('/PIP2/moving-around/index-answer', function(req, res) {

      let question = req.session.data['movingaround-question']

      if (question === 'Yes') {
          res.redirect('info')
        } else {
          res.redirect('check')
        }
    });

    // route for moving around 'it varies'
    router.post('/PIP2/moving-around/info', function(req, res) {
        if (req.session.data['movingaround-info'] == "It varies") {
                   res.redirect('/PIP2/moving-around/varies')
                 } else {
                   res.redirect('/PIP2/moving-around/details')
                 }
    })

    // Additional information
    router.post('/PIP2/additional-information/index-answer', function(req, res) {

      let question = req.session.data['additionalinformation-question']

      if (question === 'Yes') {
          res.redirect('details')
        } else {
          res.redirect('check')
        }
    });

//   // Code for the list screen
//
//   app.get('/PIP2/list-1', (req, res, next) => {
//
//     if (!req.session.sectionStatus){
//       // console.log('no session');
//       req.session.sectionStatus = {
//         // cwyn: 'complete',
//         aboutyourhealth: undefined,
//         aboutyourhealthprofessionals: undefined,
//         preparingfood: undefined,
//         eatinganddrinking: undefined,
//         managingtreatments: undefined,
//         washingandbathing: undefined,
//         managingtoiletneeds: undefined,
//         dressingandundressing: undefined,
//         talkingandlistening: undefined,
//         reading: undefined,
//         mixingwithotherpeople: undefined,
//         managingmoney: undefined,
//         planningandfollowingajourney: undefined,
//         movingaround: undefined,
//         additionalinformation: undefined,
//         supportingevidence: undefined,
//       }
//     }
//
//     if (!req.session.sectionCount){
//       req.session.sectionCount = 0;
//     }
//
//     // aboutyourhealth
//     if (req.query.aboutyourhealth == 'completed') {
//       if (req.session.sectionStatus.aboutyourhealth != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.aboutyourhealth = req.query.aboutyourhealth
//     };
//     if (req.query.aboutyourhealth == 'inprogress') {
//       req.session.sectionStatus.aboutyourhealth = req.query.aboutyourhealth
//     };
//
//     // about your medications and treatments
//     if (req.query.medicationsTreatments == 'completed') {
//       if (req.session.sectionStatus.medicationsTreatments != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.medicationsTreatments = req.query.medicationsTreatments
//     };
//     if (req.query.medicationsTreatments == 'inprogress') {
//       req.session.sectionStatus.medicationsTreatments = req.query.medicationsTreatments
//     };
//
//     // aboutyourhealthprofessionals
//     if (req.query.aboutyourhealthprofessionals == 'completed') {
//       if (req.session.sectionStatus.aboutyourhealthprofessionals != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.aboutyourhealthprofessionals = req.query.aboutyourhealthprofessionals
//     };
//     if (req.query.aboutyourhealthprofessionals == 'inprogress') {
//       req.session.sectionStatus.aboutyourhealthprofessionals = req.query.aboutyourhealthprofessionals
//     };
//
//     // preparingfood
//     if (req.query.preparingfood == 'completed') {
//       if (req.session.sectionStatus.preparingfood != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.preparingfood = req.query.preparingfood
//     };
//     if (req.query.preparingfood == 'inprogress') {
//       req.session.sectionStatus.preparingfood = req.query.preparingfood
//     };
//
//     // eatinganddrinking
//     if (req.query.eatinganddrinking == 'completed') {
//       if (req.session.sectionStatus.eatinganddrinking != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.eatinganddrinking = req.query.eatinganddrinking
//     };
//     if (req.query.eatinganddrinking == 'inprogress') {
//       req.session.sectionStatus.eatinganddrinking = req.query.eatinganddrinking
//     };
//
//     // managingtreatments
//     if (req.query.managingtreatments == 'completed') {
//       if (req.session.sectionStatus.managingtreatments != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.managingtreatments = req.query.managingtreatments
//     };
//     if (req.query.managingtreatments == 'inprogress') {
//       req.session.sectionStatus.managingtreatments = req.query.managingtreatments
//     };
//
//     // washingandbathing
//     if (req.query.washingandbathing == 'completed') {
//       if (req.session.sectionStatus.washingandbathing != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.washingandbathing = req.query.washingandbathing
//     };
//     if (req.query.washingandbathing == 'inprogress') {
//       req.session.sectionStatus.washingandbathing = req.query.washingandbathing
//     };
//
//     // managingtoiletneeds
//     if (req.query.managingtoiletneeds == 'completed') {
//       if (req.session.sectionStatus.managingtoiletneeds != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.managingtoiletneeds = req.query.managingtoiletneeds
//     };
//     if (req.query.managingtoiletneeds == 'inprogress') {
//       req.session.sectionStatus.managingtoiletneeds = req.query.managingtoiletneeds
//     };
//
//     // dressingandundressing
//     if (req.query.dressingandundressing == 'completed') {
//       if (req.session.sectionStatus.dressingandundressing != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.dressingandundressing = req.query.dressingandundressing
//     };
//     if (req.query.dressingandundressing == 'inprogress') {
//       req.session.sectionStatus.dressingandundressing = req.query.dressingandundressing
//     };
//
//     // talkingandlistening
//     if (req.query.talkingandlistening == 'completed') {
//       if (req.session.sectionStatus.talkingandlistening != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.talkingandlistening = req.query.talkingandlistening
//     };
//     if (req.query.talkingandlistening == 'inprogress') {
//       req.session.sectionStatus.talkingandlistening = req.query.talkingandlistening
//     };
//
//     // reading
//     if (req.query.reading == 'completed') {
//       if (req.session.sectionStatus.reading != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.reading = req.query.reading
//     };
//     if (req.query.reading == 'inprogress') {
//       req.session.sectionStatus.reading = req.query.reading
//     };
//
//     // mixingwithotherpeople
//     if (req.query.mixingwithotherpeople == 'completed') {
//       if (req.session.sectionStatus.mixingwithotherpeople != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.mixingwithotherpeople = req.query.mixingwithotherpeople
//     };
//     if (req.query.mixingwithotherpeople == 'inprogress') {
//       req.session.sectionStatus.mixingwithotherpeople = req.query.mixingwithotherpeople
//     };
//
//     // managingmoney
//     if (req.query.managingmoney == 'completed') {
//       if (req.session.sectionStatus.managingmoney != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.managingmoney = req.query.managingmoney
//     };
//     if (req.query.managingmoney == 'inprogress') {
//       req.session.sectionStatus.managingmoney = req.query.managingmoney
//     };
//
//     // planningandfollowingajourney
//     if (req.query.planningandfollowingajourney == 'completed') {
//       if (req.session.sectionStatus.planningandfollowingajourney != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.planningandfollowingajourney = req.query.planningandfollowingajourney
//     };
//     if (req.query.planningandfollowingajourney == 'inprogress') {
//       req.session.sectionStatus.planningandfollowingajourney = req.query.planningandfollowingajourney
//     };
//
//     // movingaround
//     if (req.query.movingaround == 'completed') {
//       if (req.session.sectionStatus.movingaround != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.movingaround = req.query.movingaround
//     };
//     if (req.query.movingaround == 'inprogress') {
//       req.session.sectionStatus.movingaround = req.query.movingaround
//     };
//
//     // additionalinformation
//     if (req.query.additionalinformation == 'completed') {
//       if (req.session.sectionStatus.additionalinformation != 'completed') {
//         req.session.sectionCount = (req.session.sectionCount + 1);
//       }
//       req.session.sectionStatus.additionalinformation = req.query.additionalinformation
//     };
//     if (req.query.additionalinformation == 'inprogress') {
//       req.session.sectionStatus.additionalinformation = req.query.additionalinformation
//     };
//
//     // if (req.query.supportingevidence) {
//     //   if (req.session.sectionStatus.supportingevidence == undefined) {
//     //     req.session.sectionCount = (req.session.sectionCount + 1)
//     //   }
//     //   req.session.sectionStatus.supportingevidence = req.query.supportingevidence
//     // };
//
//     res.render('v12/condition-questions/option-three/list-1', {sectionStatus: req.session.sectionStatus, sectionCount: req.session.sectionCount});
//   });
//
//   // Clear data on the 'application cancelled' screen
//
//   app.get('/*/clear-p5-v12-1', function (req, res) {
//     req.session.destroy()
//     res.render('p5-v12/application-cancelled')
//   })
//
//
//   // Routes
//
//   app.get('/p5-v12/sign-in/answer-choice', function(req, res) {
//
//     let question = req.session.data['question']
//
//     if (question === 'pdf') {
//         res.redirect('tactical-pdf')
//       } else {
//         res.redirect('intro-question')
//       }
//   });
//
//   app.get('/p5-v12/sign-in/intro-question-answer', function(req, res) {
//
//     let question = req.session.data['question']
//
//     if (question === 'no') {
//         res.redirect('register-start')
//       } else {
//         res.redirect('sign-in')
//       }
//   });
//
//   app.get('/p5-v12/about-your-health/another-answer', function(req, res) {
//
//     let condition2 = req.session.data['condition2']
//
//     if (condition2 === 'Yes') {
//         res.redirect('condition-2')
//       } else {
//         res.redirect('check')
//       }
//   });
//
//   app.get('/p5-v12/about-your-health/another-2-answer', function(req, res) {
//
//     let question = req.session.data['condition3']
//
//     if (question === 'Yes') {
//         res.redirect('condition-3')
//       } else {
//         res.redirect('check')
//       }
//   });
//
//   app.get('/p5-v12/about-your-health-professionals/q-health-professional-answer', function(req, res) {
//
//     let question = req.session.data['question']
//
//     if (question === 'yes') {
//         res.redirect('health-professional')
//       } else {
//         res.redirect('check')
//       }
//   });
//
//   app.get('/p5-v12/about-your-health-professionals/another-answer', function(req, res) {
//
//     let professional2 = req.session.data['professional2']
//
//     if (professional2 === 'Yes') {
//         res.redirect('health-professional-2')
//       } else {
//         res.redirect('check')
//       }
//   });
//
//   app.get('/p5-v12/about-your-health-professionals/another-2-answer', function(req, res) {
//
//     let professional3 = req.session.data['professional3']
//
//     if (professional3 === 'Yes') {
//         res.redirect('health-professional-3')
//       } else {
//         res.redirect('check')
//       }
//   });
//
//
//   // Preparing food
//
//   app.get('/PIP2/preparing-food/index-answer', function(req, res) {
//
//     let question = req.session.data['preparingfood-question']
//
//     if (question === 'Yes') {
//         res.redirect('details')
//       } else {
//         res.redirect('check')
//       }
//   });
//
//
//
//   // Apply
//
//   app.get('/p5-v12/apply/pdf-answer', function(req, res) {
//
//     let question = req.session.data['download']
//
//     if (question === 'yes') {
//         res.redirect('download')
//       } else {
//         res.redirect('confirmation')
//       }
//   });
//
//
//
//   // Supporting evidence
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-data', function(req, res) {
//
//     let question = req.session.data['question']
//
//     if (question === 'yes') {
//         res.redirect('file-upload-help')
//       } else {
//         res.redirect('/p5-v12/apply/declaration')
//       }
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-uploaded-1-data', function(req, res) {
//
//     let question = req.session.data['question']
//
//     if (question === 'yes') {
//         res.redirect('supporting-evidence-upload-2')
//       } else {
//         res.redirect('/p5-v12/apply/declaration')
//       }
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-uploaded-2-data', function(req, res) {
//
//     let question = req.session.data['question']
//
//     if (question === 'yes') {
//         res.redirect('supporting-evidence-upload-3')
//       } else {
//         res.redirect('/p5-v12/apply/declaration')
//       }
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-uploaded-3-data', function(req, res) {
//
//     let question = req.session.data['question']
//
//     if (question === 'yes') {
//         res.redirect('supporting-evidence-upload-4')
//       } else {
//         res.redirect('/p5-v12/apply/declaration')
//       }
//   });
//
//
//   // Uploading screens
//
//   app.get('/p5-v12/supporting-evidence/uploading-supporting-evidence-1', function(req, res) {
//     res.render('p5-v12/supporting-evidence/uploading', { 'file' : 'supporting-evidence-1' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/uploading-supporting-evidence-2', function(req, res) {
//     res.render('p5-v12/supporting-evidence/uploading', { 'file' : 'supporting-evidence-2' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/uploading-supporting-evidence-3', function(req, res) {
//     res.render('p5-v12/supporting-evidence/uploading', { 'file' : 'supporting-evidence-3' });
//   });
//
// // // Coming back uploading evidence
//
// //   app.get('/p5-v12/coming-back/supporting-evidence-uploaded-1', function(req, res) {
//
// //     let question = req.session.data['question']
//
// //     if (question === 'yes') {
// //         res.redirect('/p5-v12/coming-back/supporting-evidence-upload-2')
// //       } else {
// //         res.redirect('/p5-v12/coming-back/confirmation-returning')
// //       }
// //   });
//
//
//
//
//   // Check you answers variations
//
//   app.get('/p5-v12/supporting-evidence/upload-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/upload', { 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/uploading-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/uploading', { 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/uploaded-1-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/uploaded-1', { 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/supporting-evidence', { 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-data-cya', function(req, res) {
//
//     let question = req.session.data['question']
//
//     if (question === 'yes') {
//         res.redirect('interruption-screen-cya')
//       } else {
//         res.redirect('check')
//       }
//   });
//
//   app.get('/p5-v12/supporting-evidence/interruption-screen-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/interruption-screen', { 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-upload-1-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/supporting-evidence-upload-1', { 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence-upload-2-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence-upload-2', { 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-upload-3-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/supporting-evidence-upload-3', { 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/uploading-supporting-evidence-1-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/uploading', { 'file' : 'supporting-evidence-1', 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/uploading-supporting-evidence-2-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/uploading', { 'file' : 'supporting-evidence-2', 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/uploading-supporting-evidence-3-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/uploading', { 'file' : 'supporting-evidence-3', 'cya' : 'true' });
//   });
//
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-upload-1-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/supporting-evidence-upload-1', { 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-upload-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/supporting-evidence-upload-2', { 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-upload-3-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/supporting-evidence-upload-3', { 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-uploaded-1-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/supporting-evidence-uploaded-1', { 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-uploaded-2-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/supporting-evidence-uploaded-2', { 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-uploaded-3-cya', function(req, res) {
//     res.render('p5-v12/supporting-evidence/supporting-evidence-uploaded-3', { 'cya' : 'true' });
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-uploaded-1-data-cya', function(req, res) {
//
//     let question = req.session.data['question']
//
//     if (question === 'yes') {
//         res.redirect('supporting-evidence-upload-2-cya')
//       } else {
//         res.redirect('check')
//       }
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-uploaded-2-data-cya', function(req, res) {
//
//     let question = req.session.data['question']
//
//     if (question === 'yes') {
//         res.redirect('supporting-evidence-upload-3-cya')
//       } else {
//         res.redirect('check')
//       }
//   });
//
//   app.get('/p5-v12/supporting-evidence/supporting-evidence-uploaded-3-data-cya', function(req, res) {
//
//     let question = req.session.data['question']
//
//     if (question === 'yes') {
//         res.redirect('supporting-evidence-upload-4-cya')
//       } else {
//         res.redirect('check')
//       }
//   });
//
//
//   // END OF VERSION 1 ROUTES
//
}
