const nama = document.getElementById('nama')
const alamat = document.getElementById('alamat')
const dob = document.getElementById('dob')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')


form.addEventListener('submit', (e) =>  {
    
    let messages = []

    if (nama.value === '' || nama.value == null){
        alert('Harap masukkan Nama!');
        e.preventDefault() 
       }

       if (alamat.value === '' || alamat.value == null){
        alert('Harap masukkan Alamat!');
        e.preventDefault() 
           
       }

       if (dob.value === '' || dob.value == null){
        alert('Harap masukkan Tanggal Lahir!');
        e.preventDefault() 
       }

    if (email.value === '' || email.value == null){
     alert('Harap masukkan Email!');
     e.preventDefault() 
    }

    if(email.value.indexOf('@')<=0){
    alert('Email harus berisi @')
  }


    if (phone.value === '' || phone.value == null){
        alert('Harap masukkan Nomor Telepon!');
        e.preventDefault() 
       }

    if (password.value === '' || password.value == null){
       alert('Harap masukkan password!')
       e.preventDefault() 
    }

    if(password.value.length <8 || password.value.length >10 || !/[A-Z]/.test(password.value) || !/[0-9]/.test(password.value) || !/[a-z]/.test(password.value)) {
        alert('Password harus memiliki huruf besar, huruf kecil, serta lebih panjang dari 5 karakter dan lebih pendek dari 10 karakter')
        e.preventDefault() 
     }
 

}) 