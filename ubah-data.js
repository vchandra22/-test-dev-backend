const dataMentah = {
    "data": [
        {
            "category": "Buah",
            "code": "B001",
            "name": "Apel",
            "total": 10
        },
        {
            "category": "Hewan",
            "code": "H002",
            "name": "Buaya",
            "total": 10
        },
        {
            "category": "Hewan",
            "code": "H001",
            "name": "Kucing",
            "total": 30
        },
        {
            "category": "Buah",
            "code": "B002",
            "name": "Pepaya",
            "total": 20
        },
        {
            "category": "Buah",
            "code": "B001",
            "name": "Anggur",
            "total": 5
        },
        {
            "category": "Buah",
            "code": "B002",
            "name": "Pisang",
            "total": 8
        },
        {
            "category": "Hewan",
            "code": "H002",
            "name": "Komodo",
            "total": 15
        },
        {
            "category": "Sayuran",
            "code": "S003",
            "name": "Wortel",
            "total": 25
        },
        {
            "category": "Hewan",
            "code": "H001",
            "name": "Harimau",
            "total": 10
        },
        {
            "category": "Sayuran",
            "code": "S001",
            "name": "Bayam",
            "total": 12
        },
        {
            "category": "Sayuran",
            "code": "S002",
            "name": "Kangkung",
            "total": 18
        }
    ]
};

function ubahData(dataAwal) {

    const hasil = {
        total: 0,
        data: []
    };
    
    const kelompokKategori = {};
    
    dataAwal.data.forEach(item => {

        hasil.total += item.total;

        // buat kategori baru jika tidak ada
        if (!kelompokKategori[item.category]) {
            kelompokKategori[item.category] = {
                category: item.category,
                total: 0,
                data: {}
            };
        }

        // tambah ke total kategori
        kelompokKategori[item.category].total += item.total;

        // buat kelompok kode kalo belum ada
        if (!kelompokKategori[item.category].data[item.code]) {
            kelompokKategori[item.category].data[item.code] = {
                total: 0,
                data: []
            };
        }

        // tambah ke total
        kelompokKategori[item.category].data[item.code].total += item.total;

        // input item ke dalam array data
        kelompokKategori[item.category].data[item.code].data.push({
            name: item.name,
            total: item.total
        });
    });
    
    hasil.data = Object.values(kelompokKategori);
    return hasil;
}

const dataHasil = ubahData(dataMentah);

console.log(JSON.stringify(dataHasil, null, 4));
module.exports = dataHasil;