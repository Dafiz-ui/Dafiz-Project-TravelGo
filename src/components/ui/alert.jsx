export default function Alert({ title, description, variant = "info" }) {
  const variantStyles = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    success: "bg-emerald-50 border-emerald-200 text-emerald-900",
    warning: "bg-amber-50 border-amber-200 text-amber-900",
    error: "bg-rose-50 border-rose-200 text-rose-900",
  };

  return (
    <div className={`rounded-2xl border p-4 ${variantStyles[variant] ?? variantStyles.info}`}>
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <p className="text-sm font-semibold">{title}</p>
          {description ? <p className="mt-1 text-sm text-slate-600">{description}</p> : null}
        </div>
      </div>
    </div>
  );
}
