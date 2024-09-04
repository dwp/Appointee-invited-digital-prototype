module.exports = function (app) {

  // Code supplied by Gary for dealing with query strings
  app.use(function(req, res, next){
    Object.assign(res.locals,{
      postData: (req.body ? req.body : false)
    });

    Object.assign(res.locals,{
      getData: (req.query ? req.query : false)
    });

    next();
  });

  // var path = require('path')

  // Code for the list screen

  app.get('/mvp/p5/list', (req, res, next) => {

    if (!req.session.sectionStatus){
      // console.log('no session');
      req.session.sectionStatus = {
        // cwyn: 'complete',
        aboutyourhealth: undefined,
        aboutyourhealthprofessionals: undefined,
        preparingfood: undefined,
        eatinganddrinking: undefined,
        managingtreatments: undefined,
        washingandbathing: undefined,
        managingtoiletneeds: undefined,
        dressingandundressing: undefined,
        talkingandlistening: undefined,
        reading: undefined,
        mixingwithotherpeople: undefined,
        managingmoney: undefined,
        planningandfollowingajourney: undefined,
        movingaround: undefined,
        additionalinformation: undefined,
        supportingevidence: undefined,
      }
    }

    if (!req.session.sectionCount){
      req.session.sectionCount = 0;
    }

    // aboutyourhealth
    if (req.query.aboutyourhealth == 'completed') {
      if (req.session.sectionStatus.aboutyourhealth != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.aboutyourhealth = req.query.aboutyourhealth
    };
    if (req.query.aboutyourhealth == 'inprogress') {
      req.session.sectionStatus.aboutyourhealth = req.query.aboutyourhealth
    };

    // aboutyourhealthprofessionals
    if (req.query.aboutyourhealthprofessionals == 'completed') {
      if (req.session.sectionStatus.aboutyourhealthprofessionals != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.aboutyourhealthprofessionals = req.query.aboutyourhealthprofessionals
    };
    if (req.query.aboutyourhealthprofessionals == 'inprogress') {
      req.session.sectionStatus.aboutyourhealthprofessionals = req.query.aboutyourhealthprofessionals
    };

    // preparingfood
    if (req.query.preparingfood == 'completed') {
      if (req.session.sectionStatus.preparingfood != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.preparingfood = req.query.preparingfood
    };
    if (req.query.preparingfood == 'inprogress') {
      req.session.sectionStatus.preparingfood = req.query.preparingfood
    };

    // eatinganddrinking
    if (req.query.eatinganddrinking == 'completed') {
      if (req.session.sectionStatus.eatinganddrinking != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.eatinganddrinking = req.query.eatinganddrinking
    };
    if (req.query.eatinganddrinking == 'inprogress') {
      req.session.sectionStatus.eatinganddrinking = req.query.eatinganddrinking
    };

    // managingtreatments
    if (req.query.managingtreatments == 'completed') {
      if (req.session.sectionStatus.managingtreatments != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.managingtreatments = req.query.managingtreatments
    };
    if (req.query.managingtreatments == 'inprogress') {
      req.session.sectionStatus.managingtreatments = req.query.managingtreatments
    };

    // washingandbathing
    if (req.query.washingandbathing == 'completed') {
      if (req.session.sectionStatus.washingandbathing != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.washingandbathing = req.query.washingandbathing
    };
    if (req.query.washingandbathing == 'inprogress') {
      req.session.sectionStatus.washingandbathing = req.query.washingandbathing
    };

    // managingtoiletneeds
    if (req.query.managingtoiletneeds == 'completed') {
      if (req.session.sectionStatus.managingtoiletneeds != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.managingtoiletneeds = req.query.managingtoiletneeds
    };
    if (req.query.managingtoiletneeds == 'inprogress') {
      req.session.sectionStatus.managingtoiletneeds = req.query.managingtoiletneeds
    };

    // dressingandundressing
    if (req.query.dressingandundressing == 'completed') {
      if (req.session.sectionStatus.dressingandundressing != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.dressingandundressing = req.query.dressingandundressing
    };
    if (req.query.dressingandundressing == 'inprogress') {
      req.session.sectionStatus.dressingandundressing = req.query.dressingandundressing
    };

    // talkingandlistening
    if (req.query.talkingandlistening == 'completed') {
      if (req.session.sectionStatus.talkingandlistening != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.talkingandlistening = req.query.talkingandlistening
    };
    if (req.query.talkingandlistening == 'inprogress') {
      req.session.sectionStatus.talkingandlistening = req.query.talkingandlistening
    };

    // reading
    if (req.query.reading == 'completed') {
      if (req.session.sectionStatus.reading != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.reading = req.query.reading
    };
    if (req.query.reading == 'inprogress') {
      req.session.sectionStatus.reading = req.query.reading
    };

    // mixingwithotherpeople
    if (req.query.mixingwithotherpeople == 'completed') {
      if (req.session.sectionStatus.mixingwithotherpeople != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.mixingwithotherpeople = req.query.mixingwithotherpeople
    };
    if (req.query.mixingwithotherpeople == 'inprogress') {
      req.session.sectionStatus.mixingwithotherpeople = req.query.mixingwithotherpeople
    };

    // managingmoney
    if (req.query.managingmoney == 'completed') {
      if (req.session.sectionStatus.managingmoney != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.managingmoney = req.query.managingmoney
    };
    if (req.query.managingmoney == 'inprogress') {
      req.session.sectionStatus.managingmoney = req.query.managingmoney
    };

    // planningandfollowingajourney
    if (req.query.planningandfollowingajourney == 'completed') {
      if (req.session.sectionStatus.planningandfollowingajourney != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.planningandfollowingajourney = req.query.planningandfollowingajourney
    };
    if (req.query.planningandfollowingajourney == 'inprogress') {
      req.session.sectionStatus.planningandfollowingajourney = req.query.planningandfollowingajourney
    };

    // movingaround
    if (req.query.movingaround == 'completed') {
      if (req.session.sectionStatus.movingaround != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.movingaround = req.query.movingaround
    };
    if (req.query.movingaround == 'inprogress') {
      req.session.sectionStatus.movingaround = req.query.movingaround
    };

    // additionalinformation
    if (req.query.additionalinformation == 'completed') {
      if (req.session.sectionStatus.additionalinformation != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.additionalinformation = req.query.additionalinformation
    };
    if (req.query.additionalinformation == 'inprogress') {
      req.session.sectionStatus.additionalinformation = req.query.additionalinformation
    };

    // if (req.query.supportingevidence) {
    //   if (req.session.sectionStatus.supportingevidence == undefined) {
    //     req.session.sectionCount = (req.session.sectionCount + 1)
    //   }
    //   req.session.sectionStatus.supportingevidence = req.query.supportingevidence
    // };

    res.render('mvp/p5/list.html', {sectionStatus: req.session.sectionStatus, sectionCount: req.session.sectionCount});
  });

  // Clear data on the 'application cancelled' screen

  app.get('/*/clear-p5', function (req, res) {
    req.session.destroy()
    res.render('p5/application-cancelled')
  })


  // Routes

  app.get('/mvp/p5/sign-in/answer-choice', function(req, res) {

    let question = req.session.data['question']

    if (question === 'pdf') {
        res.redirect('tactical-pdf')
      } else {
        res.redirect('intro-question')
      }
  });

  app.get('/mvp/p5/sign-in/intro-question-answer', function(req, res) {

    let question = req.session.data['question']

    if (question === 'no') {
        res.redirect('register-start')
      } else {
        res.redirect('sign-in')
      }
  });

  app.get('/mvp/p5/about-your-health/another-answer', function(req, res) {

    let condition2 = req.session.data['condition2']

    if (condition2 === 'Yes') {
        res.redirect('condition-2')
      } else {
        res.redirect('check')
      }
  });

  app.get('/mvp/p5/about-your-health/another-2-answer', function(req, res) {

    let question = req.session.data['condition3']

    if (question === 'Yes') {
        res.redirect('condition-3')
      } else {
        res.redirect('check')
      }
  });

  app.get('/mvp/p5/about-your-health-professionals/q-health-professional-answer', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('health-professional')
      } else {
        res.redirect('check')
      }
  });

  app.get('/mvp/p5/about-your-health-professionals/another-answer', function(req, res) {

    let professional2 = req.session.data['professional2']

    if (professional2 === 'Yes') {
        res.redirect('health-professional-2')
      } else {
        res.redirect('check')
      }
  });

  app.get('/mvp/p5/about-your-health-professionals/another-2-answer', function(req, res) {

    let professional3 = req.session.data['professional3']

    if (professional3 === 'Yes') {
        res.redirect('health-professional-3')
      } else {
        res.redirect('check')
      }
  });


  // Preparing food

  app.get('/mvp/p5/preparing-food/index-answer', function(req, res) {

    let question = req.session.data['preparingfood-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Eating and drinking

  app.get('/mvp/p5/eating-and-drinking/index-answer', function(req, res) {

    let question = req.session.data['eatinganddrinking-question']

    if (question === 'Yes') {
        res.redirect('feeding-tube')
      } else {
        res.redirect('check')
      }
  });

  // Managing treatments

  app.get('/mvp/p5/managing-treatments/index-answer', function(req, res) {

    let question = req.session.data['managingtreatments-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Washing and bathing

  app.get('/mvp/p5/washing-and-bathing/index-answer', function(req, res) {

    let question = req.session.data['washingandbathing-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Managing toilet needs

  app.get('/mvp/p5/managing-toilet-needs/index-answer', function(req, res) {

    let question = req.session.data['managingtoiletneeds-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Dressing and undressing

  app.get('/mvp/p5/dressing-and-undressing/index-answer', function(req, res) {

    let question = req.session.data['dressingandundressing-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Talking and listening

  app.get('/mvp/p5/talking-and-listening/index-answer', function(req, res) {

    let question = req.session.data['talkingandlistening-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Reading

  app.get('/mvp/p5/reading/index-answer', function(req, res) {

    let question = req.session.data['reading-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Mixing with other people

  app.get('/mvp/p5/mixing-with-other-people/index-answer', function(req, res) {

    let question = req.session.data['mixingwithotherpeople-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Managing money

  app.get('/mvp/p5/managing-money/index-answer', function(req, res) {

    let question = req.session.data['managingmoney-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Planning and following a journey

  app.get('/mvp/p5/planning-and-following-a-journey/index-answer', function(req, res) {

    let question = req.session.data['planningandfollowingajourney-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Moving around

  app.get('/mvp/p5/moving-around/index-answer', function(req, res) {

    let question = req.session.data['movingaround-question']

    if (question === 'Yes') {
        res.redirect('info')
      } else {
        res.redirect('check')
      }
  });

  // Additional information

  app.get('/mvp/p5/additional-information/index-answer', function(req, res) {

    let question = req.session.data['additionalinformation-question']

    if (question === 'Yes') {
        res.redirect('details')
      } else {
        res.redirect('check')
      }
  });

  // Apply

  app.get('/mvp/p5/apply/pdf-answer', function(req, res) {

    let question = req.session.data['download']

    if (question === 'yes') {
        res.redirect('download')
      } else {
        res.redirect('confirmation')
      }
  });



  // Supporting evidence

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('file-upload-help')
      } else {
        res.redirect('/mvp/p5/motability-scheme')
      }
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-uploaded-1-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-2')
      } else {
        res.redirect('/mvp/p5/motability-scheme')
      }
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-uploaded-2-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-3')
      } else {
        res.redirect('/mvp/p5/motability-scheme')
      }
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-uploaded-3-data', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-4')
      } else {
        res.redirect('/mvp/p5/motability-scheme')
      }
  });


  // Uploading screens

  app.get('/mvp/p5/supporting-evidence/uploading-supporting-evidence-1', function(req, res) {
    res.render('p5/supporting-evidence/uploading', { 'file' : 'supporting-evidence-1' });
  });

  app.get('/mvp/p5/supporting-evidence/uploading-supporting-evidence-2', function(req, res) {
    res.render('p5/supporting-evidence/uploading', { 'file' : 'supporting-evidence-2' });
  });

  app.get('/mvp/p5/supporting-evidence/uploading-supporting-evidence-3', function(req, res) {
    res.render('p5/supporting-evidence/uploading', { 'file' : 'supporting-evidence-3' });
  });

// // Coming back uploading evidence

//   app.get('/mvp/p5/coming-back/supporting-evidence-uploaded-1', function(req, res) {

//     let question = req.session.data['question']

//     if (question === 'yes') {
//         res.redirect('/mvp/p5/coming-back/supporting-evidence-upload-2')
//       } else {
//         res.redirect('/mvp/p5/coming-back/confirmation-returning')
//       }
//   });




  // Check you answers variations

  app.get('/mvp/p5/supporting-evidence/upload-cya', function(req, res) {
    res.render('p5/supporting-evidence/upload', { 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/uploading-cya', function(req, res) {
    res.render('p5/supporting-evidence/uploading', { 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/uploaded-1-cya', function(req, res) {
    res.render('p5/supporting-evidence/uploaded-1', { 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence', { 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('interruption-screen-cya')
      } else {
        res.redirect('check')
      }
  });

  app.get('/mvp/p5/supporting-evidence/interruption-screen-cya', function(req, res) {
    res.render('p5/supporting-evidence/interruption-screen', { 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-upload-1-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-upload-1', { 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence-upload-2-cya', function(req, res) {
    res.render('p5/supporting-evidence-upload-2', { 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-upload-3-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-upload-3', { 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/uploading-supporting-evidence-1-cya', function(req, res) {
    res.render('p5/supporting-evidence/uploading', { 'file' : 'supporting-evidence-1', 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/uploading-supporting-evidence-2-cya', function(req, res) {
    res.render('p5/supporting-evidence/uploading', { 'file' : 'supporting-evidence-2', 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/uploading-supporting-evidence-3-cya', function(req, res) {
    res.render('p5/supporting-evidence/uploading', { 'file' : 'supporting-evidence-3', 'cya' : 'true' });
  });


  app.get('/mvp/p5/supporting-evidence/supporting-evidence-upload-1-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-upload-1', { 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-upload-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-upload-2', { 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-upload-3-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-upload-3', { 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-uploaded-1-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-uploaded-1', { 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-uploaded-2-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-uploaded-2', { 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-uploaded-3-cya', function(req, res) {
    res.render('p5/supporting-evidence/supporting-evidence-uploaded-3', { 'cya' : 'true' });
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-uploaded-1-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-2-cya')
      } else {
        res.redirect('check')
      }
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-uploaded-2-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-3-cya')
      } else {
        res.redirect('check')
      }
  });

  app.get('/mvp/p5/supporting-evidence/supporting-evidence-uploaded-3-data-cya', function(req, res) {

    let question = req.session.data['question']

    if (question === 'yes') {
        res.redirect('supporting-evidence-upload-4-cya')
      } else {
        res.redirect('check')
      }
  });


  // END OF VERSION 1 ROUTES

}
