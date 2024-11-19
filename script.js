// Maneja la lógica de selección de letras
const letters = document.querySelectorAll('.letter');
let selectedLetters = [];

letters.forEach(letter => {
    letter.addEventListener('click', () => {
        letter.classList.toggle('selected');

        if (letter.classList.contains('selected')) {
            selectedLetters.push(letter.textContent);
        } else {
            const index = selectedLetters.indexOf(letter.textContent);
            if (index > -1) {
                selectedLetters.splice(index, 1);
            }
        }

        // Mostrar selección (opcional)
        console.log('Letras seleccionadas:', selectedLetters.join(''));
    });
});
