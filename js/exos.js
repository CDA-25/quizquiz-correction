/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
// Ton code ici...

const question1 = "Quelle mer borde la ville de Sébastopol ?",
  solution1 = "la mer Noire";
let nbrResponse = 0;

/* Exo 2 */
// Ton code ici...

let reponse1 = prompt(question1);

if (reponse1 === solution1) {
  alert("Gagné !");
  nbrResponse++;
} else alert("Perdu");

/* Exo 3 */
// Ton code ici...

const question2 = "Quel est l'âge du capitaine ?";
solution2 = 63;

let reponse2 = parseInt(prompt(question2));

if (reponse2 === solution2) {
  alert("Gagné !");
  nbrResponse++;
} else alert("Perdu");

if (nbrResponse < 2) console.log(`Vous avez ${nbrResponse} bonne réponse`);
else console.log(`Vous avez ${nbrResponse} bonnes réponses`);
