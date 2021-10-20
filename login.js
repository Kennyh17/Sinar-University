const email = document.getElementById('email')
const password = document.getElementById('password')



form.addEventListener('submit', (e) =>  {
    let messages = []
    if (email.value === '' || email.value == null){
        alert('Harap masukkan Email!')
        e.preventDefault
    }

    if(email.value.indexOf('@')<=0){
        alert('Email harus berisi @')
        e.preventDefault
      }

    if (password.value === '' || password.value == null){
        alert('Harap masukkan password!')
        e.preventDefault() 
     }
 
     if(password.value.length <8 || password.value.length >10 || !/[A-Z]/.test(password.value) || !/[0-9]/.test(password.value) || !/[a-z]/.test(password.value)) {
        alert('password harus memiliki huruf besar, huruf kecil, serta lebih panjang dari 5 karakter dan lebih pendek dari 10 karakter')
        e.preventDefault() 
     }
 

    


}) 