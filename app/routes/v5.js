const { compile } = require("nunjucks");

module.exports = function (router) {
    function isEligible(req) {
        return !(req.session.data['over-16'] === 'Under 16'
            || req.session.data['overspa'] === 'No')
    }

    function complexCase(req) {
        return (req.session.data['nationality'] === 'Another nationality'
            || (req.session.data['nationality'] === 'A nationality of the European Economic Area (EEA)' && (req.session.data['living-in-uk'] === 'No' || req.session.data['living-in-uk'] === 'Not sure'))
            || (req.session.data['gb'] === 'No'|| req.session.data['gb'] === 'Not sure')
            || (req.session.data['eu-benefits'] === 'Yes' || req.session.data['eu-benefits'] === 'Not sure')
            || (req.session.data['eu-insurance'] === 'Yes' || req.session.data['eu-insurance'] === 'Not sure'))
        }

    // ELIGIBILITY QUESTIONS
    router.post('/v5/over-16', (req, res, next) => {
        const over16 = req.session.data['over-16'];
        if (over16 === 'Over State Pension age') {
            res.redirect('/v5/over-spa');
        } else {
            res.redirect('/v5/nationality');
        }
    });

    router.post('/v5/over-spa', (req, res, next) => {
        res.redirect('/v5/nationality');
    });

    router.post('/v5/nationality', (req, res, next) => {
        const whereLive = req.session.data['nationality'];
        if (whereLive === 'A nationality of the European Economic Area (EEA)') {
            res.redirect('/v5/living-in-uk');
        } else {
            res.redirect('/v5/living-in-gb');
        }
    });

    router.post('/v5/living-in-uk', (req, res, next) => {
        res.redirect('/v5/living-in-gb');
    });

    router.post('/v5/living-in-gb', (req, res, next) => {
        res.redirect('/v5/eu-benefits');
    });

    router.post('/v5/eu-benefits', (req, res, next) => {
        res.redirect('/v5/eu-worked');
    });

    router.post('/v5/eu-worked', (req, res, next) => {
        const euWorked = req.session.data['eu-worked'];
        if (euWorked === 'No') {
            res.redirect('/v5/health-condition');
        } else {
            res.redirect('/v5/eu-insurance');
        }
    });

    router.post('/v5/eu-insurance', (req, res, next) => {
        res.redirect('/v5/health-condition');
    });
    

    // router.post('/v5/refugee-protection', (req, res, next) => {
    //     const refugeeProtection = req.session.data['refugee'];
    //     if (refugeeProtection === 'Yes') {
    //         res.redirect('/v5/working-living-abroad');
    //     } else {
    //         res.redirect('/v5/we-need-to-get-in-touch');
    //     }
    // });

    // router.post('/v5/working-living-abroad', (req, res, next) => {
    //     const outsideBritain = req.session.data['outside-britain'];
    //     if (outsideBritain === 'No') {
    //         res.redirect('/v5/health-condition');
    //     } else {
    //         res.redirect('/v5/we-need-to-get-in-touch');
    //     }
    // });

    router.post('/v5/health-condition', (req, res, next) => {
        const healthCondition = req.session.data['condition'];
        if (healthCondition === 'Yes, all of the time or sometimes') {
            res.redirect('/v5/over-9-months')
        } else if (healthCondition === 'No, never') {
            res.redirect('/v5/not-eligible');
        } else if (healthCondition === 'Not sure') {
            res.redirect('/v5/about_your_health/condition');
        }
    });

    router.post('/v5/over-9-months', (req, res, next) => {
        const eligible = isEligible(req);
        const over9months = req.session.data['over-9-months'];
        if (over9months === 'Less than 9 months') {
            res.redirect('/v5/not-eligible')
        } else if (over9months === 'At least 9 months') {
            if (eligible) {
                res.redirect('/v5/auth/dev-ready/register/start')
            } else {
                res.redirect('/v5/not-eligible');
            }
        } else if (over9months === 'Not sure') {
            if (eligible) {
                res.redirect('/v5/auth/dev-ready/register/start')
            } else {
                res.redirect('/v5/not-eligible');
            }
        }
    });

    // ELIGIBILITY QUESTIONS END

    // IDV CHECK

    // router.post('/v5/idv/hmrciv/idvselection', (req, res) => {
    //     const passportConsent = req.session.data['passport-consent'];
    //     const payslipOrP60 = req.session.data['payslipOrP60'];
    //     const voiceID = req.session.data['tcOptions'];
    //     const tuConsent = req.session.data['cra-consent'];

    //     //Passport and payslip
    //     if (passportConsent == 'true' && payslipOrP60 == 'payslip') {
    //       res.redirect('./your-passport-details?payslip=true')
    //     }
    //     //Passport and P60 
    //     else if (passportConsent == 'true' && payslipOrP60 == 'p60') {
    //       res.redirect('./your-passport-details?p60=true')
    //     }
    //     //Passport and tax credits KBV
    //     else if (passportConsent == 'true' && voiceID == 'voiceIdNo') {
    //       res.redirect('./your-passport-details?tcKbv=true')
    //     }
    //     //Passport and tax credits voice ID
    //     else if (passportConsent == 'true' && voiceID == 'voiceIdYes') {
    //       res.redirect('./your-passport-details?voiceId=true')
    //     }
    //     //Passport and Transunion
    //     else if (passportConsent == 'true' && tuConsent == 'true') {
    //       res.redirect('./your-passport-details?tuKbv=true')
    //     }
    //     //Payslip and tax credits KBV
    //     else if (payslipOrP60 == 'payslip' && voiceID == 'voiceIdNo') {
    //       res.redirect('./payslip-question-1?tcKbv=true');
    //     }
    //     //Payslip and tax credits voice ID
    //     else if (payslipOrP60 == 'payslip' && voiceID == 'voiceIdYes') {
    //       res.redirect('./payslip-question-1?voiceId=true')
    //     }
    //     //Payslip and Transunion
    //     else if (payslipOrP60 == 'payslip' && tuConsent == 'true') {
    //       res.redirect('./payslip-question-1?tuKbv=true');
    //     }
    //     //P60 and tax credits KBV
    //     else if (payslipOrP60 == 'p60' && voiceID == 'voiceIdNo') {
    //       res.redirect('./p60-question-1?tcKbv=true');
    //     }
    //     //P60 and tax credits voice ID
    //     else if (payslipOrP60 == 'p60' && voiceID == 'voiceIdYes') {
    //       res.redirect('./p60-question-1?voiceId=true')
    //     }
    //     //P60 and Transunion
    //     else if (payslipOrP60 == 'p60' && tuConsent == 'true') {
    //       res.redirect('./p60-question-1?tuKbv=true');
    //     }
    //     //Tax credits KBV and Transunion
    //     else if (voiceID == 'voiceIdNo' && tuConsent == 'true') {
    //       res.redirect('./tax-credits-question-1?tuKbv=true');
    //     }
    //     //Tax credits voice ID and Transunion
    //     else if (voiceID == 'voiceIdYes' && tuConsent == 'true') {
    //       res.redirect('./voice-id?tuKbv=true')
    //     }
    //     // Fallback
    //     else {
    //       res.redirect('./choose-2-items-error')
    //     }
    //   })

    //   router.post('/v5/idv/hmrciv/payslip', (req, res) => {
    //     res.redirect('./payslip-question-1');
    //   })

    //   router.post('/v5/idv/hmrciv/p60', (req, res) => {
    //     res.redirect('./p60-question-1');
    //   })

    //   router.post('/v5/idv/hmrciv/tcKbv', (req, res) => {
    //     res.redirect('./tax-credits-question-1');
    //   })

    //   router.post('/v5/idv/hmrciv/tuKbv', (req, res) => {
    //     res.redirect('./tu-question-1');
    //   })

    //   router.post('/v5/idv/hmrciv/voiceId', (req, res) => { 
    //     res.redirect("/carers/voice-id");
    //   })

    //   router.post('/v5/idv/hmrciv/success', (req, res) => { 
    //     res.redirect("/v5/address");
    //   })

    router.post('/v5/auth/dev-ready/sign-in-2fa', (req, res) => {
        res.redirect("/v5/name");
    })

    // IDV CHECK END

    // PERSONAL DETAILS AND HEALTH QUESTIONS
    router.post('/v5/name', (req, res, next) => {
        res.redirect('/v5/nino');
    });

    router.post('/v5/nino', (req, res, next) => {
        res.redirect('/v5/date-of-birth');
    });

    router.post('/v5/date-of-birth', (req, res, next) => {
        res.redirect('/v5/address');
    });

    router.post('/v5/address', (req, res, next) => {
        const immigrationControl2 = req.session.data['safe-address'];
        if (immigrationControl2 === 'No') {
            res.redirect('/v5/address-other');
        } else {
            res.redirect('/v5/contact-details');
        }
    });

    router.post('/v5/address-other', (req, res, next) => {
        res.redirect('/v5/contact-details');
    });

    router.post('/v5/contact-details', (req, res, next) => {
        res.redirect('/v5/about_your_health/condition-new-2');
    });

    router.post('/v5/about_your_health/condition-new-2', (req, res, next) => {
        res.redirect('/v5/about_your_health/hcp-question');
    });

    router.post('/v5/about_your_health/hcp-question', (req, res, next) => {
        const hcpQuestion = req.session.data['hcp'];
        if (hcpQuestion === 'Yes') {
            res.redirect('/v5/about_your_health/hcp-1');
        } else {
            res.redirect('/v5/in-hospital');
        }
    });

    router.post('/v5/about_your_health/hcp-1', (req, res, next) => {
        res.redirect('/v5/about_your_health/hcp-another');
    });

    router.post('/v5/about_your_health/hcp-another', (req, res, next) => {
        const hcpAnother1 = req.session.data['hcp-2'];
        if (hcpAnother1 === 'Yes') {
            res.redirect('/v5/about_your_health/hcp-2');
        } else {
            res.redirect('/v5/in-hospital');
        }
    });

    router.post('/v5/about_your_health/hcp-2', (req, res, next) => {
        res.redirect('/v5/about_your_health/hcp-another-2');
    });

    router.post('/v5/about_your_health/hcp-another-2', (req, res, next) => {
        const hcpAnother2 = req.session.data['hcp-3'];
        if (hcpAnother2 === 'Yes') {
            res.redirect('/v5/about_your_health/hcp-3');
        } else {
            res.redirect('/v5/in-hospital');
        }
    });

    router.post('/v5/about_your_health/hcp-3', (req, res, next) => {
        res.redirect('/v5/about_your_health/hcp-another-3');
    });

    router.post('/v5/about_your_health/hcp-another-3', (req, res, next) => {
        res.redirect('/v5/in-hospital');
    });

    router.post('/v5/in-hospital', (req, res, next) => {
        const inHospital = req.session.data['hospital'];
        if (inHospital === 'Yes') {
            res.redirect('/v5/hospital-address');
        } else {
            res.redirect('/v5/in-care-home');
        }
    });

    router.post('/v5/hospital-address', (req, res, next) => {
        res.redirect('/v5/add-support-communicating');
    });

    router.post('/v5/in-care-home', (req, res, next) => {
        const inCarehome = req.session.data['carehome'];
        if (inCarehome === 'Yes') {
            res.redirect('/v5/care-home-address');
        } else {
            res.redirect('/v5/add-support-communicating');
        }
    });

    router.post('/v5/care-home-address', (req, res, next) => {
        res.redirect('/v5/add-support-communicating');
    });

    // PERSONAL AND HEALTH QUESTIONS END


    // ADDITIONAL SUPPORT QUESTIONS

    router.post('/v5/add-support-communicating', (req, res, next) => {
        res.redirect('/v5/add-support');
    });

    router.post('/v5/add-support', (req, res, next) => {
        const addSupport = req.session.data['add-support'];
        if (addSupport === 'Yes, all of the time or sometimes') {
            res.redirect('/v5/add-support-help');
        } else {
            res.redirect('/v5/check-answers');
        }
    });

    router.post('/v5/add-support-help', (req, res, next) => {
        const addsupportHelp = req.session.data['add-support-help'];
        if (addsupportHelp === 'Yes') {
            res.redirect('/v5/add-support-name');
        } else {
            res.redirect('/v5/check-answers');
        }
    });

    router.post('/v5/add-support-name', (req, res, next) => {
        res.redirect('/v5/add-support-address');
    });

    router.post('/v5/add-support-address', (req, res, next) => {
        const addsupportAddress = req.session.data['add-support-safe-address'];
        if (addsupportAddress === 'No') {
            res.redirect('/v5/add-support-address-other');
        } else {
            res.redirect('/v5/add-support-contact-details');
        }
    });

    router.post('/v5/add-support-address-other', (req, res, next) => {
        res.redirect('/v5/add-support-contact-details');
    });

    router.post('/v5/add-support-contact-details', (req, res, next) => {
        res.redirect('/v5/check-answers');
    });

    // ADDITIONAL SUPPORT QUESTIONS END

    router.post('/v5/check-answers', (req, res, next) => {
        console.log(req.session.data)
        const complex = complexCase(req);
        if (!complex) {
            res.redirect('/v5/confirmation')
        } else {
            res.redirect('/v5/we-need-to-get-in-touch')
        };
    });

    router.post('/v5/we-need-to-get-in-touch', (req, res, next) => {
        res.redirect('/v5/complex_contact_details/complex-contact-confirmation');
    });



    // COMPLEX APPLICATION CONTACT DETAILS

    // router.post('/v5/we-need-to-get-in-touch', (req, res, next) => {
    //     res.redirect('/v5/complex_contact_details/complex-contact-name');
    // });

    // router.post('/v5/complex_contact_details/complex-contact-name', (req, res, next) => {
    //     res.redirect('/v5/complex_contact_details/complex-contact-nino');
    // });

    // router.post('/v5/complex_contact_details/complex-contact-nino', (req, res, next) => {
    //     res.redirect('/v5/complex_contact_details/complex-contact-date-of-birth');
    // });

    // router.post('/v5/complex_contact_details/complex-contact-date-of-birth', (req, res, next) => {
    //     res.redirect('/v5/complex_contact_details/complex-contact-details');
    // });

    // router.post('/v5/complex_contact_details/complex-contact-details', (req, res, next) => {
    //     res.redirect('/v5/complex_contact_details/complex-contact-check-answers');
    // });

    // router.post('/v5/complex_contact_details/complex-contact-check-answers', (req, res, next) => {
    //     res.redirect('/v5/complex_contact_details/complex-contact-confirmation');
    // });

    // COMPLEX APPLICATION CONTACT DETAILS END

    // RETURNING USER FLOW START
    router.post('/v5/save_and_return/sign-in', (req, res, next) => {
        res.redirect('/v5/save_and_return/sign-in-2fa');
    });

    router.post('/v5/save_and_return/sign-in-2fa', (req, res, next) => {
        res.redirect('/v5/save_and_return/signed-in');
    });

    router.post('v5/save_and_return/signed-in', (req, res, next) => {
        res.redirect('/v5/in-hospital');
    });
    // RETURNING USER FLOW END
};

