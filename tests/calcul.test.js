const addition = require('../src/calcul.js');

test('additionne 1 + 2 pour égaler 3', () => {
    expect(addition(1, 2)).toBe(3);
});

test('Doit échouer si on donne une chaine de caractère', () => {
    expect(() => addition(1, "2")).toThrow("Les arguments doivent être des nombres");
});