function convPrices(c) {
  price = document.getElementById("price").value;
  amt = document.getElementById("unitamt").value;
  units = document.getElementById("units").value;

  var unitArray1 = units.split(",");
  perUnit1 = unitArray1[0];
  unitName1 = unitArray1[1];

  var resultPpu1 = document.getElementById("ppu1");
  var resultPer1 = document.getElementById("per1");
  resultPpu1.innerHTML = "$" + eval(price / amt * perUnit1).toFixed(2);
  resultPer1.innerHTML = 100 + " " + unitName1;

  price2 = document.getElementById("price2").value;
  amt2 = document.getElementById("unitamt2").value;
  units2 = document.getElementById("units2").value;

  var unitArray2 = units2.split(",");
  perUnit2 = unitArray2[0];
  unitName2 = unitArray2[1];

  var resultPpu2 = document.getElementById("ppu2");
  var resultPer2 = document.getElementById("per2");
  resultPpu2.innerHTML = "$" + eval(price2 / amt2 * perUnit2).toFixed(2);
  resultPer2.innerHTML = 100 + " " + unitName2;
  return true;
}
