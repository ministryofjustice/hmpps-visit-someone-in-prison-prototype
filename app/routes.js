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
      res.redirect('public/register-to-visit-v5/4visitor-name')
    } else {
      // Send user to ineligible page
      res.redirect('public/register-to-visit-v5/4visitor-check-answers')
    }
  
  })

  router.post('/register-another-visitor-answer-2', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var registerAnother = req.session.data['register-another-visitor-answer']
  
    // Check whether the variable matches a condition
    if (registerAnother == "yes"){
      // Send user to next page
      res.redirect('public/register-to-visit-v5-calendar/4visitor-name')
    } else {
      // Send user to ineligible page
      res.redirect('public/register-to-visit-v5-calendar/4visitor-check-answers')
    }
  
  })

 router.post('/home-route', function (req, res) {
 
   // Make a variable and give it the value from 'how-many-balls'
   var scenario = req.session.data['scenario']
 
   // Check whether the variable matches a condition
   if (scenario == "B"){
     // Send user to interruption page
     res.redirect('public/UT-052025/book/0-interuptionPrisoner')
   } else {
     // Send users straight to visitor selection
     res.redirect('public/UT-052025/book/1-visitors')
   }
 })
 
 router.post('/visitors-route', function (req, res) {
  
    // Make a variable and give it the value from 'how-many-balls'
    var scenario = req.session.data['scenario']
  
    // Check whether the variable matches a condition
    if (scenario == "C"){
      // Send user to interruption page
      res.redirect('public/UT-052025/book/1b-interuptionVisitors')
    } else {
      // Send users straight to visitor selection
      res.redirect('public/UT-052025/book/2-choose-date')
    }
  })
   
  router.post('/contact-details-validation', function (req, res) {
  
  
    // Check whether the contact detail aren't empty
    if ((req.session.data['visitor-1-email']!='')||(req.session.data['visitor-1-tel']!='')){
      // Send user to interruption page
      res.redirect('public/UT-052025/book/6-check-answers')
    } else {
      // Send users straight to visitor selection
      res.redirect('public/UT-052025/book/5b-contact-details-error')
    }
  }) 
   
   router.post('/confirmation', function (req, res) {
   
    // Make a variable and give it the value from 'how-many-balls'
    var scenario = req.session.data['scenario']
   
    // Check whether the variable matches a condition
    if (scenario == "A"){
      // Send user to interruption page
      res.redirect('public/UT-052025/book/7-confirmation')
    } else {
      // Send users straight to visitor selection
      res.redirect('public/UT-052025/book/7b-needsReview')
    }
 
 })