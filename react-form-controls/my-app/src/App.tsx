import './App.css';
import { RegistrationFormControlled } from './RegistrationFormControlled';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';

function App() {
  return (
    <>
      <span>Uncontrolled</span>
      <RegistrationFormUncontrolled />
      <div>
        <span>Controlled</span>
        <RegistrationFormControlled />
      </div>
    </>
  );
}

export default App;
