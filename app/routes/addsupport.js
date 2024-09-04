// ADD SUPPORT ROUTES
const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

router.post('/additional_support/add-support-condition', function(req, res) {
      if (req.session.data['add-support-condition'] == "Yes") {
                 res.redirect('/additional_support/add-support-professional')
               } else {
                 res.redirect('/additional_support/add-support-professional')
               }
  })
router.post('/additional_support/add-support-professional', function(req, res) {
        if (req.session.data['add-support-professional'] == "Yes") {
                   res.redirect('/additional_support/add-support-help')
                 } else {
                   res.redirect('/additional_support/add-support-help')
                 }
    })
router.post('/additional_support/add-support-help', function(req, res) {
            if (req.session.data['add-support'] == "Yes") {
                       res.redirect('/additional_support/add-support-someone-helping')
                     } else if (req.session.data['add-support'] == "No") {
                       res.redirect('check-answers-1')
                     }
        })
router.post('/additional_support/add-support-someone-helping', function(req, res) {
            if (req.session.data['add-support-help'] == "No") {
                       res.redirect('/additional_support/add-support-continue-claim')
                     } else if (req.session.data['add-support-help'] == "Yes") {
                       res.redirect('check-answers-1')
                     }
        })
router.post('/additional_support/add-support-continue-claim', function(req, res) {
            if (req.session.data['add-support-continue'] == "Yes") {
                       res.redirect('check-answers-1')
                    }
                    else if (req.session.data['add-support-continue'] == "No") {
                      res.redirect('add-support-we-need-to-get-in-touch')
                    }
                    else if (req.session.data['add-support-continue'] == "not sure") {
                      res.redirect('add-support-we-need-to-get-in-touch')
                    }
        })

router.post('/v14/as-difficulties', function(req, res) {
    if (req.session.data['difficulties'] == "Yes") {
                res.redirect('/v14/as-forms')
              } else {
                res.redirect('/v14/alt-formats')
              }
  })


  router.post('/v14/as-forms', function(req, res) {
    if (req.session.data['complete-form'] == "Yes") {
                res.redirect('/v14/as-letters')
              } else {
                res.redirect('/v14/as-letters')
              }
  })

  router.post('/v14/as-letters', function(req, res) {
    if (req.session.data['complete-form'] == "Yes") {
                res.redirect('/v14/as-post')
              } else {
                res.redirect('/v14/as-post')
              }
  })

  router.post('/v14/as-post', function(req, res) {
    if (req.session.data['complete-post'] == "No") {
                res.redirect('/v14/as-help')
              } else {
                res.redirect('/v14/alt-formats')
              }
  })

  router.post('/v14/as-help', function(req, res) {
    if (req.session.data['help'] == "Yes") {
                res.redirect('/v14/as-helper-alt')
              } else {
                res.redirect('/v14/as-placeholder-two')
              }
  })

  router.post('/v14/as-placeholder-two', function(req, res) {
                res.redirect('/v14/alt-formats')

  })

  router.post('/v14/as-placeholder', function(req, res) {
    res.redirect('/v14/alt-formats')

})

  router.post('/v14/as-helper-alt', function(req, res) {

    if (req.session.data['helper']) {
      res.redirect('/v14/as-placeholder')
    } else {
      res.redirect('/v14/as-helper-alt')
    }
})

router.post('/v14/check-answers-1', (req, res, next) => {
 res.redirect('/v14/name');
});

// Code showing current day additional support questions
router.post('/v14/additional-support/communicating', function(req, res) {
  res.redirect('/v14/additional-support/forms-letters')
})

router.post('/v14/additional-support/forms-letters', function(req, res) {
  if (req.session.data['add-support'] == "No") {
    res.redirect('/v14/additional-support/alt-formats')
  } else {
    res.redirect('/v14/additional-support/help')
  }
})

router.post('/v14/additional-support/alt-formats', function(req, res) {
  if (req.session.data['communication-format'] == "No") {
    res.redirect('/v14/additional-support/check-answers-1')
  } else {
    res.redirect('/v14/additional-support/help')
  }
})

router.post('/v14/additional-support/help', function(req, res) {
  if (req.session.data['add-support-help'] == "No") {
    res.redirect('/v14/additional-support/alt-formats')
  } else {
    res.redirect('/v14/additional-support/help-name')
  }
})

router.post('/v14/additional-support/help-name', function(req, res) {
    res.redirect('/v14/additional-support/alt-formats')
})

router.post('/v14/additional-support/check-answers-1', function(req, res) {
  res.redirect('/v14/name')
})

// Code controlling where conditions appear in PIP1 based on additional support questions
router.post('/v14/check-answers-3', (req, res, next) => {
  const addsupportComm = req.session.data['difficulties'];
  const addSupport = req.session.data['complete-form'];
  res.redirect('/v14/condition');
  // if (addsupportComm === "Yes") {
  //     res.redirect('/v14/condition');
  // } else if (addSupport === "No") {
  //   res.redirect('/v14/condition');
  // } else{
  //     res.redirect('/v14/motability-scheme');
  // }
});

}
