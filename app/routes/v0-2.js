module.exports = function (router) {
    router.post('/v0-2/apply-for-someone-else', (req, res, next) => {
        const someoneElse = req.session.data['someone-else'];
        if (someoneElse === 'No, the application is for myself') {
            res.redirect('/v0-2/over-16');
        } else {
            res.redirect('/v0-2/apply-for-someone/over-16');
        }
    });
   
    router.post('/v0-2/over-16', (req, res, next) => {
        const over16 = req.session.data['over-16'];
        if (over16 === 'Yes') {
            res.redirect('/v0-2/health-condition');
        } else {
            req.session.data.destination = 'health-condition'
            res.redirect('/v0-2/not-eligible');
        }
    });
    router.post('/v0-2/apply-for-someone/over-16', (req, res, next) => {
        const over16 = req.session.data['afse-over-16'];
        if (over16 === 'Yes') {
            res.redirect('/v0-2/apply-for-someone/health-condition');
        } else {
            res.redirect('/v0-2/apply-for-someone/not-eligible');
        }
    });
    router.post('/v0-2/health-condition', (req, res, next) => {
        const healthCondition = req.session.data['condition'];
        if (healthCondition === 'Yes') {
            res.redirect('/v0-2/over-3-months');
        } else {
            req.session.data.destination = 'where-you-live'
            res.redirect('/v0-2/not-eligible');
        }
    });
    router.post('/v0-2/over-3-months', (req, res, next) => {
        const over3months = req.session.data['over-3-months'];
        if (over3months === 'Yes') {
            res.redirect('/v0-2/over-9-months');
        } else {
            req.session.data.destination = 'over-9-months'
            res.redirect('/v0-2/not-eligible');
        }
    });
    router.post('/v0-2/over-9-months', (req, res, next) => {
        const over9months = req.session.data['over-9-months'];
        if (over9months === 'Yes') {
            res.redirect('/v0-2/where-you-live');
        } else {
            req.session.data.destination = 'where-you-live'
            res.redirect('/v0-2/not-eligible');
        }
    });
    router.post('/v0-2/apply-for-someone/health-condition', (req, res, next) => {
        const healthCondition = req.session.data['afse-condition'];
        if (healthCondition === 'Yes') {
            res.redirect('/v0-2/apply-for-someone/over-3-months');
        } else {
            res.redirect('/v0-2/apply-for-someone/not-eligible');
        }
    });
    router.post('/v0-2/where-you-live', (req, res, next) => {
        const whereLived = req.session.data['where-lived'];
        if (whereLived === 'Yes') {
            res.redirect('/v0-2/check-answers-1');
        } else {
            res.redirect('/v0-2/not-eligible');
        }
    });
    router.post('/v0-2/address', (req, res, next) => {
        const safeAddress = req.session.data['safe-address'];
        if (safeAddress === 'No') {
            res.redirect('/v0-2/address-other');
        } else {
            res.redirect('/v0-2/contact-details');
        }
    });
    router.post('/v0-2/apply-for-someone/address', (req, res, next) => {
        const safeAddress = req.session.data['afse-safe-address'];
        if (safeAddress === 'No') {
            res.redirect('/v0-2/apply-for-someone/address-other');
        } else {
            res.redirect('/v0-2/apply-for-someone/contact-details');
        }
    });
    router.post('/v0-2/not-eligible', (req, res, next) => {
        const destination = req.session.data['destination'];
        if (destination === 'health-condition') {
            delete req.session.data.destination
            res.redirect('/v0-2/health-condition');
        } else if (destination === 'over-3-months') {
            delete req.session.data.destination
            res.redirect('/v0-2/over-3-months');
        } else if (destination === 'over-9-months') {
            delete req.session.data.destination
            res.redirect('/v0-2/over-9-months');    
        } else if (destination === 'where-you-live') {
            delete req.session.data.destination
            res.redirect('/v0-2/where-you-live');
        } else {
            delete req.session.data.destination
            res.redirect('/v0-2/check-answers-1');
        }
    });
};