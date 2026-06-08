// Reusable Button component
// TODO: Add variants (primary, secondary, danger), sizes, loading state
function Button({ children, onClick, type = 'button', disabled }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
export default Button;
