$(".lenta-card__text").readmore();

(function ($) {
  $(".ugc-form__select").each(function () {
    var openButton = $(".ugc-form__select summary");
    var closeButton = $(".close-modal");
    var overlay = openButton.next(".overlay");

    var openModal = function () {
      if (overlay) {
        overlay.on("click", closeModal);
      }

      closeButton.on("click", closeModal);

      $("body").addClass("modal-open");
    };

    var closeModal = function () {
      this.closest("details").removeAttribute("open");

      if (overlay) {
        overlay.off("click", closeModal);
      }

      closeButton.off("click", closeModal);

      $("body").removeClass("modal-open");
    };

    openButton.on("click", openModal);
  });

  $(".btn-select-edition").each(function () {
    this.onclick = function () {
      UGCBookSearchHide();
      $(".book-search-hideaway").addClass("invisible");
      $(".ugc-selected-book-preview").removeClass("invisible");
    };
  });

  UGCBookSearchHide();
})(jQuery);

(function () {
  let rating = {
    parent: document.querySelector(".rating"),
    assessment: document.querySelector("#book-assessment"),
    getSystem: function () {
      return this.parent.dataset.rating;
    },
    getValue: function (value) {
      let ratingSystem = this.getSystem();

      if (ratingSystem === "five-point") {
        return value / 2;
      } else if (ratingSystem === "ten-point") {
        return value;
      } else if (ratingSystem === "fractional") {
        return (value / 2).toLocaleString();
      }
    },
    setAssessment: function (value) {
      this.assessment.textContent = value;
    },
  };

  rating.parent.addEventListener("click", function (evt) {
    let target = evt.target;
    let value;

    if (target.tagName === "INPUT") {
      value = rating.getValue(target.value);
      rating.setAssessment(value);
    }
  });
})();

function UGCBookSearchShow() {
  $(".ugc-popup-book-search").show();
  $("body").addClass("disabled-scroll");
}

function UGCBookSearchHide() {
  $(".ugc-popup-book-search").hide();
  $("body").removeClass("disabled-scroll");
}

$(document).mouseup(function (e) {
  var container = $(".ugc-popup-book-search");
  if (container.has(e.target).length === 0) {
    container.hide();
    $("body").toggleClass("disabled-scroll");
  }
});

/*
(function($) {
  $.fn.truncate = function(options) {

    var defaults = {
      length: 100,
      minTrail: 10,
      moreText: "",
      lessText: "",
      ellipsisText: ""
    };

    var options = $.extend(defaults, options);

    function find(container, text, minLength) {
      var curIndex = 0;

      for (var nodes = Array.from(container.childNodes); nodes.length;) {
        var node = nodes.shift();
        if (node.nodeType == Node.ELEMENT_NODE) {
          nodes.unshift(...node.childNodes);
          continue;
        }
        var index = -1;
        do {
          index = node.textContent.indexOf(text, index + 1);
        } while (index != -1 && curIndex + index < minLength);

        if (index != -1) {
          curIndex += index;
          return [node, index];
        } else {
          curIndex += node.textContent.length;
        }
      }
      return [null, -1];
    }

    return this.each(function() {
      var obj = $(this);
      var body = this.textContent;
      var imgContent = $('img', obj);

      if (body.length > options.length + options.minTrail) {
        var textToFind = '.';
        if (body.indexOf(textToFind, options.length) != -1) {

          var [node, startIndex] = find(this, textToFind, options.length);
          var splitLocation = startIndex + textToFind.length;

          var str1 = node.textContent.substring(0, splitLocation);
          var str2 = node.textContent.substring(splitLocation + 1);

          node.textContent = str1;

          if (str2.length) {
            $(node).after(`<span class="truncate_more">${str2}</span>`);
          }

          $(node).after(`<span class="truncate_ellipsis">${options.ellipsisText}</span>`);

          var oi = 0;
          while (node != this) {
            var span = $('<span>').addClass('truncate_more');
            for (var nextNode = node.nextSibling, savedNode; nextNode; nextNode = savedNode) {
              if (nextNode.classList && (nextNode.classList.contains('truncate_more') || nextNode.classList.contains('truncate_ellipsis'))) continue;

              savedNode = nextNode.nextSibling;
              span.append(nextNode);
            }
            node = node.parentNode;
            $(node).append(span);
          }

          obj.find('.truncate_more').css("display", "none");

          obj.append(
            '<span class="truncate_more_link">' + options.moreText + '</span>'
          );

          var moreLink = $('.truncate_more_link', obj);
          var moreContent = $('.truncate_more', obj);
          var ellipsis = $('.truncate_ellipsis', obj);
          moreLink.click(function() {
            if (moreLink.text() == options.moreText) {
              moreContent.show('normal');
              moreLink.text(options.lessText);
              ellipsis.css("display", "none");
              imgContent.css("display", "block");
            } else {
              moreContent.hide('normal');
              moreLink.text(options.moreText);
              moreLink.css("display", "inline");
              ellipsis.css("display", "inline");
              imgContent.css("display", "none");
            }
            return false;
          });
        }
      }

    });
  };
})(jQuery);

$().ready(function() {
  $('.lenta-card__text').truncate({
    length: 40,
    minTrail: 10,
    moreText: 'Развернуть',
    lessText: 'Скрыть',
    ellipsisText: "..."
  });
});


*/

{
}
