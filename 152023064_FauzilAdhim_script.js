// //SOAL NO.1
// //buatlah program yag meminta pengguna memasukkan jumlah uang dalam rupiah(IDR) melalui prompt()

// // 1.Kemudian, program harus menawarkann piliha ke dalam mata uang lain seperti USD, EUR, atau JPY. menggunakan switch.case()
// // 2.gunakan nilai kurs.
// // 3. jika pengguna memasukkann nilai yang invalid. tampilkan pesan error
// // 4. tampilkan hasil konversi dengan


// (function() {
//     let jumlahIDR_152023064 = prompt("Masukkan jumlah uang dalam IDR:");
    
//     // mengecek apakah input adalah angka yang valid
//     if (isNaN(jumlahIDR_152023064) || jumlahIDR_152023064 === "" || jumlahIDR_152023064 === null) {
//         alert("Input tidak valid! Harap masukkan angka.");
//         return;
//     }
    
//     jumlahIDR_152023064 = parseFloat(jumlahIDR_152023064);
    
//     let currency_152023064 = prompt("Pilih mata uang yang diinginkan: USD, EUR, JPY, ATAU CNY").toUpperCase();
//     let convertedAmount_152023064;
    
//     // Nilai kurs diambil dari rata rata kurs 30 hari terakhir
//     const exchangeRates_152023064 = {
//         USD: 0.000061,
//         EUR: 0.000058,
//         JPY: 0.0092,
//         CNY: 0.00044
//     };
    
//     switch (currency_152023064) {
//         case "USD":
//             convertedAmount_152023064 = jumlahIDR_152023064 * exchangeRates_152023064.USD;
//             alert(`Rp${jumlahIDR_152023064} setara dengan $${convertedAmount_152023064.toFixed(2)} USD`);
//             break;
//         case "EUR":
//             convertedAmount_152023064 = jumlahIDR_152023064 * exchangeRates_152023064.EUR;
//             alert(`Rp${jumlahIDR_152023064} setara dengan €${convertedAmount_152023064.toFixed(2)} EUR`);
//             break;
//         case "JPY":
//             convertedAmount_152023064 = jumlahIDR_152023064 * exchangeRates_152023064.JPY;
//             alert(`Rp${jumlahIDR_152023064} setara dengan ¥${convertedAmount_152023064.toFixed(2)} JPY`);
//             break;
        
//         case "CNY":
//             convertedAmount_152023064 = jumlahIDR_152023064 * exchangeRates_152023064.CNY;
//             alert(`Rp${jumlahIDR_152023064} setara dengan ¥${convertedAmount_152023064.toFixed(2)} CNY`);
//             break;
//         default:
//             alert("Mata uang tidak dikenali. Pilih USD, EUR, JPY, atau CNY.");
//     }
// })();

// // SOAL NO.2
// // //Buat program yang menghitung BMI berdasarkan berat badan (kg) dan tinggi badan (m) yang dimasukkan pengguna.

// // Gunakan rumus:BMI

// // Tentukan kategori BMI berdasarkan nilai yang dihitung:
// // < 18.5 → Kurus
// // 18.5 - 24.9 → Normal
// // 25 - 29.9 → Overweight
// // ≥ 30 → Obesitas
// // Tampilkan hasil BMI beserta kategori dengan alert().


// (function () {
//     let beratBadan_152023064 = parseFloat(prompt("Masukkan berat badan (kg):"));

//     if(isNaN(beratBadan_152023064)|| beratBadan_152023064 === "" || beratBadan_152023064 ===null){
//         alert("Masukkan angka yang valid untuk berat badan.");
//         return;
//     }

//     let tinggiBadan_152023064 = parseFloat(prompt("Masukkan Tinggi badan (kg):"));

//     if(isNaN(tinggiBadan_152023064)|| tinggiBadan_152023064 === "" || tinggiBadan_152023064 ===null){
//         alert("Masukkan angka yang valid untuk berat badan.");
//         return;
//     }

//     let tinggiconvert_152023064 = tinggiBadan_152023064 / 100;

//     let bmiIndeks_152023064 = beratBadan_152023064 / (tinggiconvert_152023064 * tinggiconvert_152023064);

//     if (bmiIndeks_152023064 < 18.5) {
//         alert(`BMI Indeks anda adalah: ${bmiIndeks_152023064.toFixed(2)} \nKategori: Underweight (Kurus), disarankan untuk llebih meningkatkan kalori harian`);
//     } 
//     else if (bmiIndeks_152023064 >= 18.5 && bmiIndeks_152023064 < 24.9) {
//         alert(`BMI Indeks anda adalah: ${bmiIndeks_152023064.toFixed(2)} \nKategori: Normal, berat anda sudah proporsional`);
//     } 
//     else if (bmiIndeks_152023064 >= 25 && bmiIndeks_152023064 < 29.9) {
//         alert(`BMI Indeks anda adalah: ${bmiIndeks_152023064.toFixed(2)} \nKategori: Overweight (Kelebihan Berat Badan) disarankan agar lebih memperhatikan pola makan`);
//     } 
//     else {
//         alert(`BMI Indeks anda adalah: ${bmiIndeks_152023064.toFixed(2)} \nKategori: Obesitas disarankan melakukan diet rutin dan olahraga `);
//     }
// })();

// //NO.3 
// // Buat program yang meminta pengguna membuat password dengan ketentuan berikut:
// // Minimal 8 karakter
// // Harus mengandung minimal satu huruf besar (A-Z)
// // Harus mengandung minimal satu angka (0-9)
// // Jika password tidak valid, minta pengguna memasukkan ulang hingga sesuai aturan.
// // Gunakan perulangan while.

// (function () {
//     let password_152023064;
//     let regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/; // Regex untuk validasi password_152023064

//     while (true) {
//         password_152023064 = prompt("Masukkan password:");

//         if (!password_152023064) {
//             alert("Password tidak boleh kosong!");
//             continue;
//         }

//         if (regex.test(password_152023064)) {
//             alert("Password valid!");
//             break;
//         } else {
//             alert("Password harus minimal 8 karakter, mengandung huruf besar, dan angka!");
//         } 
//     }
// })();

