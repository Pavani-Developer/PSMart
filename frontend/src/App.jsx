import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Upload from './pages/Upload';
import Favourites from './pages/Favourites';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Topoffers from './pages/Typesof(NEEDS)/Topoffers';
import MobileTabs from './pages/Typesof(NEEDS)/MobileTabs';
import TvAppliances from './pages/Typesof(NEEDS)/TvAppliances';
import Electronics from './pages/Typesof(NEEDS)/Electronics';
import Fashion from './pages/Typesof(NEEDS)/Fashion';
import Beauty from './pages/Typesof(NEEDS)/Beauty';
import HomeKitchen from './pages/Typesof(NEEDS)/HomeKitchen';
import Furniture from './pages/Typesof(NEEDS)/Furniture';
import Travel from './pages/Typesof(NEEDS)/Travel';
import Grocery from './pages/Typesof(NEEDS)/Grocery';

function Logout(){
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout(){
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar/>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/upload"
              element={
                <ProtectedRoute>
                  <Upload />
                </ProtectedRoute>
              }
            />
            <Route
              path="/favourites"
              element={
                <ProtectedRoute>
                  <Favourites />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboards"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="/top-offers" element={<ProtectedRoute><Topoffers/></ProtectedRoute> }/>
            <Route path="/mobile-tabs" element={<ProtectedRoute><MobileTabs/></ProtectedRoute> }/>
            <Route path="/tv" element={<ProtectedRoute><TvAppliances/></ProtectedRoute> }/>
            <Route path="/electronics" element={<ProtectedRoute><Electronics/></ProtectedRoute> }/>
            <Route path="/fashion" element={<ProtectedRoute><Fashion/></ProtectedRoute> }/>
            <Route path="/beauty" element={<ProtectedRoute><Beauty/></ProtectedRoute> }/>
            <Route path="/home-kitchen" element={<ProtectedRoute><HomeKitchen/></ProtectedRoute> }/>
            <Route path="/furniture" element={<ProtectedRoute><Furniture/></ProtectedRoute> }/>
            <Route path="/travel" element={<ProtectedRoute><Travel/></ProtectedRoute> }/>
            <Route path="/grocery" element={<ProtectedRoute><Grocery/></ProtectedRoute> }/>
            <Route path="/register" element={<RegisterAndLogout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer style={{ flexShrink: 0 }}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
