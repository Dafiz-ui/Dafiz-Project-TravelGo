export default function HelloWorld(){
      const propsUserCard = {
        nama: "Goku",
        nim: "999999000",
        tanggal: "2025-01-01"
    }

    return (
        <div className="card">
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard nama="Dafiz" nim="123456789" tanggal={new Date().toLocaleDateString()}/>
            <UserCard {...propsUserCard}/>
            <UserInput/>

            <img src="img\SOP .png" width={200}/>
        </div>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserInput(){
    const nama = prompt("Masukkan Nama Anda");
    const nim = prompt("Masukkan NIM Anda");
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <div className="card">
            <h2>Selamat Datang di Kota Binjai</h2>
            <p>Kota Binjai adalah sebuah kota yang terletak di Provinsi Sumatera Utara, Indonesia. Kota ini dikenal dengan sebutan "Kota Rambutan" karena produksi rambutan yang melimpah di daerah ini. Selain itu, Binjai juga memiliki berbagai tempat wisata menarik seperti Taman Wisata Alam Sibolangit, Air Terjun Sipiso-piso, dan Danau Toba yang terkenal.</p>
        </div>
    )
}


