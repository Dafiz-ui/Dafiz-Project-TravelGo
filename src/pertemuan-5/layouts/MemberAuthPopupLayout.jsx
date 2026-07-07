import { useEffect, useMemo, useState } from "react";
import { ImSpinner2 } from "react-icons/im";

export default function MemberAuthPopupLayout({ children }) {
  const [bgIndex, setBgIndex] = useState(0);

  const backgrounds = useMemo(
    () => [
      {
        title: "Petualangan Bali",
        subtitle: "Pantai, sunset, dan budaya lokal",
        className: "from-emerald-500 via-teal-500 to-sky-600",
      },
      {
        title: "Discover Flores",
        subtitle: "Taman nasional dan alam menakjubkan",
        className: "from-purple-600 via-fuchsia-500 to-pink-500",
      },
      {
        title: "Raja Ampat",
        subtitle: "Surga bawah laut Indonesia",
        className: "from-slate-900 via-slate-700 to-slate-500",
      },
    ],
    []
  );

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 2800);

    return () => clearInterval(id);
  }, [backgrounds.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl">
        <div className={`h-44 bg-gradient-to-r ${backgrounds[bgIndex].className} transition-all duration-800`}>
          <div className="h-full w-full bg-black/20" />
        </div>

        <div className="absolute top-8 left-6 right-6 text-white">
          <p className="text-xs uppercase tracking-[0.3em] opacity-90">TravelGo Member</p>
          <h3 className="text-2xl font-bold mt-3">{backgrounds[bgIndex].title}</h3>
          <p className="text-sm opacity-90 mt-1">{backgrounds[bgIndex].subtitle}</p>
        </div>

        <div className="bg-white p-8 pt-24">{children}</div>
      </div>
    </div>
  );
}
