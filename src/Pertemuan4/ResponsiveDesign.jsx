function ResponsiveText() {
  return (
    <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
      Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan menyesuaikan dengan ukuran layar.
      Coba hapus class yang menggunakan prefix breakpoint (md:xxx, lg:xxx, xl:xxx) dan lihat perbedaannya!
    </p>
  )
}

function ResponsiveLayout(){
    return (
        <div>
             <p className="mt-4">
                Kotak-kotak di bawah ini menggunakan <strong>Grid Layout</strong> dari Tailwind CSS. Jumlah kolom akan menyesuaikan dengan ukuran layar:
            </p>
            <p>
                - <strong>grid-cols-1</strong> → Pada layar kecil (default), semua box tersusun dalam <strong>1 kolom</strong>.<br/>
                - <strong>sm:grid-cols-2</strong> → Saat ukuran layar mencapai <strong>sm (≥640px)</strong>, grid berubah menjadi <strong>2 kolom</strong>.<br/>
                - <strong>md:grid-cols-3</strong> → Pada ukuran <strong>md (≥768px)</strong>, grid berubah menjadi <strong>3 kolom</strong>.<br/>
                - <strong>lg:grid-cols-4</strong> → Saat ukuran layar <strong>lg (≥1024px)</strong> atau lebih besar, grid akan memiliki <strong>4 kolom</strong>.<br/>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                <div className="bg-blue-500 p-4">Box 1</div>
                <div className="bg-blue-500 p-4">Box 2</div>
                <div className="bg-blue-500 p-4">Box 3</div>
                <div className="bg-blue-500 p-4">Box 4</div>
            </div>
        </div>
    )
}

function ResponsiveWidth(){
    return (
        <div className="mb-4">
            <p>
                Coba lakukan <strong>zoom in/zoom out</strong> atau ubah ukuran layar. Perhatikan bagaimana posisi kolom akan menyesuaikan secara responsif:<br/> <br/> 
            </p>
            <p>
                <strong>md:w-1/2</strong> → Saat layar mencapai ukuran tablet (md: 768px) atau lebih besar, setiap kolom akan memiliki lebar 50%.
            </p>
            <p>
                <strong>md:flex-row</strong> pada div parent membuat dua kolom ini sejajar secara horizontal pada layar tablet ke atas,<br/> 
                sedangkan pada layar lebih kecil (mobile), kolom akan tersusun vertikal secara default (`flex-col`).
            </p>
            
            <div className="flex flex-col md:flex-row mb-4">
                <div className="bg-red-400 w-full md:w-1/2 p-4">Kolom 1</div>
                <div className="bg-blue-400 w-full md:w-1/2 p-4">Kolom 2</div>
            </div>
        </div>
    )
}

function ResponsiveGrid() {
  return (
    <div className="mb-4">
      <p>
        Penggunaan Grid akan dalam membagi tampilan layar menjadi beberapa kolom:<br /> <br />
      </p>
      <p>
        <strong>grid-cols-1 md:grid-cols-2 lg:grid-cols-3</strong> → 1 kolom di mobile, 2 kolom di tablet, 3 kolom di desktop.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div className="bg-green-400 p-4">Grid Item 1</div>
        <div className="bg-yellow-400 p-4">Grid Item 2</div>
        <div className="bg-purple-400 p-4">Grid Item 3</div>
        <div className="bg-pink-400 p-4">Grid Item 4</div>
        <div className="bg-indigo-400 p-4">Grid Item 5</div>
        <div className="bg-teal-400 p-4">Grid Item 6</div>
      </div>
    </div>
  )
}

function BootstrapVsTailwind() {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Perbedaan antara Tailwind CSS dengan Bootstrap saat membagi kolom:</h3>

      <div className="mb-4">
        <h4 className="font-medium mb-2">Bootstrap:</h4>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
    <div class="container">
      <div class="row">
        <div class="col-md-6 bg-primary text-white p-3">Kolom 1 (50%)</div>
        <div class="col-md-6 bg-secondary text-white p-3">Kolom 2 (50%)</div>
    </div>
</div>
        </pre>
      </div>
      <div className="mb-4">
        <h4 className="font-medium mb-2">Tailwind CSS:</h4>
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 bg-blue-500 text-white p-3">Kolom 1 (50%)</div>
            <div className="w-full md:w-1/2 bg-gray-500 text-white p-3">Kolom 2 (50%)</div>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600">
        <p><strong>Perbedaan utama:</strong></p>
        <ul className="list-disc list-inside mt-2">
          <li>Bootstrap menggunakan sistem grid 12-kolom dengan class seperti `col-md-6`</li>
          <li>Tailwind menggunakan utility classes langsung seperti `w-full md:w-1/2` untuk kontrol yang lebih fleksibel</li>
          <li>Tailwind tidak memerlukan `row` wrapper, cukup `flex flex-wrap` atau `grid`</li>
        </ul>
      </div>
    </div>
  )
}

export default function ResponsiveDesign() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Responsive Design Demo</h1>
        <ResponsiveText />
        <ResponsiveLayout />
        <ResponsiveWidth />
        <ResponsiveGrid />
        <BootstrapVsTailwind />
      </div>
    </div>
  )
}
