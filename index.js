// This is a failed attempt to ensure only one label has the class "toggle-rating-label" at at time
// Supposed to reset all label classes to "rating-label", and then the toggle-rating-label can be applied
// However it appears that it just overrides the css class at the same time, causing the label to never have "toggle-rating-label" class
// document.querySelector('.rating')
//   .addEventListener("click", () => {
//     console.log(document.querySelectorAll(`div label`))
//     document.querySelectorAll(`div label`).forEach(el => {
//       el.setAttribute('class','rating-label')
//     })
//   })

// Adds css class to input label when clicked
document.querySelectorAll('label')
  .forEach(el => {
    el.addEventListener("click", e => {
      let rating = document.querySelector(`label[id="${e.target.id}"]`)
      rating.classList.toggle("toggle-rating-label")
    })
  })

// saves rating to localStorage and redirects thankyou_card.html
const submitRating = () => {
  let rating = document.querySelector('input[name="rating"]:checked').value
  console.log(rating)
  localStorage.setItem('rating', rating)
  window.location.href = './thankyou_card.html'
  return false
};