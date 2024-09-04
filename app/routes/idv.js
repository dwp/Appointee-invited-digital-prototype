const express = require('express')
const router = express.Router()


router.post('/idv/hmrciv/idvselection', (req, res) => {
  const passportConsent = req.session.data['passport-consent'];
  const payslipOrP60 = req.session.data['payslipOrP60'];
  const voiceID = req.session.data['tcOptions'];
  const tuConsent = req.session.data['cra-consent'];
  
  //Passport and payslip
  if (passportConsent == 'true' && payslipOrP60 == 'payslip') {
    res.redirect('./your-passport-details?payslip=true')
  }
  //Passport and P60 
  else if (passportConsent == 'true' && payslipOrP60 == 'p60') {
    res.redirect('./your-passport-details?p60=true')
  }
  //Passport and tax credits KBV
  else if (passportConsent == 'true' && voiceID == 'voiceIdNo') {
    res.redirect('./your-passport-details?tcKbv=true')
  }
  //Passport and tax credits voice ID
  else if (passportConsent == 'true' && voiceID == 'voiceIdYes') {
    res.redirect('./your-passport-details?voiceId=true')
  }
  //Passport and Transunion
  else if (passportConsent == 'true' && tuConsent == 'true') {
    res.redirect('./your-passport-details?tuKbv=true')
  }
  //Payslip and tax credits KBV
  else if (payslipOrP60 == 'payslip' && voiceID == 'voiceIdNo') {
    res.redirect('./payslip-question-1?tcKbv=true');
  }
  //Payslip and tax credits voice ID
  else if (payslipOrP60 == 'payslip' && voiceID == 'voiceIdYes') {
    res.redirect('./payslip-question-1?voiceId=true')
  }
  //Payslip and Transunion
  else if (payslipOrP60 == 'payslip' && tuConsent == 'true') {
    res.redirect('./payslip-question-1?tuKbv=true');
  }
  //P60 and tax credits KBV
  else if (payslipOrP60 == 'p60' && voiceID == 'voiceIdNo') {
    res.redirect('./p60-question-1?tcKbv=true');
  }
  //P60 and tax credits voice ID
  else if (payslipOrP60 == 'p60' && voiceID == 'voiceIdYes') {
    res.redirect('./p60-question-1?voiceId=true')
  }
  //P60 and Transunion
  else if (payslipOrP60 == 'p60' && tuConsent == 'true') {
    res.redirect('./p60-question-1?tuKbv=true');
  }
  //Tax credits KBV and Transunion
  else if (voiceID == 'voiceIdNo' && tuConsent == 'true') {
    res.redirect('./tax-credits-question-1?tuKbv=true');
  }
  //Tax credits voice ID and Transunion
  else if (voiceID == 'voiceIdYes' && tuConsent == 'true') {
    res.redirect('./voice-id?tuKbv=true')
  }
  // Fallback
  else {
    res.redirect('./choose-2-items-error')
  }
})

router.post('/idv/hmrciv/payslip', (req, res) => {
  res.redirect('./payslip-question-1');
})

router.post('/idv/hmrciv/p60', (req, res) => {
  res.redirect('./p60-question-1');
})

router.post('/idv/hmrciv/tcKbv', (req, res) => {
  res.redirect('./tax-credits-question-1');
})

router.post('/idv/hmrciv/tuKbv', (req, res) => {
  res.redirect('./tu-question-1');
})

router.post('/idv/hmrciv/voiceId', (req, res) => { 
  res.redirect("/carers/voice-id");
})

router.post('/idv/hmrciv/success', (req, res) => { 
  res.redirect("/v3b/address");
})


router.use((req, res, next) => {
  idvReset(req);
  if (req.query.payslip) {
    req.session.payslip = req.query.payslip;
  }
  res.locals.payslip = req.session.payslip;
  next();
});

router.use((req, res, next) => {
  idvReset(req);
  if (req.query.p60) {
    req.session.p60 = req.query.p60;
  }
  res.locals.p60 = req.session.p60;
  next();
});

router.use((req, res, next) => {
  idvReset(req);
  if (req.query.tcKbv) {
    req.session.tcKbv = req.query.tcKbv;
  }
  res.locals.tcKbv = req.session.tcKbv;
  next();
});

router.use((req, res, next) => {
  idvReset(req);
  if (req.query.tuKbv) {
    req.session.tuKbv = req.query.tuKbv;
  }
  res.locals.tuKbv = req.session.tuKbv;
  next();
});

router.use((req, res, next) => {
  idvReset(req);
  if (req.query.payslip) {
    req.session.payslip = req.query.payslip;
  }
  res.locals.payslip = req.session.payslip;
  next();
});

router.use((req, res, next) => {
  idvReset(req);
  if (req.query.voiceId) {
    req.session.voiceId = req.query.voiceId;
  }
  res.locals.voiceId = req.session.voiceId;
  next();
});

const idvReset = req => {
  req.session.data['payslipOrP60'] = "";
  req.session.data['tcOptions'] = "";
  req.session.data['cra-consent'] = "";
  req.session.data['passport-consent'] = "";
  req.session.payslip = false;
  req.session.p60 = false;
  req.session.tcKbv = false;
  req.session.tuKbv = false;
  req.session.voiceId = false;
}


module.exports = router
