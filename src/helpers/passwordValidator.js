export function passwordValidator(password, password2) {
  if (!password) return "Password can't be empty."
  if (password.length < 5) return 'Password must be at least 5 characters long.'
  if (password != password2) return 'Passwords does not match.'
  return ''
}