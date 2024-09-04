const express = require('express')
const router = express.Router()

// ROUTES REDIRECT START
const applyforpiplive = require('./routes/live-apply-for-pip')
const poc = require('./routes/poc')
const v01 = require('./routes/v0-1')
const v02 = require('./routes/v0-2')
const v1 = require('./routes/v1')
const v1a = require('./routes/v1a')
const v1b = require('./routes/v1b')
const v1c = require('./routes/v1c')
const v2 = require('./routes/v2')
const v2idv = require('./routes/v2idv')
const v2a = require('./routes/v2a')
const v2b = require('./routes/v2b')
const v3 = require('./routes/v3')
const v3b = require('./routes/v3b')
const v4 = require('./routes/v4')
const v5 = require('./routes/v5')
const v6 = require('./routes/v6')
const v7 = require('./routes/v7')
const v8 = require('./routes/v8')
const v9 = require('./routes/v9')
const v10 = require('./routes/v10')
const v11 = require('./routes/v11')
const v12 = require('./routes/v12')
// const v12v2 = require('./routes/v12v2')
const v13 = require('./routes/v13')
const v14 = require('./routes/v14')
const v15 = require('./routes/v15')
const v16 = require('./routes/v16')
const v17 = require('./routes/v17')
const v18 = require('./routes/v18')
const v19 = require('./routes/v19')
const v20 = require('./routes/v20')
const v20v1 = require('./routes/v20v1')
const v20v2 = require('./routes/v20v2')
const v21 = require('./routes/v21')
const expv11 = require('./routes/expv11')
const mvp = require('./routes/mvp')
const mvprev1 = require('./routes/mvp-rev-1')
const p5rev1 = require('./routes/p5-rev-1')
const p5v11 = require('./routes/p5-v11')
const p5v12 = require('./routes/p5-v12')
const p5v12v2 = require('./routes/p5-v12v2')
const pip2 = require('./routes/p5.js')
const p5v10 = require('./routes/p5-v10.js')
const mvpp5 = require('./routes/mvp-p5.js')
const authRoutes = require('./routes/auth')
const idvRoutes = require('./routes/idv')
const pip1livev1 = require('./routes/live-pip1-v1-0')
const pip2livev1 = require('./routes/live-pip2-v1-0')
const pip1v1point1 = require('./routes/pip1-v1-1')
const pip2v1point1 = require('./routes/pip2-v1-1')
const alternativeTasklist = require('./routes/alternative-tasklist')
const alternativeTasklistTwo = require('./routes/alternative-tasklist-1-1')
const idVerification = require('./routes/id-verification')
const addsupport = require('./routes/addsupport')
const conditionQuestion = require('./routes/condition-question')
const conditionQuestionv12v2 = require('./routes/condition-questionv12v2')
const additionalSupportCondition = require('./routes/additional-support-conditon')
const additionalSupportConditionv14 = require('./routes/additional-support-conditon-v14')
const pipAppPart2 = require('./routes/pip2')
const eligibility = require('./routes/eligibility')

// ROUTES REDIRECT END

// ROUTER LIST START
applyforpiplive(router);
poc(router);
v01(router);
v02(router);
v1(router);
v1a(router);
v1b(router);
v1c(router);
v2(router);
v2idv(router);
v2a(router);
v2b(router);
v3(router);
v3b(router);
v4(router);
v5(router);
v6(router);
v7(router);
v8(router);
v9(router);
v10(router);
v11(router);
v12(router);
// v12v2(router);
v13(router);
v14(router);
v15(router);
v16(router);
v17(router);
v18(router);
v19(router);
v20(router);
v20v1(router);
v20v2(router);
v21(router);
expv11(router);
mvp(router);
mvprev1(router);
p5rev1(router);
pip2(router);
p5v10(router);
p5v11(router);
p5v12(router);
p5v12v2(router);
mvpp5(router);
pip1livev1(router);
pip2livev1(router);
pip1v1point1(router);
pip2v1point1(router);
alternativeTasklist(router);
alternativeTasklistTwo(router);
idVerification(router);
addsupport(router);
conditionQuestion(router);
conditionQuestionv12v2(router);
additionalSupportCondition(router);
additionalSupportConditionv14(router);
pipAppPart2(router);
eligibility(router);

router.use('/', authRoutes)
router.use('/', idvRoutes)
// ROUTER LIST END


//DWP add another pattern for condition

const amendCondition = (conditions, condition) => {
    const index = conditions.findIndex(p => p.id === condition.id);
    conditions.splice(index, 1);
    conditions.push(condition);
    return conditions;
  }

  // clear any temp condition data on add another
  router.get('/condition', (req, res, next) => {
    const { edit } = req.query;
    const { data } = req.session;
    let originalChoice;
    if(edit) {
      originalChoice = data?.condition?.type;
    } else {
      req.session.data.condition = {};
    }
    res.render('v11/about_your_health/add-condition.html', { choice: originalChoice });
  })

  // Add your routes here - above the module.exports line


  router.post('/select-size', (req, res, next) => {
    res.render('v11/about_your_health/condition-summary.html')
  })

  router.get('/check-condition', (req, res, next) => {
    const { conditionId } = req.query;
    const { data } = req.session;
    const condition = data.conditionOrder.filter((p) => p.id === parseInt(conditionId));
    data.condition = condition[0];
    const selectedCondition = condition[0];
    res.render('v11/about_your_health/add-condition.html', { condition: selectedCondition });
  })

  router.post('/check-condition', (req, res, next) => {
    const { data } = req.session;
    const condition = data.condition;

    if(condition.id) {
      amendCondition(data.conditionOrder, condition);
    } else {
      // give condition an id - to find in amend step
      condition.id = data.conditionOrder.length + 1;
      data.conditionOrder.push(condition);
    }

    res.render('v11/about_your_health/condition-summary.html', { condition: data.condition });
  })

  // last page before submission
  router.get('/condition-summary', (req, res, next) => {
    res.render('v11/about_your_health/condition-summary.html');
  })

  // remove condition from order
  router.get('/remove-condition', (req, res, next) => {
    const { conditionId } = req.query;
    const { data } = req.session;
    const condition = data.conditionOrder.filter((p) => p.id === parseInt(conditionId));
    res.render('v11/about_your_health/remove-condition.html', { binnedCondition: condition[0] });
  })

  router.post('/remove-condition', (req, res, next) => {
    const { binCondition, binnedConditionId } = req.body;
    const { data } = req.session;
    if(binCondition === "yes"){
      const index = data.conditionOrder.findIndex(p => p.id === parseInt(binnedConditionId));
      data.conditionOrder.splice(index, 1)
    }
    res.render('v11/about_your_health/condition-summary.html');
  })


  router.get('/submit', (req, res, next) => {
    req.session.data.conditionOrder = [];
    req.session.data.condition = {};
    res.render('v11/about_your_health/consent.html');
  })

  // Add another condition end

module.exports = router
