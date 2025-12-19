// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
SET variabel sum till 0
SET variabel tip till 0
SET variabel people till 0
SET variabel share till 0
SET variabel numberCheck till FALSE

PRINT "Skriv in summa med siffror: "
WHILE numberCheck är lika med FALSE
    sum tilldelas returen av isNumber(sum)
    IF sum är mindre eller lika med 0
        PRINT "Måste vara höre än 0"
    ELSE
        numberCheck tilldelas TRUE
    ENDIF
ENDWHILE

numberCheck tilldelas FALSE

PRINT "Skriv in antal vänner med siffror: "
WHILE numberCheck är lika med FALSE
    people tilldelas returen av isNumber(people)
    IF people är mindre eller lika med 0
        PRINT "Måste vara högre än 0"
    ELSE
        numberCheck tilldelas TRUE
    ENDIF
ENDWHILE

numberCheck tilldelas FALSE

PRINT "Skriv in dricks (I decimalform, 10% blir 0.1): "
WHILE numberCheck är lika med FALSE
    tip tilldelas returen av isNumber(tip)
    IF tip är mindre än 0
        PRINT "Måste vara 0 eller högre"
    ELSE
        numberCheck tilldelas TRUE
    ENDIF
ENDWHILE

FUNCTION isNumber (tal)
    WHILE TRUE //Behöver ingen variabel för att kolla eftersom RETURN avslutar loopen
        tal tilldelas INPUT (konvertera till NUMBER)
        IF tal är NUMBER
            RETURN tal
        ELSE
            PRINT "Skriv bara in siffror, försök igen"
        ENDIF
    ENDWHILE
ENDFUNCTION

share = (sum + sum * tip) / people
PRINT "Pris per person inklusive dricks är: " + share
*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

SET variabel dictionary till [WEAN, MEAN, MOAN]; // Innehåller ALLA ord i det engelska språket
SET variabel startWord till "weak";
SET variabel endWord till "moon";
SET variabel roundCount till 0;

PRINT "Spelet går ut på att bara genom att ändra 1 bokstav i taget ändra " startWord + " till " + endWord + ". Så det måste vara samma längd på ordet, vara ett riktigt ord och bara skilja sig 1 bokstav i taget från startordet."

WHILE startWord är inte lika med endWord
    SET variabel inputCheck till FALSE

    WHILE inputCheck är lika me FALSE
        SET variabel tempWord till 'temp'
        SET variabel func1Check till FALSE
        SET variabel func2Check till FALSE

        PRINT "Ordet är nuvarande: " + startWord + ", målet är: " + endWord + ". Ändra bara 1 bokstav: "
        tempWord tilldelas INPUT från användaren (konverteras till stora bokstäver)
        func1Check tilldelas returen från wordRules(tempWord, startWord)
        func2Check tilldelas returan från isWordReal(tempWord)

        IF func1Check är lika med TRUE OCH func2Check lika med TRUE // kalla funktionerna rätt i här istället?
            inputCheck tilldelas TRUE
            startWord tilldelas tempWord
        ELSE
            PRINT "Ord inte accepterat, läs igenom reglerna ovan och försök igen!
        ENDIF
    ENDWHILE
    roundCount räknas upp
    IF startWord är inte lika med endWord
        PRINT "Antal rundor: " + roundCount
    ENDIF
ENDWHILE
PRINT "Du vann! Det tog " + roundCount + " rundor."

FUNCTION isWordReal(word)
    IF dictionary inkluderar word
        RETURN TRUE
    ELSE
        RETURN FALSE
    ENDIF
ENDFUNCTION

FUNCTION wordRules(wordOne, wordTwo)
    IF längden på wordOne är inte lika med längden på wordTwo
        RETURN FALSE
    ENDIF
    SET variabel diffCount till 0;
    FOR 'i' tilldelas 0, 'i' är mindre än wordOne längd, 'i' räknas upp
        IF plats 'i' i wordOne är INTE lika med plats 'i' i wordTwo
            Räkna upp variable diffCount
        ENDIF
    ENDFOR
    RETURN diffCount är lika med 1;
ENDFUNCTION
*/
