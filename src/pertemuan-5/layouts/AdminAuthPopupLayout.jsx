import { useEffect, useMemo, useState } from "react";
import { ImSpinner2 } from "react-icons/im";

export default function AdminAuthPopupLayout({ children }) {
  const [loading] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);




  const wisataBackgrounds = useMemo(

    () => [
      {
        title: "Bali Explorer",
        subtitle: "Sunrise di pantai & pesona budaya",
        className: "from-indigo-600 via-purple-600 to-emerald-500",
      },
      {
        title: "Lombok Romantic",
        subtitle: "Pantai, snorkeling, dan suasana tenang",
        className: "from-teal-500 via-cyan-500 to-blue-600",
      },
      {
        title: "Raja Ampat Adventure",
        subtitle: "Bawah laut dan keindahan karang",
        className: "from-emerald-600 via-lime-500 to-amber-500",
      },
    ],
    []
  );

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % wisataBackgrounds.length);
    }, 2500);

    return () => clearInterval(id);
  }, [wisataBackgrounds.length]);



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
        <div
          className={`h-40 bg-gradient-to-r ${wisataBackgrounds[bgIndex].className} transition-all duration-700 ease-in-out`}
        >
          <div className="h-full w-full bg-black/20" />
        </div>

        <div className="absolute top-14 left-6 right-6">
          <div className="text-white">
            <p className="text-xs uppercase tracking-widest opacity-90">
              Tempat wisata
            </p>
            <h3 className="text-xl font-bold">
              {wisataBackgrounds[bgIndex].title}
            </h3>
            <p className="text-sm opacity-90">
              {wisataBackgrounds[bgIndex].subtitle}
            </p>
          </div>
        </div>

        <div className="bg-white p-6">
          {loading ? (
            <div className="bg-gray-100 p-3 text-sm rounded flex items-center">
              <ImSpinner2 className="mr-2 animate-spin" />
              Mohon Tunggu...
            </div>
          ) : null}

          {children}
        </div>
      </div>
    </div>
  );
}

