let selectedProducts = {};

function analyzeUser() {
  const weight = document.getElementById("weight").value;
  const goal = document.getElementById("goal").value;

  if (!weight) {
    alert("Please enter your weight");
    return;
  }

  const dashboard = document.getElementById("dashboard");
  const proteinNeed = document.getElementById("proteinNeed");
  const recommendation = document.getElementById("recommendation");

  let protein = 0;
  let suggest = "";

  if (goal === "muscle") {
    protein = weight * 2;
    suggest = "Whey Protein Isolate recommended for muscle growth.";
  } else if (goal === "fatloss") {
    protein = weight * 1.5;
    suggest = "Plant Protein recommended for fat loss.";
  } else {
    protein = weight * 1.2;
    suggest = "Balanced Protein Blend recommended.";
  }

  proteinNeed.innerHTML = "Daily Protein Need: " + protein + "g";
  recommendation.innerHTML = suggest;

  dashboard.classList.remove("hidden");
}

function toggleProduct(event, type) {
  const element = event.currentTarget;

  const prices = { whey: 500, plant: 400, casein: 450 };
  const proteins = { whey: 25, plant: 20, casein: 22 };

  if (selectedProducts[type]) {
    delete selectedProducts[type];
    element.classList.remove("selected");
  } else {
    selectedProducts[type] = true;
    element.classList.add("selected");
  }

  updateTotals();
}

function updateTotals() {
  let totalPrice = 0;
  let totalProtein = 0;

  const prices = { whey: 500, plant: 400, casein: 450 };
  const proteins = { whey: 25, plant: 20, casein: 22 };

  for (let item in selectedProducts) {
    totalPrice += prices[item];
    totalProtein += proteins[item];
  }

  document.getElementById("price").innerText = totalPrice;
  document.getElementById("protein").innerText = totalProtein;
}

function checkout() {
  if (Object.keys(selectedProducts).length === 0) {
    alert("Please select at least one product!");
  } else {
    alert("🎉 Order placed successfully!");
  }
}