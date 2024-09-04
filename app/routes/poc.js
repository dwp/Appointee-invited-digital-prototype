module.exports = function (router) {
  router.post('/poc/eligible', (req, res, next) => {
    const whereLived = req.session.data['where-lived'];
    if (whereLived === 'No') {
      res.redirect('/poc/not-eligible');
    } else {
      next();
    }
    const condition = req.session.data['condition'];
    if (condition === 'No') {
      res.redirect('/poc/not-eligible');
    } else {
      next();
    }
    const over16 = req.session.data['over-16'];
    if (over16 === 'No') {
      res.redirect('/poc/not-eligible');
    } else {
      next();
    }
  });
  router.post('/poc/contact-details', (req, res, next) => {
    const safeAddress = req.session.data['safe-address'];
    if (safeAddress === 'No') {
      res.redirect('/poc/address-other');
    } else {
      res.redirect('/poc/contact-details');
    }
  });
}