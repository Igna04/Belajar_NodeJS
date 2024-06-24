// Synchronous

const getUserSync = (id) => {
    // let nama = '';
    // if (id === 1) {
    //     nama = 'Igna';
    // } else {
    //     nama = 'Yen';
    // }
    const nama = id === 1 ? 'Igna' : 'Yerin';
    return { id: id, nama: nama}; // Bisa diubah menjadi return {id, nama};
};

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = "Hello Igna Gantengg!!"
console.log(halo);


