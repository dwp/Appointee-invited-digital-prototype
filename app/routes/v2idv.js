module.exports = function (router) {
    function isEligible (req) {
        return !(req.session.data['over-16'] === 'Under 16' 
        ||req.session.data['overspa'] === 'No' 
        || req.session.data['condition'] === 'No' 
        || req.session.data['over-9-months'] === 'Less than 9 months');
        }
    // ELIGIBILITY QUESTIONS

    // router.post('/v2idv/over-16', (req, res, next) => {
    //     const over16 = req.session.data['over-16'];
    //     if (over16 === 'Under 16') {
    //         res.redirect('/v2idv/not-eligible-under-16');
    //     } else if (over16 === 'Over 16 below State Pension age') {
    //         res.redirect('/v2idv/health-condition');
    //     } else {
    //         res.redirect('/v2idv/over-spa');
    //     }
    // });


    router.post('/v2idv/over-16', (req, res, next) => {
        const over16 = req.session.data['over-16'];
        if (over16 === 'Over State Pension age') {
            res.redirect('/v2id/over-spa');
        } else {
            res.redirect('/v2idv/health-condition');
        }
    });

    // router.post('/v2idv/not-eligible-under-16', (req, res, next) => {
    //     res.redirect('/v2idv/health-condition');
    // });

    router.post('/v2idv/over-spa', (req, res, next) => {
        res.redirect('/v2idv/health-condition');
    });

    router.post('/v2idv/health-condition', (req, res, next) => {
        const healthCondition = req.session.data['condition'];
        if (healthCondition === 'Yes') {
            res.redirect('/v2idv/over-9-months');
        } else {
            res.redirect('/v2idv/where-you-live');
        }
    });

    router.post('/v2idv/over-9-months', (req, res, next) => {
        res.redirect('/v2idv/where-you-live');
    });

    router.post('/v2idv/where-you-live', (req, res, next) => {
        const whereLived = req.session.data['where-live'];
        if (whereLived === 'Yes') {
            res.redirect('/v2idv/living-in-gb');
        } else {
            res.redirect('/v2idv/living-in-gb-further-question');
        }
    });

    router.post('/v2idv/living-in-gb-further-question', (req, res, next) => {
        const immigrationControl = req.session.data['immigration-control'];
        if (immigrationControl === 'No') {
            res.redirect('/v2idv/living-in-gb');
        } else {
            res.redirect('/v2idv/we-need-to-get-in-touch');
        }
    });

    // router.post('/v2idv/not-eligible-immigration', (req, res, next) => {
    //     res.redirect('/v2idv/we-need-to-get-in-touch');
    // });

    router.post('/v2idv/living-in-gb', (req, res, next) => {
        if (req.session.data['overspa'] === 'Not sure') {
            return res.redirect('/v2idv/we-need-to-get-in-touch');
        }
        
        const livingGb = req.session.data['gb'];
        if (livingGb === 'Yes') {
            const eligible = isEligible(req);
            if (eligible === false) {
                res.redirect('/v2idv/not-eligible')
            } else {
                res.redirect('https://dth-prototype.herokuapp.com/auth/v8/register/start?service-name=Apply%20for%20Personal%20Independence%20Payment%20(PIP)');
            }
            
        } else if (livingGb === 'No') {
            res.redirect('/v2idv/we-need-to-get-in-touch');
        } else if (livingGb === 'Not sure') {
            res.redirect('/v2idv/living-in-gb-further-question-2');
        }
        
    });

    router.post('/v2idv/living-in-gb-further-question-2', (req, res, next) => {
        const immigrationControl2 = req.session.data['immigration-control-2'];
        if (immigrationControl2 === 'No') {
            const eligible = isEligible(req);
            if (eligible === false) {
                res.redirect('/v2idv/not-eligible')
            } else {
                res.redirect('/v2idv/name');
            }
        } else {
            res.redirect('/v2idv/we-need-to-get-in-touch');
        }
    });

    // router.post('/v2idv/not-eligible', (req, res, next) => {
    //     res.redirect('/v2idv/name');
    // });

    router.post('/v2idv/not-eligible-immigration-2', (req, res, next) => {
        res.redirect('/v2idv/we-need-to-get-in-touch');
    });

    // PERSONAL DEATILS ROUTES

    router.post('/v2idv/name', (req, res, next) => {
        res.redirect('/v2idv/nino');
    });

    router.post('/v2idv/nino', (req, res, next) => {
        res.redirect('/v2idv/date-of-birth');
    });

    router.post('/v2idv/date-of-birth', (req, res, next) => {
        res.redirect('/v2idv/address');
    });

    router.post('/v2idv/address', (req, res, next) => {
        const immigrationControl2 = req.session.data['safe-address'];
        if (immigrationControl2 === 'No') {
            res.redirect('/v2idv/address-other');
        } else {
            res.redirect('/v2idv/contact-details');
        }
    });

    router.post('/v2idv/address-other', (req, res, next) => {
        res.redirect('/v2idv/contact-details');
    });

    router.post('/v2idv/contact-details', (req, res, next) => {
        res.redirect('/v2idv/nationality');
    });

    router.post('/v2idv/nationality', (req, res, next) => {
        res.redirect('/v2idv/working-living-abroad');
    });

    router.post('/v2idv/working-living-abroad', (req, res, next) => {
        res.redirect('/v2idv/check-answers');
    });

    // router.post('/v2idv/check-answers', (req, res, next) => {
    //     res.redirect('/v2idv/next-page');
    // });

    // COMPLEX APPLICATION CONTACT DETAILS

    router.post('/v2idv/we-need-to-get-in-touch', (req, res, next) => {
        res.redirect('/v2idv/complex_contact_details/complex-contact-name');
    });

    router.post('/v2idv/complex_contact_details/complex-contact-name', (req, res, next) => {
        res.redirect('/v2idv/complex_contact_details/complex-contact-nino');
    });

    router.post('/v2idv/complex_contact_details/complex-contact-nino', (req, res, next) => {
        res.redirect('/v2idv/complex_contact_details/complex-contact-date-of-birth');
    });

    router.post('/v2idv/complex_contact_details/complex-contact-date-of-birth', (req, res, next) => {
        res.redirect('/v2idv/complex_contact_details/complex-contact-details');
    });

    router.post('/v2idv/complex_contact_details/complex-contact-details', (req, res, next) => {
        res.redirect('/v2idv/complex_contact_details/complex-contact-check-answers');
    });

    router.post('/v2idv/complex_contact_details/complex-contact-check-answers', (req, res, next) => {
        res.redirect('/v2idv/complex_contact_details/complex-contact-confirmation');
    });

};
