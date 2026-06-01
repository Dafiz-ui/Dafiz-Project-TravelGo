export default function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => onTabChange(tab.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeTab === tab.value
                ? "bg-slate-900 text-white shadow"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="min-h-[150px] rounded-2xl border border-slate-100 bg-slate-50 p-4">
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
}
