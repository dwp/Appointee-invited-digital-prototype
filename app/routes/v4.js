module.exports = function (router) {
    function isEligible(req) {
        return !(req.session.data['over-16'] === 'Under 16'
            || req.session.data['overspa'] === 'No')
    }

    // ELIGIBILITY QUESTIONS
    router.post('/v4/over-16', (req, res, next) => {
        const over16 = req.session.data['over-16'];
        if (over16 === 'Over State Pension age') {
            res.redirect('/v4/over-spa');
        } else {
            res.redirect('/v4/nationality');
        }
    });

    router.post('/v4/over-spa', (req, res, next) => {
        res.redirect('/v4/nationality');
    });

    router.post('/v4/nationality', (req, res, next) => {
        const whereLive = req.session.data['nationality'];
        if (whereLive === 'British') {
            res.redirect('/v4/living-in-gb');
        } else if (whereLive === 'Irish'){
            res.redirect('/v4/living-in-gb');    
        } else if (whereLive === 'A nationality of the European Economic Area (EEA)'){
            res.redirect('/v4/living-in-uk');   
        } else {
            res.redirect('/v4/we-need-to-get-in-touch');    
        }
    });

    router.post('/v4/living-in-gb', (req, res, next) => {
        const immigrationControl = req.session.data['gb'];
        if (immigrationControl === 'Yes') {
            res.redirect('/v4/health-condition');
        } else {
            res.redirect('/v4/we-need-to-get-in-touch');
        }
    });

    router.post('/v4/living-in-uk', (req, res, next) => {
        const livingUk = req.session.data['living-in-uk'];
        if (livingUk === 'Yes') {
            res.redirect('/v4/living-in-gb');
        } else {
            res.redirect('/v4/we-need-to-get-in-touch');
        }
    });

    // router.post('/v4/refugee-protection', (req, res, next) => {
    //     const refugeeProtection = req.session.data['refugee'];
    //     if (refugeeProtection === 'Yes') {
    //         res.redirect('/v4/working-living-abroad');
    //     } else {
    //         res.redirect('/v4/we-need-to-get-in-touch');
    //     }
    // });

    // router.post('/v4/working-living-abroad', (req, res, next) => {
    //     const outsideBritain = req.session.data['outside-britain'];
    //     if (outsideBritain === 'No') {
    //         res.redirect('/v4/health-condition');
    //     } else {
    //         res.redirect('/v4/we-need-to-get-in-touch');
    //     }
    // });

    // ELIGIBILITY QUESTIONS END

    // HEALTH CONDITION QUESTIONS
    router.post('/v4/health-condition', (req, res, next) => {
        const healthCondition = req.session.data['condition'];
        if (healthCondition === 'Yes, all of the time or sometimes') {
            res.redirect('/v4/over-9-months')
        } else if (healthCondition === 'No, never'){
            res.redirect('/v4/not-eligible');
        } else if (healthCondition === 'Not sure'){
            res.redirect('/v4/about_your_health/condition');
        }
    });

    router.post('/v4/over-9-months', (req, res, next) => {
        const eligible = isEligible(req);
        const over9months = req.session.data['over-9-months'];
        if (over9months === 'Less than 9 months') {
            res.redirect('/v4/not-eligible')
        } else if (over9months === 'At least 9 months'){
            if (eligible){
                res.redirect('/v4/about_your_health/condition')
            } else {
                res.redirect('/v4/not-eligible');
            }
        } else if (over9months === 'Not sure'){
            if (eligible){
                res.redirect('/v4/about_your_health/condition')
            } else {
                res.redirect('/v4/not-eligible');
            }
        }
    });

    router.post('/v4/about_your_health/condition', (req, res, next) => {
        res.redirect('/v4/about_your_health/another');
    });

    router.post('/v4/about_your_health/another', (req, res, next) => {
        const conditionAnother = req.session.data['condition2'];
        if (conditionAnother === 'Yes') {
            res.redirect('/v4/about_your_health/condition-2');
        } else {
            res.redirect('/v4/auth/dev-ready/register/start');
        }
    });

    router.post('/v4/about_your_health/condition-2', (req, res, next) => {
        res.redirect('/v4/about_your_health/another-2');
    });

    router.post('/v4/about_your_health/another-2', (req, res, next) => {
        const conditionAnother2 = req.session.data['condition3'];
        if (conditionAnother2 === 'Yes') {
            res.redirect('/v4/about_your_health/condition-3');
        } else {
            res.redirect('/v4/auth/dev-ready/register/start');
        }
    });

    router.post('/v4/about_your_health/condition-3', (req, res, next) => {
        res.redirect('/v4/about_your_health/another-3');
    });

    router.post('/v4/about_your_health/another-3', (req, res, next) => {
        res.redirect('/v4/auth/dev-ready/register/start');
    });
    // HEALTH CONDITION QUESTIONS END

    // IDV CHECK
    
    router.post('/v4/idv/hmrciv/idvselection', (req, res) => {
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
      
      router.post('/v4/idv/hmrciv/payslip', (req, res) => {
        res.redirect('./payslip-question-1');
      })
      
      router.post('/v4/idv/hmrciv/p60', (req, res) => {
        res.redirect('./p60-question-1');
      })
      
      router.post('/v4/idv/hmrciv/tcKbv', (req, res) => {
        res.redirect('./tax-credits-question-1');
      })
      
      router.post('/v4/idv/hmrciv/tuKbv', (req, res) => {
        res.redirect('./tu-question-1');
      })
      
      router.post('/v4/idv/hmrciv/voiceId', (req, res) => { 
        res.redirect("/carers/voice-id");
      })
      
      router.post('/v4/idv/hmrciv/success', (req, res) => { 
        res.redirect("/v4/address");
      })
      
    // IDV CHECK END

    // PERSONAL DETAILS QUESTIONS
    // router.post('/v4/name', (req, res, next) => {
    //     res.redirect('/v4/nino');
    // });

    // router.post('/v4/nino', (req, res, next) => {
    //     res.redirect('/v4/date-of-birth');
    // });

    // router.post('/v4/date-of-birth', (req, res, next) => {
    //     res.redirect('/v4/address');
    // });

    router.post('/v4/address', (req, res, next) => {
        const immigrationControl2 = req.session.data['safe-address'];
        if (immigrationControl2 === 'No') {
            res.redirect('/v4/address-other');
        } else {
            res.redirect('/v4/contact-details');
        }
    });

    router.post('/v4/address-other', (req, res, next) => {
        res.redirect('/v4/contact-details');
    });

    router.post('/v4/contact-details', (req, res, next) => {
        res.redirect('/v4/in-hospital');
    });

    router.post('/v4/in-hospital', (req, res, next) => {
        res.redirect('/v4/in-care-home');
    });

    router.post('/v4/in-care-home', (req, res, next) => {
        res.redirect('/v4/add-support-communicating');
    });
    // PERSONAL QUESTIONS END


    // ADDITIONAL SUPPORT QUESTIONS

    router.post('/v4/add-support-communicating', (req, res, next) => {
        res.redirect('/v4/add-support');
    });

    router.post('/v4/add-support', (req, res, next) => {
        const addSupport = req.session.data['add-support'];
        if (addSupport === 'Yes, all of the time or sometimes') {
            res.redirect('/v4/add-support-help');
        } else {
            res.redirect('/v4/check-answers');
        }
    });

    router.post('/v4/add-support-help', (req, res, next) => {
        const addsupportHelp = req.session.data['add-support-help'];
        if (addsupportHelp === 'Yes') {
            res.redirect('/v4/add-support-name');
        } else {
            res.redirect('/v4/check-answers');
        }
    });

    router.post('/v4/add-support-name', (req, res, next) => {
        res.redirect('/v4/add-support-address');
    });

    router.post('/v4/add-support-address', (req, res, next) => {
        const addsupportAddress = req.session.data['add-support-safe-address'];
        if (addsupportAddress === 'No') {
            res.redirect('/v4/add-support-address-other');
        } else {
            res.redirect('/v4/add-support-contact-details');
        }
    });

    router.post('/v4/add-support-address-other', (req, res, next) => {
        res.redirect('/v4/add-support-contact-details');
    });

    router.post('/v4/add-support-contact-details', (req, res, next) => {
        res.redirect('/v4/check-answers');
    });

    // ADDITIONAL SUPPORT QUESTIONS END

    // COMPLEX APPLICATION CONTACT DETAILS

    router.post('/v4/we-need-to-get-in-touch', (req, res, next) => {
        res.redirect('/v4/complex_contact_details/complex-contact-name');
    });

    router.post('/v4/complex_contact_details/complex-contact-name', (req, res, next) => {
        res.redirect('/v4/complex_contact_details/complex-contact-nino');
    });

    router.post('/v4/complex_contact_details/complex-contact-nino', (req, res, next) => {
        res.redirect('/v4/complex_contact_details/complex-contact-date-of-birth');
    });

    router.post('/v4/complex_contact_details/complex-contact-date-of-birth', (req, res, next) => {
        res.redirect('/v4/complex_contact_details/complex-contact-details');
    });

    router.post('/v4/complex_contact_details/complex-contact-details', (req, res, next) => {
        res.redirect('/v4/complex_contact_details/complex-contact-check-answers');
    });

    router.post('/v4/complex_contact_details/complex-contact-check-answers', (req, res, next) => {
        res.redirect('/v4/complex_contact_details/complex-contact-confirmation');
    });

    // COMPLEX APPLICATION CONTACT DETAILS END

    // RETURNING USER FLOW START
    router.post('/v4/save_and_return/sign-in', (req, res, next) => {
        res.redirect('/v4/save_and_return/sign-in-2fa');
    });
    
    router.post('/v4/save_and_return/sign-in-2fa', (req, res, next) => {
        res.redirect('/v4/in-hospital');
    });
    // RETURNING USER FLOW END
};
    
