
/**                             Episode 1 : Donne-moi ton adresse e-mail
 * 
 * Ecrire un programme qui demande à l’utilisateur son adresse e-mail et
 *  renvoie un message en cas d’erreur si l’adresse e-mail n’est pas correctement saisie.
 */
/*
let email=prompt("Quelle est votre adress E-mail?"); //Récupérer l'adress E-mail
let resultat= /\w+@\w+\.\w+{2,}/;// RegExp toutes les lettres et chiffres suivies de @ , puis toutes les lettres et chiffres suivies de "." et toutes les lettres et chiffres suivies à partir de 2 charactères
let test= resultat.test(email);

if(test)
{
    alert("Votre E-mail est: "+ email);
}
else
{
    alert("Erreur l’adresse e-mail n’est pas correctement saisie");
}







/**                                     Episode 2 : Choisis un mot de passe
 * 
 * Ecrire un programme qui demande à l'utilisateur de renseigner un mot de passe 
 * et vérifie si ce mot de passe obéit aux critères suivants :
 * 8 caractères minimum
 * contient une majuscule
 * contient au moins un chiffre
 */
/*
let password = prompt("Faites valider votre mot de passe: "); // Récupérer le mot de passe 
let resultat1 =  /.{8,}/g; //Tous les charactères , 8 à n , global
let resultat2 = /\d+/g; //Un ou plusieurs chiffres, global
let resultat3 = /[A-Z]+/g; // de A à Z (majuscule), global

if( resultat1.test(password) && resultat2.test(password) && resultat3.test(password))
{
    alert(`Mot de passe : ${password}\n Validé !! `);
}
else
{
    alert(`Votre mot de passe n'est pas bon du tout!`);
}






/**                                 Episode 3 : Au pluriel
 * 
 * Ecrire un programme qui demande à l'utilisateur son nom et le nombre d’enfants qu’il a et affiche un résumé.
 * Exemples : 
 * Marc, vous avez 1 enfant.
 * Luc, vous avez 3 enfants.
 * Jean, vous n’avez pas d’enfant.
 */
/*
let nom = prompt("Quel est votre nom ? ");
let nombreEnfant= parseInt(prompt("Combien d'enfant avez-vous ?")) ;

if(nombreEnfant === 0)
{
    alert(nom + ", vous n’avez pas d’enfant");
}
else if(nombreEnfant === 1)
{
    alert(nom + ", vous n'avez qu'un enfant");
}
else if(nombreEnfant > 1)
{
    alert(nom + ", vous avez " + nombreEnfant + " enfants"+"\n C'est bien mais n'oubliez surtout pas de vous en occuper ");
}
else
{
    alert("Vous devez rentrer un entier positif ");
}






/**                                 Episode 4 : Dis-moi, quand es-tu né ?
 * 
 * Ecrire un programme demande la date de naissance d’un utilisateur 
 * et vérifie si la date saisie est au format JJ/MM/AAAA. 
 * Exemple : 13/05/2020.
 * 
 */
/*
let dateNaissance = prompt("Entrez votre date de naissance sous ce format (JJ/MM/AAAA) :");

let verification = /\d{2}\/\d{2}\/\d{4}/g; // 2 chiffres"/" 2 chiffres "/" 4 chiffres , global (à optimiser)

alert ((verification.test(dateNaissance) === true) ?`Format correct!\n ${dateNaissance}` : `Format incorrect!\n ${dateNaissance}`);






/**                             Episode 5 : Fiche de renseignement
 * 
 * Ecrire un programme qui :
 * demande à l'utilisateur de saisir son nom, prénom ainsi que son sexe ;
 * stocke ces informations dans un objet;
 * ajoute une clé titre à cet objet ayant comme valeur M ou Mme en fonction du sexe de l’utilisateur;
 * Affiche l’objet en console.
 */
/*
let nom = prompt("Quel est votre Nom ?");
let prenom = prompt("Quel est votre Prénom ?");
let sexe ;
let statut ;

do
{
    sexe = prompt("Quel est  votre Sexe ? (Choisir Homme ou Femme )");
}
while (sexe != "Homme" && sexe != "Femme")

(sexe === "Homme") ? statut = "M." : statut = "Mme" ;

let identitee = {
    nom : nom,
    prenom : prenom ,
    sexe : sexe,
    titre : statut
}; //Déclaration de l'objet qui récupère les informations

console.log(identitee);



/**                             Episode 6 : Quel jour sommes-nous ?
 * 
 * Ecrire un programme qui demande à l’utilisateur de saisir le numéro d’un jour et renvoie le jour correspondant.
 * Exemple : 
 * Entrée : 3
 * Sortie : Mercredi
 * NB : Les jours doivent être stockés au préalable dans un tableau.*/

/*

let numeroJour = parseInt(prompt("Entrer un nombre compris entre 1 et 7 désignant un jour de la semaine"));
let jourSemaine = ["Lundi",
                    "Mardi",
                    "Mercredi",
                    "Jeudi",
                    "Vendredi",
                    "Samedi",
                    "Dimanche"];

if(numeroJour >= 1 && numeroJour <= 7)
{
    alert(`${numeroJour} correspond à  ${jourSemaine[numeroJour - 1]}`);
}
else
{
    alert("Erreur ! Vous devez saisir un nombre dans l'intervalle 1 et 7");
}





/**                                     Episode 7 : Admis ou recalé
 * 
 * Ecrire un programme qui demande à l’utilisateur de saisir toutes ses notes en Mathématiques et affiche sa moyenne.
 * NB : Les notes varient de 0 à 20 et seront stockées dans un tableau.
 */
 /*                       
let invit = parseInt(prompt("Combien de notes voulez-vous saisir ? "));
let note = parseInt(prompt("Entrez votre note en mathématique :"));
let noteTab = new Array(invit);
let somme = moyenne = i =0;

while (i < invit)
{
    if (note >= 0 && note <= 20) 
    {
        noteTab[i] = note ;
        i ++;
        somme += note;
        
        if(i< invit)
        {
            note = parseInt(prompt("Entrez votre note en mathématique :"));
        }
    } 
    else
    {
        alert(`Vous devez entrer une note entre 0 et 20 !`);
        note = parseInt(prompt("Entrez votre note en mathématique :"));
    }   
}
console.log(noteTab);

if(somme === 0)
{
    alert(" Vous n'avez rien rentré apparement ...")
}
else
{
    moyenne = somme/i;
    alert(`Votre moyenne est : ${moyenne}`);    
}





/**
 *                                      Episode 8 : Proclamation
 * 
 * Ecrire un programme qui demande de saisir les noms et les moyennes des élèves d’une classe 
 * et affiche le premier de la classe (son nom ainsi que sa moyenne).
 * NB : Le nombre d’élèves n’est pas connu d’avance.
 */
/*
alert(` Vous pouvez saisir les noms et les moyennes des élèves d’une classe et ce programme  affichera le premier de la classe.
        Les noms et moyennes des élèves seront saisi sur ce format : Edwige BAMENOU = 19
        Le mot clé pour finir la liste de saisie est : Fin `);


let infoEleve;
let listeEleve = [];
let eleveMax ={
    note : 0,
    nom : ""
};


while (infoEleve != "Fin")
{
    infoEleve = prompt("Quel est le nom et la  moyenne de l'élève sur ce format : Edwige BAMENOU = 19? \n vous pouvez sortir de la boucle avec le mot clé :Fin");
    
    const [nom, note] = infoEleve.split("=");

    let eleve = {
        nom : nom,
        note : parseInt(note) 
    } 
    listeEleve.push(eleve);
    
}

for(let i=0; i < listeEleve.length ; i++){
    
    if ( eleveMax.note < listeEleve[i].note)
    {
        eleveMax = listeEleve[i];
    }
}

// listeEleve.forEach((eleve,index) =>{
    
//     if (noteMax < eleve.note){

//         noteMax = eleve.note;
//         nomMax = eleve.nom;
//     }

// })

alert(`Félicitation à ${eleveMax.nom} qui a la plus grande moyenne : ${eleveMax.note}`);*/



