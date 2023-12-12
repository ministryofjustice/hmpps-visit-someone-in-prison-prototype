//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

var NotifyClient = require('notifications-node-client').NotifyClient,
  notify = new NotifyClient(process.env.NOTIFYAPIKEY);

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// Run this code when a form is submitted to 'register-another-visitor-answer'
router.post('/register-another-visitor-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var registerAnother = req.session.data['register-another-visitor-answer']

  // Check whether the variable matches a condition
  if (registerAnother == "yes") {
    // Send user to next page
    res.redirect('online-booking/register-to-visit-v5/4visitor-name')
  } else {
    // Send user to ineligible page
    res.redirect('online-booking/register-to-visit-v5/4visitor-check-answers')
  }

})

router.post('/register-another-visitor-answer-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var registerAnother = req.session.data['register-another-visitor-answer']

  // Check whether the variable matches a condition
  if (registerAnother == "yes") {
    // Send user to next page
    res.redirect('online-booking/register-to-visit-v5-calendar/4visitor-name')
  } else {
    // Send user to ineligible page
    res.redirect('online-booking/register-to-visit-v5-calendar/4visitor-check-answers')
  }

})

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/email-address-page', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    'a680ff84-876d-4bf7-80bc-541a533b812a',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/');

});

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/sms-page', function (req, res) {

  notify.sendSms(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '5401ddaf-606a-4fd5-8d74-1cb36ae5c0e6',
    // `phoneNumber` here needs to match the name of the form field in
    // your HTML page
    req.body.phoneNumber
  );

  // This is the URL the users will be redirected to once the text
  // has been sent
  res.redirect('/');

});