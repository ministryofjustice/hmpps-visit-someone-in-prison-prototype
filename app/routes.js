//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// Run this code when a form is submitted to 'register-another-visitor-answer'
router.post('/register-another-visitor-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var registerAnother = req.session.data['register-another-visitor-answer']
  
    // Check whether the variable matches a condition
    if (registerAnother == "yes"){
      // Send user to next page
      res.redirect('online-booking/register-to-visit-v4/visitor-name')
    } else {
      // Send user to ineligible page
      res.redirect('online-booking/register-to-visit-v4/visitor-check-answers')
    }
  
  })