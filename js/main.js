funny.addEventListener('click', (e) => {
  e.preventDefault()
  let arr = ['codewithharry', 'games', 'admin', 'password', 'codewithharry', 'enterpassword', 'helloworld1', 'hackerplease', 'hackme', 'codewithharry', 'invalidpassword', 'ucanthackme', 'subscribe krdo bhai ko', 'subscribe krdo bhai ko', 'subscribe krdo bhai ko']
  let a = arr[Math.floor(Math.random(arr) * arr.length)]
  console.log(a)

  show.value = a

})

weak.addEventListener('click', (e) => {
  e.preventDefault()
  let a = Math.floor(Math.random() * 10000000000) + 1111111111
  show.value = a
})

strong.addEventListener('click', (e) => {
  e.preventDefault();
  let result = '';
  let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
  let charactersLength = char.length;
  for (let i = 0; i < 10; i++) {
    result += char.charAt(Math.floor(Math.random() * charactersLength));
  }
  show.value = result

})




