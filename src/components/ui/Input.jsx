// Reusable Input component
// TODO: Add label, error message display, styling
function Input({ name, type = 'text', placeholder, value, onChange }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
export default Input;
