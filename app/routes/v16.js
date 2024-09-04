const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

// PIP ROUTING

// PIP2 HEALTH INFORMATION GATHER

router.post('/v16/v1/health-form/about-your-health/condition', (req, res, next) => {
    res.redirect('/v16/v1/health-form/about-your-health/condition-details');
});

router.post('/v16/v1/health-form/about-your-health/condition-details', (req, res, next) => {
    res.redirect('/v16/v1/health-form/about-your-health/another');
});

router.post('/v16/v1/health-form/about-your-health/another', (req, res, next) => {
        const condition2 = req.session.data['condition2'];
          if (condition2 === 'Yes') {
            res.redirect('/v16/v1/health-form/about-your-health/condition');
        } else {
            res.redirect('/v16/v1/health-form/about-your-health/check');
        }
});


router.post('/v16/v1/health-form/about-your-health-professionals/introduction', (req, res, next) => {
    res.redirect('/v16/v1/health-form/about-your-health-professionals/health-professional-question');
});

router.post('/v16/v1/health-form/about-your-health-professionals/health-professional-question', (req, res, next) => {
        const question = req.session.data['question'];
          if (question === 'yes') {
            res.redirect('/v16/v1/health-form/about-your-health-professionals/health-professional');
        } else {
            res.redirect('/v16/v1/health-form/about-your-health-professionals/check');
        }
});

router.post('/v16/v1/health-form/about-your-health-professionals/health-professional', (req, res, next) => {
    res.redirect('/v16/v1/health-form/about-your-health-professionals/check');
});

router.post('/v16/v1/health-form/preparing-food/intro', (req, res, next) => {
      const preparingfoodQuestion = req.session.data['preparingfood-question'];
        if (preparingfoodQuestion === 'Yes') {
          res.redirect('/v16/v1/health-form/preparing-food/info');
      } else {
          res.redirect('/v16/v1/health-form/preparing-food/check');
      }
});

router.post('/v16/v1/health-form/preparing-food/info', (req, res, next) => {
    res.redirect('/v16/v1/health-form/preparing-food/details');
});

router.post('/v16/v1/health-form/preparing-food/details', (req, res, next) => {
    res.redirect('/v16/v1/health-form/preparing-food/check');
});

router.post('/v16/v1/health-form/eating-and-drinking/intro', (req, res, next) => {
      const eatinganddrinkingQuestion = req.session.data['eatinganddrinking-question'];
        if (eatinganddrinkingQuestion === 'Yes') {
          res.redirect('/v16/v1/health-form/eating-and-drinking/info');
      } else {
          res.redirect('/v16/v1/health-form/eating-and-drinking/check');
      }
});

router.post('/v16/v1/health-form/eating-and-drinking/info', (req, res, next) => {
    res.redirect('/v16/v1/health-form/eating-and-drinking/details');
});

router.post('/v16/v1/health-form/eating-and-drinking/details', (req, res, next) => {
    res.redirect('/v16/v1/health-form/eating-and-drinking/check');
});

router.post('/v16/v1/health-form/managing-treatments/intro', (req, res, next) => {
      const managingtreatmentsQuestion = req.session.data['managingtreatments-question'];
        if (managingtreatmentsQuestion === 'Yes') {
          res.redirect('/v16/v1/health-form/managing-treatments/info');
      } else {
          res.redirect('/v16/v1/health-form/managing-treatments/check');
      }
});

router.post('/v16/v1/health-form/managing-treatments/info', (req, res, next) => {
    res.redirect('/v16/v1/health-form/managing-treatments/details');
});

router.post('/v16/v1/health-form/managing-treatments/details', (req, res, next) => {
    res.redirect('/v16/v1/health-form/managing-treatments/therapies');
});

router.post('/v16/v1/health-form/managing-treatments/therapies', (req, res, next) => {
    res.redirect('/v16/v1/health-form/managing-treatments/check');
});

router.post('/v16/v1/health-form/washing-and-bathing/intro', (req, res, next) => {
      const washingandbathingQuestion = req.session.data['washingandbathing-question'];
        if (washingandbathingQuestion === 'Yes') {
          res.redirect('/v16/v1/health-form/washing-and-bathing/info');
      } else {
          res.redirect('/v16/v1/health-form/washing-and-bathing/check');
      }
});

router.post('/v16/v1/health-form/washing-and-bathing/info', (req, res, next) => {
    res.redirect('/v16/v1/health-form/washing-and-bathing/details');
});

router.post('/v16/v1/health-form/washing-and-bathing/details', (req, res, next) => {
    res.redirect('/v16/v1/health-form/washing-and-bathing/check');
});

router.post('/v16/v1/health-form/managing-toilet-needs/intro', (req, res, next) => {
      const managingtoiletneedsQuestion = req.session.data['managingtoiletneeds-question'];
        if (managingtoiletneedsQuestion === 'Yes') {
          res.redirect('/v16/v1/health-form/managing-toilet-needs/info');
      } else {
          res.redirect('/v16/v1/health-form/managing-toilet-needs/check');
      }
});

router.post('/v16/v1/health-form/managing-toilet-needs/info', (req, res, next) => {
    res.redirect('/v16/v1/health-form/managing-toilet-needs/details');
});

router.post('/v16/v1/health-form/managing-toilet-needs/details', (req, res, next) => {
    res.redirect('/v16/v1/health-form/managing-toilet-needs/check');
});

router.post('/v16/v1/health-form/dressing-and-undressing/intro', (req, res, next) => {
      const dressingandundressingQuestion = req.session.data['dressingandundressing-question'];
        if (dressingandundressingQuestion === 'Yes') {
          res.redirect('/v16/v1/health-form/dressing-and-undressing/info');
      } else {
          res.redirect('/v16/v1/health-form/dressing-and-undressing/check');
      }
});

router.post('/v16/v1/health-form/dressing-and-undressing/info', (req, res, next) => {
    res.redirect('/v16/v1/health-form/dressing-and-undressing/details');
});

router.post('/v16/v1/health-form/dressing-and-undressing/details', (req, res, next) => {
    res.redirect('/v16/v1/health-form/dressing-and-undressing/check');
});

router.post('/v16/v1/health-form/talking-and-listening/intro', (req, res, next) => {
      const talkingandlisteningQuestion = req.session.data['talkingandlistening-question'];
        if (talkingandlisteningQuestion === 'Yes') {
          res.redirect('/v16/v1/health-form/talking-and-listening/info');
      } else {
          res.redirect('/v16/v1/health-form/talking-and-listening/check');
      }
});

router.post('/v16/v1/health-form/talking-and-listening/info', (req, res, next) => {
    res.redirect('/v16/v1/health-form/talking-and-listening/details');
});

router.post('/v16/v1/health-form/talking-and-listening/details', (req, res, next) => {
    res.redirect('/v16/v1/health-form/talking-and-listening/check');
});

router.post('/v16/v1/health-form/reading/intro', (req, res, next) => {
      const readingQuestion = req.session.data['reading-question'];
        if (readingQuestion === 'Yes') {
          res.redirect('/v16/v1/health-form/reading/info');
      } else {
          res.redirect('/v16/v1/health-form/reading/check');
      }
});

router.post('/v16/v1/health-form/reading/info', (req, res, next) => {
    res.redirect('/v16/v1/health-form/reading/details');
});


router.post('/v16/v1/health-form/reading/details', (req, res, next) => {
    res.redirect('/v16/v1/health-form/reading/check');
});

router.post('/v16/v1/health-form/mixing-with-other-people/intro', (req, res, next) => {
      const mixingwithotherpeopleQuestion = req.session.data['mixingwithotherpeople-question'];
        if (mixingwithotherpeopleQuestion === 'Yes') {
          res.redirect('/v16/v1/health-form/mixing-with-other-people/info');
      } else {
          res.redirect('/v16/v1/health-form/mixing-with-other-people/check');
      }
});

router.post('/v16/v1/health-form/mixing-with-other-people/info', (req, res, next) => {
    res.redirect('/v16/v1/health-form/mixing-with-other-people/details');
});

router.post('/v16/v1/health-form/mixing-with-other-people/details', (req, res, next) => {
    res.redirect('/v16/v1/health-form/mixing-with-other-people/check');
});

router.post('/v16/v1/health-form/managing-money/intro', (req, res, next) => {
      const managingmoneyQuestion = req.session.data['managingmoney-question'];
        if (managingmoneyQuestion === 'Yes') {
          res.redirect('/v16/v1/health-form/managing-money/info');
      } else {
          res.redirect('/v16/v1/health-form/managing-money/check');
      }
});

router.post('/v16/v1/health-form/managing-money/info', (req, res, next) => {
    res.redirect('/v16/v1/health-form/managing-money/details');
});

router.post('/v16/v1/health-form/managing-money/details', (req, res, next) => {
    res.redirect('/v16/v1/health-form/managing-money/check');
});

router.post('/v16/v1/health-form/planning-and-following-a-journey/intro', (req, res, next) => {
      const planningandfollowingajourneyQuestion = req.session.data['planningandfollowingajourney-question'];
        if (planningandfollowingajourneyQuestion === 'Yes') {
          res.redirect('/v16/v1/health-form/planning-and-following-a-journey/info');
      } else {
          res.redirect('/v16/v1/health-form/planning-and-following-a-journey/check');
      }
});

router.post('/v16/v1/health-form/planning-and-following-a-journey/info', (req, res, next) => {
    res.redirect('/v16/v1/health-form/planning-and-following-a-journey/details');
});

router.post('/v16/v1/health-form/planning-and-following-a-journey/details', (req, res, next) => {
    res.redirect('/v16/v1/health-form/planning-and-following-a-journey/check');
});

router.post('/v16/v1/health-form/moving-around/intro', (req, res, next) => {
      const movingaroundQuestion = req.session.data['movingaround-question'];
        if (movingaroundQuestion === 'Yes') {
          res.redirect('/v16/v1/health-form/moving-around/info');
      } else {
          res.redirect('/v16/v1/health-form/moving-around/check');
      }
});

router.post('/v16/v1/health-form/moving-around/info', (req, res, next) => {
      const movingaroundInfo = req.session.data['movingaround-info'];
        if (movingaroundInfo === 'It varies') {
          res.redirect('/v16/v1/health-form/moving-around/varies');
      } else {
          res.redirect('/v16/v1/health-form/moving-around/details');
      }
});

router.post('/v16/v1/health-form/moving-around/varies', (req, res, next) => {
    res.redirect('/v16/v1/health-form/moving-around/details');
});


router.post('/v16/v1/health-form/moving-around/details', (req, res, next) => {
    res.redirect('/v16/v1/health-form/moving-around/check');
});

router.post('/v16/v1/health-form/additional-information/intro', (req, res, next) => {
      const additionalinformationQuestion = req.session.data['additionalinformation-question'];
        if (additionalinformationQuestion === 'Yes') {
          res.redirect('/v16/v1/health-form/additional-information/details');
      } else {
          res.redirect('/v16/v1/health-form/additional-information/check');
      }
});

router.post('/v16/v1/health-form/additional-information/details', (req, res, next) => {
    res.redirect('/v16/v1/health-form/additional-information/check');
});

router.post('/v16/v1/health-form/supporting-evidence/intro', (req, res, next) => {
    res.redirect('/v16/v1/health-form/supporting-evidence/supporting-evidence');
});

router.post('/v16/v1/health-form/supporting-evidence/supporting-evidence', (req, res, next) => {
    res.redirect('/v16/v1/health-form/declaration');
});




}
