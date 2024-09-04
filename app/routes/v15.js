// ADD SUPPORT ROUTES
const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

// Routes for journey one flow
router.post('/v15/user-journey/one/check-answers-2', function(req, res) {
      res.redirect('/v15/user-journey/one/check-answers-3')
  })

  router.post('/v15/user-journey/one/check-answers-3', function(req, res) {
    res.redirect('/v15/user-journey/one/check-answers-condition')
})

router.post('/v15/user-journey/one/check-answers-condition', function(req, res) {
  res.redirect('/v15/user-journey/one/check-your-answers-your-health')
})

router.post('/v15/user-journey/one/confirmation', function(req, res) {
  res.redirect('/v15/user-journey/one/health-gather-intro')
})

router.post('/v15/user-journey/one/health-gather-intro', function(req, res) {
  res.redirect('/v15/user-journey/one/tasklist-before')
})

router.post('/v15/user-journey/one/check-your-answers-your-health', function(req, res) {
  res.redirect('/v15/user-journey/one/confirmation')
})

router.post('/v15/user-journey/one/evidence', function(req, res) {
  res.redirect('/v15/user-journey/one/supporting-evidence')
})

router.post('/v15/user-journey/one/supporting-evidence', function(req, res) {
  res.redirect('/v15/user-journey/one/declaration')
})

router.post('/v15/user-journey/one/declaration', function(req, res) {
  res.redirect('/v15/user-journey/one/submission')
})

// Routes for journey two flow
router.post('/v15/user-journey/two/check-answers-2', function(req, res) {
  res.redirect('/v15/user-journey/two/check-answers-3')
})

router.post('/v15/user-journey/two/check-answers-3', function(req, res) {
res.redirect('/v15/user-journey/two/check-answers-condition')
})

router.post('/v15/user-journey/two/check-answers-condition', function(req, res) {
res.redirect('/v15/user-journey/two/check-your-answers-your-health')
})

router.post('/v15/user-journey/two/confirmation-timeline', function(req, res) {
res.redirect('/v15/user-journey/two/health-gather-intro')
})

router.post('/v15/user-journey/two/health-gather-intro', function(req, res) {
  res.redirect('/v15/user-journey/two/tasklist-before')
  })

router.post('/v15/user-journey/two/check-your-answers-your-health', function(req, res) {
res.redirect('/v15/user-journey/two/confirmation-timeline')
})

router.post('/v15/user-journey/two/evidence', function(req, res) {
res.redirect('/v15/user-journey/two/supporting-evidence')
})

router.post('/v15/user-journey/two/supporting-evidence', function(req, res) {
res.redirect('/v15/user-journey/two/declaration')
})

router.post('/v15/user-journey/two/declaration', function(req, res) {
res.redirect('/v15/user-journey/two/submission-timeline')
})


// Routes for journey three flow

router.post('/v15/user-journey/three/start', (req, res, next) => {
        res.redirect('/v15/user-journey/four/additional-support/communicating');
});

router.post('/v15/user-journey/three/additional-support/communicating', (req, res, next) => {
        res.redirect('/v15/user-journey/three/additional-support/forms-letters');
});

router.post('/v15/user-journey/three/additional-support/forms-letters', (req, res, next) => {
        const addSupport = req.session.data['add-support'];
          if (addSupport === 'Yes') {
            res.redirect('/v15/user-journey/three/additional-support/help');
        } else {
            res.redirect('/v15/user-journey/three/additional-support/check-answers-1');
        }
});

router.post('/v15/user-journey/three/additional-support/help', (req, res, next) => {
        const addsupportHelp = req.session.data['add-support-help'];
          if (addsupportHelp === 'Yes') {
            res.redirect('/v15/user-journey/three/additional-support/help-name');
        } else {
            res.redirect('/v15/user-journey/three/additional-support/check-answers-1');
        }
});

router.post('/v15/user-journey/three/additional-support/help-name', (req, res, next) => {
        res.redirect('/v15/user-journey/three/additional-support/check-answers-1');
});

router.post('/v15/user-journey/three/additional-support/check-answers-1', (req, res, next) => {
        res.redirect('/v15/user-journey/three/check-answers-2');
});

router.post('/v15/user-journey/three/check-answers-2', function(req, res) {
  res.redirect('/v15/user-journey/three/check-answers-3')
})

router.post('/v15/user-journey/three/check-answers-3', function(req, res) {
res.redirect('/v15/user-journey/three/your-health/condition')
})

router.post('/v15/user-journey/three/your-health/condition', (req, res, next) => {
    res.redirect('/v15/user-journey/three/your-health/consent');
});

router.post('/v15/user-journey/three/your-health/consent', (req, res, next) => {
        const consent = req.session.data['consent'];
          if (consent === 'Yes, I agree') {
            res.redirect('/v15/user-journey/three/your-health/hcp');
        } else {
            res.redirect('/v15/user-journey/three/your-health/in-hospital');
        }
});

router.post('/v15/user-journey/three/your-health/hcp', (req, res, next) => {
    res.redirect('/v15/user-journey/three/your-health/in-hospital');
});

router.post('/v15/user-journey/three/your-health/in-hospital', (req, res, next) => {
    const inHospital = req.session.data['hospital'];
    if (inHospital === 'Hospital') {
        res.redirect('/v15/user-journey/three/your-health/hospital-address');
    } else if (inHospital === 'Hospice') {
        res.redirect('/v15/user-journey/three/your-health/hospice-address');
    } else if (inHospital === 'Care or nursing home') {
        res.redirect('/v15/user-journey/three/your-health/accommodation-address');
    } else if (inHospital === 'Other') {
          res.redirect('/v15/user-journey/three/your-health/accommodation-address');
    } else {
        res.redirect('/v15/user-journey/three/your-health/check-answers-4');
    }
});

router.post('/v15/user-journey/three/your-health/hospital-address', (req, res, next) => {
    res.redirect('/v15/user-journey/three/your-health/hospital-admission');
});

router.post('/v15/user-journey/three/your-health/hospital-admission', (req, res, next) => {
    res.redirect('/v15/user-journey/three/your-health/check-answers-4');
});

router.post('/v15/user-journey/three/your-health/hospice-address', (req, res, next) => {
    res.redirect('/v15/user-journey/three/your-health/hospice-admission');
});

router.post('/v15/user-journey/three/your-health/hospice-admission', (req, res, next) => {
    res.redirect('/v15/user-journey/three/your-health/check-answers-4');
});

router.post('/v15/user-journey/three/your-health/accommodation-address', (req, res, next) => {
    res.redirect('/v15/user-journey/three/your-health/accommodation-admission');
});

router.post('/v15/user-journey/three/your-health/accommodation-admission', (req, res, next) => {
    res.redirect('/v15/user-journey/three/your-health/check-answers-4');
});

router.post('/v15/user-journey/three/your-health/check-answers-4', (req, res, next) => {
    res.redirect('/v15/user-journey/three/confirmation');
});


router.post('/v15/user-journey/three/confirmation', function(req, res) {
res.redirect('/v15/user-journey/three/health-gather-intro')
});

// PIP2 HEALTH INFORMATION GATHER

router.post('/v15/user-journey/three/health-form/about-your-health/pip1-condition', (req, res, next) => {
    res.redirect('/v15/user-journey/three/health-form/about-your-health/check');
});

router.post('/v15/user-journey/three/health-form/about-your-health/pip1-condition-details', (req, res, next) => {
    res.redirect('/v15/user-journey/three/health-form/about-your-health/another');
});

router.post('/v15/user-journey/three/health-form/about-your-health/another', (req, res, next) => {
        const condition2 = req.session.data['condition2'];
          if (condition2 === 'Yes') {
            res.redirect('/v15/user-journey/three/health-form/about-your-health/condition');
        } else {
            res.redirect('/v15/user-journey/three/health-form/about-your-health/check');
        }
});

router.post('/v15/user-journey/three/health-form/about-your-health/condition', (req, res, next) => {
    res.redirect('/v15/user-journey/three/health-form/about-your-health/condition-details');
});

router.post('/v15/user-journey/three/health-form/about-your-health/condition-details', (req, res, next) => {
    res.redirect('/v15/user-journey/three/health-form/about-your-health/check');
});


router.post('/v15/user-journey/three/health-form/about-your-health-professionals/introduction', (req, res, next) => {
    res.redirect('/v15/user-journey/three/health-form/about-your-health-professionals/health-professional-question');
});

router.post('/v15/user-journey/three/health-form/about-your-health-professionals/health-professional-question', (req, res, next) => {
        const question = req.session.data['question'];
          if (question === 'yes') {
            res.redirect('/v15/user-journey/three/health-form/about-your-health-professionals/health-professional');
        } else {
            res.redirect('/v15/user-journey/three/health-form/about-your-health-professionals/check');
        }
});

router.post('/v15/user-journey/three/health-form/about-your-health-professionals/another', (req, res, next) => {
        const professional2 = req.session.data['professional2'];
          if (professional2 === 'Yes') {
            res.redirect('/v15/user-journey/three/health-form/about-your-health-professionals/health-professional');
        } else {
            res.redirect('/v15/user-journey/three/health-form/about-your-health-professionals/check');
        }
});

router.post('/v15/user-journey/three/health-form/about-your-health-professionals/pip1-health-professional', (req, res, next) => {
    res.redirect('/v15/user-journey/three/health-form/about-your-health-professionals/check');
});

router.post('/v15/user-journey/three/health-form/about-your-health-professionals/health-professional', (req, res, next) => {
    res.redirect('/v15/user-journey/three/health-form/about-your-health-professionals/check');
});

router.post('/v15/user-journey/three/health-form/supporting-evidence/intro', (req, res, next) => {
    res.redirect('/v15/user-journey/three/health-form/supporting-evidence/supporting-evidence');
});

router.post('/v15/user-journey/three/health-form/supporting-evidence/supporting-evidence', (req, res, next) => {
    res.redirect('/v15/user-journey/three/health-form/declaration');
});


}
