function slowScrollToItem() {

  let portfolioBtn = document.getElementById('portfolioBtn'),
      skillsBtn = document.getElementById('skillsBtn'),
      aboutBtn = document.getElementById('aboutBtn'),
      contactBtn = document.getElementById('contactBtn');

  function slowScroll (id) {
    var offset = 70;
    $('html, body').animate ({
      scrollTop: $(id).offset().top - offset
    }, 500);
    return false;
  }

  portfolioBtn.addEventListener('click', () => {
    slowScroll("#project");
  });
  skillsBtn.addEventListener('click', () => {
    slowScroll("#skills");
  })
  aboutBtn.addEventListener('click', () => {
    slowScroll("#about");
  })
  contactBtn.addEventListener('click', () => {
    slowScroll("#contact");
  })
}

module.exports = slowScrollToItem;