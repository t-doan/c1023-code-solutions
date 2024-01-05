import { useState } from 'react';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  let error = '';
  if (password.length === 0) {
    error = 'Password required';
  } else if (password.length < 8) {
    error = 'Password too short';
  } else if (!/([A-Z])/.test(password)) {
    error = 'Password must have a capital letter';
  } else if (!/([0-9])/.test(password)) {
    error = 'Password must include a digit';
  } else if (!/[!@#$%^&*()]/.test(password)) {
    error =
      'Password must have a special character !, @, #, $, %, ^, &, *, (, or )';
  }
  console.log(password);

  return (
    <div className="input-group m-5">
      <label>
        Password:
        <input
          type="password"
          className={`form-control ${!error ? 'is-valid' : 'is-invalid'}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="invalid-tooltip">{error}</div>
      </label>
    </div>
  );
}
