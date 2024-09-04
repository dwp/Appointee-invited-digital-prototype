module.exports = function (router) {
    router.post('/v1a/special-rules', (req, res, next) => {
        const specialRules = req.session.data['terminally-ill'];
        if (specialRules === 'Yes') {
            res.redirect('/v1a/special-rules-ds1500');
        } else {
            res.redirect('/v1a/health-condition');
        }
    });

    router.post('/v1a/special-rules-ds1500', (req, res, next) => {
        res.redirect('/v1a/special-rules-eligible');
});

    router.post('/v1a/special-rules-eligible', (req, res, next) => {
        res.redirect('/v1a/over-16');
});

//    router.post('/v1a/special-rules-ds1500', (req, res, next) => {
//         const specialRules = req.session.data['terminally-ill'];
//         if (specialRules === 'Yes') {
//             res.redirect('/v1a/special-rules-eligible');
//         } else {
//             res.redirect('/v1a/special-rules-eligible');
//         }
//     });


    router.post('/v1a/health-condition', (req, res, next) => {
        const healthCondition = req.session.data['condition'];
        if (healthCondition === 'Yes') {
            res.redirect('/v1a/over-3-months');
        } else {
            res.redirect('/v1a/not-eligible-health-condition');
        }
    });

    router.post('/v1a/not-eligible-health-condition', (req, res, next) => {
            res.redirect('/v1a/over-16');
    });

    router.post('/v1a/over-3-months', (req, res, next) => {
        res.redirect('/v1a/over-9-months');
    });

    router.post('/v1a/over-9-months', (req, res, next) => {
        const overMonths = req.session.data['over-9-months'];
        if (overMonths === 'No') {
            res.redirect('/v1a/over-16');
        } else {
            res.redirect('/v1a/not-eligible-health-condition-9-months');
        }
    });

    router.post('/v1a/not-eligible-health-condition-9-months', (req, res, next) => {
        res.redirect('/v1a/over-16');
    });

    router.post('/v1a/over-16', (req, res, next) => {
        const over16 = req.session.data['over-16'];
        if (over16 === 'Answer 1') {
            res.redirect('/v1a/not-eligible-under-16');
        } else if (over16 === 'Answer 2'){
            res.redirect('/v1a/where-you-live');
        } else {
            res.redirect('/v1a/over-spa');
        }
    });

    router.post('/v1a/not-eligible-under-16', (req, res, next) => {
        res.redirect('/v1a/where-you-live');
    });

    router.post('/v1a/over-spa', (req, res, next) => {
        const overSpa = req.session.data['overspa'];
        if (overSpa === 'Yes') {
            res.redirect('/v1a/over-spa-payment-question');
        } else {
            res.redirect('/v1a/not-eligible-over-spa');
        }
    });

    router.post('/v1a/over-spa-payment-question', (req, res, next) => {
        res.redirect('/v1a/where-you-live');
    });

    router.post('/v1a/not-eligible-over-spa', (req, res, next) => {
        res.redirect('/v1a/where-you-live');
    });

    router.post('/v1a/where-you-live', (req, res, next) => {
        const whereLived = req.session.data['where-live'];
        if (whereLived === 'Yes') {
            res.redirect('/v1a/living-in-gb');
        } else {
            res.redirect('/v1a/living-in-gb-further-question');
        }
    });

    router.post('/v1a/living-in-gb-further-question', (req, res, next) => {
        const immigrationControl = req.session.data['immigration-control'];
        if (immigrationControl === 'No') {
            res.redirect('/v1a/living-in-gb');
        } else {
            res.redirect('/v1a/not-eligible-immigration');
        }
    });

    router.post('/v1a/living-in-gb', (req, res, next) => {
        const livingGb = req.session.data['gb'];
        if (livingGb === 'Yes') {
            res.redirect('/v1a/next-page');
        } else {
            res.redirect('/v1a/living-in-gb-further-question-2');
        }
    });

    router.post('/v1a/living-in-gb-further-question-2', (req, res, next) => {
        const immigrationControl2 = req.session.data['immigration-control-2'];
        if (immigrationControl2 === 'No') {
            res.redirect('/v1a/next-page');
        } else {
            res.redirect('/v1a/not-eligible-immigration');
        }
    });

    router.post('/v1a/not-eligible-immigration', (req, res, next) => {
        res.redirect('/v1a/next-page');
    });

 };
