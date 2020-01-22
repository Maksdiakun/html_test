$(document).ready(function() {
  // Payment checkbox active state

  function colorChange() {
    var radioChecked = $(".tab_block_payment_item input:checked");
    var radio = $(".tab_block_payment_item input");
    $(radio)
      .parent()
      .css("filter", "grayscale(1)");
    $(radioChecked)
      .parent()
      .css("filter", "none");
  }
  $(".tab_block_payment_item").click(function() {
    colorChange();
  });
  colorChange();

  // card nuber inputs

  $(".multy_fill input").on("keyup change", function() {
    $t = $(this);

    // this.value = this.value.replace(/[^\d]/, "");

    if ($t.val().length > 3) {
      $t.next().focus();
    }
    var card_number = "";
    $(".multy_fill input").each(function() {
      card_number += $(this).val() + " ";
      if ($(this).val().length == 4) {
        $(this)
          .next()
          .focus();
      }
    });
  });
  $(".multy_fill input").click(function() {
    if ($(this).val().length == 0) {
      $("#card_number").focus();
    }
  });

  //  tabs

  var tab_wraper = $(".tab_blocks");

  function tabs() {
    var selector = $(".tabs_selector_active");
    if (selector.hasClass("standard")) {
      tab_wraper.removeClass("express");
      tab_wraper.removeClass("premium");
      tab_wraper.addClass("standard");
    } else if (selector.hasClass("express")) {
      tab_wraper.removeClass("standard");
      tab_wraper.removeClass("premium");
      tab_wraper.addClass("express");
    } else if (selector.hasClass("premium")) {
      tab_wraper.removeClass("standard");
      tab_wraper.removeClass("express");
      tab_wraper.addClass("premium");
    }
  }

  $(".tabs_selectors_item").click(function() {
    $(".tabs_selectors_item").removeClass("tabs_selector_active");
    $(this).addClass("tabs_selector_active");
    tabs();
  });
  tabs();
  // form styler

  // form styler  for country
  $("select").styler({ selectPlaceholder: "" });
  $(".file_wrap input").styler({
    filePlaceholder: "",
    fileBrowse: "+  Add logo"
  });

  // masks for inputs

  $("#Phone").mask("00000000");
  $("#expiration_date").mask("00/00");
  $("#cvv").mask("000");
});
