

                        // Episode 1 : Donne-moi ton adresse e-mail

/*let email=prompt("Quelle est votre adress mail?");
let resultat= /\w+@\w+\.\w+/;
let test= resultat.test(email);

if(test===true)
{
    alert("Votre E-mail est: "+ email);
}
else
{
    alert("Erreur l’adresse e-mail n’est pas correctement saisie");
}*/







                        // Episode 2 : Choisis un mot de passe


/*let password = prompt("Faites valider votre Mot de passe: ");
let resultat1 =  /.{8,}/g;
let resultat2 = /\d+/g;
let resultat3 = /[A-Z]+/g;

if( resultat1.test(password) && resultat2.test(password) && resultat3.test(password) === true)
{
    alert(`Mot de passe : ${password}\n Validé !! `);
}
else
{
    alert(`Votre mot de passe n'est pas bon du tout!`);
}*/







                         // Episode 3 : Au pluriel

/*let nom = prompt("Quel est votre nom ? ");
let nombreEnfant= prompt("Combien d'enfant avez-vous ?");

if(parseInt(nombreEnfant)==0)
{
    alert(nom + ", vous n’avez pas d’enfant");
}
else if(parseInt(nombreEnfant)==1)
{
    alert(nom + ", vous n'avez qu'1 enfant");
}
else if(parseInt(nombreEnfant)>1)
{
    alert(nom + ", vous avez " + parseInt(nombreEnfant) + " enfants"+"\n C'est bien mais n'oubliez surtout pas de vous en occuper");
}
else
{
 alert("Vous devez rentrer un entier positif ");
}*/







                        // Episode 4 : Dis-moi, quand es-tu né ?


/*let dateNaissance = prompt("Entrez votre date de naissance sous ce format (JJ/MM/AAAA) :");

let verification = /\d{2}\/\d{2}\/\d{4}/g;

(verification.test(dateNaissance) === true) ? alert(`Format correct!\n ${dateNaissance}`) : alert(`Format incorrect!\n ${dateNaissance}`);
*/






                        // Episode 5 : Fiche de renseignement

/*let nom = prompt("Quel est votre Nom ?");
let prenom = prompt("Quel est votre Prénom ?");
let sexe = prompt("Quel est  votre Sexe ? (Choisir Homme Ou Femme )");
let statut ;

while (sexe != "Homme" && sexe != "Femme")
{
    sexe = prompt("Choisir entre Homme Ou Femme ");

}

(sexe === "Homme") ? statut = "M." : statut = "Mme" ;

let identitee = {

    nomEnreg : nom,
    prenomEnreg : prenom ,
    sexeEnreg : sexe,
    titre : statut
};
console.log(identitee);*/





                        // Episode 6 : Quel jour sommes-nous ?

/*let numeroJour = prompt("Entrer un nombre compris entre 1 et 7 désignant un jour de la semaine");
let jourSemaine = ["Lundi",
                    "Mardi",
                    "Mercredi",
                    "Jeudi",
                    "Vendredi",
                    "Samedi",
                    "Dimanche"];
if(parseInt(numeroJour)>=1 && parseInt(numeroJour)<=7)
{
    switch(parseInt(numeroJour)){
        case 1:
            alert("1 correspond à " + jourSemaine[0]);
            break;
        case 2 :
            alert("2 correspond à " + jourSemaine[1]);
            break;

        case 3 :
            alert("3 correspond à " + jourSemaine[2]);
            break;
        
        case 4 :
            alert("4 correspond à " + jourSemaine[3]);
            break;

        case 5 :
            alert("5 correspond à " + jourSemaine[4]);
            break;
        
        case 6 :
            alert("6 correspond à " + jourSemaine[5]);
            break;
        
        case 7 :
            alert("7 correspond à " + jourSemaine[6]);
            break;
    }
}
else
{
    alert("Erreur ! Vous devez saisir un nombre dans l'intervalle 1 et 7");
}*/






                        // Episode 7 : Admis ou recalé

                        
/*let invit = prompt("Combien de notes voulez-vous saisir ? ");
let note = prompt("Entrez votre note en mathématique :");
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
}*/





                                    // Episode 8 : Proclamation

alert(`saisir les noms et les moyennes des élèves d’une classe et affiche le premier de la classe.
        Les nom et moyennes des élèves seront saisi sur ce format : Edwige BAMENOU = 19
        Le mot clé pour finir la liste de saisie est : Fin `);


let infoEleve;
let listeEleve = [];
let noteMax = 0;
let nomMax = "";
while (infoEleve != "Fin")
{
    infoEleve =  prompt("Quel est le nom et la  moyenne de l'élève ? \n vous pouvez sortir de la boucle avec le mot clé :Fin");
    
    const [nom, note] = infoEleve.split("=");

    let eleve = {
        nom : nom,
        note : parseInt(note) 
    } 
    listeEleve.push(eleve);
}

for(let i=0; i < listeEleve.length ; i++){
    
    if (noteMax < listeEleve[i].note){
        
        noteMax = listeEleve[i].note;
        nomMax = listeEleve[i].nom;
    }
}

// listeEleve.forEach((eleve,index) =>{
    
//     if (noteMax < eleve.note){

//         noteMax = eleve.note;
//         nomMax = eleve.nom;
//     }

// })

alert(`Félicitation à ${nomMax} qui est le premier avec ${noteMax}`);

