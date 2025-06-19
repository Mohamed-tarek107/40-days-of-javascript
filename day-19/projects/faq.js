
 const faq = document.querySelector(".faq")

 faq.addEventListener("click" , function(e) {
  if (e.target.classlist.contains("question")){
    e.stopPropagation;
  const currentItem = e.target.parentElement
  const currentanswer  = currentItem.querySelector(".answer")

  currentanswer.classlist.toggle("show")

}})

 document.addEventListener("click", function() {
  const allanswers = document.querySelectorAll(".answer.show")

  allanswers.forEach(answer => answer.classlist.remove("show"))
 })