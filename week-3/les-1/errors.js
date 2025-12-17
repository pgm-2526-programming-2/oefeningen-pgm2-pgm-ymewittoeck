// throw "Fout!";

const message = new Error("er ging iets mis!")
// throw message

try {
    console.log("We voeren code uit!")

    throw message
} catch (error) {
    console.log('Hier geraken we wanneer iets mis gaat!')
}