// hitung.js - Kalkulator Hukum Ohm Sederhana
const arus = 0.5;    // Ampere (I)
const hambatan = 220; // Ohm (R)

// Fungsi menghitung Tegangan (Voltage)
function hitungTegangan(i, r) {
    return i * r;
}

const tegangan = hitungTegangan(arus, hambatan);

console.log("====================================");
console.log("   KALKULATOR TEKNIK - WSL NODEJS   ");
console.log("====================================");
console.log(`Arus (I)      : ${arus} A`);
console.log(`Hambatan (R)  : ${hambatan} Ω`);
console.log("------------------------------------");
console.log(`Hasil Tegangan (V) : ${tegangan} Volt`);
console.log("====================================");

// Tambahan: Cek kondisi (Logic)
if (tegangan > 50) {
    console.log("⚠️ Peringatan: Tegangan Tinggi!");
} else {
    console.log("✅ Status: Tegangan Aman.");
}
