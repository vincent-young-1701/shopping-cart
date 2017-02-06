Stripe.setPublishableKey('pk_test_zQeXULd0NVyBRDKxDJ6SOG0R');

$(function() {
  var $form = $('#payment-form');
  $form.submit(function(event) {
    $form.find('.payment-errors').addClass("hidden").text("");
    $form.find('.submit').prop('disabled', true);
    Stripe.card.createToken($form, stripeResponseHandler);
    return false;
  });
});

function stripeResponseHandler(status, response) {
  // Grab the form:
  var $form = $('#payment-form');

  if (response.error) { // Problem!
    console.log("hhi!");
    // Show the errors on the form:
    $form.find('.payment-errors').removeClass("hidden").text(response.error.message);
    $form.find('.submit').prop('disabled', false); // Re-enable submission

  } else { // Token was created!
    // Get the token ID:
    var token = response.id;

    // Insert the token ID into the form so it gets submitted to the server:
    $form.append($('<input type="hidden" name="stripeToken">').val(token));

    // Submit the form:
    $form.get(0).submit();
  }
};
