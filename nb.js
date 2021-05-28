/*Définir une variable comprise entre 0 et 100
Demander à l’utilisateur un nombre jusqu’à ce qu’il trouve le nombre magique.
L’algorithme doit indiquer si le nombre donné est supérieur ou inférieur au nombre magique.
il aura droit a 3 essaies 
Si l’utilisateur trouve le bon nombre le msg « Bravo vous avez trouvé » doit s’afficher !*/

 
var nb_aleatoire = Math.round(Math.random()*100);
var nombre_de_vies = 3; 
while (nombre_de_vies>0)
    {
        var nombre_user = prompt("Devinez le nombre magique entre 0 et 100, il vous reste " + nombre_de_vies+ " vies" );
        if (isNaN(parseInt(nombre_user))== true) // c pas un entier 
            {
                alert( "vous devez rentrer un nombre entier");
                nombre_de_vies++ ; 
            }
        
        else // c un entier 
            if ((nombre_user>=100) || (nombre_user<0) )
                {
                   alert("vous devez rentrer un nombre compris entre 0 et 100 !!") ;
                   nombre_de_vies++;
                }
            else // on est bien entre 0 et 100 
                {
                    if (nombre_user<nb_aleatoire)
                    {
                        alert("le nombre magique est plus grand"); 
                    }
                    else 
                        if (nombre_user>nb_aleatoire)
                        {
                            alert("le nombre magique est plus petit"); 
                        }
                        else  // egalité 
                        { 
                            alert(" bravooo vous avez trouvé le nombre magique");  
                            break;
                        }

                
                }
    nombre_de_vies-- ; 
    } // fin de la boucle while 
if (nombre_de_vies == 0)
{
    document.write("desolé vous avez perdu, le nombre magique était : " + nb_aleatoire);
}