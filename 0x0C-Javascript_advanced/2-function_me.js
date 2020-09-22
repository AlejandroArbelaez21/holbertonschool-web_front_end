function welcomeMessage(fullName) {

    function muestraNombre() {
      alert( "Welcome" + " " + fullName );
    }
    return muestraNombre;
  }

const guillaume = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");
