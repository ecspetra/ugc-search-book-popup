;(function ($) {
  $('.ugc-form__datepicker').datepicker({
    inline: true,
    clearButton: true,
    submitButton: true,
    position: 'left top',
    showOtherMonths: false,
    selectOtherMonths: false,
    moveToOtherMonthsOnSelect: false,
    showOtherYears: false,
    selectOtherYears: false,
    navTitles: {
      days: 'MM yyyy'
    },
    classes: 'ugc-datepicker'
  });
})(jQuery);
