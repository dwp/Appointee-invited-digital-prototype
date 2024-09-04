const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

  router.post('/experimental/alternative_tasklist_idea_1_1/another', function(req, res) {
      if (req.session.data['condition2'] == "yes") {
                 res.redirect('/experimental/alternative_tasklist_idea_1_1/condition')
               } else {
                 res.redirect('/experimental/alternative_tasklist_idea_1_1/check')
               }
  })

// route for checking if citizen needs to claim for an activity
router.post('/experimental/alternative_tasklist_idea_1_1/activity_hints/preparing-food-hint', (req, res, next) => {
         if (req.session.data['preparing-food-help-1-1'] == "Yes") {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-detail')
         } else {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/activity_hints/eating-and-drinking-hint')
         }
})

// eating and drinking routes
router.post('/experimental/alternative_tasklist_idea_1_1/activity_hints/eating-and-drinking-hint', (req, res, next) => {
         if (req.session.data['eating-help'] == "yes") {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-detail')
         } else {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/activity_hints/managing-treatments-hint')
         }
})
// managing treatments routes
router.post('/experimental/alternative_tasklist_idea_1_1/activity_hints/managing-treatments-hint', (req, res, next) => {
         if (req.session.data['treatments-help'] == "yes") {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-detail')
         } else {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/activity_hints/washing-and-bathing-hint')
         }
})
// washing and bathing routes
router.post('/experimental/alternative_tasklist_idea_1_1/activity_hints/washing-and-bathing-hint', (req, res, next) => {
         if (req.session.data['washing-help'] == "yes") {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-detail')
         } else {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/activity_hints/toilet-needs-hint')
         }
})
// toilet needs routes
router.post('/experimental/alternative_tasklist_idea_1_1/activity_hints/toilet-needs-hint', (req, res, next) => {
         if (req.session.data['toilet-help'] == "yes") {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-detail')
         } else {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/activity_hints/dressing-and-undressing-hint')
         }
})
// dressing and undressing routes
router.post('/experimental/alternative_tasklist_idea_1_1/activity_hints/dressing-and-undressing-hint', (req, res, next) => {
         if (req.session.data['dressing-help'] == "yes") {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-detail')
         } else {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/activity_hints/talking-and-listening-hint')
         }
})
// talking listening and understanding routes
router.post('/experimental/alternative_tasklist_idea_1_1/activity_hints/talking-and-listening-hint', (req, res, next) => {
         if (req.session.data['talking-help'] == "yes") {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-detail')
         } else {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/activity_hints/reading-hint')
         }
})
// reading routes
router.post('/experimental/alternative_tasklist_idea_1_1/activity_hints/reading-hint', (req, res, next) => {
         if (req.session.data['reading-help'] == "yes") {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-detail')
         } else {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/activity_hints/mixing-with-people-hint')
         }
})
// mixing with other people routes
router.post('/experimental/alternative_tasklist_idea_1_1/activity_hints/mixing-with-people-hint', (req, res, next) => {
         if (req.session.data['mixing-with-others-help'] == "yes") {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-detail')
         } else {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/activity_hints/managing-money-hint')
         }
})
// managing money routes
router.post('/experimental/alternative_tasklist_idea_1_1/activity_hints/managing-money-hint', (req, res, next) => {
         if (req.session.data['managing-money-help'] == "yes") {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-detail')
         } else {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/activity_hints/planning-a-journey-hint')
         }
})
// planning journey routes
router.post('/experimental/alternative_tasklist_idea_1_1/activity_hints/planning-a-journey-hint', (req, res, next) => {
         if (req.session.data['planning-journey-help'] == "yes") {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-detail')
         } else {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/activity_hints/moving-around-hint')
         }
})
// moving around routes
router.post('/experimental/alternative_tasklist_idea_1_1/activity_hints/moving-around-hint', (req, res, next) => {
         if (req.session.data['moving-around-help'] == "yes") {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-detail')
         } else {
           res.redirect('/experimental/alternative_tasklist_idea_1_1/additional_information/additional-information-question')
         }
})

////////// routes for preparing food, claiming for activity journey ///////////////
    router.post('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-detail', (req, res, next) => {
      console.log('is-this-calling', req.session.data)

             if (req.session.data['prep-food-1-1'] == null) {
               res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-difficulties')
             } else if (req.session.data['prep-food-1-1'].includes("Other")) {
               res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-other')
             } else if (req.session.data['prep-food-1-1'].includes("I need to use aids or adaptations")) {
             res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-adapt-aids')
           } else {
             res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-difficulties')
             }

             //else if (req.session.data['prep-food']) {
             //   res.redirect('/experimental/alternative_tasklist_idea/preparing_food/preparing-food-adapt-aids')
             // }
    })
    // routes for "How often do you have difficulties preparing or cooking food?" page
    router.post('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-difficulties', (req, res, next) => {
             if (req.session.data['prep-food-difficulties-1-1'] == "It varies") {
               res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-varies')
             } else if (req.session.data['prep-food-difficulties-1-1'] == "Other") {
               res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-varies')
             } else {
               res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-anything-else')
             }
    })
    //routes for "What aids or adaptations do you use?" page
    router.post('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-adapt-aids', (req, res, next) => {
            if (req.session.data['prep-food-adapt-aids-1-1'] == null) {
                res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-difficulties')
             }  else if (req.session.data['prep-food-adapt-aids-1-1'].includes("Other")) {
              res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-often-other')
             } else {
               res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-difficulties')
            }
   })
   //routes for "Do you want to tell us anything else about the difficulties you have preparing or cooking food? " page
   router.post('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-anything-else', (req, res, next) => {
           if (req.session.data['prep-food-anything-else-1-1'] == "Yes") {
             res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-other-anything-else')
            } else {
              res.redirect('/experimental/alternative_tasklist_idea_1_1/preparing_food/preparing-food-check')
           }
  })
}
