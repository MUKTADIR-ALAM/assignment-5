document.getElementById('noakhali_btn').addEventListener('click', ()=>{
    const donateAmtNoa = getInputFeidVlaueById('noakhali_input');
    const noaTotalAmmout = getTextFeildVlaueById('noa-total-amount');
    const waletMoney = getTextFeildVlaueById('walet-money');
     if(donateAmtNoa <=0 || typeof donateAmtNoa !== 'number' || waletMoney < donateAmtNoa){
      alert('Invali donation ammount');
     }else{
        document.getElementById('noa-total-amount').innerText = noaTotalAmmout + donateAmtNoa;
        document.getElementById('walet-money').innerText = waletMoney - donateAmtNoa;
     }
})