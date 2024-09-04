const { compile } = require("nunjucks");
const nationalities = require('../assets/nationalities.json')
const countries = require('../assets/countries.json')

module.exports = function (router) {
    function isEligible(req) {
        return !(req.session.data['over-16'] === 'Under 16'
            || req.session.data['overspa'] === 'No')
    }

    // function complexCase(req) {
    //     return (req.session.data['nationality'] === 'Another nationality' ||
    //         (
    //             req.session.data['nationality'] === 'A nationality of the European Economic Area (EEA)' &&
    //             (req.session.data['gb'] === 'No') &&
    //             (req.session.data['living-in-uk'] === 'No' || req.session.data['living-in-uk'] === 'Not sure')
    //         ) ||
    //         (req.session.data['eu-benefits'] === 'Yes' || req.session.data['eu-benefits'] === 'Not sure') ||
    //         (req.session.data['eu-insurance'] === 'Yes' || req.session.data['eu-insurance'] === 'Not sure') ||
    //         (
    //             (req.session.data['nationality'] === 'British' || req.session.data['nationality'] === 'Irish') &&
    //             (req.session.data['gb'] === 'No')
    //         )
    //     )
    // }

    // ELIGIBILITY QUESTIONS

    router.post('/mvp/intro-question', (req, res, next) => {
        const newOld = req.session.data['new-existing'];
        if (newOld === 'Yes') {
            res.redirect("/mvp/save_and_return/sign-in");
        } else  {
            res.redirect('/mvp/sign-in/register-start');
        }
    })

    router.post('/mvp/eligibility-start', (req, res) => {
        res.redirect("/mvp/over-16");
    })

    router.post('/mvp/over-16', (req, res, next) => {
        const over16 = req.session.data['over-16'];
        if (over16 === 'Over State Pension age') {
            res.redirect('/mvp/over-spa');
        } else {
            res.redirect('/mvp/health-condition');
        }
    });

    router.post('/mvp/over-spa', (req, res, next) => {
        res.redirect('/mvp/health-condition');
    });

    router.post('/mvp/health-condition', (req, res, next) => {
        const healthCondition = req.session.data['condition'];
        if (healthCondition === 'Yes, all of the time or sometimes') {
            res.redirect('/mvp/over-9-months')
        } else if (healthCondition === 'No, never') {
            res.redirect('/mvp/not-eligible');
        } else if (healthCondition === 'Not sure') {
            res.redirect('/mvp/over-9-months');
        }
    });

    router.post('/mvp/over-9-months', (req, res, next) => {
        const eligible = isEligible(req);
        const over9months = req.session.data['over-9-months'];
        if (over9months === 'Less than 9 months') {
            res.redirect('/mvp/not-eligible')
        } else if (over9months === 'At least 9 months') {
            if (eligible) {
                res.redirect('/mvp/eligible')
            } else {
                res.redirect('/mvp/not-eligible');
            }
        } else if (over9months === 'Not sure') {
            if (eligible) {
                res.redirect('/mvp/eligible')
            } else {
                res.redirect('/mvp/not-eligible');
            }
        }
    });

    router.post('/mvp/eligible', (req, res, next) => {
        res.redirect('/mvp/sign-in/register-start');
    });

    // ELIGIBILITY QUESTIONS END

    // IDV CHECK

    // router.post('/mvp/idv/hmrciv/idvselection', (req, res) => {
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

    //   router.post('/mvp/idv/hmrciv/payslip', (req, res) => {
    //     res.redirect('./payslip-question-1');
    //   })

    //   router.post('/mvp/idv/hmrciv/p60', (req, res) => {
    //     res.redirect('./p60-question-1');
    //   })

    //   router.post('/mvp/idv/hmrciv/tcKbv', (req, res) => {
    //     res.redirect('./tax-credits-question-1');
    //   })

    //   router.post('/mvp/idv/hmrciv/tuKbv', (req, res) => {
    //     res.redirect('./tu-question-1');
    //   })

    //   router.post('/mvp/idv/hmrciv/voiceId', (req, res) => {
    //     res.redirect("/carers/voice-id");
    //   })

    //   router.post('/mvp/idv/hmrciv/success', (req, res) => {
    //     res.redirect("/mvp/address");
    //   })

    router.post('/mvp/auth/dev-ready/sign-in-2fa', (req, res) => {
        res.redirect("/mvp/add-support-communicating");
    })

    // IDV CHECK END

    // ADDITIONAL SUPPORT QUESTIONS

    router.post('/mvp/add-support-communicating', (req, res, next) => {
        res.redirect('/mvp/add-support');
    });

    router.post('/mvp/add-support', (req, res, next) => {
        const addSupport = req.session.data['add-support'];
        if (addSupport === 'Yes') {
            res.redirect('/mvp/add-support-help');
        } else {
            res.redirect('/mvp/name');
        }
    });

    router.post('/mvp/add-support-help', (req, res, next) => {
        const addsupportHelp = req.session.data['add-support-help'];
        if (addsupportHelp === 'Yes') {
            res.redirect('/mvp/add-support-name');
        } else {
            res.redirect('/mvp/name');
        }
    });

    router.post('/mvp/add-support-name', (req, res, next) => {
        res.redirect('/mvp/name');
    });

    // router.post('/mvp/add-support-address', (req, res, next) => {
    //     const addsupportAddress = req.session.data['add-support-safe-address'];
    //     if (addsupportAddress === 'No') {
    //         res.redirect('/mvp/add-support-address-other');
    //     } else {
    //         res.redirect('/mvp/add-support-contact-details');
    //     }
    // });

    // router.get('/mvp/add-support-address', (req, res, next) => {
    //     res.locals.countries = countries;
    //     res.render('mvp/add-support-address')
    // })

    // router.post('/mvp/add-support-address-other', (req, res, next) => {
    //     res.redirect('/mvp/add-support-contact-details');
    // });

    // router.get('/mvp/add-support-address-other', (req, res, next) => {
    //     res.locals.countries = countries;
    //     res.render('mvp/add-support-address-other')
    // })

    // router.post('/mvp/add-support-contact-details', (req, res, next) => {
    //     res.redirect('/mvp/name');
    // });

    // ADDITIONAL SUPPORT QUESTIONS END

    // PERSONAL DETAILS START
    router.post('/mvp/name', (req, res, next) => {
        res.redirect('/mvp/nino');
    });

    router.post('/mvp/nino', (req, res, next) => {
        res.redirect('/mvp/date-of-birth');
    });

    router.post('/mvp/date-of-birth', (req, res, next) => {
        res.redirect('/mvp/address');
    });

    router.post('/mvp/address', (req, res, next) => {
        const immigrationControl2 = req.session.data['safe-address'];
        if (immigrationControl2 === 'No') {
            res.redirect('/mvp/address-other');
        } else {
            res.redirect('/mvp/contact-details');
        }
    });

    router.get('/mvp/address', (req, res, next) => {
        res.locals.countries = countries;
        res.render('mvp/address.html')
    })

    router.get('/mvp/validation/personal_details/address', (req, res, next) => {
        res.locals.countries = countries;
        res.render('mvp/validation/personal_details/address.html')
    })

    router.get('/mvp/validation/personal_details/address-other', (req, res, next) => {
        res.locals.countries = countries;
        res.render('mvp/validation/personal_details/address-other.html')
    })

    router.post('/mvp/address-other', (req, res, next) => {
        res.redirect('/mvp/contact-details');
    });

    router.get('/mvp/address-other', (req, res, next) => {
        res.locals.countries = countries;
        res.render('mvp/address-other.html')
    })

    router.post('/mvp/contact-details', (req, res, next) => {
        const altFormat = req.session.data['format-type'];
        if (altFormat === 'Braille') {
            res.redirect('/mvp/alt-format-braille'); }
        else if (altFormat === 'Sign Language') {
            res.redirect('/mvp/alt-format-sign-language');  }
        else if (altFormat === 'Audio') {
            res.redirect('/mvp/alt-format-audio');   }
        else if (altFormat === 'Paper and other formats') {
            res.redirect('/mvp/alt-format-paper'); }
        else {
            res.redirect('/mvp/nationality');
        }
    });

    router.post('/mvp/alt-format-braille', (req, res, next) => {
        res.redirect('/mvp/nationality');
    });

    router.post('/mvp/alt-format-sign-language', (req, res, next) => {
        res.redirect('/mvp/nationality');
    });

    router.post('/mvp/alt-format-audio', (req, res, next) => {
        res.redirect('/mvp/nationality');
    });

    router.post('/mvp/alt-format-paper', (req, res, next) => {
        res.redirect('/mvp/nationality');
    });

    // PERSONAL DETAILS END

    // RES AND PRRS START

    router.post('/mvp/nationality', (req, res, next) => {
        const whereLive = req.session.data['nationality'];
        if (whereLive === 'A nationality of the European Economic Area (EEA) or Switzerland') {
            res.redirect('/mvp/living-in-uk');
        } else {
            res.redirect('/mvp/living-in-gb');
        }
    });

    router.get('/mvp/nationality', (req, res, next) => {
        res.locals.nationalities = nationalities;
        res.render('mvp/nationality.html')
    })

    router.get('/mvp/validation/res_and_pres/nationality', (req, res, next) => {
        res.locals.nationalities = nationalities;
        res.render('mvp/validation/res_and_pres/nationality.html')
    })

    router.post('/mvp/living-in-uk', (req, res, next) => {
        const livingUk = req.session.data['living-in-uk'];
        if (livingUk === 'No') {
            res.redirect('/mvp/about_your_health/condition-new-2');
        } else {
            res.redirect('/mvp/living-in-gb');
        }
    });

    router.post('/mvp/living-in-gb', (req, res, next) => {
        const nationality = req.session.data['nationality']
        const gb = req.session.data['gb']

        if (nationality === 'British' ||
            nationality === 'Irish' ||
            nationality === 'A nationality of the European Economic Area (EEA) or Switzerland'
        ) {
            if (gb === 'No') {
                res.redirect('/mvp/about_your_health/condition-new-2')
            }
            if (gb === 'Yes' || gb === 'Not sure') {
                res.redirect('/mvp/eu-question')
            }
        } else if (nationality === 'Another nationality') {
            res.redirect('/mvp/about_your_health/condition-new-2')
        }
    })

    // router.post('/mvp/eu-question', (req, res, next) => {
    //     res.redirect('/mvp/eu-worked');
    // });

    // router.post('/mvp/eu-worked', (req, res, next) => {
    //     const euWorked = req.session.data['eu-worked'];
    //     if (euWorked === 'No') {
    //         res.redirect('/mvp/about_your_health/condition-new-2');
    //     } else {
    //         res.redirect('/mvp/eu-insurance');
    //     }
    // });

    // RES AND PRRES END

    // ABOUT YOUR HEALTH START

    router.post('/mvp/eu-question', (req, res, next) => {
        res.redirect('/mvp/about_your_health/condition-new-2');
    });

    router.post('/mvp/about_your_health/condition-new-2', (req, res, next) => {
        res.redirect('/mvp/about_your_health/hcp-question');
    });

    // router.post('/mvp/about_your_health/condition-new-2-detail', (req, res, next) => {
    //     res.redirect('/mvp/about_your_health/hcp-question');
    // });

    router.post('/mvp/about_your_health/hcp-question', (req, res, next) => {
        const hcpQuestion = req.session.data['hcp'];
        if (hcpQuestion === 'Yes') {
            res.redirect('/mvp/about_your_health/consent');
        } else {
            res.redirect('/mvp/in-hospital');
        }
    });

    router.post('/mvp/about_your_health/consent', (req, res, next) => {
        const conSent = req.session.data['consent'];
        if (conSent === 'Yes, I agree') {
            res.redirect('/mvp/about_your_health/hcp-1');
        } else {
            res.redirect('/mvp/in-hospital');
        }
    });

    router.post('/mvp/about_your_health/hcp-1', (req, res, next) => {
        res.redirect('/mvp/about_your_health/hcp-another');
    });

    router.get('/mvp/about_your_health/hcp-1', (req, res, next) => {
        res.locals.countries = countries;
        res.render('mvp/about_your_health/hcp-1.html')
    })

    router.get('/mvp/validation/about_your_health/hcp-1', (req, res, next) => {
        res.locals.countries = countries;
        res.render('mvp/validation/about_your_health/hcp-1.html')
    })

    router.post('/mvp/about_your_health/hcp-another', (req, res, next) => {
        const hcpAnother1 = req.session.data['hcp-2'];
        if (hcpAnother1 === 'Yes') {
            res.redirect('/mvp/about_your_health/hcp-2');
        } else {
            res.redirect('/mvp/in-hospital');
        }
    });

    router.post('/mvp/about_your_health/hcp-2', (req, res, next) => {
        res.redirect('/mvp/about_your_health/hcp-another-2');
    });

    router.get('/mvp/about_your_health/hcp-2', (req, res, next) => {
        res.locals.countries = countries;
        res.render('mvp/about_your_health/hcp-2.html')
    })

    router.post('/mvp/about_your_health/hcp-another-2', (req, res, next) => {
        const hcpAnother2 = req.session.data['hcp-3'];
        if (hcpAnother2 === 'Yes') {
            res.redirect('/mvp/about_your_health/hcp-3');
        } else {
            res.redirect('/mvp/in-hospital');
        }
    });

    router.post('/mvp/about_your_health/hcp-3', (req, res, next) => {
        res.redirect('/mvp/about_your_health/hcp-another-3');
    });

    router.get('/mvp/about_your_health/hcp-3', (req, res, next) => {
        res.locals.countries = countries;
        res.render('mvp/about_your_health/hcp-3.html')
    })

    router.post('/mvp/about_your_health/hcp-another-3', (req, res, next) => {
        res.redirect('/mvp/in-hospital');
    });

    router.post('/mvp/in-hospital', (req, res, next) => {
        const inHospital = req.session.data['hospital'];
        if (inHospital === 'Hospital') {
            res.redirect('/mvp/hospital-admission');
        } else if (inHospital === 'Hospice') {
            res.redirect('/mvp/hospice-admission');
        } else if (inHospital === 'Care or nursing home') {
            res.redirect('/mvp/care-home-admission');
        } else if (inHospital === 'Other') {
              res.redirect('/mvp/care-home-admission');
        } else {
            res.redirect('/mvp/check-answers');
        }
    });

    router.post('/mvp/hospital-admission', (req, res, next) => {
        res.redirect('/mvp/hospital-address');
    });

    router.post('/mvp/hospital-address', (req, res, next) => {
        res.redirect('/mvp/check-answers');
    });

    router.get('/mvp/hospital-address', (req, res, next) => {
        res.locals.countries = countries;
        res.render('mvp/hospital-address')
    })

    router.get('/mvp/validation/about_your_health/hospital-address', (req, res, next) => {
        res.locals.countries = countries;
        res.render('mvp/validation/about_your_health/hospital-address')
    })

    router.post('/mvp/hospice-admission', (req, res, next) => {
        res.redirect('/mvp/hospice-address');
    });

    router.post('/mvp/hospice-address', (req, res, next) => {
        res.redirect('/mvp/check-answers');
    });

    router.get('/mvp/hospice-address', (req, res, next) => {
        res.locals.countries = countries;
        res.render('mvp/hospice-address')
    })

    router.get('/mvp/validation/about_your_health/hospice-address', (req, res, next) => {
        res.locals.countries = countries;
        res.render('mvp/validation/about_your_health/hospice-address')
    })

    router.post('/mvp/care-home-admission', (req, res, next) => {
        res.redirect('/mvp/care-home-address');
    });
    router.post('/mvp/care-home-address', (req, res, next) => {
        res.redirect('/mvp/check-answers');
    });

    router.get('/mvp/care-home-address', (req, res, next) => {
        res.locals.countries = countries;
        res.render('mvp/care-home-address')
    })

    router.get('/mvp/validation/about_your_health/care-home-address', (req, res, next) => {
        res.locals.countries = countries;
        res.render('mvp/validation/about_your_health/care-home-address')
    })

    // ABOUT YOUR HEALTH END

    // CHECK ANSWERS START
    // router.post('/mvp/check-answers', (req, res, next) => {
    //     console.log(req.session.data)
    //     const complex = complexCase(req);
    //     if (!complex) {
    //         res.redirect('/mvp/confirmation')
    //     } else {
    //         res.redirect('/mvp/we-need-to-get-in-touch')
    //     };
    // });

    // router.post('/mvp/we-need-to-get-in-touch', (req, res, next) => {
    //     res.redirect('/mvp/complex_contact_details/complex-contact-confirmation');
    // });

    // router.post('/mvp/confirmation', (req, res, next) => {
    //     res.redirect('/p5/list');
    // });

    router.post('/mvp/check-answers', (req, res, next) => {
        res.redirect('/mvp/confirmation');
    });

    router.post('/mvp/remove-hcp-confirmation', (req, res, next) => {
        res.redirect('/mvp/check-answers');
    });

    // CHECK ANSWERS END


    // COMPLEX APPLICATION CONTACT DETAILS

    // router.post('/mvp/we-need-to-get-in-touch', (req, res, next) => {
    //     res.redirect('/mvp/complex_contact_details/complex-contact-name');
    // });

    // router.post('/mvp/complex_contact_details/complex-contact-name', (req, res, next) => {
    //     res.redirect('/mvp/complex_contact_details/complex-contact-nino');
    // });

    // router.post('/mvp/complex_contact_details/complex-contact-nino', (req, res, next) => {
    //     res.redirect('/mvp/complex_contact_details/complex-contact-date-of-birth');
    // });

    // router.post('/mvp/complex_contact_details/complex-contact-date-of-birth', (req, res, next) => {
    //     res.redirect('/mvp/complex_contact_details/complex-contact-details');
    // });

    // router.post('/mvp/complex_contact_details/complex-contact-details', (req, res, next) => {
    //     res.redirect('/mvp/complex_contact_details/complex-contact-check-answers');
    // });

    // router.post('/mvp/complex_contact_details/complex-contact-check-answers', (req, res, next) => {
    //     res.redirect('/mvp/complex_contact_details/complex-contact-confirmation');
    // });

    // COMPLEX APPLICATION CONTACT DETAILS END

    // RETURNING USER FLOW START
    router.post('/mvp/save_and_return/sign-in', (req, res, next) => {
        res.redirect('/mvp/save_and_return/sign-in-2fa');
    });

    router.post('/mvp/save_and_return/sign-in-2fa', (req, res, next) => {
        res.redirect('/mvp/save_and_return/signed-in');
    });

    router.post('mvp/save_and_return/signed-in', (req, res, next) => {
        res.redirect('/mvp/#');
    });
    // RETURNING USER FLOW END
};
