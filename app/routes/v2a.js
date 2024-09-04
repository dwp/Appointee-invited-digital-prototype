module.exports = function (router) {
    function isEligible (req) {
        return !(req.session.data['over-16'] === 'Under 16'
        ||req.session.data['overspa'] === 'No'
        || req.session.data['condition'] === 'No, never'
        || req.session.data['over-9-months'] === 'Less than 9 months');
        }
    
    // HEALTH CONDITION QUESTIONS
    router.post('/v2a/about_your_health/condition', (req, res, next) => {
        res.redirect('/v2a/about_your_health/another');
    });

    router.post('/v2a/about_your_health/another', (req, res, next) => {
        const conditionAnother = req.session.data['condition2'];
        if (conditionAnother === 'Yes') {
            res.redirect('/v2a/about_your_health/condition-2');
        } else {
            res.redirect('/v2a/health-condition');
        }
    });

    router.post('/v2a/about_your_health/condition-2', (req, res, next) => {
        res.redirect('/v2a/about_your_health/another-2');
    });

    router.post('/v2a/about_your_health/another-2', (req, res, next) => {
        const conditionAnother2 = req.session.data['condition3'];
        if (conditionAnother2 === 'Yes') {
            res.redirect('/v2a/about_your_health/condition-3');
        } else {
            res.redirect('/v2a/health-condition');
        }
    });

    router.post('/v2a/about_your_health/condition-3', (req, res, next) => {
        res.redirect('/v2a/about_your_health/another-3');
    });

    router.post('/v2a/about_your_health/another-3', (req, res, next) => {
        res.redirect('/v2a/health-condition');
    });
      
    router.post('/v2a/health-condition', (req, res, next) => {
        const healthCondition = req.session.data['condition'];
        if (healthCondition === 'Yes, all of the time or sometimes') {
            res.redirect('/v2a/over-9-months');
        } else {
            res.redirect('/v2a/over-16');
        }
    });

    router.post('/v2a/over-9-months', (req, res, next) => {
        res.redirect('/v2a/over-16');
    });
    // HEALTH CONDITION QUESTIONS END
    
    // ELIGIBILITY QUESTIONS 
    router.post('/v2a/over-16', (req, res, next) => {
        const over16 = req.session.data['over-16'];
        if (over16 === 'Over State Pension age') {
            res.redirect('/v2a/over-spa');
        } else {
            res.redirect('/v2a/where-you-live');
        }
    });

    router.post('/v2a/over-spa', (req, res, next) => {
        res.redirect('/v2a/where-you-live');
    });

    router.post('/v2a/where-you-live', (req, res, next) => {
        const whereLived = req.session.data['where-live'];
        if (whereLived === 'Yes') {
            res.redirect('/v2a/living-in-gb');
        } else {
            res.redirect('/v2a/living-in-gb-further-question');
        }
    });

    router.post('/v2a/living-in-gb-further-question', (req, res, next) => {
        const immigrationControl = req.session.data['immigration-control'];
        if (immigrationControl === 'No') {
            res.redirect('/v2a/living-in-gb');
        } else {
            res.redirect('/v2a/we-need-to-get-in-touch');
        }
    });

    // router.post('/v2a/not-eligible-immigration', (req, res, next) => {
    //     res.redirect('/v2a/we-need-to-get-in-touch');
    // });

    router.post('/v2a/living-in-gb', (req, res, next) => {
        if (req.session.data['overspa'] === 'Not sure') {
            return res.redirect('/v2a/we-need-to-get-in-touch');
        }

        const livingGb = req.session.data['gb'];
        if (livingGb === 'Yes') {
            const eligible = isEligible(req);
            if (eligible === false) {
                res.redirect('/v2a/not-eligible')
            } else {
                res.redirect('/v2a/name');
            }

        } else if (livingGb === 'No') {
            res.redirect('/v2a/we-need-to-get-in-touch');
        } else if (livingGb === 'Not sure') {
            res.redirect('/v2a/living-in-gb-further-question-2');
        }

    });

    router.post('/v2a/living-in-gb-further-question-2', (req, res, next) => {
        const immigrationControl2 = req.session.data['immigration-control-2'];
        if (immigrationControl2 === 'No') {
            const eligible = isEligible(req);
            if (eligible === false) {
                res.redirect('/v2a/not-eligible')
            } else {
                res.redirect('/v2a/name');
            }
        } else {
            res.redirect('/v2a/we-need-to-get-in-touch');
        }
    });

    // router.post('/v2a/not-eligible', (req, res, next) => {
    //     res.redirect('/v2a/name');
    // });

    router.post('/v2a/not-eligible-immigration-2', (req, res, next) => {
        res.redirect('/v2a/we-need-to-get-in-touch');
    });
    // ELIGIBILITY QUESTIONS END
   
    // ADDITIONAL SUPPORT QUESTIONS
    router.post('/v2a/add-support', (req, res, next) => {
        const addSupport = req.session.data['add-support'];
        if (addSupport === 'Yes, all of the time or sometimes') {
            res.redirect('/v2a/add-support-help');
        } else {
            res.redirect('/v2a/add-support-communicating');
        }
    });  
    
    router.post('/v2a/add-support-help', (req, res, next) => {
        const addsupportHelp = req.session.data['add-support-help'];
        if (addsupportHelp === 'Yes') {
            res.redirect('/v2a/add-support-name');
        } else {
            res.redirect('/v2a/add-support-communicating');
        }
    });  

    router.post('/v2a/add-support-name', (req, res, next) => {
        res.redirect('/v2a/add-support-address');
    });

    // router.post('/v2a/add-support-address', (req, res, next) => {
    //     res.redirect('/v2a/add-support-contact-details');
    // });

    router.post('/v2a/add-support-address', (req, res, next) => {
        const addsupportAddress = req.session.data['add-support-safe-address'];
        if (addsupportAddress === 'No') {
            res.redirect('/v2a/add-support-address-other');
        } else {
            res.redirect('/v2a/add-support-contact-details');
        }
    }); 

    router.post('/v2a/add-support-address-other', (req, res, next) => {
        res.redirect('/v2a/add-support-contact-details');
    });

    router.post('/v2a/add-support-contact-details', (req, res, next) => {
        res.redirect('/v2a/add-support-communicating');
    });

    router.post('/v2a/add-support-communicating', (req, res, next) => {
        res.redirect('/v2a/check-answers');
    });
    // ADDITIONAL SUPPORT QUESTIONS END

    // PERSONAL DETAILS QUESTIONS
    router.post('/v2a/name', (req, res, next) => {
        res.redirect('/v2a/nino');
    });

    router.post('/v2a/nino', (req, res, next) => {
        res.redirect('/v2a/date-of-birth');
    });

    router.post('/v2a/date-of-birth', (req, res, next) => {
        res.redirect('/v2a/address');
    });

    router.post('/v2a/address', (req, res, next) => {
        const immigrationControl2 = req.session.data['safe-address'];
        if (immigrationControl2 === 'No') {
            res.redirect('/v2a/address-other');
        } else {
            res.redirect('/v2a/contact-details');
        }
    });

    router.post('/v2a/address-other', (req, res, next) => {
        res.redirect('/v2a/contact-details');
    });

    router.post('/v2a/contact-details', (req, res, next) => {
        res.redirect('/v2a/nationality');
    });

    router.post('/v2a/nationality', (req, res, next) => {
        res.redirect('/v2a/working-living-abroad');
    });

    router.post('/v2a/working-living-abroad', (req, res, next) => {
        res.redirect('/v2a/in-hospital');
    });

    router.post('/v2a/in-hospital', (req, res, next) => {
        res.redirect('/v2a/in-care-home');
    });

    router.post('/v2a/in-care-home', (req, res, next) => {
        res.redirect('/v2a/add-support');
    });
    // PERSONAL QUESTIONS END

    // COMPLEX APPLICATION CONTACT DETAILS

    router.post('/v2a/we-need-to-get-in-touch', (req, res, next) => {
        res.redirect('/v2a/complex_contact_details/complex-contact-name');
    });

    router.post('/v2a/complex_contact_details/complex-contact-name', (req, res, next) => {
        res.redirect('/v2a/complex_contact_details/complex-contact-nino');
    });

    router.post('/v2a/complex_contact_details/complex-contact-nino', (req, res, next) => {
        res.redirect('/v2a/complex_contact_details/complex-contact-date-of-birth');
    });

    router.post('/v2a/complex_contact_details/complex-contact-date-of-birth', (req, res, next) => {
        res.redirect('/v2a/complex_contact_details/complex-contact-details');
    });

    router.post('/v2a/complex_contact_details/complex-contact-details', (req, res, next) => {
        res.redirect('/v2a/complex_contact_details/complex-contact-check-answers');
    });

    router.post('/v2a/complex_contact_details/complex-contact-check-answers', (req, res, next) => {
        res.redirect('/v2a/complex_contact_details/complex-contact-confirmation');
    });

};
    // COMPLEX APPLICATION CONTACT DETAILS END