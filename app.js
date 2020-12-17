const pembayaran = document.querySelector('.container-pembayaran');

pembayaran.addEventListener('click', (e)=> {
    const target = e.target;
    const klik = target.parentElement.nextElementSibling;
    if(klik.style.display === "block") {
        klik.style.display = "none";
    } else {
        klik.style.display = "block";
    }
    target.nextElementSibling.nextElementSibling.classList.toggle('anim1');
});

const submit = document.querySelector('.btn-submit');

submit.addEventListener('click', ()=> {
    alert('Pendaftaran Berhasil. Info lebih lanjut akan dikirim lewat email');
    window.location.href = "https://budiarta512.github.io/form-pendaftaran/";
});