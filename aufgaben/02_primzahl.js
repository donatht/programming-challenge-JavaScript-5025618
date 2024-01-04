function isprime(num) {
    // code here
    if (num<=1){
        return false
    }else {
        for (let i = 2; i < num; i++){
            if (num%i==0){
                return false
            }
        }
        return true
    }

}

/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/
/*
    Überprüfen Sie, ob eine Zahl prim ist.
    Per Definition sind Primzahlen immer größer als 1
    und nur durch 1 und sich selbst restlos teilbar
*/
var assert = require('assert');
describe('Primzahlen', function () {
    it('Beispiele', function () {
        assert.equal(isprime(0), false);
        assert.equal(isprime(1), false);
        assert.equal(isprime(2), true);
        assert.equal(isprime(12), false);
        assert.equal(isprime(73), true);
        assert.equal(isprime(5099), true);
        assert.equal(isprime(999907), true);
        assert.equal(isprime(800000107), true);

    });
});



