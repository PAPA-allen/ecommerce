import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/sign-up"
import AdminLayout from "./components/admin-view/layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminProducts from "./pages/admin-view/products"
import AdminFeatures from "./pages/admin-view/features"
import AdminOrders from "./pages/admin-view/orders"
import ShoppingLayout from "./components/shopping-view/layout"
import Notfound from "./pages/not-found"
import ShopAccount from "./pages/shopping-view/account"
import ShopCheckout from "./pages/shopping-view/checkout"
import ShopListing from "./pages/shopping-view/listing"
import ShopHome from "./pages/shopping-view/home"
import CheckAuth from "./components/common/check-auth"
import UnauthPage from "./components/unauth-page"



function App() {
  const isAuthenticated = false
  const user = null
  return (
    <div className="flex flex-col overflow-hidden">
      <Routes>
        <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user} ><AuthLayout /></CheckAuth>}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AdminLayout /></CheckAuth>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
        <Route path="/shop" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><ShoppingLayout /></CheckAuth>}>
          <Route path="account" element={<ShopAccount />} />
          <Route path="checkout" element={<ShopCheckout />} />
          <Route path="listing" element={<ShopListing />} />
          <Route path="home" element={<ShopHome />} />
        </Route>
        <Route path="*" element={<Notfound />} />
        <Route path="unauth-page" element={<UnauthPage/>} />
      </Routes>
    </div>
  )
}

export default App
