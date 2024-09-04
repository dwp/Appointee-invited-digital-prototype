
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Logging session data  
  
router.use((req, res, next) => {    
  const log = {  
    method: req.method,  
    url: req.originalUrl,  
    data: req.session.data  
  }  
  console.log(JSON.stringify(log, null, 2))  
 
next()  
})  

// GET SPRINT NAME - useful for relative templates  
router.use('/', (req, res, next) => {  
  res.locals.currentURL = req.originalUrl; //current screen  
  res.locals.prevURL = req.get('Referrer'); // previous screen

console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );

  next();  
});
// ROUTES REDIRECT START
const applyforpiplive = require('./routes/live-apply-for-pip.js')
const poc = require('./routes/poc.js')
const v01 = require('./routes/v0-1.js')
const v02 = require('./routes/v0-2.js')
const v1 = require('./routes/v1.js')
const v1a = require('./routes/v1a.js')
const v1b = require('./routes/v1b.js')
const v1c = require('./routes/v1c.js')
const v2 = require('./routes/v2.js')
const v2idv = require('./routes/v2idv.js')
const v2a = require('./routes/v2a.js')
const v2b = require('./routes/v2b.js')
const v3 = require('./routes/v3.js')
const v3b = require('./routes/v3b.js')
const v4 = require('./routes/v4.js')
const v5 = require('./routes/v5.js')
const v6 = require('./routes/v6.js')
const v7 = require('./routes/v7.js')
const v8 = require('./routes/v8.js')
const v9 = require('./routes/v9.js')
const v10 = require('./routes/v10.js')
const v11 = require('./routes/v11.js')
const v12 = require('./routes/v12.js')
// const v12v2 = require('./routes/v12v2')
const v13 = require('./routes/v13.js')
const v14 = require('./routes/v14.js')
const v15 = require('./routes/v15.js')
const v16 = require('./routes/v16.js')
const v17 = require('./routes/v17.js')
const v18 = require('./routes/v18.js')
const v19 = require('./routes/v19.js')
const v20 = require('./routes/v20.js')
const v20v1 = require('./routes/v20v1.js')
const v20v2 = require('./routes/v20v2.js')
const v21 = require('./routes/v21.js')
const expv11 = require('./routes/expv11.js')
const mvp = require('./routes/mvp.js')
const mvprev1 = require('./routes/mvp-rev-1.js')
const p5rev1 = require('./routes/p5-rev-1.js')
const p5v11 = require('./routes/p5-v11.js')
const p5v12 = require('./routes/p5-v12.js')
const p5v12v2 = require('./routes/p5-v12v2.js')
const pip2 = require('./routes/p5.js')
const p5v10 = require('./routes/p5-v10.js')
const mvpp5 = require('./routes/mvp-p5.js')
const authRoutes = require('./routes/auth.js')
const idvRoutes = require('./routes/idv.js')
const pip1livev1 = require('./routes/live-pip1-v1-0.js')
const pip2livev1 = require('./routes/live-pip2-v1-0.js')
const pip1v1point1 = require('./routes/pip1-v1-1.js')
const pip2v1point1 = require('./routes/pip2-v1-1.js')
const alternativeTasklist = require('./routes/alternative-tasklist.js')
const alternativeTasklistTwo = require('./routes/alternative-tasklist-1-1.js')
const idVerification = require('./routes/id-verification.js')
const addsupport = require('./routes/addsupport.js')
const conditionQuestion = require('./routes/condition-question.js')
const conditionQuestionv12v2 = require('./routes/condition-questionv12v2.js')
const additionalSupportCondition = require('./routes/additional-support-conditon.js')
const additionalSupportConditionv14 = require('./routes/additional-support-conditon-v14.js')
const pipAppPart2 = require('./routes/pip2.js')
const eligibility = require('./routes/eligibility.js')

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
