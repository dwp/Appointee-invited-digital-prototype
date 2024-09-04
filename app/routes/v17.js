const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

// PIP ROUTING

// PIP ELIGIBILITY


  router.post('/v17/eligibility/eligibility-intro', (req, res, next) => {
          res.redirect('/v17/eligibility/eligibility-start');
  });

  router.post('/v17/eligibility/eligibility-start', (req, res, next) => {
          const eligChoice = req.session.data['eligibility-choice'];
            if (eligChoice === 'Check I am eligible for PIP') {
              res.redirect('/v17/eligibility/over-16');
          } else {
              res.redirect('/v17/eligibility/applied-online-before')
          }
  });

  router.post('/v17/eligibility/over-16', (req, res, next) => {
          const over16 = req.session.data['over-16'];
            if (over16 === 'Yes') {
              res.redirect('/v17/eligibility/state-pension');
          } else {
              res.redirect('/v17/eligibility/dla-children');
          }
  });

  router.post('/v17/eligibility/dla-children', (req, res, next) => {
          const dlaChild = req.session.data['dla-child'];
            if (dlaChild === 'Yes') {
              res.redirect('/v17/eligibility/dla-children-end');
          } else {
              res.redirect('/v17/eligibility/over-16-end');
          }
  });

  router.post('/v17/eligibility/state-pension', (req, res, next) => {
          const statePension = req.session.data['state-pension-age'];
            if (statePension === 'Yes') {
              res.redirect('/v17/eligibility/everyday-tasks');
          } else {
              res.redirect('/v17/eligibility/state-pension-end');
          }
  });

  router.post('/v17/eligibility/everyday-tasks', (req, res, next) => {
          const everydayTasks = req.session.data['everyday-tasks'];
            if (everydayTasks === 'Yes') {
              res.redirect('/v17/eligibility/difficulty-end');
          } else if (everydayTasks === 'No') {
              res.redirect('/v17/eligibility/difficulty-length');
          } else {
              res.redirect('/v17/eligibility/eligibility-end');
          }
  });


  router.post('/v17/eligibility/difficulty-length', (req, res, next) => {
          const difficultyLength = req.session.data['difficulty-length'];
            if (difficultyLength === 'No') {
              res.redirect('/v17/eligibility/difficulty-end');
          } else {
              res.redirect('/v17/eligibility/eligibility-end');
          }
  });


  router.post('/v17/eligibility/difficulty-end', (req, res, next) => {
          res.redirect('/v17/eligibility/applied-online-before');
  });

  router.post('/v17/eligibility/eligibility-end', (req, res, next) => {
          res.redirect('/v17/eligibility/applied-online-before');
  });

// DIGITAL CHECK

router.post('/v17/eligibility/applied-online-before', (req, res, next) => {
        const applied = req.session.data['applied'];
          if (applied === 'Yes') {
            res.redirect('/v17/verify/your-details');
        } else {
            res.redirect('/v17/eligibility/postcode-check');
        }
});

  router.post('/v17/eligibility/postcode-check', (req, res, next) => {
          res.redirect('/v17/eligibility/claimant');
  });

  router.post('/v17/eligibility/claimant', (req, res, next) => {
          const claimant = req.session.data['claimant'];
            if (claimant === 'I am claiming for myself') {
              res.redirect('/v17/eligibility/already-receiving');
          } else if (claimant === 'I am claiming for someone else') {
              res.redirect('/v17/eligibility/claimant-end');
          } else {
              res.redirect('/v17/eligibility/claimant-helping')
          }
  });

  router.post('/v17/eligibility/claimant-helping', (req, res, next) => {
          res.redirect('/v17/eligibility/already-receiving');
  });

  router.post('/v17/eligibility/already-receiving', (req, res, next) => {
          const receiving = req.session.data['receiving'];
            if (receiving === 'No') {
              res.redirect('/v17/eligibility/required');
          } else {
              res.redirect('/v17/eligibility/already-receiving-end');
          }
  });


  router.post('/v17/eligibility/required', (req, res, next) => {
          const required = req.session.data['required'];
            if (required === 'Yes') {
              res.redirect('/v17/eligibility/nino');
          } else {
              res.redirect('/v17/eligibility/required-end');
          }
  });

  router.post('/v17/eligibility/nino', (req, res, next) => {
          res.redirect('/v17/eligibility/email');
  });

  router.post('/v17/eligibility/email', (req, res, next) => {
          res.redirect('/v17/eligibility/apply-online');
  });

  router.post('/v17/eligibility/apply-online', (req, res, next) => {
          res.redirect('/v17/verify/register/register-start');
  });


// PIP VERIFY

router.post('/v17/verify/complete-registration', (req, res, next) => {
        res.redirect('/v17/verify/enter-details');
});

router.post('/v17/verify/complete-registration', (req, res, next) => {
        res.redirect('/v17/verify/enter-details');
});

router.post('/v17/verify/enter-details', (req, res, next) => {
        res.redirect('/v17/verify/code-text');
});

router.post('/v17/verify/code-text', (req, res, next) => {
        res.redirect('/v17/verify/code-email');
});

router.post('/v17/verify/code-email', (req, res, next) => {
        res.redirect('/v17/verify/create-password');
});

router.post('/v17/verify/create-password', (req, res, next) => {
        res.redirect('/v17/verify/signed-in');
});


// PIP REGISTER

router.post('/v17/verify/register/register-start', (req, res, next) => {
        res.redirect('/v17/verify/register/name');
});

router.post('/v17/verify/register/name', (req, res, next) => {
        res.redirect('/v17/verify/register/nino');
});

router.post('/v17/verify/register/nino', (req, res, next) => {
        res.redirect('/v17/verify/register/date-of-birth');
});

router.post('/v17/verify/register/date-of-birth', (req, res, next) => {
        res.redirect('/v17/verify/register/contact-details');
});

router.post('/v17/verify/register/contact-details', (req, res, next) => {
        res.redirect('/v17/verify/register/check-answers');
});

router.post('/v17/verify/register/check-answers', (req, res, next) => {
        res.redirect('/v17/verify/register/code-text');
});

router.post('/v17/verify/register/code-text', (req, res, next) => {
        res.redirect('/v17/verify/register/code-email');
});

router.post('/v17/verify/register/code-email', (req, res, next) => {
        res.redirect('/v17/verify/register/create-password');
});

router.post('/v17/verify/register/create-password', (req, res, next) => {
        res.redirect('/v17/verify/signed-in');
});


// PIP SIGN-IN

router.post('/v17/verify/your-details', (req, res, next) => {
        res.redirect('/v17/verify/sign-in/password');
});

router.post('/v17/verify/sign-in/password', (req, res, next) => {
        res.redirect('/v17/verify/sign-in/security-code');
});

router.post('/v17/verify/forgot-password', (req, res, next) => {
        res.redirect('/v17/verify/enter-details');
});

router.post('/v17/verify/sign-in/security-code', (req, res, next) => {
        const codechoice = req.session.data['code-choice'];
          if (codechoice === 'Send me a text message') {
            res.redirect('/v17/verify/sign-in/code-text');
        } else {
            res.redirect('/v17/verify/sign-in/code-email');
        }
});

router.post('/v17/verify/sign-in/code-text', (req, res, next) => {
        res.redirect('/v17/verify/signed-in');
});

router.post('/v17/verify/sign-in/code-email', (req, res, next) => {
        res.redirect('/v17/verify/signed-in');
});

router.post('/v17/verify/signed-in', (req, res, next) => {
        res.redirect('/v17/repeat-claim/repeat-claim-intro');
});


// PIP REPEAT CLAIM

router.post('/v17/repeat-claim/repeat-claim-intro', (req, res, next) => {
        res.redirect('/v17/repeat-claim/postcode-check');
});

router.post('/v17/repeat-claim/postcode-check', (req, res, next) => {
        res.redirect('/v17/repeat-claim/start');
});


}
