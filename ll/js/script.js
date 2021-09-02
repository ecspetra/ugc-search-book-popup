(function () {
  let rating = {
    parent: document.querySelector('.rating'),
    assessment: document.querySelector('#book-assessment'),
    currentAssessment: '',
    getSystem: function () {
      return this.parent.dataset.rating;
    },
    getValue: function (value) {
      let ratingSystem = this.getSystem();

      if (ratingSystem === 'five-point') {
        return value / 2;
      } else if (ratingSystem === 'ten-point') {
        return value;
      } else if (ratingSystem === 'fractional') {
        return (value / 2).toLocaleString();
      }
    },
    setAssessment: function (value) {
      this.assessment.textContent = value;
    }
  }

  rating.parent.addEventListener('click', function (evt) {
    let target = evt.target;
    let value;

    if (target.tagName === 'INPUT') {
      value = rating.getValue(target.value);
      rating.currentAssessment = value;
      rating.setAssessment(value);
    }
  });


  rating.parent.addEventListener('mouseover', function (evt) {
    let target = evt.target;
    let value;

    if (target.tagName === 'LABEL') {
      value = rating.getValue(target.control.value);
      rating.setAssessment(value);
    }
  });

  rating.parent.addEventListener('mouseout', function (evt) {
    rating.setAssessment(rating.currentAssessment);
  });
})();

$('.lenta-card__text').readmore();

{
  const Selects = {
    SUMMARY: $('.ugc-form__select summary'),
    DETAILS: $('.ugc-form__select details')
  }

  Selects.SUMMARY.on('click', (evt) => {
    if (!evt.target.closest('details').hasAttribute('open')) {
      Selects.DETAILS.removeAttr('open');
    }
  });
}
