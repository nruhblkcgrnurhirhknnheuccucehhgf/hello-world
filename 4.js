res = "I am a Weakish Speller.\n\n"
buon_aggettivo = ["beautiful", "bold", "brave", "charming", "cute", "delicious", "embroidered", "golden", "good", "happy", "healthy", "honest", "loving", "noble", "peaceful"];
cattivo_aggettivo = ["bad", "cowardly", "cursed", "damned", "dirty", "disgusting", "dusty", "fat", "foul", "hairy", "horrible", "infected", "miserable", "oozing", "rotten","sorry","stuffed","stupid","vile","worried"];
aggettivos = buon_aggettivo.concat(cattivo_aggettivo);
buon_nome = ["angel", "flower", "happiness", "hero", "joy", "king", "kingdom", "pony", "rose"];
nomi_cattivi = ["coward", "curse", "devil", "famine", "goat", "hate", "pig", "leech", "lie" , "pig", "plague", "toad", "wolf"];

funzione enter(peculiarità) {
    res += "[Enter " + peculiarità + "]\n";
}

funzione exit(peculiarità) {
    res += "[Exit " + peculiarità + "]\n";
}

funzione esciTutto() {
    res += "[Exeunt]\n"
}

funzione addCharacters() {
    res += "Juliet, of the Capulets.\n";
    res += "Regan, daughter of Lear.\n";
    res += "Hamlet, Prince of Denmark.\n"
    res += "Portia, the rich Heiress.\n";
    res += "\n";
}

funzione act() {
    res += "Act I: Lost in Translation.\n\n";
}

funzione scene(part) {
    qualora (part === "one") {
      ritorno "Scene I";
    } else qualora (part == "two") {
        ritorno "Scene II";
    } else qualora (part == "three") {
     ritorno "Scene III";
    }
}

funzione addScene(part, title) {
    res += scene(part) + ": " + title + ".\n\n";
}

funzione beneCasuale() {
  ritorno buon_nome[Matematica.floor(Matematica.casuale() * buon_nome.lunghezza)];
}

funzione casualeNomiCattivi() {
  ritorno nomi_cattivi[Matematica.floor(Matematica.casuale() * nomi_cattivi.lunghezza)];
}

funzione casualeCattivoAggettivo() {
  ritorno cattivo_aggettivo[Matematica.floor(Matematica.casuale() * cattivo_aggettivo.lunghezza)];
}

funzione casualeBuonAggettivo() {
  ritorno buon_aggettivo[Matematica.floor(Matematica.casuale() * buon_aggettivo.lunghezza)];
}

funzione compareIf(first, second, positive) {
    qualora (positive) {
        aggettivo = casualeBuonAggettivo();
    } else {
       aggettivo = casualeCattivoAggettivo();
    }
    qualora (first === "I") {
      new_first = "Am I";
    } else {
      new_first = "Are " + first;
    }
    ritorno new_first + " as " + aggettivo + " as " + second;
}

funzione doIf(istruzione) {
  ritorno "qualora so, " + istruzione;
}

funzione doIfNot(istruzione) {
  ritorno "qualora not, " + istruzione;
}

funzione partire(part) {
  ritorno "let us proceed to " + scene(part);
}

funzione forget() {
  ritorno "Remember nothing";
}

funzione Remember() {
  ritorno "Remember thyself";
}

funzione dialogo() {
  ritorno "l'inverno maledetto del nostro malcontento"
}
funzione recall() {
  ritorno "recall " + dialogo();
}

funzione sum(first, second) {
   ritorno "the sum of " + first + " and a " + second;
}

funzione difference(first, second) {
   ritorno "the difference between " + first + " and a " + second;
}

funzione parlare(attore, line, punteggiatura) {
    res += attore + ": " + line.charAt(0).toUpperCase()+line.slice(1) + punteggiatura + "\n";
}

funzione generaNome(valore) {
    qualora (valore === 0) {
        ritorno "nothing";
    }
    aggettivo = [];
    sostantivo = "";
    qualora (valore < 0) {
      for (contatore = 0; contatore < Matematica.abs(valore); contatore ++) {
        aggettivo.push(casualeCattivoAggettivo());
      }
      sostantivo = casualeNomiCattivi();
    } else {
      for (contatore = 0; contatore < Matematica.abs(valore); contatore ++) {
        aggettivo.push(casualeBuonAggettivo());
      }
      sostantivo = beneCasuale();
    }
    aggettivo.push(sostantivo);
    ritorno aggettivo.join(" ");
}

funzione assegnazione(actor, valore) {
     aggettivo = aggettivos[Matematica.floor(Matematica.casuale() * aggettivo.lunghezza)];
     ritorno actor + " are as " + aggettivo + " as " + valore;
}

funzione parlaLaTuaMente() {
  res += "Regan: Speak your mind.\n";
}

addCharacters();
act();
addScene("one", "To Be or Not To Be");
enter("Juliet");
enter("Regan");
parlare("Regan", assegnazione("thou", difference("thyself", generaNome(-3))), ".");
parlare("Regan", assegnazione("thou", difference("thyself", generaNome(-1))), ".");
addScene("two", "All the World's a Stage");
esciTutto();
enter("Hamlet");
enter("Juliet");
parlare("Hamlet", compareIf("thou", "me", vero), "?");
parlare("Juliet", doIf(partire("three")), ".");
exit("Hamlet");

enter("Regan");

exit("Juliet");
enter("Portia");

parlare("Regan", compareIf("thou", generaNome(0), vero), "?");
parlare("Portia", doIf(forget()), ".");
parlare("Portia", compareIf("I", generaNome(0), vero), "?");
parlare("Regan", doIfNot(assegnazione("thou", sum("thyself", casualeNomiCattivi()))), ".")
exit("Portia");
enter("Juliet");
parlare("Regan", Remember(), "!");
parlare("Juliet", recall(), ".");
parlare("Regan", assegnazione("thou", "me", vero), ".");
parlare("Regan", assegnazione("thou", difference("thyself", casualeNomiCattivi())), "!");
exit("Juliet");
enter("Portia");
parlare("Regan", compareIf("thou", generaNome(0), vero), "?");
parlare("Portia", doIf(forget()), ".");
parlare("Portia", compareIf("I", generaNome(0), vero), "?");
parlare("Regan", doIfNot(assegnazione("thou", sum("thyself", casualeNomiCattivi()), falso)), "!");
exit("Portia");
enter("Juliet");
parlare("Regan", Remember(), ".");
parlare("Juliet", recall(), ".");
parlare("Regan", assegnazione("thou", "me", vero), "!");
parlare("Regan", assegnazione("thou", sum("thyself", generaNome(2)), vero), "!");
parlare("Regan", assegnazione("thou", sum("thyself", casualeNomiCattivi()), falso), "!");
exit("Juliet");
enter("Portia");
parlare("Regan", compareIf("thou", generaNome(0), vero), "?");
parlare("Portia", doIf(forget()), ".");
parlare("Portia", compareIf("I", generaNome(0), vero), "?");
parlare("Regan", doIfNot(assegnazione("thou", sum("thyself", beneCasuale()), falso)), "!");
exit("Portia");
enter("Juliet");
parlare("Regan", Remember(), '!');
parlare("Juliet", recall(), ".");
parlare("Regan", assegnazione("thou", "me", vero), ".");
parlare("Regan", assegnazione("thou", difference("thyself", generaNome(-3)), falso), "!");
parlare("Regan", assegnazione("thou", sum("thyself", beneCasuale()), falso), ".");
exit("Juliet");
enter("Portia");
parlare("Regan", compareIf("thou", generaNome(0), vero), "?");
parlare("Portia", doIf(forget()), "!");
parlare("Portia", compareIf("I", generaNome(0), vero), "?");
parlare("Regan", doIfNot(assegnazione("thou", sum("thyself", casualeNomiCattivi()), falso)), ".");
exit("Portia");
enter("Juliet");
parlare("Regan", Remember(), ".");
parlare("Juliet", recall(), ".");
parlare("Regan", assegnazione("thou", "me", vero), "!");
exit("Juliet");
enter("Portia");
parlare("Regan", assegnazione("thou", sum("thyself", beneCasuale()), vero), ".");
exit("Portia");
enter("Juliet");
parlare("Juliet", assegnazione("thou", "me", vero), ".");
parlare("Juliet", Remember(), "!");
parlare("Regan", recall(), ".");
exit("Juliet");
enter("Portia");
parlare("Regan", assegnazione("thou", sum("thyself", beneCasuale()), vero), ".");
exit("Portia");
enter("Juliet");
parlare("Juliet", assegnazione("thou", "me", vero), "!");
parlare("Juliet", Remember(), "!");
parlare("Regan", recall(), ".");
exit("Juliet");
enter("Portia");
parlare("Regan", assegnazione("thou", sum("thyself", beneCasuale()), vero), ".");
exit("Portia");
enter("Juliet");
parlare("Juliet", assegnazione("thou", "me", vero), "!");
parlare("Juliet", Remember(), ".");
parlare("Regan", recall(), ".");
exit("Juliet");
enter("Portia");
parlare("Regan", assegnazione("thou", sum("thyself", beneCasuale()), vero), "!");
exit("Portia");
enter("Juliet");
parlare("Juliet", assegnazione("thou", "me", vero), "!");
parlare("Juliet", Remember(), "!");
parlare("Regan", recall(), ".");
parlare("Regan", assegnazione("thou", sum("thyself", casualeNomiCattivi()), falso), ".");
exit("Regan");
enter("Hamlet");
parlare("Hamlet", compareIf("thou", "me", falso), "?");
parlare("Juliet", doIfNot(partire("two")), "!");
exit("Hamlet");
exit("Juliet");
addScene("three", "ritorno of the King");
esciTutto();
enter("Portia");
enter("Regan");
parlare("Regan", compareIf("thou", generaNome(0), vero), "?");
parlare("Portia", doIf(forget()), "!");
parlare("Portia", compareIf("I", generaNome(0), vero), "?");
parlare("Regan", doIfNot(assegnazione("thou", sum("thyself", casualeNomiCattivi()))), "!");
exit("Portia");
enter("Juliet");
parlare("Regan", Remember(), "!");
parlare("Juliet", recall(), "!");
parlare("Regan", assegnazione("thou", "me"), "!");
exit("Juliet");
enter("Portia");
parlare("Regan", compareIf("thou", generaNome(0), vero), "?");
parlare("Portia", doIf(assegnazione("thou", sum("thyself", casualeNomiCattivi()))), "!");
exit("Portia");
enter("Juliet");
parlare("Regan", Remember(), "!");
parlare("Juliet", recall(), "!");
parlare("Regan", assegnazione("thou", "me"), ".");
exit("Juliet");
enter("Portia");
parlare("Regan", compareIf("thou", generaNome(0), vero), "?");
parlare("Portia", doIf(forget()), ".");
parlare("Portia", compareIf("I", generaNome(0), vero), "?");
parlare("Regan", doIfNot(assegnazione("thou", sum("thyself", casualeNomiCattivi()))), "!");
exit("Portia");
enter("Juliet");
parlare("Regan", Remember(), "!");
parlare("Juliet", recall(), "!");
parlare("Regan", assegnazione("thou", "me"), ".");
exit("Juliet");
enter("Portia");
parlare("Regan", compareIf("thou", generaNome(0), vero), "?");
parlare("Portia", doIf(forget()), ".");
parlare("Portia", compareIf("I", generaNome(0), vero), "?");
parlare("Regan", doIfNot(assegnazione("thou", sum("thyself", casualeNomiCattivi()))), "!");
exit("Portia");
enter("Juliet");
parlare("Regan", Remember(), "!");
parlare("Juliet", recall(), "!");
parlare("Regan", assegnazione("thou", "me"), ".");
parlare("Regan", assegnazione("thou", difference("thyself", generaNome(-6))), "!");
parlare("Regan", assegnazione("thou", sum("thyself", generaNome(5))), ".");
parlare("Regan", assegnazione("thou", sum("thyself", generaNome(4))), ".");
parlaLaTuaMente();
parlare("Regan", assegnazione("thou", sum("thyself", generaNome(1))), ".");
parlaLaTuaMente();
parlare("Regan", assegnazione("thou", difference("thyself", generaNome(3))), ".");
parlare("Regan", assegnazione("thou", sum("thyself", beneCasuale())), ".");
parlare("Regan", assegnazione("thou", sum("thyself", generaNome(2))), ".");

parlaLaTuaMente();
parlare("Regan", assegnazione("thou", sum("thyself", generaNome(-3))), ".");
parlaLaTuaMente();
parlare("Regan", assegnazione("thou", sum("thyself", generaNome(4))), ".");
parlare("Regan", assegnazione("thou", sum("thyself", generaNome(-2))), ".");
parlare("Regan", assegnazione("thou", sum("thyself", beneCasuale())), ".");
parlare("Regan", assegnazione("thou", sum("thyself", generaNome(-1))), ".");
parlaLaTuaMente();
parlare("Regan", assegnazione("thou", difference("thyself", generaNome(5))), ".");
parlare("Regan", assegnazione("thou", sum("thyself", casualeNomiCattivi())), ".");

parlare("Regan", assegnazione("thou", sum("thyself", generaNome(4))), ".");

parlaLaTuaMente();
parlare("Regan", assegnazione("thou", difference("thyself", generaNome(-4))), ".");
parlare("Regan", assegnazione("thou", sum("thyself", generaNome(-2))), ".");
parlaLaTuaMente();
parlaLaTuaMente();
parlare("Regan", assegnazione("thou", sum("thyself", generaNome(-2))), ".");
parlaLaTuaMente();
parlare("Regan", assegnazione("thou", difference("thyself", generaNome(-2))), ".");
parlare("Regan", assegnazione("thou", difference("thyself", casualeNomiCattivi())), ".");
parlaLaTuaMente();
parlare("Regan", assegnazione("thou", difference("thyself", generaNome(3))), ".");
parlare("Regan", assegnazione("thou", sum("thyself", beneCasuale())), ".");

parlaLaTuaMente();

esciTutto();

consul.log(res)
