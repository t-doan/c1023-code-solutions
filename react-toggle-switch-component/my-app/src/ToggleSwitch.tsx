import { useState } from 'react';

export function ToggleSwitch() {
  const [isOn, setOn] = useState(false);

  function handleToggle() {
    setOn(!isOn);
  }

  return (
    <div>
      <div
        className={`toggle-switch ${isOn ? 'on' : 'off'} switch`}
        onClick={handleToggle}>
        <input
          type="button"
          className={`toggle-switch ${isOn ? 'on' : 'off'} slider`}
          onClick={handleToggle}
        />
      </div>
      {isOn ? 'ON' : 'OFF'}
    </div>
  );
}
