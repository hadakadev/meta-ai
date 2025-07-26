/* global ScrollReveal */
/* global $ */
window.onload = function () {
  // ##############################################################
  // Countdown
  // ##############################################################
  // la date cible du décompte (année, mois, jour, heure, minute, seconde)
  var target_date = new Date(Date.UTC(2023, 0, 12, 23, 0, 0)).getTime();

  // obtient la référence aux éléments HTML où le décompte doit être affiché
  var daysEl = $(".js-d");
  var hoursEl = $(".js-h");
  var minutesEl = $(".js-m");
  var secondsEl = $(".js-s");

  var countdown = function () {
    // obtient la date et l'heure actuelles
    var now = new Date();
    var current_date = Date.UTC(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours(),
      now.getMinutes(),
      now.getSeconds(),
      now.getMilliseconds()
    );

    // trouve la différence entre la date actuelle et la date cible
    var difference = target_date - current_date;

    // calcule les jours, heures, minutes et secondes restants
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // formate les chiffres avec un préfixe "0" si nécessaire
    days = ("0" + days).slice(-2);
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // affiche le résultat dans les éléments HTML
    daysEl.html(days);
    hoursEl.html(hours);
    minutesEl.html(minutes);
    secondsEl.html(seconds);
  };
  countdown();
  setInterval(countdown, 1000);

  // ##############################################################
  // FAQ
  // ##############################################################
  $(".answer").hide();
  $(".item-content").click(function () {
    $(this).children(".answer").slideToggle();
  });

  // ##############################################################
  // Menu Toggle
  // ##############################################################
  $(".btn-burger").click(function () {
    $(this).toggleClass("open");
    $(".menu").toggleClass("open");
  });

  // ##############################################################
  // DropDown Toggle
  // ##############################################################
  $(".dropdown-toggle").click(function () {
    $(this).parent().toggleClass("open");
  });

  // ##############################################################
  // Narrative pagination Toggle
  // ##############################################################
  $(".narrative-pagination-page").click(function () {
    $(".narrative-pagination-page").removeClass("active");
    $(this).toggleClass("active");
  });

  // ##############################################################
  // Scroll Reveal
  // ##############################################################
  window.runScrollReveal = () => {
    ScrollReveal().reveal(".load-hidden", { distance: "-30px", interval: 50 });

    ScrollReveal().reveal(".load-hidden-bigBtn", {
      distance: "250px",
      origin: "right",
      interval: 50,
    });

    ScrollReveal().reveal(".load-hidden-header-text", {
      opacity: "0",
      duration: 4000,
    });

    ScrollReveal().reveal(".load-hidden-constro", {
      opacity: "0",
      duration: 500,
    });
  };

  // ##############################################################
  // Reveal Title matrix
  // ##############################################################
  var Messenger = function (el) {
    "use strict";
    var m = this;

    m.init = function () {
      m.codeletters = "&#*+%?£@§$";
      m.message = 0;
      m.current_length = 0;
      m.fadeBuffer = false;
      m.messages = [$(el).html()];

      setTimeout(m.animateIn, 100);
    };

    m.generateRandomString = function (length) {
      var random_text = "";
      while (random_text.length < length) {
        random_text += m.codeletters.charAt(
          Math.floor(Math.random() * m.codeletters.length)
        );
      }

      return random_text;
    };

    m.animateIn = function () {
      if (m.current_length < m.messages[m.message].length) {
        m.current_length = m.current_length + 2;
        if (m.current_length > m.messages[m.message].length) {
          m.current_length = m.messages[m.message].length;
        }

        var message = m.generateRandomString(m.current_length);
        $(el).html(message);

        setTimeout(m.animateIn, 20);
      } else {
        setTimeout(m.animateFadeBuffer, 20);
      }
    };

    m.animateFadeBuffer = function () {
      if (m.fadeBuffer === false) {
        m.fadeBuffer = [];
        for (var i = 0; i < m.messages[m.message].length; i++) {
          m.fadeBuffer.push({
            c: Math.floor(Math.random() * 12) + 1,
            l: m.messages[m.message].charAt(i),
          });
        }
      }

      var do_cycles = false;
      var message = "";

      for (var i = 0; i < m.fadeBuffer.length; i++) {
        var fader = m.fadeBuffer[i];
        if (fader.c > 0) {
          do_cycles = true;
          fader.c--;
          message += m.codeletters.charAt(
            Math.floor(Math.random() * m.codeletters.length)
          );
        } else {
          message += fader.l;
        }
      }

      $(el).html(message);

      if (do_cycles === true) {
        setTimeout(m.animateFadeBuffer, 50);
      } else {
        setTimeout(m.cycleText, 2000);
      }
    };

    m.init();
  };

  // console.clear();

  let loadedTitle = [];
  window.addEventListener("scroll", function () {
    const h2 = document.querySelectorAll("h2");
    for (const title of [...h2]) {
      const position = title.getBoundingClientRect();

      // checking for partial visibility
      if (
        position.top < window.innerHeight &&
        position.bottom >= 0 &&
        !loadedTitle.includes(title.id)
      ) {
        if (!title.id) {
          continue;
        }
        new Messenger(`#${title.id}`);
        loadedTitle.push(title.id);
      }
    }
  });
};
