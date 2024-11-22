// Длина строки

let text = "Я программист";
let TextLength = text.length;
console.log(TextLength);

// Первый и последний символ строки

const textExample = "example";

const firstChar = textExample[0].toUpperCase()
const lastChar = textExample[textExample.length - 1].toUpperCase()
const middlePart = textExample.substring(1, textExample.length - 1);

console.log(`${firstChar}${middlePart}${lastChar}`);

// Позиция первой и последней буквы "О"

const Moloko = "молоко";
const Pozision1 = Moloko.indexOf("о");
const LastPozision = Moloko.lastIndexOf("о");

const MolokoPozision1 = (`Первая позиция : ${Pozision1} `);
const LastMolokoPozision = (`Последняя позиция : ${LastPozision} `);

console.log(MolokoPozision1);
console.log(LastMolokoPozision);

// Поиск вхождения слова

const milk = " Молоко ";
const y = milk.includes("у");
const m = milk.includes("м");

if (y || m) {
    console.log('Слово содержит букву "у" или букву "м".');

} else {
  console.log(`Слово не содержит букву "у" или букву "м".`);
}



// Начало строки

const slova = ["привет","ветеринар"];
const vet = "вет";

slova.forEach(slova => {if (slova.startsWith(vet)){
console.log(`${slova} начинается с "${vet}"`);
} else {
    console.log(`${slova} не начинается с "${vet}"`);
}
});

// Конец строки

const slova2 = ['дятел','телефон'];
const tel = "тел";

slova2.forEach(slova2 => {const endsWithtel = slova2.endsWith(tel);
console.log (`Слово "${slova2}" заканчивается на "${tel}": ${endsWithtel}`);})

// Вставка значения в строку

const name = "Ruslan";
const message = `Добро пожаловать , ${name} , благодарим за регистрацию ! `;
console.log(message);
console.log("Надеемся, Вам понравится");
