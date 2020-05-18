                                    //  Episode 9 : A table !

/*
let nombreSaisi = prompt("saisir un nombre ");

const multiplication = (nombre) =>{

   for(let i = 0; i <= 12; i++)
   {
        let calcule = nombre*i;

        alert (nombre + "*" + i + " = " +calcule);
   }
};
multiplication(parseInt(nombreSaisi));*/






                            // Episode 10 : Pair ou impair ?

/*let nombreSaisi = prompt("saisir un nombre ");

const pairImpair = (nombre) =>{
    
    if(nombre%2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

pairImpair(parseInt(nombreSaisi));*/







                        // Episode 11 : Le boss /  Episode 1 

/*
let emailSaisi = prompt("Quelle est votre adress mail?");

const verifierEmail = (email) => {
    
    let resultat = /\w+@\w+\.\w+/;
    let test = resultat.test(emailSaisi);

    if(test === true)
    {
    alert("Votre E-mail est: \n"+ email);
    }
    else
    {
    alert("Erreur l’adresse e-mail n’est pas correctement saisie");
    }

};
verifierEmail(emailSaisi);*/







                        // Episode 11 : Le boss /  Episode 2

/*let passwordSaisi = prompt("Faites valider votre Mot de passe: ");


const verifierPassword = (password) => 
{
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
    }
    
};
verifierPassword(passwordSaisi);
*/








                        // Episode 11 : Le boss /  Episode 3


/*let nomSaisi = prompt("Quel est votre nom ? ");
let nombreEnfant= prompt("Combien d'enfant avez-vous ?");

const afficherNombreEnfant = (nom,nombreEnfant) => {


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
    }
};
afficherNombreEnfant(nomSaisi,nombreEnfant);*/







                        // Episode 11 : Le boss /  Episode 4

/*let dateNaissanceSaisi = prompt("Entrez votre date de naissance sous ce format (JJ/MM/AAAA) :");

const verificationFormatNaissance = (dateNaissance) => {

    let verification = /\d{2}\/\d{2}\/\d{4}/g;
    (verification.test(dateNaissance) === true) ? alert(`Format correct!\n ${dateNaissance}`) : alert(`Format incorrect!\n ${dateNaissance}`);

};

verificationFormatNaissance(dateNaissanceSaisi);*/







                        // Episode 11 : Le boss /  Episode 6


/*let numeroJourSaisi = prompt("Entrer un nombre compris entre 1 et 7 désignant un jour de la semaine");

const trouverJourSemaine = (numeroJour) => {

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
    }

}
trouverJourSemaine(numeroJourSaisi);*/







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