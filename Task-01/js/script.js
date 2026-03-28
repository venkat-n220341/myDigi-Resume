// ===== PAGE LOAD MESSAGE =====
$(document).ready(function () {
    console.log("Digital Resume Loaded Successfully 🚀");
});


// ===== SMOOTH SCROLL =====
$("a.nav-link").click(function (e) {
    e.preventDefault();

    let target = $(this).attr("href");

    $("html, body").animate({
        scrollTop: $(target).offset().top - 50
    }, 800);
});


// ===== SIMPLE ALERT (BUTTON EXAMPLE) =====
function showMessage() {
    alert("Welcome to my Digital Resume!");
}


// ===== HOVER EFFECT LOG =====
$(".card").hover(
    function () {
        console.log("Hovering on card");
    }
);

// Close navbar on link click (mobile)
$(".nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
});

// ===== FORM VALIDATION =====
$("#contactForm").submit(function (e) {
    e.preventDefault();

    let name = $("#name");
    let email = $("#email");
    let password = $("#password");

    // Name validation
    if (name.val() === "") {
        name.addClass("is-invalid");
    } else {
        name.removeClass("is-invalid").addClass("is-valid");
    }

    // Email validation
    if (email.val() === "") {
        email.addClass("is-invalid");
    } else {
        email.removeClass("is-invalid").addClass("is-valid");
    }

    // Password validation
    if (password.val().length < 6) {
        password.addClass("is-invalid");
    } else {
        password.removeClass("is-invalid").addClass("is-valid");
    }
});

// Enable Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (el) {
    return new bootstrap.Tooltip(el);
});

// Enable Popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
popoverTriggerList.map(function (el) {
    return new bootstrap.Popover(el);
});

