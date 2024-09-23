document.getElementById("history-btn").addEventListener('click', ()=>{
    document.getElementById("history").classList.remove('hidden');
    document.getElementById("donation").classList.add('hidden');
    // buttton toggle
    document.getElementById("history-btn").classList.remove('bg-white' ,'border', 'border-slate-400');
    document.getElementById("history-btn").classList.add('bg-btn_color');
    document.getElementById("donation-btn").classList.remove('bg-btn_color');
    document.getElementById("donation-btn").classList.add('bg-white' ,'border', 'border-slate-400');
})
document.getElementById("donation-btn").addEventListener('click', ()=>{
    document.getElementById("donation").classList.remove('hidden');
    document.getElementById("history").classList.add('hidden');
    // button toggle
    document.getElementById("donation-btn").classList.remove('bg-white' ,'border', 'border-slate-400');
    document.getElementById("donation-btn").classList.add('bg-btn_color');
    document.getElementById("history-btn").classList.remove('bg-btn_color');
    document.getElementById("history-btn").classList.add('bg-white' ,'border', 'border-slate-400');
})


document.getElementById('blog').addEventListener('click', ()=>{
    window.location.replace('./blog.html');
})