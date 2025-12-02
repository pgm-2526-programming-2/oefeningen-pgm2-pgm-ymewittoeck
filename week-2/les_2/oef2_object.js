const persoon = {
  naam: "Anna",
  leeftijd: 25,
  adres: {
    straat: "Hoofdstraat",
    nummer: 123,
    stad: "Stadsville"
  }
};

console.log(persoon.adres.nummer);

persoon.telefoon = 12654542;

const extraInfo = {
  hobby: "schilderen",
  favorieteKleur: "blauw",
  lievelingseten: "pizza"
};

persoon.extraInfo = extraInfo;

console.log(persoon)