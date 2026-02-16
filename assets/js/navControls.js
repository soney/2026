function toggleNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    enableNav();
  } else {
    disableNav();
  }
}

function enableNav() {
  console.log("enableNav");
  var x = document.getElementById("myTopnav");
  x.className = "topnav responsive";
}

function disableNav() {
  console.log("disableNav");
  var x = document.getElementById("myTopnav");
  x.className = "topnav";
}

let pathname = window.location.pathname;
let colordata = {
  red: { color: "#ff515c", bg: "#ff515c80" },
  green: { color: "#019268", bg: "#01926880" },
  yellow: { color: "#ffba01", bg: "#ffba0180" },
  blue: { color: "#1269b5", bg: "#1269b580" },
};

$(document).ready(function () {
  $(".topnav > a").each(function (i, item) {
    if ($(item).attr("href") == pathname) {
      let color = colordata[$(item).attr("data-color")].color;
      $(item).css("background-color", color);
      $(item).css("color", "white");

      $(".content").addClass($(item).attr("data-color"));
    }
  });

  $(".topnav > .dropdown").each(function (i, item) {
    let _isIncluded = false;

    $(item)
      .find("a")
      .each(function (_i, _item) {
        console.log(_item);
        if ($(_item).attr("href") == pathname) {
          _isIncluded = true;
        }
      });

    if (
      $(item).find("a").attr("href") == pathname ||
      $(item).find(".dropbtn").attr("href") == pathname ||
      _isIncluded
    ) {
      let color = colordata[$(item).attr("data-color")].color;

      $(item).find(".dropbtn").css("background-color", color);
      $(item).find(".dropbtn").css("color", "white");

      $(".content").addClass($(item).attr("data-color"));
    }
  });

  $(".topnav .dropbtn").on("click", function (e) {
    if ($(this).attr("href") != null) {
      window.location.href = $(this).attr("href");
    }

    // Accessibility toggle
    var dropdownContent = $(this).next(".dropdown-content");
    dropdownContent.toggleClass("show");

    // Update aria-expanded
    var isExpanded = dropdownContent.hasClass("show");
    $(this).attr("aria-expanded", isExpanded);

    e.stopPropagation(); // Prevent event from bubbling to window
  });

  // Close the dropdown if the user clicks outside of it
  $(window).click(function () {
    $(".dropdown-content").removeClass("show");
    $(".dropbtn").attr("aria-expanded", "false");
  });

  // Close dropdown with Escape key
  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $(".dropdown-content").removeClass("show");
      $(".dropbtn").attr("aria-expanded", "false");
      // Return focus to the button if currently inside the menu or on the button
      if ($(".dropdown").find(":focus").length > 0) {
        $(".dropbtn").focus();
      }
    }
  });

  $(".topnav .dropdown-content > a").on("click", function () {
    //disableNav()
    $("#myTopnav").removeClass("responsive");
  });

  $(document).scroll(function () {
    let scrollY = $(document).scrollTop();
    if ($(window).width() > 810) {
      if (scrollY > 50) {
        $("#myTopnav").addClass("expanded");
        // $('.nav-logo').fadeIn(500);
      } else {
        $("#myTopnav").removeClass("expanded");
        // $('.nav-logo').fadeOut(50);
      }
    }
  });
});
