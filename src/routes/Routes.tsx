import Home from '@/pages/Home';
import { Route, Routes as BaseRoutes } from "react-router-dom";
import GeneralLayout from '../layouts/generalLayout'
import Preview from '@/pages/Preview';
import AuthLayout from '@/layouts/authLayout';
import Login from '@/pages/login';
import Signup from '@/pages/signup';
import ProtectedRoute from '@/layouts/ProtectedRoute';
import Dashboard from '@/pages/Dashboard/Dashboard';
import DashboardLayout from '@/layouts/DashboardLayout';
import Links from '@/pages/Dashboard/Links';
import Analytics from '@/pages/Dashboard/Analytics';
import QrCodes from '@/pages/Dashboard/QrCodes';

function Routes() {
  return (
     <BaseRoutes>
     <Route element={<GeneralLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/preview/:shortUrl" element={<Preview />} />
     </Route>
      
      <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
      </Route>

      <Route element={<ProtectedRoute />}>
      <Route element={<DashboardLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/links' element={<Links />} />
         <Route path='/dashboard/analytics' element={<Analytics />} />
         <Route path='/dashboard/qr-codes' element={<QrCodes />} />
      </Route>
        
      </Route>
    </BaseRoutes>
  )
}

export default Routes