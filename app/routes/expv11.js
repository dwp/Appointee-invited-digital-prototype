const { compile } = require("nunjucks");
const nationalities = require('../assets/nationalities.json')
const countries = require('../assets/countries.json')

module.exports = function (router) {
    function isEligible(req) {
        return !(req.session.data['over-16'] === 'Under 16'
            || req.session.data['overspa'] === 'No')
    }

    // function complexCase (req) {
    //     return (req.session.data['nationality'] === 'Another nationality' ||
    //       (
    //         req.session.data['nationality'] === 'A nationality of the European Economic Area (EEA)' &&
    //         (req.session.data['gb'] === 'No')&&
    //         (req.session.data['living-in-uk'] === 'No' || req.session.data['living-in-uk'] === 'Not sure')
    //       ) ||
    //       (req.session.data['eu-question'].indexOf('Getting a pension or benefit from an EEA country') > -1 || req.session.data['eu-question'].indexOf('Paid or paying insurance to an EEA country') > -1 ) ||
    //       (
    //         (req.session.data['nationality'] === 'British' || req.session.data['nationality'] === 'Irish') &&
    //         (req.session.data['gb'] === 'No')
    //       )
    //     )
    //   }

    // ELIGIBILITY QUESTIONS

    router.post('/experimental/v11/intro-question', (req, res, next) => {
        const newOld = req.session.data['new-existing'];
        if (newOld === 'yes') {
            res.redirect("/experimental/v11/save_and_return/sign-in");
        } else  {
            res.redirect('/experimental/v11/sign-in/register-start');
        }
    })

    // router.post('/experimental/v11/eligibility-start', (req, res) => {
    //     res.redirect("/experimental/v11/over-16");
    // })

    // router.post('/experimental/v11/over-16', (req, res, next) => {
    //     const over16 = req.session.data['over-16'];
    //     if (over16 === 'Over State Pension age') {
    //         res.redirect('/experimental/v11/over-spa');
    //     } else {
    //         res.redirect('/experimental/v11/health-condition');
    //     }
    // });

    // router.post('/experimental/v11/over-spa', (req, res, next) => {
    //     res.redirect('/experimental/v11/health-condition');
    // });

    // router.post('/experimental/v11/health-condition', (req, res, next) => {
    //     const healthCondition = req.session.data['condition'];
    //     if (healthCondition === 'Yes, all of the time or sometimes') {
    //         res.redirect('/experimental/v11/over-9-months')
    //     } else if (healthCondition === 'No, never') {
    //         res.redirect('/experimental/v11/not-eligible');
    //     } else if (healthCondition === 'Not sure') {
    //         res.redirect('/experimental/v11/over-9-months');
    //     }
    // });

    // router.post('/experimental/v11/over-9-months', (req, res, next) => {
    //     const eligible = isEligible(req);
    //     const over9months = req.session.data['over-9-months'];
    //     if (over9months === 'Less than 9 months') {
    //         res.redirect('/experimental/v11/not-eligible')
    //     } else if (over9months === 'At least 9 months') {
    //         if (eligible) {
    //             res.redirect('/experimental/v11/eligible')
    //         } else {
    //             res.redirect('/experimental/v11/not-eligible');
    //         }
    //     } else if (over9months === 'Not sure') {
    //         if (eligible) {
    //             res.redirect('/experimental/v11/eligible')
    //         } else {
    //             res.redirect('/experimental/v11/not-eligible');
    //         }
    //     }
    // });

    // router.post('/experimental/v11/eligible', (req, res, next) => {
    //     res.redirect('/p5/sign-in/register-start');
    // });

    // ELIGIBILITY QUESTIONS END

    // IDV CHECK

    // router.post('/experimental/v11/idv/hmrciv/idvselection', (req, res) => {
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

    //   router.post('/experimental/v11/idv/hmrciv/payslip', (req, res) => {
    //     res.redirect('./payslip-question-1');
    //   })

    //   router.post('/experimental/v11/idv/hmrciv/p60', (req, res) => {
    //     res.redirect('./p60-question-1');
    //   })

    //   router.post('/experimental/v11/idv/hmrciv/tcKbv', (req, res) => {
    //     res.redirect('./tax-credits-question-1');
    //   })

    //   router.post('/experimental/v11/idv/hmrciv/tuKbv', (req, res) => {
    //     res.redirect('./tu-question-1');
    //   })

    //   router.post('/experimental/v11/idv/hmrciv/voiceId', (req, res) => {
    //     res.redirect("/carers/voice-id");
    //   })

    //   router.post('/experimental/v11/idv/hmrciv/success', (req, res) => {
    //     res.redirect("/experimental/v11/address");
    //   })

    router.post('/experimental/v11/auth/dev-ready/sign-in-2fa', (req, res) => {
        res.redirect("/experimental/v11/add-support-communicating");
    })

    // IDV CHECK END

    // ADDITIONAL SUPPORT QUESTIONS

    router.post('/experimental/v11/add-support-communicating', (req, res, next) => {
        res.redirect('/experimental/v11/add-support');
    });

    router.post('/experimental/v11/add-support', (req, res, next) => {
        const addSupport = req.session.data['add-support'];
        if (addSupport === 'Yes') {
            res.redirect('/experimental/v11/add-support-help');
        } else {
            res.redirect('/experimental/v11/check-answers-1');
        }
    });

    router.post('/experimental/v11/add-support-help', (req, res, next) => {
        const addsupportHelp = req.session.data['add-support-help'];
        if (addsupportHelp === 'Yes') {
            res.redirect('/experimental/v11/add-support-name');
        } else {
            res.redirect('/experimental/v11/check-answers-1');
        }
    });

    router.post('/experimental/v11/add-support-name', (req, res, next) => {
        res.redirect('/experimental/v11/check-answers-1');
    });

    router.post('/experimental/v11/check-answers-1', (req, res, next) => {
        res.redirect('/experimental/v11/name');
    });

    // router.post('/experimental/v11/add-support-address', (req, res, next) => {
    //     const addsupportAddress = req.session.data['add-support-safe-address'];
    //     if (addsupportAddress === 'No') {
    //         res.redirect('/experimental/v11/add-support-address-other');
    //     } else {
    //         res.redirect('/experimental/v11/add-support-contact-details');
    //     }
    // });
    // router.get('/experimental/v11/add-support-address', (req, res, next) => {
    //     res.locals.countries = countries;
    //     res.render('v11/add-support-address')
    // })

    // router.post('/experimental/v11/add-support-address-other', (req, res, next) => {
    //     res.redirect('/experimental/v11/add-support-contact-details');
    // });

    // router.get('/experimental/v11/add-support-address-other', (req, res, next) => {
    //     res.locals.countries = countries;
    //     res.render('v11/add-support-address-other')
    // })

    // router.post('/experimental/v11/add-support-contact-details', (req, res, next) => {
    //     res.redirect('/experimental/v11/name');
    // });

    // ADDITIONAL SUPPORT QUESTIONS END

    // PERSONAL DETAILS, RES & PRES AND HEALTH QUESTIONS
    router.post('/experimental/v11/name', (req, res, next) => {
        res.redirect('/experimental/v11/nino');
    });

    router.post('/experimental/v11/nino', (req, res, next) => {
        res.redirect('/experimental/v11/date-of-birth');
    });

    router.post('/experimental/v11/date-of-birth', (req, res, next) => {
        res.redirect('/experimental/v11/address');
    });

    router.post('/experimental/v11/address', (req, res, next) => {
        const immigrationControl2 = req.session.data['safe-address'];
        if (immigrationControl2 === 'No') {
            res.redirect('/experimental/v11/address-other');
        } else {
            res.redirect('/experimental/v11/contact-details');
        }
    });

    router.get('/experimental/v11/address', (req, res, next) => {
        res.locals.countries = countries;
        res.render('v11/address.html')
    })

    router.post('/experimental/v11/address-other', (req, res, next) => {
        res.redirect('/experimental/v11/contact-details');
    });

    router.get('/experimental/v11/address-other', (req, res, next) => {
        res.locals.countries = countries;
        res.render('v11/address-other.html')
    })

    router.post('/experimental/v11/contact-details', (req, res, next) => {
        res.redirect('/experimental/v11/alt-formats.html')
    })

    router.post('/experimental/v11/alt-formats', (req, res, next) => {
        const altFormats = req.session.data['communication-format'];
        if (altFormats === 'Yes') {
            res.redirect('/experimental/v11/alt-formats-choice');
        } else {
            res.redirect('/experimental/v11/check-answers-2');
        }
    })

    router.post('/experimental/v11/alt-formats-choice', (req, res, next) => {
        const altFormat = req.session.data['alt-formats-choice'];
        if (altFormat === 'Braille') {
            res.redirect('/experimental/v11/alt-formats-braille');
        }
        else if (altFormat === 'Sign language') {
            res.redirect('/experimental/v11/alt-formats-sign-language');
        }
        else if (altFormat === 'Audio') {
            res.redirect('/experimental/v11/alt-formats-audio');
        }
        else if (altFormat === 'Paper') {
            res.redirect('/experimental/v11/alt-formats-paper');
        }
        else if (altFormat === 'Other formats') {
            res.redirect('/experimental/v11/alt-formats-other');
        }
    });

    router.post('/experimental/v11/alt-formats-braille', (req, res, next) => {
        res.redirect('/experimental/v11/check-answers-2');
    });

    router.post('/experimental/v11/alt-formats-sign-language', (req, res, next) => {
        res.redirect('/experimental/v11/check-answers-2');
    });

    router.post('/experimental/v11/alt-formats-audio', (req, res, next) => {
        res.redirect('/experimental/v11/check-answers-2');
    });

    router.post('/experimental/v11/alt-formats-paper', (req, res, next) => {
        const altPaper = req.session.data['alt-formats-paper'];
        if (altPaper === 'Coloured paper') {
            res.redirect('/experimental/v11/alt-formats-paper-colour');
        }
        else if (altPaper === 'Large print with a custom font') {
            res.redirect('/experimental/v11/alt-formats-paper-custom-font');
        }
        else {
            res.redirect('/experimental/v11/check-answers-2');
        }
    });

    router.post('/experimental/v11/alt-formats-paper-colour', (req, res, next) => {
        res.redirect('/experimental/v11/check-answers-2');
    });

    router.post('/experimental/v11/alt-formats-paper-custom-font', (req, res, next) => {
        res.redirect('/experimental/v11/check-answers-2');
    });

    router.post('/experimental/v11/alt-formats-other', (req, res, next) => {
        const altOther = req.session.data['alt-formats-other'];
        if (altOther === 'Email') {
            res.redirect('/experimental/v11/alt-formats-other-email');
        }
        else if (altOther === 'Other') {
            res.redirect('/experimental/v11/alt-formats-other-other');
        }
        else {
            res.redirect('/experimental/v11/alt-formats-other-pdf-email');
        }
    });

    router.post('/experimental/v11/alt-formats-other-email', (req, res, next) => {
        res.redirect('/experimental/v11/check-answers-2');
    });

    router.post('/experimental/v11/alt-formats-other-pdf-email', (req, res, next) => {
        res.redirect('/experimental/v11/check-answers-2');
    });

    router.post('/experimental/v11/alt-formats-other-other', (req, res, next) => {
        res.redirect('/experimental/v11/check-answers-2');
    });

    router.post('/experimental/v11/check-answers-2', (req, res, next) => {
        res.redirect('/experimental/v11/nationality');
    });

    router.post('/experimental/v11/nationality', (req, res, next) => {
        const whereLive = req.session.data['nationality'];
        if (whereLive === 'A nationality of the European Economic Area (EEA) or Switzerland') {
            res.redirect('/experimental/v11/nationality-of-eaa-or-switzerland');
        } else if (whereLive === 'Another nationality') {
            res.redirect('/experimental/v11/nationality-another');
        } else {
            res.redirect('/experimental/v11/living-in-gb');
        }
    });

    router.get('/experimental/v11/nationality-another', (req, res, next) => {
        res.locals.nationalities = nationalities;
        res.render('v11/nationality-another.html')
    })

    router.post('/experimental/v11/nationality-of-eaa-or-switzerland', (req, res, next) => {
        res.redirect('/experimental/v11/living-in-uk');
    });

    router.post('/experimental/v11/living-in-uk', (req, res, next) => {
        const livingUk = req.session.data['living-in-uk'];
        if (livingUk === 'No') {
            res.redirect('/experimental/v11/check-answers-3');
        } else {
            res.redirect('/experimental/v11/living-in-gb');
        }
    });

    router.post('/experimental/v11/nationality-another', (req, res, next) => {
        res.redirect('/experimental/v11/living-in-gb');
    });

    router.post('/experimental/v11/living-in-gb', (req, res, next) => {
        const nationality = req.session.data['nationality']
        const gb = req.session.data['gb']

        if (nationality === 'British' ||
            nationality === 'Irish' ||
            nationality === 'A nationality of the European Economic Area (EEA) or Switzerland'
        ) {
            if (gb === 'No') {
                res.redirect('/experimental/v11/check-answers-3')
            }
            if (gb === 'Yes' || gb === 'Not sure') {
                res.redirect('/experimental/v11/eu-question')
            }
        } else if (nationality === 'Another nationality') {
            res.redirect('/experimental/v11/check-answers-3')
        }
    })

    router.post('/experimental/v11/eu-question', (req, res, next) => {
        res.redirect('/experimental/v11/check-answers-3');
    });

    router.post('/experimental/v11/check-answers-3', (req, res, next) => {
        res.redirect('/experimental/v11/about_your_health/consent');
    });

    /// ADD ANOTHER THING ROUTES

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
      
      
    //   router.get('/conditon-summary', (req, res, next) => {
    //     req.session.data.conditionOrder = [];
    //     req.session.data.condition = {};
    //     res.render('v11/about_your_health/consent.html');
    //   }) 

      // ADD ANOTHER THING ROUTES END

    //   router.get('/experimental/v11/living-in-gb', (req, res, next) => {
    //       res.render('v11/living-in-gb.html')
    //   })

    // router.post('/experimental/v11/eu-benefits', (req, res, next) => {
    //     res.redirect('/experimental/v11/eu-question');
    // });

    // router.post('/experimental/v11/eu-worked', (req, res, next) => {
    //     const euWorked = req.session.data['eu-worked'];
    //     if (euWorked === 'No') {
    //         res.redirect('/experimental/v11/about_your_health/condition-new-2');
    //     } else {
    //         res.redirect('/experimental/v11/eu-insurance');
    //     }
    // });

    // router.post('/experimental/v11/eu-insurance', (req, res, next) => {
    //     res.redirect('/experimental/v11/about_your_health/condition-new-2');
    // });

    // router.post('/experimental/v11/about_your_health/condition-new-2', (req, res, next) => {
    //     res.redirect('/experimental/v11/about_your_health/consent');
    // });

    // router.post('/experimental/v11/about_your_health/hcp-question', (req, res, next) => {
    //     const hcpQuestion = req.session.data['hcp-q'];
    //     if (hcpQuestion === 'Yes') {
    //         res.redirect('/experimental/v11/about_your_health/consent');
    //     } else {
    //         res.redirect('/experimental/v11/in-hospital');
    //     }
    // });

    router.post('/experimental/v11/about_your_health/consent', (req, res, next) => {
        const conSent = req.session.data['consent'];
        if (conSent === 'Yes, I agree') {
            res.redirect('/experimental/v11/about_your_health/hcp-1');
        } else {
            res.redirect('/experimental/v11/in-hospital');
        }
    });

    router.post('/experimental/v11/about_your_health/hcp-1', (req, res, next) => {
        res.redirect('/experimental/v11/about_your_health/hcp-another');
    });

    router.get('/experimental/v11/about_your_health/hcp-1', (req, res, next) => {
        res.locals.countries = countries;
        res.render('v11/about_your_health/hcp-1')
    })

    router.post('/experimental/v11/about_your_health/hcp-another', (req, res, next) => {
        const hcpAnother1 = req.session.data['hcp-2'];
        if (hcpAnother1 === 'Yes') {
            res.redirect('/experimental/v11/about_your_health/hcp-2');
        } else {
            res.redirect('/experimental/v11/in-hospital');
        }
    });

    router.post('/experimental/v11/about_your_health/hcp-2', (req, res, next) => {
        res.redirect('/experimental/v11/about_your_health/hcp-another-2');
    });

    router.get('/experimental/v11/about_your_health/hcp-2', (req, res, next) => {
        res.locals.countries = countries;
        res.render('v11/about_your_health/hcp-2')
    })

    router.get('/experimental/v11/about_your_health/hcp-2', (req, res, next) => {
        res.locals.countries = countries;
        res.render('v11/about_your_health/hcp-2')
    })

    router.post('/experimental/v11/about_your_health/hcp-another-2', (req, res, next) => {
        const hcpAnother2 = req.session.data['hcp-3'];
        if (hcpAnother2 === 'Yes') {
            res.redirect('/experimental/v11/about_your_health/hcp-3');
        } else {
            res.redirect('/experimental/v11/in-hospital');
        }
    });

    router.post('/experimental/v11/about_your_health/hcp-3', (req, res, next) => {
        res.redirect('/experimental/v11/about_your_health/hcp-another-3');
    });

    router.get('/experimental/v11/about_your_health/hcp-3', (req, res, next) => {
        res.locals.countries = countries;
        res.render('v11/about_your_health/hcp-3')
    })

    router.post('/experimental/v11/about_your_health/hcp-another-3', (req, res, next) => {
        res.redirect('/experimental/v11/in-hospital');
    });

    router.post('/experimental/v11/in-hospital', (req, res, next) => {
        const inHospital = req.session.data['hospital'];
        if (inHospital === 'Hospital') {
            res.redirect('/experimental/v11/hospital-address');
        } else if (inHospital === 'Hospice') {
            res.redirect('/experimental/v11/hospice-address');
        } else if (inHospital === 'Care or nursing home') {
            res.redirect('/experimental/v11/care-home-address');
        } else if (inHospital === 'Other') {
              res.redirect('/experimental/v11/care-home-address');
        } else {
            res.redirect('/experimental/v11/check-answers-4');
        }
    });

    router.post('/experimental/v11/hospital-address', (req, res, next) => {
        res.redirect('/experimental/v11/hospital-admission');
    });

    router.post('/experimental/v11/hospital-admission', (req, res, next) => {
        res.redirect('/experimental/v11/check-answers-4');
    });

    router.get('/experimental/v11/hospital-address', (req, res, next) => {
        res.locals.countries = countries;
        res.render('v11/hospital-address')
    })

    router.post('/experimental/v11/hospice-address', (req, res, next) => {
        res.redirect('/experimental/v11/hospice-admission');
    });

    router.post('/experimental/v11/hospice-admission', (req, res, next) => {
        res.redirect('/experimental/v11/check-answers-4');
    });

    router.get('/experimental/v11/hospice-address', (req, res, next) => {
        res.locals.countries = countries;
        res.render('v11/hospice-address')
    })

    router.post('/experimental/v11/care-home-address', (req, res, next) => {
        res.redirect('/experimental/v11/care-home-admission');
    });
    router.post('/experimental/v11/care-home-admission', (req, res, next) => {
        res.redirect('/experimental/v11/check-answers-4');
    });

    router.get('/experimental/v11/care-home-address', (req, res, next) => {
        res.locals.countries = countries;
        res.render('v11/care-home-address')
    })

    // PERSONAL AND HEALTH QUESTIONS END

    // CHECK ANSWERS START
    // router.post('/experimental/v11/check-answers', (req, res, next) => {
    //     console.log(req.session.data)
    //     const complex = complexCase(req);
    //     if (!complex) {
    //         res.redirect('/experimental/v11/confirmation')
    //     } else {
    //         res.redirect('/experimental/v11/we-need-to-get-in-touch')
    //     };
    // });

    // router.post('/experimental/v11/we-need-to-get-in-touch', (req, res, next) => {
    //     res.redirect('/experimental/v11/confirmation');
    // });

    router.post('/experimental/v11/about_your_health/remove-hcp-confirmation', (req, res, next) => {
        res.redirect('/experimental/v11/check-answers-4');
    });

    router.post('/experimental/v11/check-answers-4', (req, res, next) => {
        res.redirect('/experimental/v11/confirmation');
    });

    // router.post('/experimental/v11/confirmation', (req, res, next) => {
    //     res.redirect('/p5/list');
    // });

    // CHECK ANSWERS END


    // COMPLEX APPLICATION CONTACT DETAILS

    // router.post('/experimental/v11/we-need-to-get-in-touch', (req, res, next) => {
    //     res.redirect('/experimental/v11/complex_contact_details/complex-contact-name');
    // });

    // router.post('/experimental/v11/complex_contact_details/complex-contact-name', (req, res, next) => {
    //     res.redirect('/experimental/v11/complex_contact_details/complex-contact-nino');
    // });

    // router.post('/experimental/v11/complex_contact_details/complex-contact-nino', (req, res, next) => {
    //     res.redirect('/experimental/v11/complex_contact_details/complex-contact-date-of-birth');
    // });

    // router.post('/experimental/v11/complex_contact_details/complex-contact-date-of-birth', (req, res, next) => {
    //     res.redirect('/experimental/v11/complex_contact_details/complex-contact-details');
    // });

    // router.post('/experimental/v11/complex_contact_details/complex-contact-details', (req, res, next) => {
    //     res.redirect('/experimental/v11/complex_contact_details/complex-contact-check-answers');
    // });

    // router.post('/experimental/v11/complex_contact_details/complex-contact-check-answers', (req, res, next) => {
    //     res.redirect('/experimental/v11/complex_contact_details/complex-contact-confirmation');
    // });

    // COMPLEX APPLICATION CONTACT DETAILS END

    // RETURNING USER FLOW START
    router.post('/experimental/v11/save_and_return/sign-in', (req, res, next) => {
        res.redirect('/experimental/v11/save_and_return/sign-in-2fa');
    });

    router.post('/experimental/v11/save_and_return/sign-in-2fa', (req, res, next) => {
        res.redirect('/experimental/v11/save_and_return/signed-in');
    });

    router.post('v11/save_and_return/signed-in', (req, res, next) => {
        res.redirect('/experimental/v11/save_and_return/check-answers-returning');
    });

    router.post('/experimental/v11/save_and_return/check-answers-returning', (req, res, next) => {
        res.redirect('/experimental/v11/nationality');
    });
    // RETURNING USER FLOW END
};
