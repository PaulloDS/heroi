// Função para classificar o herói com base na XP
function classificarHeroi(nome, xp) {
    let rank;

    if (xp < 1000) {
        rank = 'Ferro';
    } else if (xp >= 1000 && xp <= 2000) {
        rank = 'Bronze';
    } else if (xp > 2000 && xp <= 5000) {
        rank = 'Prata ';
    } else if (xp > 6000 && xp <= 6000){
        rank = 'Ouro'
    } else if (xp > 7000 && xp <= 8000) {
        rank = 'Platina Diamante';
    } else if (xp > 8000 && xp <= 9000) {
        rank = 'Ascendente';
    } else if (xp > 9000 && xp <= 10000) {
        rank = 'Imortal';
    } else if (xp >= 10001) {
        rank = 'Radiante';
    }

    console.log(`Herói: ${nome}, XP: ${xp}, Rank: ${rank}`);
}

classificarHeroi("Paullo", 5500);
