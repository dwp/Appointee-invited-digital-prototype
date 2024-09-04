const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

// PIP ROUTING

// PIP1 CLAIM-REGISTRATION

router.post('/v18/claim-registration/start', (req, res, next) => {
        res.redirect('/v18/claim-registration/additional-support/communicating');
});

router.post('/v18/claim-registration/additional-support/communicating', (req, res, next) => {
        res.redirect('/v18/claim-registration/additional-support/forms-letters');
});

router.post('/v18/claim-registration/additional-support/forms-letters', (req, res, next) => {
        const addSupport = req.session.data['add-support'];
          if (addSupport === 'Yes') {
            res.redirect('/v18/claim-registration/additional-support/help');
        } else {
            res.redirect('/v18/claim-registration/additional-support/check-answers-1');
        }
});

router.post('/v18/claim-registration/additional-support/help', (req, res, next) => {
        const addsupportHelp = req.session.data['add-support-help'];
          if (addsupportHelp === 'Yes') {
            res.redirect('/v18/claim-registration/additional-support/help-name');
        } else {
            res.redirect('/v18/claim-registration/additional-support/check-answers-1');
        }
});

router.post('/v18/claim-registration/additional-support/help-name', (req, res, next) => {
        res.redirect('/v18/claim-registration/additional-support/check-answers-1');
});

router.post('/v18/claim-registration/additional-support/check-answers-1', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/name');
});


router.post('/v18/claim-registration/personal-details/name', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/nino');
});

router.post('/v18/claim-registration/personal-details/nino', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/date-of-birth');
});

router.post('/v18/claim-registration/personal-details/date-of-birth', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/live-in-uk');
});

router.post('/v18/claim-registration/personal-details/live-in-uk', (req, res, next) => {
    const liveinUK = req.session.data['live-in-uk'];
      if (liveinUK === 'Yes') {
        res.redirect('/v18/claim-registration/personal-details/find-an-address/search');
    } else {
        res.redirect('/v18/claim-registration/personal-details/address');
    }
});

router.post('/v18/claim-registration/personal-details/find-an-address/search', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/find-an-address/select');
});

router.post('/v18/claim-registration/personal-details/find-an-address/select', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/find-an-address/confirm');
});

router.post('/v18/claim-registration/personal-details/find-an-address/confirm', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/can-we-write-to-address');
});

router.post('/v18/claim-registration/personal-details/can-we-write-to-address', (req, res, next) => {
      const safeAddress = req.session.data['safe-address'];
        if (safeAddress === 'Yes') {
          res.redirect('/v18/claim-registration/personal-details/contact-details');
      } else {
          res.redirect('/v18/claim-registration/personal-details/find-an-address/search-alt');
      }
});

router.post('/v18/claim-registration/personal-details/find-an-address/search-alt', (req, res, next) => {
      res.redirect('/v18/claim-registration/personal-details/find-an-address/confirm-alt');
});

router.post('/v18/claim-registration/personal-details/find-an-address/confirm-alt', (req, res, next) => {
      res.redirect('/v18/claim-registration/personal-details/contact-details');
});

router.post('/v18/claim-registration/personal-details/address', (req, res, next) => {
      res.redirect('/v18/claim-registration/personal-details/confirm-address');
});

router.post('/v18/claim-registration/personal-details/confirm-address', (req, res, next) => {
      res.redirect('/v18/claim-registration/personal-details/can-we-write-to-address');
});

router.post('/v18/claim-registration/personal-details/address-other', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/confirm-address-other');
});

router.post('/v18/claim-registration/personal-details/confirm-address-other', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/contact-details');
});

router.post('/v18/claim-registration/personal-details/contact-details', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/bank-account');
});

router.post('/v18/claim-registration/personal-details/bank-account', (req, res, next) => {
        const yourAccount = req.session.data['your-account'];
          if (yourAccount === 'Yes') {
            res.redirect('/v18/claim-registration/personal-details/bank-account-details');
        } else {
            res.redirect('/v18/claim-registration/personal-details/continue-without-bank-details');
        }
});

router.post('/v18/claim-registration/personal-details/continue-without-bank-details', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/alt-formats');
});

router.post('/v18/claim-registration/personal-details/bank-account-details', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/alt-formats');
});

router.post('/v18/claim-registration/personal-details/alt-formats', (req, res, next) => {
        const communicationFormat = req.session.data['communication-format'];
          if (communicationFormat === 'Yes') {
            res.redirect('/v18/claim-registration/personal-details/alt-formats/type');
        } else {
            res.redirect('/v18/claim-registration/personal-details/check-answers-2');
        }
});


router.post('/v18/claim-registration/personal-details/alt-formats/type', (req, res, next) => {
    const communicationType = req.session.data['communication-type'];
      if (communicationType === 'Braille') {
      res.redirect('/v18/claim-registration/personal-details/alt-formats/braille');
  } else if (communicationType === 'Sign language') {
      res.redirect('/v18/claim-registration/personal-details/alt-formats/sign-language');
  } else if (communicationType === 'Audio') {
      res.redirect('/v18/claim-registration/personal-details/alt-formats/audio');
  } else {
      res.redirect('/v18/claim-registration/personal-details/alt-formats/paper-other');
  }
});

router.post('/v18/claim-registration/personal-details/alt-formats/braille', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/check-answers-2');
});

router.post('/v18/claim-registration/personal-details/alt-formats/sign-language', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/check-answers-2');
});

router.post('/v18/claim-registration/personal-details/alt-formats/audio', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/check-answers-2');
});

router.post('/v18/claim-registration/personal-details/alt-formats/paper-other', (req, res, next) => {
    const otherFormat = req.session.data['other-format'];
      if (otherFormat === 'Coloured paper') {
      res.redirect('/v18/claim-registration/personal-details/alt-formats/paper-coloured');
  } else if (otherFormat === 'Custom font') {
      res.redirect('/v18/claim-registration/personal-details/alt-formats/paper-custom-font');
  } else if (otherFormat === 'Accessible PDF') {
      res.redirect('/v18/claim-registration/personal-details/alt-formats/other-pdf');
  } else if (otherFormat === 'Email') {
      res.redirect('/v18/claim-registration/personal-details/alt-formats/other-email');
  } else if (otherFormat === 'Other') {
      res.redirect('/v18/claim-registration/personal-details/alt-formats/other');
  } else {
      res.redirect('/v18/claim-registration/personal-details/check-answers-2');
  }
});

router.post('/v18/claim-registration/personal-details/alt-formats/paper-coloured', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/check-answers-2');
});

router.post('/v18/claim-registration/personal-details/alt-formats/paper-custom-font', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/check-answers-2');
});

router.post('/v18/claim-registration/personal-details/alt-formats/other-pdf', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/check-answers-2');
});

router.post('/v18/claim-registration/personal-details/alt-formats/other-email', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/check-answers-2');
});

router.post('/v18/claim-registration/personal-details/alt-formats/other', (req, res, next) => {
        res.redirect('/v18/claim-registration/personal-details/check-answers-2');
});

router.post('/v18/claim-registration/personal-details/check-answers-2', (req, res, next) => {
        res.redirect('/v18/claim-registration/residency/nationality');
});

router.post('/v18/claim-registration/residency/nationality', (req, res, next) => {
    const whereLive = req.session.data['nationality'];
      if (whereLive === 'A nationality of the European Economic Area (EEA) or Switzerland') {
      res.redirect('/v18/claim-registration/residency/nationality-of-eaa-or-switzerland');
  } else if (whereLive === 'Another nationality') {
      res.redirect('/v18/claim-registration/residency/nationality-another');
  } else {
      res.redirect('/v18/claim-registration/residency/living-in-gb');
  }
});

router.post('/v18/claim-registration/residency/nationality-of-eaa-or-switzerland', (req, res, next) => {
    res.redirect('/v18/claim-registration/residency/living-in-uk');
});

router.post('/v18/claim-registration/residency/living-in-uk', (req, res, next) => {
    const livingUk = req.session.data['living-in-uk'];
    if (livingUk === 'No') {
        res.redirect('/v18/claim-registration/residency/check-answers-3');
    } else {
        res.redirect('/v18/claim-registration/residency/living-in-gb');
    }
});

router.post('/v18/claim-registration/residency/nationality-another', (req, res, next) => {
    res.redirect('/v18/claim-registration/residency/living-in-gb');
});

router.post('/v18/claim-registration/residency/living-in-gb', (req, res, next) => {
    const nationality = req.session.data['nationality']
    const gb = req.session.data['gb']

    if (nationality === 'British' ||
        nationality === 'Irish' ||
        nationality === 'A nationality of the European Economic Area (EEA) or Switzerland'
    ) {
        if (gb === 'No') {
            res.redirect('/v18/claim-registration/residency/check-answers-3')
        }
        if (gb === 'Yes' || gb === 'Not sure') {
            res.redirect('/v18/claim-registration/residency/eaa')
        }
    } else if (nationality === 'Another nationality') {
        res.redirect('/v18/claim-registration/residency/check-answers-3')
    }
})

router.post('/v18/claim-registration/residency/eaa', (req, res, next) => {
    res.redirect('/v18/claim-registration/residency/check-answers-3');
});

router.post('/v18/claim-registration/residency/check-answers-3', (req, res, next) => {
    res.redirect('/v18/claim-registration/your-health/condition');
});

router.post('/v18/claim-registration/your-health/condition', (req, res, next) => {
    res.redirect('/v18/claim-registration/your-health/hcps');
});

router.post('/v18/claim-registration/your-health/hcps', (req, res, next) => {
    const healthHcps = req.session.data['health-hcps'];
    if (healthHcps === 'Yes') {
        res.redirect('/v18/claim-registration/your-health/hcp');
    } else {
        res.redirect('/v18/claim-registration/your-health/consent');
    }
});

router.post('/v18/claim-registration/your-health/hcp', (req, res, next) => {
    res.redirect('/v18/claim-registration/your-health/hcp-in-uk');
});

router.post('/v18/claim-registration/your-health/hcp-in-uk', (req, res, next) => {
    const hcpinUK = req.session.data['hcp-in-uk'];
      if (hcpinUK === 'Yes') {
        res.redirect('/v18/claim-registration/your-health/hcp-find-an-address/search');
    } else {
        res.redirect('/v18/claim-registration/your-health/hcp-address');
    }
});

router.post('/v18/claim-registration/your-health/hcp-find-an-address/search', (req, res, next) => {
        res.redirect('/v18/claim-registration/your-health/hcp-find-an-address/select');
});

router.post('/v18/claim-registration/your-health/hcp-find-an-address/select', (req, res, next) => {
        res.redirect('/v18/claim-registration/your-health/hcp-find-an-address/confirm');
});

router.post('/v18/claim-registration/your-health/hcp-find-an-address/confirm', (req, res, next) => {
        res.redirect('/v18/claim-registration/your-health/consent');
});

router.post('/v18/claim-registration/your-health/hcp-address', (req, res, next) => {
    res.redirect('/v18/claim-registration/your-health/consent');
});

router.post('/v18/claim-registration/your-health/consent', (req, res, next) => {
    res.redirect('/v18/claim-registration/your-health/in-hospital');
});

router.post('/v18/claim-registration/your-health/in-hospital', (req, res, next) => {
    const inHospital = req.session.data['hospital'];
    if (inHospital === 'Hospital') {
        res.redirect('/v18/claim-registration/your-health/hospital-admission');
    } else if (inHospital === 'Hospice') {
        res.redirect('/v18/claim-registration/your-health/hospice-admission');
    } else if (inHospital === 'Care or nursing home') {
        res.redirect('/v18/claim-registration/your-health/accommodation-admission');
    } else if (inHospital === 'Other') {
          res.redirect('/v18/claim-registration/your-health/accommodation-admission');
    } else {
        res.redirect('/v18/claim-registration/your-health/check-answers-4');
    }
});

router.post('/v18/claim-registration/your-health/hospital-admission', (req, res, next) => {
    res.redirect('/v18/claim-registration/your-health/accommodation-in-uk');
});

router.post('/v18/claim-registration/your-health/hospice-admission', (req, res, next) => {
    res.redirect('/v18/claim-registration/your-health/accommodation-in-uk');
});

router.post('/v18/claim-registration/your-health/accommodation-admission', (req, res, next) => {
    res.redirect('/v18/claim-registration/your-health/accommodation-in-uk');
});

router.post('/v18/claim-registration/your-health/accommodation-in-uk', (req, res, next) => {
    const accommodationinUK = req.session.data['accommodation-in-uk'];
      if (accommodationinUK === 'Yes') {
        res.redirect('/v18/claim-registration/your-health/find-an-address/search');
    } else {
        res.redirect('/v18/claim-registration/your-health/accommodation-address');
    }
});

router.post('/v18/claim-registration/your-health/find-an-address/search', (req, res, next) => {
        res.redirect('/v18/claim-registration/your-health/find-an-address/confirm');
});

// router.post('/v18/claim-registration/your-health/find-an-address/select', (req, res, next) => {
//         res.redirect('/v18/claim-registration/your-health/find-an-address/confirm');
// });

router.post('/v18/claim-registration/your-health/find-an-address/confirm', (req, res, next) => {
        res.redirect('/v18/claim-registration/your-health/check-answers-4');
});

router.post('/v18/claim-registration/your-health/accommodation-address', (req, res, next) => {
        res.redirect('/v18/claim-registration/your-health/check-answers-4');
});


router.post('/v18/claim-registration/your-health/check-answers-4', (req, res, next) => {
    res.redirect('/v18/claim-registration/motability-scheme');
});

router.post('/v18/claim-registration/motability-scheme', (req, res, next) => {
    res.redirect('/v18/claim-registration/ready-to-submit');
});

router.post('/v18/claim-registration/ready-to-submit', (req, res, next) => {
    res.redirect('/v18/claim-registration/confirmation');
});

}
