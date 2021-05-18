const magicButton = document.querySelector('.btn');
magicButton.addEventListener('click', function cravingFunc(){
    const dals = [
        'Green moong dal', 'Yellow moong dal', 'Arhar dal', 'Urad dal', 'Chana dal', 'Masoor dal'
    ];
    const subzis = ['Bhindi fry', 'Gobhi fry', 'Paneer bhurji', 'Carrot subzi', 'Aloo jeera', 'Kadhai paneer', 'Shahi paneer'];
    const rotisOrRiceNMore = ['Roti', 'Rice','Fried rice','Khichdi'];
    let finalDal = dals[Math.floor(Math.random() * dals.length)];
    let finalSubzi = subzis[Math.floor(Math.random() * subzis.length)];
    let finalSide = rotisOrRiceNMore[Math.floor(Math.random() * rotisOrRiceNMore.length)];
    document.getElementById("demo").innerHTML = finalDal + ' , ' + finalSubzi + ' and ' + finalSide + '!';
});