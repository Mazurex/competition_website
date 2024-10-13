// Array for smartphone prices based on type
const smartphonePrices = {
  Basic: 250,
  Standard: 450,
  Superior: 950,
};

// Array for setup option prices
const setupPrices = {
  option_a: 30,
  option_b: 50,
};

// VAT percentage
const vatRate = 0.2;

// Get elements
const form = document.getElementById("phone-calculator-form");
const smartphonesAmountOutput = document.getElementById(
  "smartphones_amount_output"
);
const smartphonePriceOutput = document.getElementById(
  "smartphone_price_output"
);
const setupCostOutput = document.getElementById("setup_cost_output");
const preVatCostOutput = document.getElementById("pre_vat_cost_output");
const vatCostOutput = document.getElementById("vat_cost_output");
const totalCostOutput = document.getElementById("total_cost_output");

const customerNameOutput = document.getElementById("customer_name_output");
const customerContactOutput = document.getElementById(
  "customer_contact_output"
);

// Calculate prices when form is submitted
form.addEventListener("submit", function (event) {
  // Prevents form from refreshing the page
  event.preventDefault();

  // Get values from form
  const companyName = document.getElementById("company_name").value;
  const companyContact = document.getElementById("company_contact").value;
  const quantity = parseInt(
    document.getElementById("smartphones_amount").value
  );
  const smartphoneType = document.getElementById("smartphone_type").value;
  const setupOption = document.getElementById("setup_option").value;

  // Calculate smartphone and setup costs
  const smartphoneCost = smartphonePrices[smartphoneType] * quantity;
  const setupCost = setupPrices[setupOption] * quantity;

  // Calculate total cost before VAT
  const preVatCost = smartphoneCost + setupCost;

  // Calculate VAT and total cost after VAT
  const vatCost = preVatCost * vatRate;
  const totalCost = preVatCost + vatCost;

  // Update the quotation details with the calculated values and form inputs
  customerNameOutput.textContent = companyName;
  customerContactOutput.textContent = companyContact;
  smartphonesAmountOutput.textContent = quantity;
  smartphonePriceOutput.textContent = `$${smartphoneCost.toFixed(2)}`;
  setupCostOutput.textContent = `$${setupCost.toFixed(2)}`;
  preVatCostOutput.textContent = `$${preVatCost.toFixed(2)}`;
  vatCostOutput.textContent = `$${vatCost.toFixed(2)}`;
  totalCostOutput.textContent = `$${totalCost.toFixed(2)}`;
});
