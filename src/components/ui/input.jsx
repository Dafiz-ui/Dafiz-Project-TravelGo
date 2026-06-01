export default function Input({ label, helper, className = "", ...props }) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      <input
        className={`mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className}`}
        {...props}
      />
      {helper ? <p className="mt-2 text-xs text-slate-500">{helper}</p> : null}
    </label>
  );
}
