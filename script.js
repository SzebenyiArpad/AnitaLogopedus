function kinagyit1() {
  document.getElementById("kep1").style.transform = "scale(3)";
  document.getElementById("kep1").style.transformOrigin = "top";
  document.getElementById("kep1").style.position = "relative";
  document.getElementById("kep1").style.zIndex = "1";
  document.getElementById("kep1").style.transition = "transform 0.25 ease";
}
function zsugorit1() {
  document.getElementById("kep1").style.transform = "scale(1)";
  document.getElementById("kep1").style.transformOrigin = "top";
  document.getElementById("kep1").style.position = "relative";
  document.getElementById("kep1").style.zIndex = "100";
  document.getElementById("kep1").style.transition = "transform 0.25 ease";
}
function kinagyit2() {
  document.getElementById("kep2").style.transform = "scale(3)";
  document.getElementById("kep2").style.transformOrigin = "top";
  document.getElementById("kep1").style.position = "relative";
  document.getElementById("kep1").style.zIndex = "1";
  document.getElementById("kep2").style.transition = "transform 0.25 ease";
}
function zsugorit2() {
  document.getElementById("kep2").style.transform = "scale(1)";
  document.getElementById("kep2").style.transformOrigin = "top";
  document.getElementById("kep1").style.position = "relative";
  document.getElementById("kep1").style.zIndex = "100";
  document.getElementById("kep2").style.transition = "transform 0.25 ease";
}
function kinagyit3() {
  document.getElementById("kep3").style.transform = "scale(3)";
  document.getElementById("kep3").style.transformOrigin = "top";
  document.getElementById("kep1").style.position = "relative";
  document.getElementById("kep1").style.zIndex = "1";
  document.getElementById("kep3").style.transition = "transform 0.25 ease";
}
function zsugorit3() {
  document.getElementById("kep3").style.transform = "scale(1)";
  document.getElementById("kep3").style.transformOrigin = "top";
  document.getElementById("kep1").style.position = "relative";
  document.getElementById("kep1").style.zIndex = "100";
  document.getElementById("kep3").style.transition = "transform 0.25 ease";
}
function kinagyit4() {
  document.getElementById("kep4").style.transform = "scale(3)";
  document.getElementById("kep4").style.transformOrigin = "top";
  document.getElementById("kep1").style.position = "relative";
  document.getElementById("kep1").style.zIndex = "1";
  document.getElementById("kep4").style.transition = "transform 0.25 ease";
}
function zsugorit4() {
  document.getElementById("kep4").style.transform = "scale(1)";
  document.getElementById("kep4").style.transformOrigin = "top";
  document.getElementById("kep1").style.position = "relative";
  document.getElementById("kep1").style.zIndex = "100";
  document.getElementById("kep4").style.transition = "transform 0.25 ease";
}
$(document).ready(function () {
  $("body").scroll(function () {
    $(".eow").fadeOut("slow");
  });
});

$(document).ready(function () {
  $("#mouth1").click(function () {
    if (
      $("#mouth1 img").attr("src") ==
      "pictures/beautiful-lips-set/openMouth.png"
    ) {
      $("#mouth1 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy1").slideToggle("slow");
    } else {
      $("#mouth1 img").attr("src", "pictures/beautiful-lips-set/openMouth.png");
      $("#therapy1").slideToggle("slow");
      $("#mouth2 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy2").slideUp("slow");
      $("#mouth3 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy3").slideUp("slow");
      $("#mouth4 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy4").slideUp("slow");
      $("#mouth5 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy5").slideUp("slow");
      $("#mouth6 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy6").slideUp("slow");
      $("#mouth7 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy7").slideUp("slow");
    }
  });
  $("#mouth2").click(function () {
    if (
      $("#mouth2 img").attr("src") ==
      "pictures/beautiful-lips-set/openMouth.png"
    ) {
      $("#mouth2 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy2").slideToggle("slow");
    } else {
      $("#mouth2 img").attr("src", "pictures/beautiful-lips-set/openMouth.png");
      $("#therapy2").slideToggle("slow");
      $("#mouth1 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy1").slideUp("slow");
      $("#mouth3 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy3").slideUp("slow");
      $("#mouth4 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy4").slideUp("slow");
      $("#mouth5 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy5").slideUp("slow");
      $("#mouth6 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy6").slideUp("slow");
      $("#mouth7 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy7").slideUp("slow");
    }
  });
  $("#mouth3").click(function () {
    if (
      $("#mouth3 img").attr("src") ==
      "pictures/beautiful-lips-set/openMouth.png"
    ) {
      $("#mouth3 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy3").slideToggle("slow");
    } else {
      $("#mouth3 img").attr("src", "pictures/beautiful-lips-set/openMouth.png");
      $("#therapy3").slideToggle("slow");
      $("#mouth2 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy2").slideUp("slow");
      $("#mouth1 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy1").slideUp("slow");
      $("#mouth4 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy4").slideUp("slow");
      $("#mouth5 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy5").slideUp("slow");
      $("#mouth6 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy6").slideUp("slow");
      $("#mouth7 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy7").slideUp("slow");
    }
  });
  $("#mouth4").click(function () {
    if (
      $("#mouth4 img").attr("src") ==
      "pictures/beautiful-lips-set/openMouth.png"
    ) {
      $("#mouth4 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy4").slideToggle("slow");
    } else {
      $("#mouth4 img").attr("src", "pictures/beautiful-lips-set/openMouth.png");
      $("#therapy4").slideToggle("slow");
      $("#mouth2 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy2").slideUp("slow");
      $("#mouth3 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy3").slideUp("slow");
      $("#mouth1 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy1").slideUp("slow");
      $("#mouth5 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy5").slideUp("slow");
      $("#mouth6 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy6").slideUp("slow");
      $("#mouth7 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy7").slideUp("slow");
    }
  });
  $("#mouth5").click(function () {
    if (
      $("#mouth5 img").attr("src") ==
      "pictures/beautiful-lips-set/openMouth.png"
    ) {
      $("#mouth5 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy5").slideToggle("slow");
    } else {
      $("#mouth5 img").attr("src", "pictures/beautiful-lips-set/openMouth.png");
      $("#therapy5").slideToggle("slow");
      $("#mouth2 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy2").slideUp("slow");
      $("#mouth3 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy3").slideUp("slow");
      $("#mouth1 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy1").slideUp("slow");
      $("#mouth4 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy4").slideUp("slow");
      $("#mouth6 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy6").slideUp("slow");
      $("#mouth7 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy7").slideUp("slow");
    }
  });
  $("#mouth6").click(function () {
    if (
      $("#mouth6 img").attr("src") ==
      "pictures/beautiful-lips-set/openMouth.png"
    ) {
      $("#mouth6 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy6").slideToggle("slow");
    } else {
      $("#mouth6 img").attr("src", "pictures/beautiful-lips-set/openMouth.png");
      $("#therapy6").slideToggle("slow");
      $("#mouth2 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy2").slideUp("slow");
      $("#mouth3 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy3").slideUp("slow");
      $("#mouth1 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy1").slideUp("slow");
      $("#mouth5 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy5").slideUp("slow");
      $("#mouth4 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy4").slideUp("slow");
      $("#mouth7 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy7").slideUp("slow");
    }
  });
  $("#mouth7").click(function () {
    if (
      $("#mouth7 img").attr("src") ==
      "pictures/beautiful-lips-set/openMouth.png"
    ) {
      $("#mouth7 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy7").slideToggle("slow");
    } else {
      $("#mouth7 img").attr("src", "pictures/beautiful-lips-set/openMouth.png");
      $("#therapy7").slideToggle("slow");
      $("#mouth2 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy2").slideUp("slow");
      $("#mouth3 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy3").slideUp("slow");
      $("#mouth1 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy1").slideUp("slow");
      $("#mouth5 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy5").slideUp("slow");
      $("#mouth6 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy6").slideUp("slow");
      $("#mouth4 img").attr(
        "src",
        "pictures/beautiful-lips-set/closedMouth.png"
      );
      $("#therapy4").slideUp("slow");
    }
  });
  var i = 1;
  var db = 4;
  $("#galeria").click(function () {
    i = 1;
    $(".activekep").attr("src", "pictures/foglalkozas" + i + ".jpg");
    $(".lebego").css("display", "block");
    $(".black_overlay").css("display", "block");
    $(".szamlalo").text(i + "/" + db);
    $("footer").hide();
  });
  $(".close").click(function () {
    $(".lebego").css("display", "none");
    $(".black_overlay").css("display", "none");
    $("footer").show();
  });

  $(".next").click(function () {
    if (i < db) {
      i += 1;
      $(".activekep").attr("src", "pictures/foglalkozas" + i + ".JPG");
      $(".szamlalo").text(i + "/" + db);
    }
  });
  $(".prev").click(function () {
    if (i > 1) {
      i -= 1;
      $(".activekep").attr("src", "pictures/foglalkozas" + i + ".JPG");
      $(".szamlalo").text(i + "/" + db);
    }
  });
  $(".close_cookies").click(function () {
    $(".cookies").fadeOut("slow");
  });
});
