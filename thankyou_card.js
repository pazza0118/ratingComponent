window.onload = function (){
    const rating = localStorage.getItem('rating')
    document.getElementById("rating").innerHTML = rating;
}