🧮 Simple Counter App
📝 Deskripsi

Aplikasi yang saya buat ini adalah aplikasi penghitung angka sederhana (counter).
Pengguna bisa menambah atau mengurangi angka hanya dengan menekan tombol “+” atau “–” yang tersedia.
Tujuan saya membuat aplikasi ini adalah untuk mempraktikkan cara kerja props dan state di React dengan contoh yang mudah dipahami.
Selain itu, aplikasi seperti ini juga bisa digunakan dalam situasi nyata — misalnya oleh petugas di dining untuk menghitung jumlah mahasiswa yang mengambil makanan.

🧩 Komponen Utama

App.tsx
Komponen utama yang menyimpan data angka (state count) dan mengatur logika untuk menambah atau mengurangi nilainya. Komponen ini juga mengirimkan data dan fungsi ke komponen lain melalui props.

CounterDisplay.tsx
Bagian yang menampilkan angka saat ini di layar. Komponen ini menerima data angka dari App.tsx lewat props bernama value.

CounterButtons.tsx
Komponen yang berisi dua tombol (“+” dan “–”). Saat tombol diklik, fungsi dari App.tsx dipanggil untuk mengubah nilai count.

⚙️ Props dan State

State:
Variabel count disimpan di komponen App.tsx menggunakan useState. Nilainya akan berubah setiap kali tombol ditekan.

Props:

value dikirim dari App ke CounterDisplay supaya angka bisa ditampilkan.

onIncrement dan onDecrement dikirim dari App ke CounterButtons supaya tombol bisa mengubah nilai count.

🎨 Tampilan

Tampilan dibuat sederhana dan rapi menggunakan CSS.
Semua elemen ditempatkan di tengah halaman dengan bantuan Flexbox agar terlihat simetris dan nyaman dilihat.
Selain itu, tombol diberi sedikit jarak supaya tidak terlalu berdekatan dan mudah diklik.