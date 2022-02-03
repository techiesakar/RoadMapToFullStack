billValue = [125, 155, 44];

function calcTip(billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
}

for (i = 0; i <= 2; i++) {
  console.log(
    `Bill Value : $${billValue[i]}\nTips Amount : $${calcTip(
      billValue[i]
    )}\nFinal Bill : ${billValue[i] + calcTip(billValue[i])}`
  );
}
