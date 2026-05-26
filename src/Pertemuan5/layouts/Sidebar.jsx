import { FaHome, FaShoppingCart, FaUsers, FaPlus } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div id="sidebar" className="w-64 bg-latar h-screen p-4 flex flex-col">
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col mb-8">
                <span id="logo-title" className="font-poppins text-[48px] text-gray-900">
                    Sedap <b id="logo-dot" className="text-hijau">.</b>
                </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu">
                <ul id="menu-list" className="space-y-2">
                    <li>
                        <div id="menu-1" className="flex items-center p-2 hover:bg-garis rounded">
                            <FaHome className="mr-4 text-xl text-teks" />
                            <span className="font-barlow text-teks">Dashboard</span>
                        </div>
                    </li>
                    <li>
                        <div id="menu-2" className="flex items-center p-2 hover:bg-garis rounded">
                            <FaShoppingCart className="mr-4 text-xl text-teks" />
                            <span className="font-barlow text-teks">Orders</span>
                        </div>
                    </li>
                    <li>
                        <div id="menu-3" className="flex items-center p-2 hover:bg-garis rounded">
                            <FaUsers className="mr-4 text-xl text-teks" />
                            <span className="font-barlow text-teks">Customers</span>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text" className="text-white text-sm flex-1">
                        <span>Please organize your menus through button below!</span>
                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                            <FaPlus className="text-gray-600" />
                            <span className="text-gray-600 flex items-center">Add Menus</span>
                        </div>
                    </div>
                    <img id="footer-avatar" src="https://avatar.iran.liara.run/public/28" className="w-20 rounded-full ml-4" />
                </div>
                <span id="footer-brand" className="font-bold text-gray-400 block">Sedap Restaurant Admin Dashboard</span>
                <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}