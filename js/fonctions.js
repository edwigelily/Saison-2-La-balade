/**
 *                                          Episode 9 : A table !
 *  
 * Ecrire une fonction qui prend un nombre en paramètre et affiche sa table de multiplication en console.
 */
/*
const multiplication = (nombre) =>{
    let calcule = 0;
    let  ListeMultiplication = [];
    
   for(let i = 0; i <= 12; i++)
   {
        calcule = nombre*i; 
        ListeMultiplication.push( nombre + " * "+ i + " =  " + calcule);
   }
    return ( ListeMultiplication);
};


let nombreSaisi = parseInt(prompt("saisir un nombre "));

console.table(multiplication(nombreSaisi));






/**
 *                                  Episode 10 : Pair ou impair ?
 * 
 * Ecrire une fonction qui prend en paramètre un nombre et retourne true 
 * si le nombre est pair ou false si le nombre est impair.
 */

/*
const pairImpair = (nombre) =>{
    
    if(nombre % 2 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let nombreSaisi = parseInt(prompt("saisir un nombre ")) ;

alert (pairImpair(nombreSaisi));







/**
 *                                           Episode 11 : Le boss
 * 
 * Transformer les épisodes 1, 2, 4, 6 et 7 en leur équivalent en fonction.
 * NB : la fonction de l’épisode 7 prendra un tableau en paramètre.
 * 
 * */
/*
const verifierEmail = (email) => {
    
    let resultat = /\w+@\w+\.\w+/;
    let test = resultat.test(email);

    if(test)
    {
        return("Votre E-mail est: "+ email);
    }
    else
    {
        return("Erreur l’adresse e-mail n’est pas correctement saisie");
    }
};

let emailSaisi = prompt("Quelle est votre adress mail?");

alert(verifierEmail(emailSaisi));





/**
 *                          Episode 11 : Le boss /  Episode 2
 */


/*
const verifierPassword = (password) => 
{
    let resultat1 =  /.{8,}/g;
    let resultat2 = /\d+/g;
    let resultat3 = /[A-Z]+/g;

    if( resultat1.test(password) && resultat2.test(password) && resultat3.test(password))
    {
        return(`Mot de passe : ${password}\n Validé !! `);
    }
    else
    {
        return(`Votre mot de passe n'est pas bon du tout!`);
    }
};

let passwordSaisi = prompt("Faites valider votre Mot de passe: ");

alert(verifierPassword(passwordSaisi));





 /**
  *                             Episode 11 : Le boss /  Episode 4
  * */                    

/*
const verificationFormatNaissance = (dateNaissance) => {

    let verification = /\d{2}\/\d{2}\/\d{4}/g;
    return ((verification.test(dateNaissance) === true) ?`Format correct!\n ${dateNaissance}` : `Format incorrect!\n ${dateNaissance}`);
};

let dateNaissanceSaisi = prompt("Entrez votre date de naissance sous ce format (JJ/MM/AAAA) :");

alert (verificationFormatNaissance(dateNaissanceSaisi));
*/






                        // Episode 11 : Le boss /  Episode 6


/*
const trouverJourSemaine = (numeroJour) => {

    let jourSemaine = ["Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"];

    if(numeroJour >= 1 && numeroJour <= 7)
    {
        return(`${numeroJour} correspond à  ${jourSemaine[numeroJour - 1]}`);
    }
    else
    {
        return("Erreur ! Vous devez saisir un nombre dans l'intervalle 1 et 7");
    }
}
let numeroJourSaisi = parseInt(prompt("Entrer un nombre compris entre 1 et 7 désignant un jour de la semaine"));

alert (trouverJourSemaine(numeroJourSaisi));
*/






                        // Episode 11 : Le boss /  Episode 7

                        
let invitSaisi = prompt("Combien de notes voulez-vous saisir ? ");
let noteSaisi = prompt("Entrez votre note en mathématique :");
    
const calculMoyenne = (invit, note) =>{

    let noteTab = new Array(parseInt(invit));
    let somme = 0;
    let moyenne = 0;
    let i = 0;

    while (i < parseInt(invit))
    {
        if (parseInt(note) >= 0 && parseInt(note) <= 20) 
        {
            noteTab[i] = parseInt(note);
            i ++;
            somme += parseInt(note);
            
            if(i<parseInt(invit))
            {
                note = prompt("Entrez votre note en Mathematique");
            }
        } 
        else
        {
            alert(`Vous devez entrer une note entre 0 et 20 !`);
            note = prompt("Entrez votre note en Mathematique");
        }   
    }
    console.log(noteTab);

    if(somme == 0)
    {
        alert(" Vous n'avez rien rentré apparement ...")
    }
    else
    {
        moyenne = somme/i;
        alert(`Votre moyenne est : ${moyenne}`);    
    }
}
calculMoyenne(invitSaisi,noteSaisi);