const valid = (name, email, password, cf_password) => {
  if (!name || !email || !password) {
    return "Please add all fields";
  }
  if (!validateEmail(email)) return "Invalid emails";

  if (password.length < 6) return "パスワードは６文字以上で設定してください";

  if(password !== cf_password) return ""
};

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export default valid;