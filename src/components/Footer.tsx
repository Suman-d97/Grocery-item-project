export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">

        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <h2 className="text-xl font-bold text-white">FreshMarket</h2>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Delivering the highest quality fresh produce and groceries directly from local farms to your table since 2024.
          </p>
        </div>

        {/* Shop */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-base">Shop</h3>
          <ul className="space-y-2">
            <li className="hover:text-emerald-400 cursor-pointer transition">Fresh Vegetables</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">Seasonal Fruits</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">Premium Dairy</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">Essentials</li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-base">Company</h3>
          <ul className="space-y-2">
            <li className="hover:text-emerald-400 cursor-pointer transition">About Us</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">Careers</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">Sustainability</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">Blog</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-base">Contact</h3>
          <ul className="space-y-2">
            <li>support@freshmarket.com</li>
            <li>+1 (800) 123-4567</li>
            <li>123 Grocery Lane, Market City</li>
          </ul>
          <div className="flex gap-4 pt-2">
            {/* Social Placeholders */}
            <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-emerald-600 transition cursor-pointer"></div>
            <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-emerald-600 transition cursor-pointer"></div>
            <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-emerald-600 transition cursor-pointer"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} FreshMarket Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookie Settings</span>
        </div>
      </div>
    </footer>
  );
}
