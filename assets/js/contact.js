// declare
const linkedInSocial = document.getElementById('linkedin-social');
const gitHubSocial = document.getElementById('github-social');
// const melartistangentSocial = document.getElementById('melartistangent-social');
const yelpSocial = document.getElementById('yelp-social');

const linkedInDescr = document.getElementById('linkedin-descr');
const gitHubDescr = document.getElementById('github-descr');
// const melartistangentDescr = document.getElementById('melartistangent-descr');
const yelpDescr = document.getElementById('yelp-descr');


// plan it




// do it

linkedInSocial.addEventListener("mouseover", function() {   
  linkedInDescr.style.display = "inline";
}, false);
linkedInSocial.addEventListener("mouseout", function() {   
  linkedInDescr.style.display = "none";
}, false);

gitHubSocial.addEventListener("mouseover", function() {   
  gitHubDescr.style.display = "inline";
}, false);
gitHubSocial.addEventListener("mouseout", function() {   
  gitHubDescr.style.display = "none";
}, false);

// melartistangentSocial.addEventListener("mouseover", function() {   
//   melartistangentDescr.style.display = "inline";
// }, false);
// melartistangentSocial.addEventListener("mouseout", function() {   
//   melartistangentDescr.style.display = "none";
// }, false);

yelpSocial.addEventListener("mouseover", function() {   
  yelpDescr.style.display = "inline";
}, false);
yelpSocial.addEventListener("mouseout", function() {   
  yelpDescr.style.display = "none";
}, false);


