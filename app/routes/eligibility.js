const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

// PIP ELIGIBILITY



  router.post('/PIP1/eligibility/eligibility-intro2', (req, res, next) => {
          res.redirect('/PIP1/eligibility/eligibility-start2');
  });

  router.post('/PIP1/eligibility/eligibility-start2', (req, res, next) => {
          const eligChoice = req.session.data['eligibility-choice'];
            if (eligChoice === 'Check I am eligible for PIP') {
              res.redirect('/PIP1/eligibility/over-16');
          } else if (eligChoice === 'Check if I can use the online service') {
              res.redirect('/PIP1/eligibility/postcode-check');
          } else {
              res.redirect('/PIP1/eligibility/sign-in')
          }
  });

  router.post('/PIP1/eligibility/over-16', (req, res, next) => {
          const over16 = req.session.data['over-16'];
            if (over16 === 'Yes') {
              res.redirect('/PIP1/eligibility/state-pension');
          } else {
              res.redirect('/PIP1/eligibility/dla-children');
          }
  });

  router.post('/PIP1/eligibility/dla-children', (req, res, next) => {
          const dlaChild = req.session.data['dla-child'];
            if (dlaChild === 'Yes') {
              res.redirect('/PIP1/eligibility/dla-children-end');
          } else {
              res.redirect('/PIP1/eligibility/over-16-end');
          }
  });

  router.post('/PIP1/eligibility/state-pension', (req, res, next) => {
          const statePension = req.session.data['state-pension-age'];
            if (statePension === 'Yes') {
              res.redirect('/PIP1/eligibility/everyday-tasks2');
          } else {
              res.redirect('/PIP1/eligibility/state-pension-end');
          }
  });

  router.post('/PIP1/eligibility/difficulty', (req, res, next) => {
          const difficulty = req.session.data['difficulty'];
            if (difficulty === 'Yes') {
              res.redirect('/PIP1/eligibility/difficulty-length');
          } else if (difficulty === 'No') {
              res.redirect('/PIP1/eligibility/difficulty-end');
          } else {
              res.redirect('/PIP1/eligibility/eligibility-end');
          }
  });

  router.post('/PIP1/eligibility/everyday-tasks1', (req, res, next) => {
          const everydayTasks = req.session.data['everyday-tasks'];
            if (everydayTasks === 'Yes') {
              res.redirect('/PIP1/eligibility/difficulty-end');
          } else if (everydayTasks === 'No') {
              res.redirect('/PIP1/eligibility/difficulty-length');
          } else {
              res.redirect('/PIP1/eligibility/eligibility-end');
          }
  });

  router.post('/PIP1/eligibility/everyday-tasks2', (req, res, next) => {
          const everydayTasksAlt = req.session.data['everyday-tasks-alt'];
            if (everydayTasksAlt === 'Yes') {
              res.redirect('/PIP1/eligibility/difficulty-end');
          } else if (everydayTasksAlt === 'No') {
              res.redirect('/PIP1/eligibility/difficulty-length-alt2');
          } else {
              res.redirect('/PIP1/eligibility/eligibility-end');
          }
  });

  router.post('/PIP1/eligibility/difficulty-length2', (req, res, next) => {
          const difficultyLength = req.session.data['difficulty-length'];
            if (difficultyLength === 'No') {
              res.redirect('/PIP1/eligibility/difficulty-end');
          } else {
              res.redirect('/PIP1/eligibility/eligibility-end');
          }
  });

  router.post('/PIP1/eligibility/difficulty-length-alt', (req, res, next) => {
          const difficultyLengthAlt = req.session.data['difficulty-length-alt'];
            if (difficultyLengthAlt === 'No') {
              res.redirect('/PIP1/eligibility/difficulty-end');
          } else {
              res.redirect('/PIP1/eligibility/eligibility-end');
          }
  });

  router.post('/PIP1/eligibility/difficulty-length-alt2', (req, res, next) => {
          const difficultyLengthAlt = req.session.data['difficulty-length-alt'];
            if (difficultyLengthAlt === 'No') {
              res.redirect('/PIP1/eligibility/difficulty-end');
          } else {
              res.redirect('/PIP1/eligibility/eligibility-end');
          }
  });

  router.post('/PIP1/eligibility/difficulty-end', (req, res, next) => {
          res.redirect('/PIP1/eligibility/postcode-check');
  });

  router.post('/PIP1/eligibility/eligibility-end', (req, res, next) => {
          res.redirect('/PIP1/eligibility/postcode-check');
  });

// DIGITAL CHECK

  router.post('/PIP1/eligibility/postcode-check', (req, res, next) => {
          res.redirect('/PIP1/eligibility/claimant');
  });

  router.post('/PIP1/eligibility/claimant', (req, res, next) => {
          const claimant = req.session.data['claimant'];
            if (claimant === 'I am claiming for myself') {
              res.redirect('/PIP1/eligibility/already-receiving');
          } else if (claimant === 'I am claiming for someone else') {
              res.redirect('/PIP1/eligibility/claimant-end');
          } else {
              res.redirect('/PIP1/eligibility/claimant-helping')
          }
  });

  router.post('/PIP1/eligibility/claimant-helping', (req, res, next) => {
          res.redirect('/PIP1/eligibility/already-receiving');
  });

  router.post('/PIP1/eligibility/already-receiving', (req, res, next) => {
          const receiving = req.session.data['receiving'];
            if (receiving === 'No') {
              res.redirect('/PIP1/eligibility/required');
          } else {
              res.redirect('/PIP1/eligibility/already-receiving-end');
          }
  });

  router.post('/PIP1/eligibility/required', (req, res, next) => {
          const required = req.session.data['required'];
            if (required === 'Yes') {
              res.redirect('/PIP1/eligibility/apply-online');
          } else {
              res.redirect('/PIP1/eligibility/required-end');
          }
  });

  router.post('/PIP1/eligibility/apply-online', (req, res, next) => {
          res.redirect('/PIP1/eligibility/register/register-start');
  });





// SREL V1

  router.post('/PIP1/eligibility/srel/eligibility-start', (req, res, next) => {
        const eligChoiceSREL = req.session.data['eligibility-choice'];
          if (eligChoiceSREL === 'Check I am eligible for PIP') {
            res.redirect('/PIP1/eligibility/over-16');
        } else if (eligChoiceSREL === 'Check if I can use the online service') {
            res.redirect('/PIP1/eligibility/postcode-check');
        } else if (eligChoiceSREL === 'Claim under special rules for end of life') {
            res.redirect('/PIP1/eligibility/srel/special-rules-end');
        } else {
            res.redirect('/PIP1/eligibility/sign-in');
        }
  });

// SREL V2

    router.post('/PIP1/eligibility/srel/special-rules', (req, res, next) => {
          const specialRules = req.session.data['special-rules'];
            if (specialRules === 'Yes') {
              res.redirect('/PIP1/eligibility/srel/special-rules-end');
          } else {
              res.redirect('/PIP1/eligibility/eligibility-start');
          }
    });

// SREL V3

router.post('/PIP1/eligibility/srel/eligibility-intro', (req, res, next) => {
        res.redirect('/PIP1/eligibility/eligibility-start');
});




}
