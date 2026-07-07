import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// ======================== USER SIDE PAGES ========================
const Home = React.lazy(() => import("./pages/Home"));
const PaketWisata = React.lazy(() => import("./pages/PaketWisata"));
const DetailPaket = React.lazy(() => import("./pages/DetailPaket"));
const BookingPage = React.lazy(() => import("./pages/BookingPage"));
const RiwayatBooking = React.lazy(() => import("./pages/RiwayatBooking"));
const TentangKami = React.lazy(() => import("./pages/TentangKami"));
const Kontak = React.lazy(() => import("./pages/Kontak"));

// ======================== ADMIN SIDE PAGES ========================
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Products = React.lazy(() => import("./pages/Products")); // Kelola Paket
const OrderList = React.lazy(() => import("./pages/OrderList")); // Kelola Booking
const CustomerList = React.lazy(() => import("./pages/CustomerList")); // Verifikasi Pembayaran
const UserList = React.lazy(() => import("./pages/UserList")); // Kelola User
const UserDetail = React.lazy(() => import("./pages/UserDetail"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const UserCRUDEnhanced = React.lazy(() => import("../UserCRUDEnhanced"));
const ProductCRUDEnhanced = React.lazy(() => import("../ProductCRUDEnhanced"));
const ManajemenData = React.lazy(() => import("./pages/ManajemenData"));
const DiskonTier = React.lazy(() => import("./pages/DiskonTier"));
const KelolaPromoCRM = React.lazy(() => import("./pages/KelolaPromoCRM"));

// ======================== MEMBER SIDE PAGES ========================
const MemberLogin = React.lazy(() => import("./pages/MemberLogin"));
const MemberRegister = React.lazy(() => import("./pages/MemberRegister"));
const MemberDashboard = React.lazy(() => import("./pages/MemberDashboard"));
const MemberVIP = React.lazy(() => import("./pages/MemberVIP"));

// ======================== AUTH PAGES ========================
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Unauthorized = React.lazy(() => import("./pages/Unauthorized"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// ======================== LAYOUTS ========================
import UserLayout from "./layouts/UserLayout";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";
import RequireAdmin from "./components/RequireAdmin";
import RequireMember from "./components/RequireMember";

import "./assets/tailwind.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          {/* ============ USER SIDE ROUTES ============ */}
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/paket-wisata" element={<PaketWisata />} />
            <Route path="/paket/:id" element={<DetailPaket />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/riwayat-booking" element={<RiwayatBooking />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/kontak" element={<Kontak />} />
          </Route>

          {/* ============ ADMIN SIDE ROUTES (PROTECTED) ============ */}
          <Route element={<MainLayout />}>
            <Route element={<RequireAdmin />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/kelola-paket" element={<Products />} />
              <Route path="/admin/manajemen-data" element={<ManajemenData />} />
              <Route path="/admin/diskon-tier" element={<DiskonTier />} />
              <Route path="/admin/kelola-promo-crm" element={<KelolaPromoCRM />} />
              <Route path="/admin/products/:id" element={<ProductDetail />} />
              <Route path="/admin/kelola-booking" element={<OrderList />} />
              <Route path="/admin/verifikasi-pembayaran" element={<CustomerList />} />
              <Route path="/admin/kelola-user" element={<UserList />} />
              <Route path="/admin/kelola-user/:id" element={<UserDetail />} />
              <Route path="/admin/user-crud-enhanced" element={<UserCRUDEnhanced />} />
              <Route path="/admin/paket-crud-enhanced" element={<ProductCRUDEnhanced />} />
            </Route>

            {/* AUTH ROUTES yang tetap publik */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/member/login" element={<MemberLogin />} />
            <Route path="/member/register" element={<MemberRegister />} />
          </Route>

          {/* ============ MEMBER SIDE ROUTES (LOKAL) ============ */}
          <Route element={<UserLayout />}>
            <Route element={<RequireMember />}>
              <Route path="/member/dashboard" element={<MemberDashboard />} />
              <Route path="/member/vip" element={<MemberVIP />} />
            </Route>
          </Route>


          {/* ============ FALLBACK ROUTES ============ */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  </React.StrictMode>
);
