function addition(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Les arguments doivent être des nombres");
    }
    return a + b;
}

module.exports = addition;