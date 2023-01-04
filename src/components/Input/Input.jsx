import s from './Input.module.css'

export function Input({ value, setValue }) {
  
  return (
    <>
      <input
        placeholder="Placeholder"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}