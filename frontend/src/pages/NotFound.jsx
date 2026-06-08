import { Link } from 'react-router-dom';

// TODO: Style this page
function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>404 — Page Not Found</h1>
      <Link to="/">Go back home</Link>
    </div>
  );
}
export default NotFound;
