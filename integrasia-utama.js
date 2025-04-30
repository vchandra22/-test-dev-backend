// inisiasi data hewan peliharaan Esa
const dataHewan = [
    { jenis: "Anjing", ras: "Golden Retriever", nama: "Otto", karakteristik: "Energik dan senang bermain bola", kesayangan: true },
    { jenis: "Anjing", ras: "Siberian Husky", nama: "Max", karakteristik: "Berbulu lebat dan bermata biru", kesayangan: true },
    { jenis: "Anjing", ras: "Beagle", nama: "Bob", karakteristik: "Selalu ceria dan aktif", kesayangan: false },
    { jenis: "Kucing", ras: "Persia", nama: "Luna", karakteristik: "Anggun dan manja", kesayangan: true },
    { jenis: "Kucing", ras: "British Short Hair", nama: "Milo", karakteristik: "Cerdas dan aktif", kesayangan: true },
    { jenis: "Ikan", ras: "Koi", nama: "Nana", karakteristik: "Indah", kesayangan: false },
    { jenis: "Ikan", ras: "Ikan Mas", nama: "Goldie", karakteristik: "Berwarna cerah", kesayangan: false }
];

// 2.  menambah hewan peliharaan baru
function tambahHewan(dataHewan, jenis, ras, nama, karakteristik, kesayangan) {
    const hewanBaru = { jenis, ras, nama, karakteristik, kesayangan };
    dataHewan.push(hewanBaru);
    
    return dataHewan;
}

tambahHewan(dataHewan, "Badak", "Jawa", "Rino", "Pekerja keras", true);
console.log("Setelah menambahkan Rino: ");
console.log(dataHewan);

// 3. ambil data hewan kesayangan esa
function ambilHewanKesayangan(dataHewan, urutan = 'asc') {
    const hewanKesayangan = dataHewan.filter(hewan => hewan.kesayangan);
    
    if (urutan === 'asc') {
        return hewanKesayangan.sort((a, b) => a.nama.localeCompare(b.nama));
    } else if (urutan === 'desc') {
        return hewanKesayangan.sort((a, b) => b.nama.localeCompare(a.nama));
    }

    return hewanKesayangan;
}

console.log("\nHewan kesayangan (ascending):");
console.log(ambilHewanKesayangan(dataHewan, 'asc'));

console.log("\nHewan kesayangan (descending):");
console.log(ambilHewanKesayangan(dataHewan, 'desc'));

// 4. ganti ras kucing persia menjadi maine coon
function gantiRasKucing(dataHewan, rasLama, rasBaru) {
    return dataHewan.map(hewan => {
        if (hewan.jenis === "Kucing" && hewan.ras === rasLama) {
            return { ...hewan, ras: rasBaru };
        }
        return hewan;
    });
}

const dataHewanUpdated = gantiRasKucing(dataHewan, "Persia", "Maine Coon");
console.log("\nSetelah mengganti ras kucing:");
console.log(dataHewanUpdated);

// 5. hitung jumlah hewan berdasarkan jenis
function hitungJumlahJenisHewan(dataHewan) {
    const jumlahJenis = {};

    dataHewan.forEach(hewan => {
        if (jumlahJenis[hewan.jenis]) {
            jumlahJenis[hewan.jenis]++;
        } else {
            jumlahJenis[hewan.jenis] = 1;
        }
    });

    return jumlahJenis;
}

console.log("\nJumlah hewan berdasarkan jenis:");
console.log(hitungJumlahJenisHewan(dataHewan));

// 6. Fungsi untuk mengecek hewan dengan nama palindrome
function cekPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/\s/g, '');
    const reversed = cleanStr.split('').reverse().join('');

    return cleanStr === reversed;
}

function cariHewanPalindrome(dataHewan) {
    return dataHewan
        .filter(hewan => cekPalindrome(hewan.nama))
        .map(hewan => ({
            nama: hewan.nama,
            palindrome: true,
            panjang: hewan.nama.length
        }));
}

console.log("\nHewan dengan nama palindrome:");
console.log(cariHewanPalindrome(dataHewan));

// 7. Fungsi untuk menjumlah bilangan genap dari array
function jumlahBilanganGenap(arr) {
    const bilanganGenap = arr.filter(num => num % 2 === 0);
    const total = bilanganGenap.reduce((sum, num) => sum + num, 0);

    return {
        bilanganGenap,
        total
    };
}

const angka = [15, 18, 3, 9, 6, 2, 12, 14];
console.log("\nJumlah bilangan genap:");
console.log(jumlahBilanganGenap(angka));

// 8. Fungsi untuk mengecek anagram
function cekAnagram(str1, str2) {
    const normalizeStr = (str) => str.toLowerCase().replace(/\s/g, '').split('').sort().join('');

    return normalizeStr(str1) === normalizeStr(str2);
}

console.log("\nCek anagram 'listen' dan 'silent':");
console.log(cekAnagram("listen", "silent"));

console.log("Cek anagram 'hello' dan 'world':");
console.log(cekAnagram("hello", "world"));
