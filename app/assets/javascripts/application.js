//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here

  if (document.getElementById('calendar-slot-picker')) {

    function makeDateActive(event) {
      event.preventDefault()
      const dateLink = event.target

      document.querySelectorAll('.calendar-slots__active').forEach(e => e.classList.remove('calendar-slots__active'))
      document.querySelectorAll('.day-slots__active').forEach(e => e.classList.remove('day-slots__active'))

      dateLink.parentElement.classList.add('calendar-slots__active')
      document.querySelector(dateLink.hash).classList.add('day-slots__active')
      document.querySelector('.calendar-slot-button').classList.add('calendar-slot-button__active')
    }

    document.querySelectorAll('.calendar-slots a').forEach(dateLink => {
      dateLink.addEventListener('click', makeDateActive)
    })
  }

})

window.MOJFrontend.initAll()

window.onload = function () {
  // Loops through dom and finds all elements with card--clickable class
  document.querySelectorAll('.card--clickable').forEach(card => {
    // Check if card has a link within it
    if (card.querySelector('a') !== null) {
      // Clicks the link within the heading to navigate to desired page
      card.addEventListener('click', () => {
        card.querySelector('a').click()
      })
    }
  })
}
