;(function ($) {
  $('#histories-date').datepicker({
    clearButton: true,
    submitButton: true,
    offset: -34,
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
