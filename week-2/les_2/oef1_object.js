const auto = {
  merk: "Toyota",
  model: "Camry",
  jaar: 2022,
  kleur: "blauw"
};

auto.kleur = "rood";
auto.brandstof = "benzine";

delete auto.jaar;

function getMerk(auto) {
  console.log(auto.merk);
}

getMerk(auto);
console.log(auto)