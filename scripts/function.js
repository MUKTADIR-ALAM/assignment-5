function getInputFeidVlaueById (id){
    return parseFloat(document.getElementById(id).value);
}

function getTextFeildVlaueById(id){
    return parseFloat(document.getElementById(id).innerText);
   
}


function donation (sectorInputFeild,sectorTotalAmmoutId) {
        const donateAmt = getInputFeidVlaueById(sectorInputFeild);
        const sectorTotalAmmout = getTextFeildVlaueById(sectorTotalAmmoutId);
        const waletMoney = getTextFeildVlaueById('walet-money');
         if(donateAmt <= 0 || typeof donateAmt !== 'number' || waletMoney < donateAmt || isNaN(donateAmt)){
             alert('Invali donation ammount');
            }else{
             document.getElementById(sectorTotalAmmoutId).innerText = sectorTotalAmmout + donateAmt;
             document.getElementById('walet-money').innerText = waletMoney - donateAmt;
             my_modal_5.showModal();
    
             document.getElementById('history').innerHTML += `<div class="border border-slate-200 p-8 rounded-xl">
              <h1 class="font-semibold text-sm lg:font-bold lg:text-xl">${donateAmt} Taka is Donated for famine-2024 at ${sectorInputFeild}, Bangladesh</h1>
              <p class="font-light text-sm lg:font-light lg:text-base">Date : ${new Date()}</p>
            </div>`
         }
    }