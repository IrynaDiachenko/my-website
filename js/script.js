const prices = {
  "landing-page": {
    pm: 700,
    design: 600,
    developer: 1200,
    qa: 500,
  },
  "online-store": {
    pm: 1200,
    design: 900,
    developer: 2500,
    qa: 800,
  },
  "web-application": {
    pm: 2000,
    design: 1100,
    developer: 3000,
    qa: 1000,
  },
  "mobile-application": {
    pm: 3000,
    design: 1500,
    developer: 4000,
    qa: 1300,
  },
};

function getFormValues() {
  const websiteTipeElement = document.querySelector("#project-tipe");

  const pmEl = document.querySelector("#project-magement");
  const designEl = document.querySelector("#design");
  const pmEl = document.querySelector("#development");
  const designEl = document.querySelector("#qa");

  console.log(websiteTipeElement.value);

  console.log(pmEl.cheked);
  console.log(designEl.cheked);
  console.log(developmentEl.cheke);
  console.log(qaEl.cheked);

  return {
    websiteType: websiteTipeElement.value,
    pm: pmEl.checked,
    design: designEl.checked,
    developer: developmentEl.checked,
    qa: qaEl.checked,
  };
}

function calculateWork() {
  const values = getFormValues();
  let totalPrice = 0;

  const workTypes = prices[values.websiteType];

  if (values.pm) {
    totalPrice = workTypes.pm;
  }

  if (values.design) {
    totalPrice = totalPrice + workTypes.design;
  }
  if (values.developer) {
    totalPrice = totalPrice + workTypes.developer;
  }

  if (values.qa) {
    totalPrice = totalPrice + workTypes.qa;
  }
  El = document.querySelector("#total-price");
  totalPriceEl.rextContent = totalPrice;

  console.log(workTypes);
}

getFormValues();

const formEl = document.querySelector("#project-price-form");
const emailModal = document.querySelector("#modal-email");
const successModal = document.querySelector("#success-modal");
// console.log(emailModal);

formEl.addEventListener("change", calculateWork);

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  emailModal.classList.add('modal-active';)
});

const closeButtons = document.querySelectorAll('.modal-close-btn');

// console.log(closeButtons);
// formEl.addEventListener("change", getFormValues);
closeButtons.forEach( function(closeButton){
closeButton.addEventListener('click', function(){
emailModal.classList.remove('modal-active');
successModal.classList.remove('modal-active');
});
});

const modalEmailContainer = document.querySelector('#modal-email-container');

modalEmailContainer.addEventListener('submit', function(event){
  event.preventDefault();

  const userEmailInput = document.querySelector('#user-email');

  if (userEmailInput.value) {

  emailModal.classList.remove('modal-active');
  successModal.classList.add('modal-active');
}

const inputContainer = document.querySelector('#email-input-container');

inputContainer.classList.add('email-input-container-error')
});