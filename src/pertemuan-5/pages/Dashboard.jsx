import { FaMapSigns, FaSuitcaseRolling, FaCreditCard, FaChartLine, FaCalendarAlt, FaGlobeAsia, FaMoneyCheckAlt, FaHistory, FaTicketAlt } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-3xl bg-white p-7 shadow-sm border border-slate-200">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col">
            <p className="text-sm text-slate-500">Dashboard Admin</p>
            <h1 className="text-4xl font-semibold text-slate-900">Travel Go</h1>
            <div className="mt-2 text-sm text-slate-500">Welcome back, Dafiz 👋</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-700 shadow-inner hidden md:block">
              <p className="text-sm text-slate-500">System Status</p>
              <p className="font-semibold text-slate-900">All modules active</p>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <FaMapSigns className="text-xl" />
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-400">Packages</div>
              <div className="mt-1 text-sm text-emerald-600 font-semibold">+12 this month</div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-4xl font-bold text-slate-900">24</p>
            <p className="text-slate-500 mt-1">Available tours</p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
              <FaSuitcaseRolling className="text-xl" />
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-400">Bookings</div>
              <div className="mt-1 text-sm text-emerald-600 font-semibold">+8% growth</div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-4xl font-bold text-slate-900">128</p>
            <p className="text-slate-500 mt-1">Active bookings</p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
              <FaCreditCard className="text-xl" />
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-400">Payments</div>
              <div className="mt-1 text-sm text-amber-600 font-semibold">Pending: 27</div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-4xl font-bold text-slate-900">27</p>
            <p className="text-slate-500 mt-1">Awaiting verification</p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
              <FaChartLine className="text-xl" />
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-400">Revenue</div>
              <div className="mt-1 text-sm text-indigo-600 font-semibold">+5.4% vs last month</div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-4xl font-bold text-slate-900">Rp 1.48M</p>
            <p className="text-slate-500 mt-1">Transactions this month</p>
          </div>
        </div>
      </div>

      {/* Additional Admin Sections */}

      {/* Travel Packages & Calendar */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-slate-900">Travel Packages</h2>
            <span className="text-sm text-slate-500">Recommended</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[{title: 'Bali Explorer', seats: 12}, {title: 'Java Heritage', seats: 8}, {title: 'Sumatra Adventure', seats: 5}, {title: 'Sulawesi Dive', seats: 6}].map((p)=> (
              <div key={p.title} className="rounded-xl border border-slate-100 p-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-900">{p.title}</div>
                  <div className="text-xs text-slate-500">Available seats: {p.seats}</div>
                </div>
                <div className="text-sm text-emerald-600">Manage</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Calendar</h2>
            <div className="text-sm text-slate-500">July 2026</div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-sm text-slate-600">
            {['S','M','T','W','T','F','S'].map((d)=> (
              <div key={d} className="text-center font-medium">{d}</div>
            ))}
            {Array.from({length: 30}).map((_,i)=> (
              <div key={i} className="h-10 rounded-md flex items-center justify-center text-xs bg-slate-50">{i+1}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Trips, Trip Overview & Top Destinations */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold mb-3">Upcoming Trips</h3>
          <ul className="space-y-3">
            {[{id: 'UP-001', title: 'Bali Sunrise', date: '2026-07-10'}, {id: 'UP-002', title: 'Lombok Romantic', date: '2026-07-18'}].map(t => (
              <li key={t.id} className="flex items-center justify-between rounded-xl border border-slate-100 p-3">
                <div>
                  <div className="font-medium">{t.title}</div>
                  <div className="text-xs text-slate-500">{t.date} • {t.id}</div>
                </div>
                <div className="text-sm text-emerald-600">Details</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold mb-3">Trip Overview</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl p-4 border border-slate-100">
              <div className="text-sm text-slate-500">Total Trips</div>
              <div className="text-2xl font-bold">128</div>
            </div>
            <div className="rounded-xl p-4 border border-slate-100">
              <div className="text-sm text-slate-500">Active Routes</div>
              <div className="text-2xl font-bold">24</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold mb-3">Top Destinations</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>Bali</li>
            <li>Yogyakarta</li>
            <li>Raja Ampat</li>
            <li>Lombok</li>
          </ol>
        </div>
      </div>

      {/* Revenue Overview & Summary Statistics */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-3">Revenue Overview</h3>
          <div className="h-56 rounded-lg bg-slate-50 p-4">
            {/* Simple SVG bar chart (placeholder, no external deps) */}
            {(() => {
              const data = [120, 150, 180, 170, 200, 220, 190];
              const max = Math.max(...data);
              const barWidth = 100 / data.length;
              return (
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                  {data.map((v, i) => {
                    const h = (v / max) * 30; // scale to 30 units height
                    const x = i * barWidth + 2 * (i / data.length);
                    return (
                      <g key={i}>
                        <rect x={`${x}%`} y={40 - h - 4} width={`${barWidth - 3}%`} height={h} rx="1" fill="#7c3aed" />
                      </g>
                    );
                  })}
                  <line x1="0" y1="36" x2="100" y2="36" stroke="#e6e7eb" strokeWidth="0.5" />
                </svg>
              );
            })()}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold mb-3">Summary Statistics</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500">Total Revenue (30d)</div>
              <div className="font-semibold">Rp 1.48M</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500">New Bookings</div>
              <div className="font-semibold">+24</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500">Conversion Rate</div>
              <div className="font-semibold">3.8%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking History */}
      <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">Booking History</h2>
          <span className="text-sm text-slate-500">Latest transactions</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="pb-3">ID</th>
                <th className="pb-3">Paket</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[{id:'TRX-900', paket:'Bali Explorer', customer:'Rina', date:'2026-06-30', status:'Completed', amount:'Rp 2.8M'},{id:'TRX-901', paket:'Java Heritage', customer:'Andi', date:'2026-06-28', status:'Pending', amount:'Rp 1.2M'}].map(row => (
                <tr key={row.id} className="border-t border-slate-100">
                  <td className="py-3">{row.id}</td>
                  <td className="py-3">{row.paket}</td>
                  <td className="py-3">{row.customer}</td>
                  <td className="py-3">{row.date}</td>
                  <td className="py-3">{row.status}</td>
                  <td className="py-3">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom panels */}
      <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-slate-900">Recent Activity</h2>
            <span className="text-sm text-slate-500">Today</span>
          </div>
          <ul className="space-y-3">
            {[
              "New booking: Jakarta → Bali",
              "Package updated: Raja Ampat",
              "Payments verified: 9 bookings",
              "New testimonial added",
            ].map((item, idx) => (
              <li key={idx} className="rounded-2xl bg-slate-50 p-4 text-slate-700 border border-slate-100">
                <div className="text-sm font-medium">{item}</div>
                <div className="text-xs text-slate-500 mt-1">Just now</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {[
              { title: "Update Tour Categories", desc: "Organize school holiday packages." },
              { title: "Review Contact Messages", desc: "Follow up with unanswered inquiries." },
              { title: "Check Transaction Report", desc: "Monitor today’s booking payments." },
            ].map((x) => (
              <div key={x.title} className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <div className="text-sm font-semibold text-slate-800">{x.title}</div>
                <div className="text-xs text-slate-500 mt-1">{x.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


