Matric Number: A0110839H

Homepage file: main.html
Sign Up page file: signup.html
Images are in assets/images
Plugins such as Bootstrap, Jquery and FontAwesome are in assets/plugins
Css files are in assets/stylesheets. Files are main.css and signup.css

+ The website architecture is as follows:
    1. Main page has 5 sections
      a. Navbar
      b. Carousel
      c. About
      d. Team
      e. Subscribe to newsletter
      f. Modal (In main, id="email-success-modal". In signup, id="form-success-modal")
      g. Alert

    b-e can all be accessed by the navbar via anchor links. f and g are hidden from view until on appropriate event.

    2. Sign Up page
      - File is signup.html
      - This page can be accessed via the navbar by clicking on 'Sign Up'

+ Form validation:
    1. On the main page, form validation is done for the email address in the subscription form.
    If email address is invalid (not in the format of something@something.something) then a red dialog box will
    float down from the top of the screen for about 3 seconds before disappearing, to notify user of the error.
    If the email address is valid, a modal box will appear informing user of success.

    2. On the signup page, form validation is done for the fields:
      a. Username
        - Checks for equal to or more than 6 characters.
      b. Email
        - Same checks as the previous email validation.
      c. Password
        - Checks for equal to or more than 8 characters.
        - Checks for equality between password and retyped password

      - On failure upon submission, the respective fields will have a red outline to notify user of the error.
      - On validity of all fields, a modal will appear informing user of success.


+ References:
    1. Jquery docs
    2. Bootstrap docs
    3. Stackoverflow
