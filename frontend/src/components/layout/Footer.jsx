// TODO: Add footer content, links, copyright
function Footer() {
  return (
    <footer style={{ padding: '1rem', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} MyApp</p>
    </footer>
  );
}
export default Footer;
