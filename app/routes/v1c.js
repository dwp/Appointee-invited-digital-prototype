module.exports = function (router) {
    function isEligible (req) {
        return !(req.session.data['overspa'] === 'No' 
        || req.session.data['condition'] === 'No' 
        || req.session.data['over-9-months'] === 'Less than 9 months');
        }
    // ELIGIBILITY QUESTIONS

    router.post('/v1c/over-16', (req, res, next) => {
        const over16 = req.session.data['over-16'];
        if (over16 === 'Under 16') {
            res.redirect('/v1c/not-eligible-under-16');
        } else if (over16 === 'Over 16 below State Pension age') {
            res.redirect('/v1c/health-condition');
        } else {
            res.redirect('/v1c/over-spa');
        }
    });

    router.post('/v1c/not-eligible-under-16', (req, res, next) => {
        res.redirect('/v1c/health-condition');
    });

    router.post('/v1c/over-spa', (req, res, next) => {
        res.redirect('/v1c/health-condition');
    });

    router.post('/v1c/health-condition', (req, res, next) => {
        const healthCondition = req.session.data['condition'];
        if (healthCondition === 'Yes') {
            res.redirect('/v1c/over-9-months');
        } else {
            res.redirect('/v1c/where-you-live');
        }
    });

    router.post('/v1c/over-9-months', (req, res, next) => {
        res.redirect('/v1c/where-you-live');
    });

    router.post('/v1c/where-you-live', (req, res, next) => {
        const whereLived = req.session.data['where-live'];
        if (whereLived === 'Yes') {
            res.redirect('/v1c/living-in-gb');
        } else {
            res.redirect('/v1c/living-in-gb-further-question');
        }
    });

    router.post('/v1c/living-in-gb-further-question', (req, res, next) => {
        const immigrationControl = req.session.data['immigration-control'];
        if (immigrationControl === 'No') {
            res.redirect('/v1c/living-in-gb');
        } else {
            res.redirect('/v1c/we-need-to-get-in-touch');
        }
    });

    // router.post('/v1c/not-eligible-immigration', (req, res, next) => {
    //     res.redirect('/v1c/we-need-to-get-in-touch');
    // });

    router.post('/v1c/living-in-gb', (req, res, next) => {
        if (req.session.data['overspa'] === 'Not sure') {
            return res.redirect('/v1c/we-need-to-get-in-touch');
        }
        
        const livingGb = req.session.data['gb'];
        if (livingGb === 'Yes') {
            const eligible = isEligible(req);
            if (eligible === false) {
                res.redirect('/v1c/not-eligible')
            } else {
                res.redirect('/v1c/name');
            }
            
        } else if (livingGb === 'No') {
            res.redirect('/v1c/we-need-to-get-in-touch');
        } else if (livingGb === 'Not sure') {
            res.redirect('/v1c/living-in-gb-further-question-2');
        }

    });

    router.post('/v1c/living-in-gb-further-question-2', (req, res, next) => {
        const immigrationControl2 = req.session.data['immigration-control-2'];
        if (immigrationControl2 === 'No') {
            const eligible = isEligible(req);
            if (eligible === false) {
                res.redirect('/v1c/not-eligible')
            } else {
                res.redirect('/v1c/name');
            }
        } else {
            res.redirect('/v1c/we-need-to-get-in-touch');
        }
    });

    router.post('/v1c/not-eligible', (req, res, next) => {
        res.redirect('/v1c/name');
    });

    router.post('/v1c/not-eligible-immigration-2', (req, res, next) => {
        res.redirect('/v1c/we-need-to-get-in-touch');
    });

    // PERSONAL DEATILS ROUTES

    router.post('/v1c/name', (req, res, next) => {
        res.redirect('/v1c/nino');
    });

    router.post('/v1c/nino', (req, res, next) => {
        res.redirect('/v1c/date-of-birth');
    });

    router.post('/v1c/date-of-birth', (req, res, next) => {
        res.redirect('/v1c/address');
    });

    router.post('/v1c/address', (req, res, next) => {
        const immigrationControl2 = req.session.data['safe-address'];
        if (immigrationControl2 === 'No') {
            res.redirect('/v1c/address-other');
        } else {
            res.redirect('/v1c/contact-details');
        }
    });

    router.post('/v1c/address-other', (req, res, next) => {
        res.redirect('/v1c/contact-details');
    });

    router.post('/v1c/contact-details', (req, res, next) => {
        res.redirect('/v1c/nationality');
    });

    router.post('/v1c/nationality', (req, res, next) => {
        res.redirect('/v1c/working-living-abroad');
    });

    router.post('/v1c/working-living-abroad', (req, res, next) => {
        res.redirect('/v1c/check-answers');
    });

    router.post('/v1c/check-answers', (req, res, next) => {
        res.redirect('/v1c/next-page');
    });

    // COMPLEX APPLICATION CONTACT DETAILS

    router.post('/v1c/we-need-to-get-in-touch', (req, res, next) => {
        res.redirect('/v1c/complex_contact_details/complex-contact-name');
    });

    router.post('/v1c/complex_contact_details/complex-contact-name', (req, res, next) => {
        res.redirect('/v1c/complex_contact_details/complex-contact-nino');
    });

    router.post('/v1c/complex_contact_details/complex-contact-nino', (req, res, next) => {
        res.redirect('/v1c/complex_contact_details/complex-contact-date-of-birth');
    });

    router.post('/v1c/complex_contact_details/complex-contact-date-of-birth', (req, res, next) => {
        res.redirect('/v1c/complex_contact_details/complex-contact-details');
    });

    router.post('/v1c/complex_contact_details/complex-contact-details', (req, res, next) => {
        res.redirect('/v1c/complex_contact_details/complex-contact-check-answers');
    });

    router.post('/v1c/complex_contact_details/complex-contact-check-answers', (req, res, next) => {
        res.redirect('/v1c/complex_contact_details/complex-contact-confirmation');
    });

};
