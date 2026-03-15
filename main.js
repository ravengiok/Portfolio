emailjs.init("dO0CKNMDKUTSkxuh-");

function toggleDetail(e) {
  const target = $(e.target);

  if ($(target).hasClass("active")) {
    $(target).html("More Info").removeClass("active");
  } else {
    $(target).html("Less Info").addClass("active");
  }

  const item = $(target).parents(".about-exp-item");
  const detail = $(item).children(".about-exp-item-detail");
  $(detail).slideToggle();
}

function onFormSubmit(e) {
  e.preventDefault();

  const email = $("#inp_email");
  const subject = $("#inp_subject");
  const message = $("#inp_message");

  if (!$(email).val()) {
    alert("Email is required");
    return;
  } else if (!$(subject).val()) {
    alert("Subject is required");
    return;
  } else if (!$(message).val()) {
    alert("Message is required");
    return;
  }

  // Definisikan submitBtn dan templateParams dengan benar
  const submitBtn = $(".contact-form button[type='submit']");
  submitBtn.prop("disabled", true).text("Sending...");

  const templateParams = {
    from_email: $(email).val(),
    subject: $(subject).val(),
    message: $(message).val(),
  };

  emailjs
    .send("service_bsq2o1r", "template_y4nkk9h", templateParams)
    .then(() => {
      alert("Pesan berhasil dikirim! Terima kasih 😊");
      $(email).val("");
      $(subject).val("");
      $(message).val("");
    })
    .catch((error) => {
      console.error("Gagal kirim:", error);
      alert("Gagal mengirim pesan. Coba lagi ya!");
    })
    .finally(() => {
      submitBtn.prop("disabled", false).text("Submit");
    });
}
