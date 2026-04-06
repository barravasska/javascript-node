// profil-barra.js
const profil = {
    nama: "Ghifary Barra Vasska",
    panggilan: "Barra",
    nim: "224443032",
    kampus: "Politeknik Manufaktur Bandung",
    jurusan: "Teknologi Rekayasa Informatika Industri",
    semester: 4,
    status: "Active Student ",
    
    minat: ["Web Development", "IoT", "Robotics"],
    
    projects: {
        ongoing: ["Soul Quest (2D RPG)", "Finovo (Finance App)"],
        hardware: ["RFID Door Lock", "Line Follower Robot"]
    },

    tampilkanProfil: function() {
        console.log("========================================");
        console.log(`Halo! Saya ${this.nama} (${this.panggilan})`);
        console.log(`Mahasiswa ${this.jurusan} @ ${this.kampus}`);
        console.log("========================================");
        console.log("Minat Utama:");
        this.minat.forEach((m, i) => console.log(`${i + 1}. ${m}`));
        console.log("----------------------------------------");
        console.log(`Project Saat Ini: ${this.projects.ongoing[0]}`);
        console.log("========================================");
    }
};

// Panggil fungsinya
profil.tampilkanProfil();
