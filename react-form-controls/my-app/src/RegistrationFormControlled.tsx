import { useState, type FormEvent } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    console.log('controlled:', { username, password });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button>Sign Up</button>
    </form>
  );
}
