

// Adds css class to active rating div
document.querySelectorAll('.rating div')
  .forEach(el => {
    el.addEventListener("click", e => {
      let prevRatingClicked = document.querySelector('.active-rating')
      if(prevRatingClicked){
        // console.log("prevRating is ", prevRatingClicked)
        prevRatingClicked.classList.remove('active-rating')
      }
      let currentRatingClicked = document.querySelector(`div[id="${e.target.id}"]`)
      currentRatingClicked.classList.add("active-rating")
      // console.log("currentRating is ", currentRatingClicked)
    })
  })

// updates rating on thankyou card
const updateRating = () => {
  console.log("rating i")

  let rating = document.querySelector('.active-rating').getAttribute('data-value')
  console.log("rating is ",rating)
  document.querySelector('#rating_value').innerHTML = rating;
  document.querySelector('#rating_card').style.display = "none"
  document.querySelector('#thankyou_card').style.display = "block"
  return false
};