const target = Date.now() + 48 * 60 * 60 * 1000;
function updateClock(){const left=Math.max(0,target-Date.now());const h=Math.floor(left/36e5);const m=Math.floor(left%36e5/6e4);const s=Math.floor(left%6e4/1e3);document.querySelector('#hours').textContent=String(h).padStart(2,'0');document.querySelector('#minutes').textContent=String(m).padStart(2,'0');document.querySelector('#seconds').textContent=String(s).padStart(2,'0')}
updateClock();setInterval(updateClock,1000);
document.querySelector('form').addEventListener('submit',e=>{e.preventDefault();e.currentTarget.querySelector('p').textContent='You’re on the list for the next quiet morning.';e.currentTarget.reset()});
