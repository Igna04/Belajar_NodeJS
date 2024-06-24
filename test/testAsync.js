// Asynchronous

const getUserAsync = (id, callback) => {    // Bisa callback diganti menjadi cb saja
    const time = id === 1 ? 3000 : 2000;
    setTimeout (() => {
        const nama = id === 1 ? 'Igna' : 'Yerin';
        callback({ id, nama});
    }, time);
};

const userSatu = getUserAsync(1, (result) => {
    console.log(result);
});

const userDua = getUserAsync(2, (result) => {
    console.log(result);
});

const halo = "Hello Yerin Cantikk!!";
console.log(halo);