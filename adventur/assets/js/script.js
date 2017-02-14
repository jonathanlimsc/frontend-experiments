function setCarouselInterval(time){
  $('.carousel').carousel({
    interval: time
  })
}

function validateEmail(emailSelector){
  var fieldVal = $(emailSelector).val();
  var valid = false;
  if (fieldVal.length > 0){
    var firstSplit = fieldVal.split('@');
    if(firstSplit.length === 2){
      var secondSplit = firstSplit[1].split('.');
      if(secondSplit.length === 2){
        valid = true;
      }
    }
  }

  return valid;
}

function validatePassword(passwordSelector, password2Selector){
  var pwd = $(passwordSelector).val();
  var pwd2 = $(password2Selector).val();
  if(pwd.length >= 8 && pwd === pwd2){
    return true;
  }
  else {
    return false;
  }
}

function validateUsername(usernameSelector){
  var username = $(usernameSelector).val();
  if(username.length >= 6){
    return true;
  }
  else {
    return false;
  }
}

function showModal(modalId, message){
    var options = {
      keyboard: true,
      show: true
    }
    $(modalId).modal(options);
    targetBody = modalId + " .modal-body-text";
    $(targetBody).html('<p>' + message + '</p>');
}

function showWarning(message, timeShown=3000){
  var options = {
    duration: 400,
    complete: setTimeout(function(){$('#problem-alert').slideToggle();}, timeShown)
  }
  message = "<i class='fa fa-exclamation-circle'></i> " + message;
  $('#problem-alert').slideToggle(options);
  $('#problem-alert .alert-body').html(message);
}

function processEmailSubmission(){
  var valid = validateEmail("#email-field");
  if(valid){
    showModal('#email-success-modal', 'You are now subscribed to Advent.ur! Check your email for upcoming events :)');
    $('#email-field').val('');
  } else {
    showWarning("Email is invalid.");
  }
}

function processSignUpFormSubmission(){
  var validUser = validateUsername('#username');
  var validEmail = validateEmail('#email');
  var validPassword = validatePassword('#password', '#password2');
  var usernameGroup = $('#username-form-group');
  var emailGroup = $('#email-form-group');
  var passwordGroup = $('#password-form-group');
  var password2Group = $('#password2-form-group');

  if(validUser){
    usernameGroup.removeClass('has-error');
    usernameGroup.addClass('has-success');
  } else {
    usernameGroup.removeClass('has-success');
    usernameGroup.addClass('has-error');
  }
  if(validEmail){
    emailGroup.removeClass('has-error');
    emailGroup.addClass('has-success');
  } else {
    emailGroup.removeClass('has-success');
    emailGroup.addClass('has-error');
  }
  if(validPassword){
    passwordGroup.removeClass('has-error');
    password2Group.removeClass('has-error');
    passwordGroup.addClass('has-success');
    password2Group.addClass('has-success');
  } else {
    passwordGroup.removeClass('has-success');
    password2Group.removeClass('has-success');
    passwordGroup.addClass('has-error');
    password2Group.addClass('has-error');
  }
  if(validUser && validEmail && validPassword){
    showModal('#form-success-modal', "You're all ready to go! Check your email for the confirmation link and log in!");
    $('#username').val('');
    $('#email').val('');
    $('#password').val('');
    $('#password2').val('');
  }
}

function registerEventHandlers(){
  // Email address validation
  $("#email-subscribe-btn").click(function(){processEmailSubmission();});
  $('#signup-submit').click(function(e){
    e.preventDefault();
    processSignUpFormSubmission();
  });

  // Scroll to anchor link
  $('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
}

$(document).ready(function(){
  setCarouselInterval(2000);
  registerEventHandlers();
});
