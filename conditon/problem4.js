// Given stored username and password and input username and password, Print if the user can login or not.
let data_username='ashutosh';
let data_pass='dubey';
let login_username='ashutosh';
let login_pass='dubey';
if(data_username==login_username)
{
  if(data_pass==login_pass)
  {
    console.log('you can login')
  }
  else
  {
    console.log('password is wrong')
  }
}
else{
  console.log('username is wrong');
}