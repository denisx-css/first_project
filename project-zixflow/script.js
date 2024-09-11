const platformLink = document.querySelector(".platform_link");
const platformDropDown = document.querySelector(".platform_dropdown");
const resourcesDropDown = document.querySelector(".resources_dropdown")
const resourcesLink = document.querySelector(".resources_link")


platformLink.addEventListener("click", (e) => {
  platformDropDown.classList.toggle("hide");
  resourcesDropDown.classList.add("hide")
});

resourcesLink.addEventListener("click", (e) =>{
  resourcesDropDown.classList.toggle("hide");
  platformDropDown.classList.add("hide")
});

function click(){
  alert('hello')
  console.log('am hefre')
  
}
