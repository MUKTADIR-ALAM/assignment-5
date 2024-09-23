// document.getElementById('noakhali_btn').addEventListener('click', ()=>{
//     const donateAmtNoa = getInputFeidVlaueById('noakhali_input');
//     const noaTotalAmmout = getTextFeildVlaueById('noa-total-amount');
//     const waletMoney = getTextFeildVlaueById('walet-money');
//      if(donateAmtNoa <= 0 || typeof donateAmtNoa !== 'number' || waletMoney < donateAmtNoa || isNaN(donateAmtNoa)){
//          alert('Invali donation ammount');
//         }else{
//          document.getElementById('noa-total-amount').innerText = noaTotalAmmout + donateAmtNoa;
//          document.getElementById('walet-money').innerText = waletMoney - donateAmtNoa;
//          my_modal_5.showModal();

//          document.getElementById('history').innerHTML += `<div class="border border-slate-200 p-8 rounded-xl">
//           <h1 class="font-bold text-xl">${donateAmtNoa} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
//           <p class="font-light text-base">Date : ${new Date()}</p>
//         </div>`
//      }
// })

document.getElementById('noakhali-btn').addEventListener('click', ()=>{
    donation('noakhali-flood','noa-total-amount');
})
document.getElementById('feni-btn').addEventListener('click', ()=>{
    donation('feni-flood','feni-total-amount');
})
document.getElementById('quota-btn').addEventListener('click', ()=>{
    donation('quota-movement','quota-total-amount');
})