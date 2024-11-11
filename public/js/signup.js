const signUP = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/signup/user',
      data: {
        email,
        password,
        passwordConfirm,
      },
    });
    console.log(email, password);

    window.location.assign('/allAcademy');
  } catch (err) {
    console.log(err.message);
  }
};
document.querySelector('.formsignUP').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('namesignUp').value;
  const email = document.getElementById('emailsignUP').value;
  const password = document.getElementById('passwordsignUP').value;
  const passwordConfirm = document.getElementById('passwordConfirm').value;
  signUP(email, password, passwordConfirm, name);
});
