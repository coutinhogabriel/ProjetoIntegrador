function scrollDestaques() {
    var parteScroll = document.getElementById("destaques");
      parteScroll.scrollIntoView({ behavior: 'smooth' });
}

function habilitaOption() {
  if (document.getElementById("inputEmail").value != ''
      && document.getElementById("inputPassword").value != ''
      && document.getElementById("inputAddress").value != ''
      && document.getElementById("inputCity").value != '') {
      document.getElementById("estado").removeAttribute("disabled");
      document.getElementById("stranger").removeAttribute("disabled");
  }

}