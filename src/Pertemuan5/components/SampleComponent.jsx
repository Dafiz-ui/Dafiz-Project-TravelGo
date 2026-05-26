import { FaHome } from "react-icons/fa";

const SampleComponent = () => {
  return (
    <div className="p-4">
      <h2 className="font-poppins text-teks">Sample Component with Icon</h2>
      <FaHome className="text-hijau text-2xl" />
      <p className="font-barlow text-teks-samping">Ini adalah contoh penggunaan ikon dari react-icons.</p>
    </div>
  );
};

export default SampleComponent;