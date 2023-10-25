onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
$(document).ready(function() {
  $(".title").lettering();
  $(".button").lettering();
});

