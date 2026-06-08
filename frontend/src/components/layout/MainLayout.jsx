import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// TODO: Wrap with global container, add padding/max-width as needed
function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '2rem' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default MainLayout;
