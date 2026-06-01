import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React from "react";
import ClassCustomerList from "./ClassCustomerList";
import FunctionalCustomerList from "./FunctionalCustomerList";


import Sidebar from './component/Sidebar';
// import Dashboard from './component/Dashboard';//
import Header from './component/Header';


import Users from './pages/Users'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import ProductsDetail from './pages/ProductsDetail'
import UserDetail from './pages/UserDetail'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import UserSettings from './pages/UserSettings'
import FiturXYZ from './pages/FiturXYZ'


import { Navigate } from 'react-router-dom'


import NotFound from "./pages/NotFound";




function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("Vite + React") // State untuk judul


// VARIABEL = let dan const adalah 2 cara mendeklarasikan variabel dalam javacript


let angka = 10;
angka =20;
console.log(angka);


const pi = 3.14;
console.log(pi);


let x = 18;
if (true) {
  let x = 20;
  console.log(x);
}
console.log(x);


// ARROW FUNCTION = cara ringkas dalam menuliskan function


const customers = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];


customers.forEach(customer => console.log(`${customer.name} - ${customer.email}`));
 
// DESTRUCTURING = digunakan untuk mengekstrak nilai dari object ataua array


const customer =  { id: 1, name: "John Doe", email: "john@example.com" };


const { name, email } = customer;


console.log(`Pelanggan: ${name}, Email: ${email}`);


// SPREAD OPERATOR = (...) untuk menyalin atau menggabungkan array/object


const products = [
  { id: 1, name: "Laptop", stock: 10 },
  { id: 2, name: "Smartphone", stock: 15 }
];


const newProduct = { id: 3, name: "Tablet", stock: 8 };


const updatedProducts = [...products, newProduct];
console.log(updatedProducts);


// DEFAULT PARAMETERS IN ORDER = bisa memiliki nilai default jika parameter tidak memiliki nilai


const createOrder = (customerName = "Guest", product = "unknown", quantity = 1) =>
  { console.log(`Pesanan: ${customerName} membeli ${quantity} unit ${product}`)
  };


createOrder("John Doe", "Laptop", 2);
createOrder("Jane Smith ", "Smartphone");
createOrder();


// TEMPLATE LITERALS IN INVOICE = template literals (``) memudahkan kita membuat string dengan interpolasi variabel


const invoice = (customer, product, quantity, price) => {
  return `
====================
      INVOICE
====================
Nama Pelanggan: ${customer}
Produk: ${product}
Jumlah: ${quantity}
Harga Satuan: $${price}
Total Bayar: $${quantity * price}
====================
`;
};


console.log(invoice("John Doe", "Laptop", 2, 500));


// PROMISE FOR API SIMULATION = digunakan untuk menangani operasi asinkron seperti mengambil data pelanggan dari server


const getCustomers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["John Doe", "Jane Smith", "Robert Brown"]);
    }, 2000);
  });
};


getCustomers().then (customers => console.log("Pelanggan:", customers));


//ASYNC/AWAIT UNTUKK FETCH DATA PRODUK = merupakan cara yang lebih modern untuk menangani kode asinkron


const fetchProducts = async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    console.log("Daftar Produk:", data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
fetchProducts();




//return (
//  <>
//    <div>
//     <h1>CRM Customer Management</h1>
//     <ClassCustomerList />
//     <FunctionalCustomerList />
//    </div>
//  </>
//  );
//};






return (


<Router>
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/fitur-xyz" element={<FiturXYZ />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       
            {/* Dashboard (Menampilkan Ringkasan Data) */}
            {/* <Dashboard users={users} /> */}
            {/* <ProductCard /> */}
          </div>
        </div>
      </div>
    </Router>
)}


export default App


