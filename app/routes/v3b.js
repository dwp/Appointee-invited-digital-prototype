module.exports = function (router) {
    function isEligible(req) {
        return !(req.session.data['over-16'] === 'Under 16'
            || req.session.data['overspa'] === 'No')
    }

    // ELIGIBILITY QUESTIONS
    router.post('/v3b/over-16', (req, res, next) => {
        const over16 = req.session.data['over-16'];
        if (over16 === 'Over State Pension age') {
            res.redirect('/v3b/over-spa');
        } else {
            res.redirect('/v3b/where-you-live');
        }
    });

    router.post('/v3b/over-spa', (req, res, next) => {
        res.redirect('/v3b/where-you-live');
    });

    router.post('/v3b/where-you-live', (req, res, next) => {
        const whereLived = req.session.data['where-live'];
        if (whereLived === 'Yes') {
            res.redirect('/v3b/living-in-gb');
        } else {
            res.redirect('/v3b/living-in-gb-further-question');
        }
    });

    router.post('/v3b/living-in-gb-further-question', (req, res, next) => {
        const immigrationControl = req.session.data['immigration-control'];
        if (immigrationControl === 'No') {
            res.redirect('/v3b/living-in-gb');
        } else {
            res.redirect('/v3b/we-need-to-get-in-touch');
        }
    });

    router.post('/v3b/living-in-gb', (req, res, next) => {
        const livingGb = req.session.data['gb'];
        if (livingGb === 'Yes') {
            res.redirect('/v3b/health-condition');
        } else {
            res.redirect('/v3b/we-need-to-get-in-touch');
        }
    });

    router.post('/v3b/living-in-gb-further-question-2', (req, res, next) => {
        const immigrationControl2 = req.session.data['immigration-control-2'];
        if (immigrationControl2 === 'No') {
            const eligible = isEligible(req);
            if (eligible === false) {
                res.redirect('/v3b/not-eligible')
            } else {
                res.redirect('/v3b/name');
            }
        } else {
            res.redirect('/v3b/we-need-to-get-in-touch');
        }
    });

    router.post('/v3b/not-eligible-immigration-2', (req, res, next) => {
        res.redirect('/v3b/we-need-to-get-in-touch');
    });
    // ELIGIBILITY QUESTIONS END

    // HEALTH CONDITION QUESTIONS
    router.post('/v3b/health-condition', (req, res, next) => {
        const healthCondition = req.session.data['condition'];
        if (healthCondition === 'Yes, all of the time or sometimes') {
            res.redirect('/v3b/over-9-months')
        } else if (healthCondition === 'No, never'){
            res.redirect('/v3b/not-eligible');
        } else if (healthCondition === 'Not sure'){
            res.redirect('/v3b/about_your_health/condition');
        }
    });

    router.post('/v3b/over-9-months', (req, res, next) => {
        const eligible = isEligible(req);
        const over9months = req.session.data['over-9-months'];
        if (over9months === 'Less than 9 months') {
            res.redirect('/v3b/not-eligible')
        } else if (over9months === 'At least 9 months'){
            if (eligible){
                res.redirect('/v3b/about_your_health/condition')
            } else {
                res.redirect('/v3b/not-eligible');
            }
        } else if (over9months === 'Not sure'){
            if (eligible){
                res.redirect('/v3b/about_your_health/condition')
            } else {
                res.redirect('/v3b/not-eligible');
            }
        }
    });

    router.post('/v3b/about_your_health/condition', (req, res, next) => {
        res.redirect('/v3b/about_your_health/another');
    });

    router.post('/v3b/about_your_health/another', (req, res, next) => {
        const conditionAnother = req.session.data['condition2'];
        if (conditionAnother === 'Yes') {
            res.redirect('/v3b/about_your_health/condition-2');
        } else {
            res.redirect('/auth/dev-ready/register/start');
        }
    });

    router.post('/v3b/about_your_health/condition-2', (req, res, next) => {
        res.redirect('/v3b/about_your_health/another-2');
    });

    router.post('/v3b/about_your_health/another-2', (req, res, next) => {
        const conditionAnother2 = req.session.data['condition3'];
        if (conditionAnother2 === 'Yes') {
            res.redirect('/v3b/about_your_health/condition-3');
        } else {
            res.redirect('/auth/dev-ready/register/start');
        }
    });

    router.post('/v3b/about_your_health/condition-3', (req, res, next) => {
        res.redirect('/v3b/about_your_health/another-3');
    });

    router.post('/v3b/about_your_health/another-3', (req, res, next) => {
        res.redirect('/auth/dev-ready/register/start');
    });
    // HEALTH CONDITION QUESTIONS END

    // IDV CHECK
    // router.post('idv/hmrciv/success', (req, res, next) => {
    //     res.redirect('/v3b/address');
    // });
    // IDV CHECK END

    // PERSONAL DETAILS QUESTIONS
    router.post('/v3b/name', (req, res, next) => {
        res.redirect('/v3b/nino');
    });

    router.post('/v3b/nino', (req, res, next) => {
        res.redirect('/v3b/date-of-birth');
    });

    router.post('/v3b/date-of-birth', (req, res, next) => {
        res.redirect('/v3b/address');
    });

    router.post('/v3b/address', (req, res, next) => {
        const immigrationControl2 = req.session.data['safe-address'];
        if (immigrationControl2 === 'No') {
            res.redirect('/v3b/address-other');
        } else {
            res.redirect('/v3b/contact-details');
        }
    });

    router.post('/v3b/address-other', (req, res, next) => {
        res.redirect('/v3b/contact-details');
    });

    router.post('/v3b/contact-details', (req, res, next) => {
        res.redirect('/v3b/nationality');
    });

    router.post('/v3b/nationality', (req, res, next) => {
        res.redirect('/v3b/working-living-abroad');
    });

    router.post('/v3b/working-living-abroad', (req, res, next) => {
        res.redirect('/v3b/in-hospital');
    });

    router.post('/v3b/in-hospital', (req, res, next) => {
        res.redirect('/v3b/in-care-home');
    });

    router.post('/v3b/in-care-home', (req, res, next) => {
        res.redirect('/v3b/add-support-communicating');
    });
    // PERSONAL QUESTIONS END


    // ADDITIONAL SUPPORT QUESTIONS

    router.post('/v3b/add-support-communicating', (req, res, next) => {
        res.redirect('/v3b/add-support');
    });

    router.post('/v3b/add-support', (req, res, next) => {
        const addSupport = req.session.data['add-support'];
        if (addSupport === 'Yes, all of the time or sometimes') {
            res.redirect('/v3b/add-support-help');
        } else {
            res.redirect('/v3b/check-answers');
        }
    });

    router.post('/v3b/add-support-help', (req, res, next) => {
        const addsupportHelp = req.session.data['add-support-help'];
        if (addsupportHelp === 'Yes') {
            res.redirect('/v3b/add-support-name');
        } else {
            res.redirect('/v3b/check-answers');
        }
    });

    router.post('/v3b/add-support-name', (req, res, next) => {
        res.redirect('/v3b/add-support-address');
    });

    router.post('/v3b/add-support-address', (req, res, next) => {
        const addsupportAddress = req.session.data['add-support-safe-address'];
        if (addsupportAddress === 'No') {
            res.redirect('/v3b/add-support-address-other');
        } else {
            res.redirect('/v3b/add-support-contact-details');
        }
    });

    router.post('/v3b/add-support-address-other', (req, res, next) => {
        res.redirect('/v3b/add-support-contact-details');
    });

    router.post('/v3b/add-support-contact-details', (req, res, next) => {
        res.redirect('/v3b/check-answers');
    });

    // ADDITIONAL SUPPORT QUESTIONS END

    // COMPLEX APPLICATION CONTACT DETAILS

    router.post('/v3b/we-need-to-get-in-touch', (req, res, next) => {
        res.redirect('/v3b/complex_contact_details/complex-contact-name');
    });

    router.post('/v3b/complex_contact_details/complex-contact-name', (req, res, next) => {
        res.redirect('/v3b/complex_contact_details/complex-contact-nino');
    });

    router.post('/v3b/complex_contact_details/complex-contact-nino', (req, res, next) => {
        res.redirect('/v3b/complex_contact_details/complex-contact-date-of-birth');
    });

    router.post('/v3b/complex_contact_details/complex-contact-date-of-birth', (req, res, next) => {
        res.redirect('/v3b/complex_contact_details/complex-contact-details');
    });

    router.post('/v3b/complex_contact_details/complex-contact-details', (req, res, next) => {
        res.redirect('/v3b/complex_contact_details/complex-contact-check-answers');
    });

    router.post('/v3b/complex_contact_details/complex-contact-check-answers', (req, res, next) => {
        res.redirect('/v3b/complex_contact_details/complex-contact-confirmation');
    });
    // COMPLEX APPLICATION CONTACT DETAILS END

    // RETURNING USER FLOW START
    router.post('/v3b/save_and_return/sign-in', (req, res, next) => {
        res.redirect('/v3b/save_and_return/sign-in-2fa');
    });
    
    router.post('/v3b/save_and_return/sign-in-2fa', (req, res, next) => {
        res.redirect('/v3b/nationality');
    });
    // RETURNING USER FLOW END

};
    
