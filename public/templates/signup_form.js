$(() => {

  const $signUpForm = $(`
  <form id="sign-up-form" class="sign-up-form">
        <p>Sign Up</p>

        <div class="sign-up-form__field-wrapper">
            <input type="text" name="name" placeholder="Name">
          </div>

        <div class="sign-up-form__field-wrapper">
          <input type="email" name="email" placeholder="Email">
        </div>

        <div class="sign-up-form__field-wrapper">
            <input type="password" name="password" placeholder="Password">
        </div>

        <div class="sign-up-form__field-wrapper">
          <input type="tel" name="phone-number" placeholder="Phone Number" pattern="[0-9]{10}" required>
          <span>Format: 6471239876</span>
        </div>

        <div class="sign-up-form__field-wrapper">
            <button>Sign Up</button>
            <a id="sign-up-form__cancel" href="#">Cancel</a>
        </div>
      </form>
  `);

  window.$signUpForm = $signUpForm;

  $signUpForm.on('submit', function(event) {
    event.preventDefault();

    const data = $(this).serialize();
    console.log(data);

    /* signUp(data)
      .then(getMyDetails)
      .then((json) => {
        header.update(json.user);
        views_manager.show('food_options');
      }); */
  });

  $('body').on('click', '#sign-up-form__cancel', function() {
    event.preventDefault();
    views_manager.show('food_options');
    let totalItemsInCart = 0;
    for (let item of JSON.parse(localStorage[`itemsIdArray`])) {
      if (localStorage[`item${item}Quantity`]) {
        totalItemsInCart += parseInt(localStorage[`item${item}Quantity`]);
      }
    }
    //let totalItemsInCart = parseInt(localStorage["item1Quantity"]) + parseInt(localStorage["item2Quantity"]) + parseInt(localStorage["item3Quantity"]);
    $("footer p").text(`items in cart: ${totalItemsInCart}`);
    $("footer").show();
    return false;
  });

});
