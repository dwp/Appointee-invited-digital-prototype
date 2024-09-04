const express = require('express')
const router = express.Router()

// const verNum = 'v1'

router.post('/auth/default/sign-in-branch', function (req, res) {
  const editChoice = req.session.data['sign-in-register-branch']
  if (editChoice === 'yes') {
    res.redirect('/auth/default/sign-in-returning')
  } else if (editChoice === 'no') {
    res.redirect('/auth/default/register/start')
  }
});

router.post('/auth/default/sign-in-branch-returning', function (req, res) {
  const editChoice = req.session.data['sign-in-register-branch-returning']
  if (editChoice === 'yes') {
    res.redirect('/auth/default/sign-in-returning')
  } else if (editChoice === 'no') {
    res.redirect('/auth/default/register/start')
  }
});

router.get('/auth/default/reg-complete-submit', function (req, res) {
  const citizenBenefits = req.session.data['citizen-benefits']
  if (citizenBenefits) {
    res.redirect('/idv/default/idv-start-page')
  } else {
    res.redirect('/auth/default/no-match.html')
  }
});

router.get('/auth/default/signed-in-submit', function (req, res) {
  const citizenBenefits = req.session.data['citizen-benefits']
  if (citizenBenefits) {
    res.redirect('/cxp/default/benefits-summary-table')
  } else {
    res.redirect('/auth/default/no-match.html')
  }
});

router.post('/auth/v7/account-recovery/access', function (req, res) {
  const editChoice = req.session.data['what-access']
  if (editChoice === 'mobile-phone') {
    res.redirect('/auth/v7/account-recovery/start-new-email')
  } else if (editChoice === 'email') {
    res.redirect('/auth/v7/account-recovery/start-new-phone')
  } else if (editChoice === 'neither') {
    res.redirect('/auth/v7/account-recovery/start-neither')
  }
});

router.post('/auth/v7/account-recovery/create-password', function (req, res) {
  const editChoice = req.session.data['reset-password']
  if (editChoice === 'yes') {
    res.redirect('/auth/v7/account-recovery/password-reset')
  } else if (editChoice === 'no') {
    res.redirect('/auth/v7/account-recovery/complete')
  }
});


router.post('/auth/dev-ready/account-recovery/access', function (req, res) {
  const editChoice = req.session.data['what-access']
  if (editChoice === 'mobile-phone') {
    res.redirect('/auth/dev-ready/account-recovery/start-new-email')
  } else if (editChoice === 'email') {
    res.redirect('/auth/dev-ready/account-recovery/start-new-phone')
  } else if (editChoice === 'neither') {
    res.redirect('/auth/dev-ready/account-recovery/start-neither')
  }
});

router.post('/auth/dev-ready/account-recovery/create-password', function (req, res) {
  const editChoice = req.session.data['reset-password']
  if (editChoice === 'yes') {
    res.redirect('/auth/dev-ready/account-recovery/password-reset')
  } else if (editChoice === 'no') {
    res.redirect('/auth/dev-ready/account-recovery/complete')
  }
});



router.post('/auth/findr-submit', function (req, res) {
  const serviceName = req.session.serviceName
  if (serviceName && serviceName.indexOf('Carer')) {
    res.redirect('/idv/hmrciv/start-page')
  } else {
    res.redirect('/idv/default/idv-start-page')
  }
});







module.exports = router
