function getCarPriceWithDiscount(carPrice, day) {
   if (day > 29 && day < 60) return carPrice * 0.95;
   if (day > 59) return carPrice * 0.9;
   return carPrice;
}

function getDiscountDescription(day) {
   if (day > 29 && day < 60) return "-5% rabatu,";
   if (day > 59) return "-10% rabatu";
   return "";
}
function getMissingDays(MissingDays, MissingDays2x) {
   if(MissingDays > 0) return `${MissingDays} Dni brakuję do -5% rabatu`;
   if(MissingDays2x > 0) return `${MissingDays2x} Dni brakuję do -10% rabatu`;
   return ""; 
}

function cal() {
   const price = [1300, 550, 3500, 1650, 1150, 1250, 5000, 2650];
   const option = document.getElementById("option").value;
   const endDate = document.getElementById("endDate").value;
   const startDate = document.getElementById("startDate").value;
   const startDate2 = new Date(startDate);
   const endDate2 = new Date(endDate);
   const numOfSecondsInDay = 3600 * 24 * 1000;
   const day = (endDate2 - startDate2) / numOfSecondsInDay;
   const MissingDays = 30 - day;
   const MissingDays2x = 60 - day;
   
   if (!endDate || !startDate || day < 0) {
       document.getElementById("result").textContent = "Zła data lub brak danych!";
       return;
   }

   const carPrice = day * price[option];
   const finalCarPrice = getCarPriceWithDiscount(carPrice, day);
   const discountDescription  = getDiscountDescription(day);
   const descriptionDays = getMissingDays(MissingDays, MissingDays2x);
   document.getElementById("result").textContent = `${finalCarPrice} PLN, ${discountDescription} ${descriptionDays}`;
}