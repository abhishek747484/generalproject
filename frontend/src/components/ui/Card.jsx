// Reusable Card wrapper
// TODO: Add variants, shadows, padding options
function Card({ children }) {
  return (
    <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
      {children}
    </div>
  );
}
export default Card;
