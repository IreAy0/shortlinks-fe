import { Outlet } from 'react-router-dom';
import HeaderMain from '../components/blocks/header-01/HeaderMain.tsx'
import Footer from '@/components/blocks/footer.tsx';

function GeneralLayout() {
  return (
    <>
      <HeaderMain />

      <main className=''>
        { <Outlet />}
      </main>
      <Footer />

    </>
  )
}

export default GeneralLayout;