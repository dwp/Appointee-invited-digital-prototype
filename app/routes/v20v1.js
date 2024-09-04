const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

  // Code supplied by Gary for dealing with query strings
  router.use(function(req, res, next){
    Object.assign(res.locals,{
      postData: (req.body ? req.body : false)
    });

    Object.assign(res.locals,{
      getData: (req.query ? req.query : false)
    });

    next();
  });

  // Code for the list screen

  router.get('/v20v1/health-form/task-list', (req, res, next) => {

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
        clearstatus: undefined,
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

    // clearclaim
    if (req.query.clearstatus == 'completed') {
      req.session.sectionStatus.clearclaim = req.query.clearstatus
      req.session.sectionStatus.aboutyourhealth = req.query.aboutyourhealth
      req.session.sectionStatus.aboutyourhealthprofessionals = req.query.aboutyourhealthprofessionals
      req.session.sectionStatus.preparingfood = req.query.preparingfood
      req.session.sectionStatus.eatinganddrinking = req.query.eatinganddrinking
      req.session.sectionStatus.managingtreatments = req.query.managingtreatments
      req.session.sectionStatus.washingandbathing = req.query.washingandbathing
      req.session.sectionStatus.managingtoiletneeds = req.query.managingtoiletneeds
      req.session.sectionStatus.dressingandundressing = req.query.dressingandundressing
      req.session.sectionStatus.talkingandlistening = req.query.talkingandlistening
      req.session.sectionStatus.reading = req.query.reading
      req.session.sectionStatus.mixingwithotherpeople = req.query.mixingwithotherpeople
      req.session.sectionStatus.managingmoney = req.query.managingmoney
      req.session.sectionStatus.planningandfollowingajourney = req.query.planningandfollowingajourney
      req.session.sectionStatus.movingaround = req.query.movingaround
      req.session.sectionStatus.additionalinformation = req.query.additionalinformation
      if (!req.session.sectionCount){
        req.session.sectionCount = 0;
      }
    };



    res.render('v20v1/health-form/task-list.html', {sectionStatus: req.session.sectionStatus, sectionCount: req.session.sectionCount});
  });


// PIP ROUTING


// PIP SIGN-IN

router.post('/v20v1/verify/your-details', (req, res, next) => {
        res.redirect('/v20v1/verify/sign-in/dth');
});

router.post('/v20v1/verify/sign-in/dth', (req, res, next) => {
        res.redirect('/v20v1/verify/sign-in/dth-code-text');
});

router.post('/v20v1/verify/sign-in/dth-code-text', (req, res, next) => {
        res.redirect('/v20v1/verify/signed-in');
});

router.post('/v20v1/verify/signed-in', (req, res, next) => {
        res.redirect('/v20v1/claimant-home/landing');
});



// PIP1 CLAIM-REGISTRATION

router.post('/v20v1/claim-registration/skip', (req, res, next) => {
        res.redirect('/v20v1/claim-registration/confirmation');
});

router.post('/v20v1/claim-registration/additional-support/communicating', (req, res, next) => {
        res.redirect('/v20v1/claim-registration/additional-support/forms-letters');
});

router.post('/v20v1/claim-registration/additional-support/forms-letters', (req, res, next) => {
        const addSupport = req.session.data['add-support'];
          if (addSupport === 'Yes') {
            res.redirect('/v20v1/claim-registration/additional-support/help');
        } else {
            res.redirect('/v20v1/claim-registration/additional-support/check-answers-1');
        }
});

router.post('/v20v1/claim-registration/additional-support/help', (req, res, next) => {
        const addsupportHelp = req.session.data['add-support-help'];
          if (addsupportHelp === 'Yes') {
            res.redirect('/v20v1/claim-registration/additional-support/help-name');
        } else {
            res.redirect('/v20v1/claim-registration/additional-support/check-answers-1');
        }
});

router.post('/v20v1/claim-registration/additional-support/help-name', (req, res, next) => {
        res.redirect('/v20v1/claim-registration/additional-support/check-answers-1');
});

router.post('/v20v1/claim-registration/additional-support/check-answers-1', (req, res, next) => {
        res.redirect('/v20v1/claim-registration/personal-details/name');
});


router.post('/v20v1/claim-registration/personal-details/name', (req, res, next) => {
        res.redirect('/v20v1/claim-registration/personal-details/nino');
});

router.post('/v20v1/claim-registration/personal-details/nino', (req, res, next) => {
        res.redirect('/v20v1/claim-registration/personal-details/date-of-birth');
});

router.post('/v20v1/claim-registration/personal-details/date-of-birth', (req, res, next) => {
        res.redirect('/v20v1/claim-registration/personal-details/address');
})

router.post('/v20v1/claim-registration/personal-details/address', (req, res, next) => {
        const safeAddress = req.session.data['safe-address'];
          if (safeAddress === 'Yes') {
            res.redirect('/v20v1/claim-registration/personal-details/contact-details');
        } else {
            res.redirect('/v20v1/claim-registration/personal-details/address-other');
        }
});

router.post('/v20v1/claim-registration/personal-details/address-other', (req, res, next) => {
        res.redirect('/v20v1/claim-registration/personal-details/contact-details');
})


router.post('/v20v1/claim-registration/personal-details/contact-details', (req, res, next) => {
        res.redirect('/v20v1/claim-registration/personal-details/bank-account');
});

router.post('/v20v1/claim-registration/personal-details/bank-account', (req, res, next) => {
        const yourAccount = req.session.data['your-account'];
          if (yourAccount === 'Yes') {
            res.redirect('/v20v1/claim-registration/personal-details/bank-account-details');
        } else {
            res.redirect('/v20v1/claim-registration/personal-details/continue-without-bank-details');
        }
});

router.post('/v20v1/claim-registration/personal-details/continue-without-bank-details', (req, res, next) => {
        res.redirect('/v20v1/claim-registration/personal-details/alt-formats');
});

router.post('/v20v1/claim-registration/personal-details/bank-account-details', (req, res, next) => {
        res.redirect('/v20v1/claim-registration/personal-details/alt-formats');
});

router.post('/v20v1/claim-registration/personal-details/alt-formats', (req, res, next) => {
        const communicationFormat = req.session.data['communication-format'];
          if (communicationFormat === 'Yes') {
            res.redirect('/v20v1/claim-registration/personal-details/alt-formats/type');
        } else {
            res.redirect('/v20v1/claim-registration/personal-details/check-answers-2');
        }
});

router.post('/v20v1/claim-registration/personal-details/check-answers-2', (req, res, next) => {
        res.redirect('/v20v1/claim-registration/skip');
});



// PIP2 HEALTH INFORMATION GATHER

router.post('/v20v1/health-form/about-your-health/condition', (req, res, next) => {
    res.redirect('/v20v1/health-form/about-your-health/condition-details');
});

router.post('/v20v1/health-form/about-your-health/condition-details', (req, res, next) => {
    res.redirect('/v20v1/health-form/about-your-health/another');
});

router.post('/v20v1/health-form/about-your-health/another', (req, res, next) => {
        const condition2 = req.session.data['condition2'];
          if (condition2 === 'Yes') {
            res.redirect('/v20v1/health-form/about-your-health/condition2');
        } else {
            res.redirect('/v20v1/health-form/about-your-health/check');
        }
});

router.post('/v20v1/health-form/about-your-health/condition2', (req, res, next) => {
    res.redirect('/v20v1/health-form/about-your-health/condition-details-2');
});

router.post('/v20v1/health-form/about-your-health/condition-details-2', (req, res, next) => {
    res.redirect('/v20v1/health-form/about-your-health/another-2');
});

router.post('/v20v1/health-form/about-your-health/another-2', (req, res, next) => {
    res.redirect('/v20v1/health-form/about-your-health/check');
});


router.post('/v20v1/health-form/about-your-health-professionals/introduction', (req, res, next) => {
    res.redirect('/v20v1/health-form/about-your-health-professionals/health-professional-question');
});

router.post('/v20v1/health-form/about-your-health-professionals/health-professional-question', (req, res, next) => {
        const question = req.session.data['question'];
          if (question === 'Yes') {
            res.redirect('/v20v1/health-form/about-your-health-professionals/health-professional');
        } else {
            res.redirect('/v20v1/health-form/about-your-health-professionals/check');
        }
});

router.post('/v20v1/health-form/about-your-health-professionals/health-professional', (req, res, next) => {
    res.redirect('/v20v1/health-form/about-your-health-professionals/check');
});

router.post('/v20v1/health-form/preparing-food/intro', (req, res, next) => {
      const preparingfoodQuestion = req.session.data['preparingfood-question'];
        if (preparingfoodQuestion === 'Yes') {
          res.redirect('/v20v1/health-form/preparing-food/details');
      } else {
          res.redirect('/v20v1/health-form/preparing-food/check');
      }
});

router.post('/v20v1/health-form/preparing-food/details', (req, res, next) => {
    res.redirect('/v20v1/health-form/preparing-food/check');
});

router.post('/v20v1/health-form/eating-and-drinking/intro', (req, res, next) => {
      const eatinganddrinkingQuestion = req.session.data['eatinganddrinking-question'];
        if (eatinganddrinkingQuestion === 'Yes') {
          res.redirect('/v20v1/health-form/eating-and-drinking/feeding-tube');
      } else {
          res.redirect('/v20v1/health-form/eating-and-drinking/check');
      }
});

router.post('/v20v1/health-form/eating-and-drinking/feeding-tube', (req, res, next) => {
    res.redirect('/v20v1/health-form/eating-and-drinking/details');
});

router.post('/v20v1/health-form/eating-and-drinking/details', (req, res, next) => {
    res.redirect('/v20v1/health-form/eating-and-drinking/check');
});

router.post('/v20v1/health-form/managing-treatments/intro', (req, res, next) => {
      const managingtreatmentsQuestion = req.session.data['managingtreatments-question'];
        if (managingtreatmentsQuestion === 'Yes') {
          res.redirect('/v20v1/health-form/managing-treatments/details');
      } else {
          res.redirect('/v20v1/health-form/managing-treatments/check');
      }
});

router.post('/v20v1/health-form/managing-treatments/details', (req, res, next) => {
    res.redirect('/v20v1/health-form/managing-treatments/therapies');
});

router.post('/v20v1/health-form/managing-treatments/therapies', (req, res, next) => {
    res.redirect('/v20v1/health-form/managing-treatments/check');
});

router.post('/v20v1/health-form/washing-and-bathing/intro', (req, res, next) => {
      const washingandbathingQuestion = req.session.data['washingandbathing-question'];
        if (washingandbathingQuestion === 'Yes') {
          res.redirect('/v20v1/health-form/washing-and-bathing/details');
      } else {
          res.redirect('/v20v1/health-form/washing-and-bathing/check');
      }
});

router.post('/v20v1/health-form/washing-and-bathing/details', (req, res, next) => {
    res.redirect('/v20v1/health-form/washing-and-bathing/check');
});

router.post('/v20v1/health-form/managing-toilet-needs/intro', (req, res, next) => {
      const managingtoiletneedsQuestion = req.session.data['managingtoiletneeds-question'];
        if (managingtoiletneedsQuestion === 'Yes') {
          res.redirect('/v20v1/health-form/managing-toilet-needs/details');
      } else {
          res.redirect('/v20v1/health-form/managing-toilet-needs/check');
      }
});

router.post('/v20v1/health-form/managing-toilet-needs/details', (req, res, next) => {
    res.redirect('/v20v1/health-form/managing-toilet-needs/check');
});

router.post('/v20v1/health-form/dressing-and-undressing/intro', (req, res, next) => {
      const dressingandundressingQuestion = req.session.data['dressingandundressing-question'];
        if (dressingandundressingQuestion === 'Yes') {
          res.redirect('/v20v1/health-form/dressing-and-undressing/details');
      } else {
          res.redirect('/v20v1/health-form/dressing-and-undressing/check');
      }
});

router.post('/v20v1/health-form/dressing-and-undressing/details', (req, res, next) => {
    res.redirect('/v20v1/health-form/dressing-and-undressing/check');
});

router.post('/v20v1/health-form/talking-and-listening/intro', (req, res, next) => {
      const talkingandlisteningQuestion = req.session.data['talkingandlistening-question'];
        if (talkingandlisteningQuestion === 'Yes') {
          res.redirect('/v20v1/health-form/talking-and-listening/details');
      } else {
          res.redirect('/v20v1/health-form/talking-and-listening/check');
      }
});

router.post('/v20v1/health-form/talking-and-listening/details', (req, res, next) => {
    res.redirect('/v20v1/health-form/talking-and-listening/check');
});

router.post('/v20v1/health-form/reading/intro', (req, res, next) => {
      const readingQuestion = req.session.data['reading-question'];
        if (readingQuestion === 'Yes') {
          res.redirect('/v20v1/health-form/reading/details');
      } else {
          res.redirect('/v20v1/health-form/reading/check');
      }
});

router.post('/v20v1/health-form/reading/details', (req, res, next) => {
    res.redirect('/v20v1/health-form/reading/check');
});

router.post('/v20v1/health-form/mixing-with-other-people/intro', (req, res, next) => {
      const mixingwithotherpeopleQuestion = req.session.data['mixingwithotherpeople-question'];
        if (mixingwithotherpeopleQuestion === 'Yes') {
          res.redirect('/v20v1/health-form/mixing-with-other-people/details');
      } else {
          res.redirect('/v20v1/health-form/mixing-with-other-people/check');
      }
});

router.post('/v20v1/health-form/mixing-with-other-people/details', (req, res, next) => {
    res.redirect('/v20v1/health-form/mixing-with-other-people/check');
});

router.post('/v20v1/health-form/managing-money/intro', (req, res, next) => {
      const managingmoneyQuestion = req.session.data['managingmoney-question'];
        if (managingmoneyQuestion === 'Yes') {
          res.redirect('/v20v1/health-form/managing-money/details');
      } else {
          res.redirect('/v20v1/health-form/managing-money/check');
      }
});

router.post('/v20v1/health-form/managing-money/details', (req, res, next) => {
    res.redirect('/v20v1/health-form/managing-money/check');
});

router.post('/v20v1/health-form/planning-and-following-a-journey/intro', (req, res, next) => {
      const planningandfollowingajourneyQuestion = req.session.data['planningandfollowingajourney-question'];
        if (planningandfollowingajourneyQuestion === 'Yes') {
          res.redirect('/v20v1/health-form/planning-and-following-a-journey/details');
      } else {
          res.redirect('/v20v1/health-form/planning-and-following-a-journey/check');
      }
});

router.post('/v20v1/health-form/planning-and-following-a-journey/details', (req, res, next) => {
    res.redirect('/v20v1/health-form/planning-and-following-a-journey/check');
});

router.post('/v20v1/health-form/moving-around/intro', (req, res, next) => {
      const movingaroundQuestion = req.session.data['movingaround-question'];
        if (movingaroundQuestion === 'Yes') {
          res.redirect('/v20v1/health-form/moving-around/info');
      } else {
          res.redirect('/v20v1/health-form/moving-around/check');
      }
});

router.post('/v20v1/health-form/moving-around/info', (req, res, next) => {
      const movingaroundInfo = req.session.data['movingaround-info'];
        if (movingaroundInfo === 'It varies') {
          res.redirect('/v20v1/health-form/moving-around/varies');
      } else {
          res.redirect('/v20v1/health-form/moving-around/details');
      }
});

router.post('/v20v1/health-form/moving-around/varies', (req, res, next) => {
    res.redirect('/v20v1/health-form/moving-around/details');
});


router.post('/v20v1/health-form/moving-around/details', (req, res, next) => {
    res.redirect('/v20v1/health-form/moving-around/check');
});

router.post('/v20v1/health-form/additional-information/intro', (req, res, next) => {
      const additionalinformationQuestion = req.session.data['additionalinformation-question'];
        if (additionalinformationQuestion === 'Yes') {
          res.redirect('/v20v1/health-form/additional-information/details');
      } else {
          res.redirect('/v20v1/health-form/additional-information/check');
      }
});

router.post('/v20v1/health-form/additional-information/details', (req, res, next) => {
    res.redirect('/v20v1/health-form/additional-information/check');
});

router.post('/v20v1/health-form/supporting-evidence/intro', (req, res, next) => {
    res.redirect('/v20v1/health-form/supporting-evidence/supporting-evidence');
});

router.post('/v20v1/health-form/supporting-evidence/supporting-evidence', (req, res, next) => {
      const question = req.session.data['question'];
        if (question === 'yes') {
          res.redirect('/v20v1/health-form/supporting-evidence/supporting-evidence-upload-1');
      } else {
          res.redirect('/v20v1/health-form/declaration');
      }
});

router.post('/v20v1/health-form/supporting-evidence/supporting-evidence-uploaded-1', (req, res, next) => {
      const question = req.session.data['question'];
        if (question === 'yes') {
          res.redirect('/v20v1/health-form/supporting-evidence/supporting-evidence-upload-2');
      } else {
          res.redirect('/v20v1/health-form/declaration');
      }
});

router.post('/v20v1/health-form/supporting-evidence/supporting-evidence-uploaded-2', (req, res, next) => {
    res.redirect('/v20v1/health-form/declaration');
});

router.post('/v20v1/health-form/supporting-evidence/evidence-by-post', (req, res, next) => {
    res.redirect('/v20v1/health-form/declaration');
});


// SUPPORTING EVIDENCE POST SUBMISSION

router.post('/v20v1/health-form/supporting-evidence/post-submission/intro', (req, res, next) => {
    res.redirect('/v20v1/health-form/supporting-evidence/post-submission/supporting-evidence');
});

router.post('/v20v1/health-form/supporting-evidence/post-submission/supporting-evidence', (req, res, next) => {
      const question = req.session.data['question'];
        if (question === 'yes') {
          res.redirect('/v20v1/health-form/supporting-evidence/post-submission/supporting-evidence-upload-1');
      } else {
          res.redirect('/v20v1/claimant-home/landing-2');
      }
});

router.post('/v20v1/health-form/supporting-evidence/post-submission/supporting-evidence-uploaded-1', (req, res, next) => {
      const question = req.session.data['question'];
        if (question === 'yes') {
          res.redirect('/v20v1/health-form/supporting-evidence/post-submission/supporting-evidence-upload-2');
      } else {
          res.redirect('supporting-evidence-confirmation');
      }
});

router.post('/v20v1/health-form/supporting-evidence/post-submission/supporting-evidence-uploaded-2', (req, res, next) => {
      const question = req.session.data['question'];
        if (question === 'yes') {
          res.redirect('/v20v1/health-form/supporting-evidence/post-submission/supporting-evidence-upload-2');
      } else {
          res.redirect('supporting-evidence-confirmation');
      }
});

router.post('/v20v1/health-form/supporting-evidence/post-submission/evidence-by-post', (req, res, next) => {
    res.redirect('/v20v1/claimant-home/landing-2');
});


// ONLINE IDENTIFICTAION

router.post('/v20v1-1/oidv/check-identity', (req, res, next) => {
      const checkIdentity = req.session.data['checkIdentity'];
        if (checkIdentity === 'Yes') {
          res.redirect('https://v20v1-idv.herokuapp.com/zero-confidence/v1/identity/check-identity');
      } else {
          res.redirect('/v20v1/oidv/check-identity-call');
      }
});


}
