function duplicateCount(text) {
    // code here
    let count = {};
    Array.from(text.toLowerCase()).forEach(function (char) { count[char] = (count[char] || 0) + 1; });
    const multipleChars = Object.entries(count).filter(([key, value]) => value > 1);
    return multipleChars.length
}

/*
    Zählen Sie, wie viele verschiedene Buchstaben mehrmals vorkommen.
*/

var assert = require('assert');
describe('Doppelte', function () {
    it('Beispiele', function () {
        assert.equal(duplicateCount(""), 0);
        assert.equal(duplicateCount("sommerfrisch"), 3);
        assert.equal(duplicateCount("bergtauglich"), 1);
    });
});
/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/