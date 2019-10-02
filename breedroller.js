// General use functions.
function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}
function arraychanger(myarray, search, change) {
    if (myarray.includes(search)) {
        var index = myarray.indexOf(search);
        myarray[index] = change;
    }
}

// Roll to use the chimera genotype(if applicable) or their normal genotype.
function genoPARENT(parentCHIMERA, parentGENO) {
    if (document.getElementById(parentCHIMERA).value != "") {
        var chanceCHIMERA = Math.floor(Math.random() * 100);
        console.log("The chance used when choosing which geno to choose from theparents: " + chanceCHIMERA);
        if (chanceCHIMERA < 50) {
            let x = document.getElementById(parentCHIMERA).value + " ";
            return x;
        } else {
            let x = document.getElementById(parentGENO).value + " ";
            return x;
        }
    }
    else {
        let x = document.getElementById(parentGENO).value + " ";
        return x;
    }
}

// Individual gene rolling functions based on the parent's genotype. 
function rollerEXTENSION(stringCHOICEDAM, stringCHOICESIRE, homo, hetero1, hetero2, allele, foalGENO) {
    var chanceDAM = Math.floor(Math.random() * 100);
    console.log("The chance for extension (E or e) from dam: " + chanceDAM);
    if (stringCHOICEDAM.includes(homo)) {
        foalGENO.push(allele);
    }
    else if (stringCHOICEDAM.includes(hetero1)) {
        if (chanceDAM < 50) {
            foalGENO.push(allele);
        } else {
            foalGENO.push("e");
        }
    }
    else if (stringCHOICEDAM.includes(hetero2)) {
        if (chanceDAM < 50) {
            foalGENO.push("e");
        } else {
            foalGENO.push(allele);
        }
    }
    else {
        foalGENO.push("e");
    }

    var chanceSIRE = Math.floor(Math.random() * 100);
    console.log("The chance for extension (E or e) from sire: " + chanceSIRE);
    if (stringCHOICESIRE.includes(homo)) {
        foalGENO.push(allele);
    }
    else if (stringCHOICESIRE.includes(hetero1)) {
        if (chanceSIRE < 50) {
            foalGENO.push(allele);
        } else {
            foalGENO.push("e");
        }
    }
    else if (stringCHOICESIRE.includes(hetero2)) {
        if (chanceSIRE < 50) {
            foalGENO.push("e");
        } else {
            foalGENO.push(allele);
        }
    }
    else {
        foalGENO.push("e");
    }

    foalGENO.push("&nbsp;&nbsp;");
}
function rollerAGOUTI(stringCHOICE, foalGENO) {
    var chanceAGOUTI = Math.floor(Math.random() * 100);
    console.log("The chance for agouti (A or a): " + chanceAGOUTI);

    if (stringCHOICE.includes(" AA ")) {
        foalGENO.push("A");
    }
    else if (stringCHOICE.includes(" AtAt ")) {
        foalGENO.push("At");
    }
    else if (stringCHOICE.includes(" A+A+ ")) {
        foalGENO.push("A+");
    }
    else if (stringCHOICE.includes(" aa ")) {
        foalGENO.push("a");
    }
    else if (stringCHOICE.includes(" AAt ")) {
        if (chanceAGOUTI < 50) {
            foalGENO.push("A");
        }
        else {
            foalGENO.push("At");
        }
    }
    else if (stringCHOICE.includes(" AA+ ")) {
        if (chanceAGOUTI < 50) {
            foalGENO.push("A");
        }
        else {
            foalGENO.push("A+");
        }
    }
    else if (stringCHOICE.includes(" Aa ")) {
        if (chanceAGOUTI < 50) {
            foalGENO.push("A");
        }
        else {
            foalGENO.push("a");
        }
    }
    else if (stringCHOICE.includes(" AtA ")) {
        if (chanceAGOUTI < 50) {
            foalGENO.push("At");
        }
        else {
            foalGENO.push("A");
        }
    }
    else if (stringCHOICE.includes(" Ata ")) {
        if (chanceAGOUTI < 50) {
            foalGENO.push("At");
        }
        else {
            foalGENO.push("a");
        }
    }
    else if (stringCHOICE.includes(" A+A ")) {
        if (chanceAGOUTI < 50) {
            foalGENO.push("A+");
        }
        else {
            foalGENO.push("A");
        }
    }
    else if (stringCHOICE.includes(" A+At ")) {
        if (chanceAGOUTI < 50) {
            foalGENO.push("A+");
        }
        else {
            foalGENO.push("At");
        }
    }
    else if (stringCHOICE.includes(" Ata ")) {
        if (chanceAGOUTI < 50) {
            foalGENO.push("At");
        }
        else {
            foalGENO.push("a");
        }
    }
    else if (stringCHOICE.includes(" A+a ")) {
        if (chanceAGOUTI < 50) {
            foalGENO.push("A+");
        }
        else {
            foalGENO.push("a");
        }
    }
    else if (stringCHOICE.includes(" aA ")) {
        if (chanceAGOUTI < 50) {
            foalGENO.push("a");
        }
        else {
            foalGENO.push("A");
        }
    }
    else if (stringCHOICE.includes(" aAt ")) {
        if (chanceAGOUTI < 50) {
            foalGENO.push("a");
        }
        else {
            foalGENO.push("At");
        }
    }
    else if (stringCHOICE.includes(" aA+ ")) {
        if (chanceAGOUTI < 50) {
            foalGENO.push("a");
        }
        else {
            foalGENO.push("A+");
        }
    }
    else {
        foalGENO.push("Agouti not found")
    }
}
function rollerGENES(stringCHOICEDAM, stringCHOICESIRE, homo, hetero1, hetero2, allele, foalGENO) {
    var chanceDAM = Math.floor(Math.random() * 100);
    if (stringCHOICEDAM.includes(homo)) {
        foalGENO.push(allele);
    }
    else if (stringCHOICEDAM.includes(hetero1)) {
        if (chanceDAM < 50) {
            foalGENO.push(allele);
        } else {
            foalGENO.push("n");
        }
    }
    else if (stringCHOICEDAM.includes(hetero2)) {
        if (chanceDAM < 50) {
            foalGENO.push(allele);
        } else {
            foalGENO.push("n");
        }
    }
    else {
        foalGENO.push("n");
    }

    var chanceSIRE = Math.floor(Math.random() * 100);
    if (stringCHOICESIRE.includes(homo)) {
        foalGENO.push(allele);
    }
    else if (stringCHOICESIRE.includes(hetero1)) {
        if (chanceSIRE < 50) {
            foalGENO.push(allele);
        } else {
            foalGENO.push("n");
        }
    }
    else if (stringCHOICESIRE.includes(hetero2)) {
        if (chanceSIRE < 50) {
            foalGENO.push("n");
        } else {
            foalGENO.push(allele);
        }
    }
    else {
        foalGENO.push("n");
    }

    foalGENO.push("&nbsp;&nbsp;");
}
function rollerCRPRL(stringCHOICEDAM, stringCHOICESIRE, foalGENO) {
    var chanceCRPRL = Math.floor(Math.random() * 100);
    console.log("Chance of CRPRL: " + chanceCRPRL);

    if (stringCHOICEDAM.includes("Crprl") && stringCHOICESIRE.includes("Crprl")) {
        if (chanceCRPRL < 50) {
            foalGENO.push("Cr");
        }
        else {
            foalGENO.push("prl");
        }

        if (chanceCRPRL < 50) {
            foalGENO.push("Cr");
        }
        else {
            foalGENO.push("prl");
        }

    }
    else if (stringCHOICEDAM.includes("Crprl")) {
        foalGENO.push("n");
        if (chanceCRPRL < 50) {
            foalGENO.push("Cr");
        }
        else {
            foalGENO.push("prl");
        }
    }
    else if (stringCHOICESIRE.includes("Crprl")) {
        foalGENO.push("n");
        if (chanceCRPRL < 50) {
            foalGENO.push("Cr");
        }
        else {
            foalGENO.push("prl");
        }
    }

    foalGENO.push("&nbsp;&nbsp;");
}
function rollerLPMOD(stringCHOICE, foalGENO) {
    var chanceMOD = Math.floor(Math.random() * 100);
    console.log("Chance of Lp mod: " + chanceMOD);

    if (stringCHOICE.includes("LpLp")) {
        if (stringCHOICE.includes("(PATN1)")) {
            foalGENO.push("(PATN1)");
        }
        else if (stringCHOICE.includes("(PATN2)")) {
            foalGENO.push("(PATN2)");
        }
        else if (stringCHOICE.includes("(roan)")) {
            foalGENO.push("(roan)");
        }
        else if (stringCHOICE.includes("(snow)")) {
            foalGENO.push("(snow)");
        }

        else if (stringCHOICE.includes("PATN1") && stringCHOICE.includes("PATN2")) {
            if (chanceMOD < 50) {
                foalGENO.push("(PATN1)");
            } else {
                foalGENO.push("(PATN2)");
            }
        }
        else if (stringCHOICE.includes("PATN1") && stringCHOICE.includes("roan")) {
            if (chanceMOD < 50) {
                foalGENO.push("(PATN1)");
            } else {
                foalGENO.push("(roan)");
            }
        }
        else if (stringCHOICE.includes("PATN1") && stringCHOICE.includes("snow")) {
            if (chanceMOD < 50) {
                foalGENO.push("(PATN1)");
            } else {
                foalGENO.push("(snow)");
            }
        }
        else if (stringCHOICE.includes("PATN2") && stringCHOICE.includes("roan")) {
            if (chanceMOD < 50) {
                foalGENO.push("(PATN2)");
            } else {
                foalGENO.push("(roan)");
            }
        }
        else if (stringCHOICE.includes("PATN2") && stringCHOICE.includes("snow")) {
            if (chanceMOD < 50) {
                foalGENO.push("(PATN2)");
            } else {
                foalGENO.push("(snow)");
            }
        }
        else if (stringCHOICE.includes("roan") && stringCHOICE.includes("snow")) {
            if (chanceMOD < 50) {
                foalGENO.push("(roan)");
            } else {
                foalGENO.push("(snow)");
            }
        }
    }
    else if (stringCHOICE.includes("nLp")) {
        if (stringCHOICE.includes("(roan)")) {
            if (chanceMOD < 50) {
                foalGENO.push("(roan)");
            }
        }
        else if (stringCHOICE.includes("(snow)")) {
            if (chanceMOD < 50) {
                foalGENO.push("(snow)");
            }
        }
        else if (stringCHOICE.includes("(PATN1)")) {
            if (chanceMOD < 50) {
                foalGENO.push("(PATN1)");
            }
        }
        else if (stringCHOICE.includes("(PATN2)")) {
            if (chanceMOD < 50) {
                foalGENO.push("(PATN2)");
            }
        }
    }
}

function rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, MutMut, nMut, Mutn, Mut, foalGENO) {
    stringCHOICEDAM = stringCHOICEDAM.replace(Mutn, nMut);
    stringCHOICESIRE = stringCHOICESIRE.replace(Mutn, nMut);

    if (stringCHOICEDAM.includes(MutMut)) {
        if (stringCHOICESIRE.includes(MutMut)) {
            foalGENO.push(Mut + Mut + "&nbsp;&nbsp;");
        }
        else if (stringCHOICESIRE.includes(nMut)) {
            foalGENO.push(Mut + Mut + "&nbsp;&nbsp;");
        }
        else {
            foalGENO.push("n" + Mut + "&nbsp;&nbsp;");
        }
    }
    else if (stringCHOICEDAM.includes(nMut)) {
        if (stringCHOICESIRE.includes(MutMut)) {
            foalGENO.push(Mut + Mut + "&nbsp;&nbsp;");
        }
        else if (stringCHOICESIRE.includes(nMut)) {
            foalGENO.push("n" + Mut + "&nbsp;&nbsp;");
        }
        else if (!stringCHOICEDAM.includes(nMut) && !stringCHOICESIRE.includes(nMut)) {
            return;
        }
    }
    else if (stringCHOICESIRE.includes(MutMut)) {
        if (stringCHOICEDAM.includes(MutMut)) {
            foalGENO.push(Mut + Mut + "&nbsp;&nbsp;");
        }
        else if (stringCHOICEDAM.includes(nMut)) {
            foalGENO.push(Mut + Mut + "&nbsp;&nbsp;");
        }
        else {
            foalGENO.push("n" + Mut + "&nbsp;&nbsp;");
        }
    }
    else if (stringCHOICESIRE.includes(nMut)) {
        if (stringCHOICEDAM.includes(MutMut)) {
            foalGENO.push(Mut + Mut + "&nbsp;&nbsp;");
        }
        else if (stringCHOICEDAM.includes(nMut)) {
            foalGENO.push("n" + Mut + "&nbsp;&nbsp;");
        }
        else if (!stringCHOICEDAM.includes(nMut) && !stringCHOICESIRE.includes(nMut)) {
            return;
        }
    }
}
function rollerHALLOWEENMUT(stringCHOICEDAM, stringCHOICESIRE, MutMut, nMut, Mutn, Mut, foalGENO) {
    var chance = Math.floor(Math.random() * 100);
    console.log("Chance for halloween mutation: " + chance);

    stringCHOICEDAM = stringCHOICEDAM.replace(Mutn, nMut);
    stringCHOICESIRE = stringCHOICESIRE.replace(Mutn, nMut);

    if (stringCHOICEDAM.includes(MutMut)) {
        if (stringCHOICESIRE.includes(MutMut)) {
            if (chance < 50) {
                foalGENO.push(Mut + Mut + "&nbsp;&nbsp;");
            }
            else {
                foalGENO.push("n" + Mut + "&nbsp;&nbsp;");
            }
        }
        else if (stringCHOICESIRE.includes(nMut)) {
            if (chance < 25) {
                foalGENO.push(Mut + Mut + "&nbsp;&nbsp;");
            }
            else {
                foalGENO.push("n" + Mut + "&nbsp;&nbsp;");
            }
        }
        else {
            foalGENO.push("n" + Mut + "&nbsp;&nbsp;");
        }
    }
    else if (stringCHOICEDAM.includes(nMut)) {
        if (stringCHOICESIRE.includes(MutMut)) {
            if (chance < 25) {
                foalGENO.push(Mut + Mut + "&nbsp;&nbsp;");
            }
            else {
                foalGENO.push("n" + Mut + "&nbsp;&nbsp;");
            }
        }
        else if (stringCHOICESIRE.includes(nMut)) {
            if (chance < 10) {
                foalGENO.push(Mut + Mut + "&nbsp;&nbsp;");
            }
            else if (10 <= chance && chance < 50) {
                foalGENO.push("n" + Mut + "&nbsp;&nbsp;");
            }
        }
    }
    else if (stringCHOICESIRE.includes(MutMut)) {
        if (stringCHOICEDAM.includes(MutMut)) {
            if (chance < 50) {
                foalGENO.push(Mut + Mut + "&nbsp;&nbsp;");
            }
            else {
                foalGENO.push("n" + Mut + "&nbsp;&nbsp;");
            }
        }
        else if (stringCHOICEDAM.includes(nMut)) {
            if (chance < 25) {
                foalGENO.push(Mut + Mut + "&nbsp;&nbsp;");
            }
            else {
                foalGENO.push("n" + Mut + "&nbsp;&nbsp;");
            }
        }
        else {
            foalGENO.push("n" + Mut + "&nbsp;&nbsp;");
        }
    }
    else if (stringCHOICESIRE.includes(nMut)) {
        if (stringCHOICEDAM.includes(MutMut)) {
            if (chance < 25) {
                foalGENO.push(Mut + Mut + "&nbsp;&nbsp;");
            }
            else {
                foalGENO.push("n" + Mut + "&nbsp;&nbsp;");
            }
        }
        else if (stringCHOICEDAM.includes(nMut)) {
            if (chance < 10) {
                foalGENO.push(Mut + Mut + "&nbsp;&nbsp;");
            }
            else if (10 <= chance && chance < 50) {
                foalGENO.push("n" + Mut + "&nbsp;&nbsp;");
            }
        }
    }
}
function rollerKAGEMUT(stringCHOICEDAM, stringCHOICESIRE, foalGENO) {
    var chance = Math.floor(Math.random() * 100);
    console.log("Chance for Kage mutation: " + chance);
    stringCHOICEDAM = stringCHOICEDAM.replace(" Kagn ", " nKag ");
    stringCHOICESIRE = stringCHOICESIRE.replace(" Kagn ", " nKag ");

    if (stringCHOICEDAM.includes(" KagKag ")) {
        if (stringCHOICESIRE.includes(" KagKag ")) {
            foalGENO.push("KagKag&nbsp;&nbsp;");
        }
        else if (stringCHOICESIRE.includes(" nKag ")) {
            foalGENO.push("KagKag&nbsp;&nbsp;");
        }
        else {
            foalGENO.push("nKag&nbsp;&nbsp;");
        }
    }
    else if (stringCHOICEDAM.includes(" nKag ")) {
        if (stringCHOICESIRE.includes(" KagKag ")) {
            foalGENO.push("KagKag&nbsp;&nbsp;");
        }
        else if (stringCHOICESIRE.includes(" nKag ")) {
            if (chance < 75) {
                foalGENO.push("nKag&nbsp;&nbsp;");
            }
            else {
                foalGENO.push("KagKag&nbsp;&nbsp;");
            }
        }
        else if (!stringCHOICESIRE.includes(" KagKag ") && !stringCHOICESIRE.includes(" nKag ")) {
            if (chance < 50) {
                foalGENO.push("nKag&nbsp;&nbsp;");
            }
            else {
                return;
            }
        }
    }
    else if (stringCHOICESIRE.includes(" KagKag ")) {
        if (stringCHOICEDAM.includes(" KagKag ")) {
            foalGENO.push("KagKag");
            foalGENO.push("&nbsp;&nbsp;")
        }
        else if (stringCHOICEDAM.includes(" nKag ")) {
            foalGENO.push("KagKag");
            foalGENO.push("&nbsp;&nbsp;")
        }
        else {
            foalGENO.push("nKag");
            foalGENO.push("&nbsp;&nbsp;")
        }
    }
    else if (stringCHOICESIRE.includes(" nKag ")) {
        if (stringCHOICEDAM.includes(" KagKag ")) {
            foalGENO.push("KagKag");
            foalGENO.push("&nbsp;&nbsp;")
        }
        else if (stringCHOICEDAM.includes(" nKag ")) {
            if (chance < 75) {
                foalGENO.push("nKag&nbsp;&nbsp;");
            }
            else {
                foalGENO.push("KagKag&nbsp;&nbsp;");
            }
        }
        else if (!stringCHOICEDAM.includes(" KagKag ") && !stringCHOICEDAM.includes(" nKag ")) {
            if (chance < 50) {
                foalGENO.push("nKag&nbsp;&nbsp;");
            }
            else {
                return;
            }
        }
    }
}
function rollerBEJUMUT(stringCHOICEDAM, stringCHOICESIRE, foalGENO) {
    var chance = Math.floor(Math.random() * 100);
    console.log("Chance for Beju mutation: " + chance);

    stringCHOICEDAM = stringCHOICEDAM.replace(" Ben ", " nBe ");
    stringCHOICESIRE = stringCHOICESIRE.replace(" Ben ", " nBe ");

    if (stringCHOICEDAM.includes(" BeBe ")) {
        if (stringCHOICESIRE.includes(" BeBe ")) {
            foalGENO.push(" BeBe&nbsp;&nbsp;");
        }
        else if (stringCHOICESIRE.includes(" nBe ")) {
            foalGENO.push(" BeBe&nbsp;&nbsp;");
        }
        else {
            foalGENO.push("nBe&nbsp;&nbsp;");
        }
    }
    else if (stringCHOICEDAM.includes(" nBe ")) {
        if (stringCHOICESIRE.includes(" BeBe ")) {
            foalGENO.push(" BeBe&nbsp;&nbsp;");
        }
        else if (stringCHOICESIRE.includes(" nBe ")) {
            if (chance < 50) {
                foalGENO.push("nBe&nbsp;&nbsp;");
            }
            else {
                foalGENO.push("BeBe&nbsp;&nbsp;");
            }
        }
        else if (!stringCHOICESIRE.includes(" BeBe ") && !stringCHOICESIRE.includes(" nBe ")) {
            if (chance < 50) {
                foalGENO.push("nBe&nbsp;&nbsp;");
            }
            else {
                return;
            }
        }
    }
    else if (stringCHOICESIRE.includes(" BeBe ")) {
        if (stringCHOICEDAM.includes(" BeBe ")) {
            foalGENO.push("BeBe&nbsp;&nbsp;");
        }
        else if (stringCHOICEDAM.includes(" nBe ")) {
            foalGENO.push("BeBe&nbsp;&nbsp;");
        }
        else {
            foalGENO.push("nBe&nbsp;&nbsp;");
        }
    }
    else if (stringCHOICESIRE.includes(" nBe ")) {
        if (stringCHOICEDAM.includes(" BeBe ")) {
            foalGENO.push("BeBe&nbsp;&nbsp;");
        }
        else if (stringCHOICEDAM.includes(" nBe ")) {
            if (chance < 50) {
                foalGENO.push("nBe&nbsp;&nbsp;");
            }
            else {
                foalGENO.push("BeBe&nbsp;&nbsp;");
            }
        }
        else if (!stringCHOICEDAM.includes(" BeBe ") && !stringCHOICEDAM.includes(" nBe ")) {
            if (chance < 50) {
                foalGENO.push("nBe&nbsp;&nbsp;");
            }
            else {
                return;
            }
        }
    }
}
function rollerTANJOUTAMAMUT(stringCHOICEDAM, stringCHOICESIRE, foalGENO) {
    var chance = Math.floor(Math.random() * 100);
    console.log("Chance for Tanjoutama mutation: " + chance);

    stringCHOICEDAM = stringCHOICEDAM.replace(" Tann ", " nTan ");
    stringCHOICESIRE = stringCHOICESIRE.replace(" Tann ", " nTan ");

    if (stringCHOICEDAM.includes(" TanTan ")) {
        if (stringCHOICESIRE.includes(" TanTan ")) {
            foalGENO.push("TanTan&nbsp;&nbsp;");
        }
        else if (stringCHOICESIRE.includes(" nTan ")) {
            foalGENO.push("TanTan&nbsp;&nbsp;");
        }
        else {
            foalGENO.push("nTan&nbsp;&nbsp;");
        }
    }
    else if (stringCHOICEDAM.includes(" nTan ")) {
        if (stringCHOICESIRE.includes(" TanTan ")) {
            foalGENO.push("TanTan&nbsp;&nbsp;");
        }
        else if (stringCHOICESIRE.includes(" nTan ")) {
            foalGENO.push("nTan&nbsp;&nbsp;");
        }
        else if (!stringCHOICEDAM.includes(" nTan ") && !stringCHOICESIRE.includes(" nTan ")) {
            if (chance < 75) {
                foalGENO.push("nTan&nbsp;&nbsp;");
            }
            else {
                return;
            }
        }
    }
    else if (stringCHOICESIRE.includes(" TanTan ")) {
        if (stringCHOICEDAM.includes(" TanTan ")) {
            foalGENO.push("TanTan&nbsp;&nbsp;");
        }
        else if (stringCHOICEDAM.includes(" nTan ")) {
            foalGENO.push("TanTan&nbsp;&nbsp;");
        }
        else {
            foalGENO.push("nTan&nbsp;&nbsp;");
        }
    }
    else if (stringCHOICESIRE.includes(" nTan ")) {
        if (stringCHOICEDAM.includes(" TanTan ")) {
            foalGENO.push("TanTan&nbsp;&nbsp;");
        }
        else if (stringCHOICEDAM.includes(" nTan ")) {
            foalGENO.push("nTan&nbsp;&nbsp;");
        }
        else if (!stringCHOICEDAM.includes(" nTan ") && !stringCHOICESIRE.includes(" nTan ")) {
            if (chance < 75) {
                foalGENO.push("nTan&nbsp;&nbsp;");
            }
            else {
                return;
            }
        }
    }
}

// Foal genotype roller.
function foalGENOTYPE() {
    // Determine which parent genotype string to use if applicable.
    var stringCHOICEDAM = genoPARENT("DamChimera", "DamGeno");
    console.log("The chosen string for the dam is: " + stringCHOICEDAM);
    var stringCHOICESIRE = genoPARENT("SireChimera", "SireGeno");
    console.log("The chosen string for the sire is: " + stringCHOICESIRE);

    // Declare foal genotype array that will be used to store rolled values.
    var foalGENO = [];

    // Roll for every natural gene.
    rollerEXTENSION(stringCHOICEDAM, stringCHOICESIRE, "EE ", "eE ", "Ee ", "E", foalGENO)
    rollerAGOUTI(stringCHOICEDAM, foalGENO);
    rollerAGOUTI(stringCHOICESIRE, foalGENO);
    foalGENO.push("&nbsp;&nbsp;")
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " WW ", " Wn ", " nW ", "W", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " GG ", " Gn ", " nG ", "G", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " ZZ ", " Zn ", " nZ ", "Z", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " StySty ", " Styn ", " nSty ", "Sty", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " ff ", " fn ", " nf ", "f", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " ChCh ", " Chn ", " nCh ", "Ch", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " CrCr ", " Crn ", " nCr ", "Cr", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " DD ", " Dn ", " nD ", "D", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " RR ", " Rn ", " nR ", "R", foalGENO); // Tenjigoku specific
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " RnRn ", " nRn ", " nRn ", "Rn", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " prlprl ", " prln ", " nprl ", "prl", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " musmus ", " musn ", " nmus ", "mus", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " OO ", " On ", " nO ", "O", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " TT ", " Tn ", " nT ", "T", foalGENO); // Tenjigoku specific
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " TbTb ", " Tbn ", " nTb ", "Tb", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " SbSb ", " Sbn ", " nSb ", "Sb", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " RbRb ", " Rbn ", " nRb ", "Rb", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " SplSpl ", " Spln ", " nSpl ", "Spl", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " LpLp ", " Lpn ", " nLp ", "Lp", foalGENO);
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " PngPng ", " Pngn ", " nPng ", "Png", foalGENO);
    rollerCRPRL(stringCHOICEDAM, stringCHOICESIRE, foalGENO);

    // Roll for mutation genes.
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " AkiAki ", " nAki ", " Akin ", "Aki", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " BuBu ", " nBu ", " Bun ", "Bu", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " FeFe ", " nFe ", " Fen ", "Fe", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " GinGin ", " nGin ", " Ginn ", "Gin", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " HaHa ", " nHa ", " Han ", "Ha", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " HanHan ", " nHan ", " Hann ", "Han", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " HeHe ", " nHe ", " Hen ", "He", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " IroIro ", " nIro ", " Iron ", "Iro", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " KaKa ", " nKa ", " Kan ", "Ka", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " KinKin ", " nKin ", " Kinn ", "Kin",foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " KiKi ", " nKi ", " Kin ", "Ki", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " KirKir ", " nKir ", " Kirn ", "Kir", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " KoiKoi ", " nKoi ", " Koin ", "Koi", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " KoKo ", " nKo ", " Kon ", "Ko", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " KjKj ", " nKj ", " Kjn ", "Kj", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " KuKu ", " nKu ", " Kun ", "Ku", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " MaMa ", " nMa ", " Man ", "Ma", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " NiNi ", " nNi ", " Nin ", "Ni", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " NyNy ", " nNy ", " Nyn ", "Ny", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " OkaOka ", " nOka ", " Okan ", "Oka", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " RaRa ", " nRa ", " Ran ", "Ra", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " RiRi ", " nRi ", " Rin ", "Ri", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " RibRib ", " nRib ", " Ribn ", "Rib", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " RyRy ", " nRy ", " Ryn ", "Ry", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " SakSak ", " nSak ", " Sakn ", "Sak", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " SeiSei ", " nSei ", " Sein ", "Sei", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " ShiShi ", " nShi ", " Shin ", "Shi", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " SogSog ", " nSog ", " Sogn ", "Sog", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " TaiTai ", " nTai ", " Tain ", "Tai", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " ToTo ", " nTo ", " Ton ", "To", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " TsuTsu ", " nTsu ", " Tsun ", "Tsu", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " YaYa ", " nYa ", " Yan ", "Ya", foalGENO);

    // Roll for christmas mutation genes.
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " AmeAme ", " nAme ", " Amen ", "Ame", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " FuFu ", " nFu ", " Fun ", "Fu", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " OkuOku ", " nOku ", " Okun ", "Oku", foalGENO);
    rollerGENERALMUT(stringCHOICEDAM, stringCHOICESIRE, " ShoSho ", " nSho ", " Shon ", "Sho", foalGENO);

    // December special christmas mutations.
    var dt = new Date();
    var month = dt.getMonth();
    if (month === 11) {
        var chanceXMAS = Math.floor(Math.random() * 100);
        console.log("The chance for extra xmas mutation for december: " + chanceXMAS);
        if (foalGENO.includes("nAme") || foalGENO.includes(" AmeAme ")) {
            if (chanceXMAS < 20) {
                var mutationnAme = ["nFu&nbsp;&nbsp;", "nOku&nbsp;&nbsp;", "nSho&nbsp;&nbsp;"];
                var valuenAme = mutationnAme[Math.floor(Math.random() * mutationnAme.length)];
                foalGENO.push(valuenAme);
            }
            else if (20 <= chanceXMAS < 30) {
                var mutationAmeAme = ["FuFu&nbsp;&nbsp;", "OkuOku&nbsp;&nbsp;", "ShoSho&nbsp;&nbsp;"];
                var valueAmeAme = mutationAmeAme[Math.floor(Math.random() * mutationAmeAme.length)];
                foalGENO.push(valueAmeAme);
            }
        }
        else if (foalGENO.includes("nFu") || foalGENO.includes(" FuFu ")) {
            if (chanceXMAS < 20) {
                var mutationnFu = ["nAme&nbsp;&nbsp;", "nOku&nbsp;&nbsp;", "nSho&nbsp;&nbsp;"];
                var valuenFu = mutationnFu[Math.floor(Math.random() * mutationnFu.length)];
                foalGENO.push(valuenFu);
            }
            else if (20 <= chanceXMAS < 30) {
                var mutationFuFu = ["AmeAme&nbsp;&nbsp;", "OkuOku&nbsp;&nbsp;", "ShoSho&nbsp;&nbsp;"];
                var valueFuFu = mutationFuFu[Math.floor(Math.random() * mutationFuFu.length)];
                foalGENO.push(valueFuFu);
            }
        }
        else if (foalGENO.includes("nOku") || foalGENO.includes(" OkuOku ")) {
            if (chanceXMAS < 20) {
                var mutationnOku = ["nAme&nbsp;&nbsp;", "nFu&nbsp;&nbsp;", "nSho&nbsp;&nbsp;"];
                var valuenOku = mutationnOku[Math.floor(Math.random() * mutationnOku.length)];
                foalGENO.push(valuenOku);
            }
            else if (20 <= chanceXMAS < 30) {
                var mutationOkuOku = ["AmeAme&nbsp;&nbsp;", "FuFu&nbsp;&nbsp;", "ShoSho&nbsp;&nbsp;"];
                var valueOkuOku = mutationOkuOku[Math.floor(Math.random() * mutationOkuOku.length)];
                foalGENO.push(valueOkuOku);
            }
        }
        else if (foalGENO.includes("nSho") || foalGENO.includes(" ShoSho ")) {
            if (chanceXMAS < 20) {
                var mutationnSho = ["nAme&nbsp;&nbsp;", "nFu&nbsp;&nbsp;", "nOku&nbsp;&nbsp;"];
                var valuenSho = mutationnSho[Math.floor(Math.random() * mutationnSho.length)];
                foalGENO.push(valuenSho);
            }
            else if (20 <= chanceXMAS < 30) {
                var mutationShoSho = ["AmeAme&nbsp;&nbsp;", "FuFu&nbsp;&nbsp;", "OkuOku&nbsp;&nbsp;"];
                var valueShoSho = mutationShoSho[Math.floor(Math.random() * mutationShoSho.length)];
                foalGENO.push(valueShoSho);
            }
        }
        console.log("It's december!");
    }
    else {
        console.log("It's not december yet!");
    }

    // Roll for halloween mutation genes.
    rollerHALLOWEENMUT(stringCHOICEDAM, stringCHOICESIRE, " HiHi ", " nHi ", " Hin ", "Hi", foalGENO);
    rollerHALLOWEENMUT(stringCHOICEDAM, stringCHOICESIRE, " DoDo ", " nDo ", " Don ", "Do", foalGENO);
    rollerHALLOWEENMUT(stringCHOICEDAM, stringCHOICESIRE, " YuYu ", " nYu ", " Yun ", "Yu", foalGENO);
    rollerHALLOWEENMUT(stringCHOICEDAM, stringCHOICESIRE, " OnOn ", " nOn ", " Onn ", "On", foalGENO);
    rollerHALLOWEENMUT(stringCHOICEDAM, stringCHOICESIRE, " NuiNui ", " nNui ", " Nuin ", "Nui", foalGENO);
    rollerHALLOWEENMUT(stringCHOICEDAM, stringCHOICESIRE, " ZonZon ", " nZon ", " Zonn ", "Zon", foalGENO);
    rollerHALLOWEENMUT(stringCHOICEDAM, stringCHOICESIRE, " ShaSha ", " nSha ", " Shan ", "Sha", foalGENO);
    rollerHALLOWEENMUT(stringCHOICEDAM, stringCHOICESIRE, " ShinShin ", " nShin ", " Shinn ", "Shin", foalGENO);

    // Roll for unique mutation genes.
    rollerKAGEMUT(stringCHOICEDAM, stringCHOICESIRE, foalGENO);
    rollerBEJUMUT(stringCHOICEDAM, stringCHOICESIRE, foalGENO);
    rollerTANJOUTAMAMUT(stringCHOICEDAM, stringCHOICESIRE, foalGENO);
    rollerHALLOWEENMUT(stringCHOICEDAM, stringCHOICESIRE, " RabRab ", " nRab ", " Rabn ", "Rab", foalGENO); // not a halloween mut, but same chance %s
    rollerGENES(stringCHOICEDAM, stringCHOICESIRE, " OmOm ", " nOm ", " Omn ", "Om", foalGENO);

    // Lp modifiers at the end.
    rollerLPMOD(stringCHOICEDAM, foalGENO);
    rollerLPMOD(stringCHOICESIRE, foalGENO);
    foalGENO.push("&nbsp;&nbsp;");

    // Bring the foal array together into a string, remove any nn, and swap for readable nGene.
    var foalRESULT = foalGENO.join();
    foalRESULT = foalRESULT.replace(/,/g, "");
    console.log("foalRESULT before any order changes: " + foalRESULT);
    foalRESULT = foalRESULT.split("&nbsp;nn&nbsp;").join('');
    foalRESULT = foalRESULT.replace("eE&nbsp;", "Ee&nbsp;")
        .replace("&nbsp;aA&nbsp;", "&nbsp;Aa&nbsp;")
        .replace("&nbsp;aAt&nbsp;", "&nbsp;Ata&nbsp;")
        .replace("&nbsp;aA+&nbsp;", "&nbsp;A+a&nbsp;")
        .replace("&nbsp;Dn&nbsp;", "&nbsp;nD&nbsp;")
        .replace("&nbsp;On&nbsp;", "&nbsp;nO&nbsp;")
        .replace("&nbsp;Gn&nbsp;", "&nbsp;nG&nbsp;")
        .replace("&nbsp;Wn&nbsp;", "&nbsp;nW&nbsp;")
        .replace("&nbsp;fn&nbsp;", "&nbsp;nf&nbsp;")
        .replace("&nbsp;Zn&nbsp;", "&nbsp;nZ&nbsp;")
        .replace("&nbsp;Rn&nbsp;", "&nbsp;nR&nbsp;") // Tenjigoku specific
        .replace("&nbsp;Rnn&nbsp;", "&nbsp;nRn&nbsp;")
        .replace("&nbsp;Lpn&nbsp;", "&nbsp;nLp&nbsp;")
        .replace("&nbsp;Tn&nbsp;", "&nbsp;nT&nbsp;") // Tenjigoku specific
        .replace("&nbsp;Tbn&nbsp;", "&nbsp;nTb&nbsp;")
        .replace("&nbsp;Sbn&nbsp;", "&nbsp;nSb&nbsp;")
        .replace("&nbsp;Rbn&nbsp;", "&nbsp;nRb&nbsp;")
        .replace("&nbsp;Crn&nbsp;", "&nbsp;nCr&nbsp;")
        .replace("&nbsp;Chn&nbsp;", "&nbsp;nCh&nbsp;")
        .replace("&nbsp;prln&nbsp;", "&nbsp;nprl&nbsp;")
        .replace("&nbsp;musn&nbsp;", "&nbsp;nmus&nbsp;")
        .replace("&nbsp;Spln&nbsp;", "&nbsp;nSpl&nbsp;")
        .replace("&nbsp;Styn&nbsp;", "&nbsp;nSty&nbsp;")
        .replace("&nbsp;Pngn&nbsp;", "&nbsp;nPng&nbsp;")
        .replace(")(", "")
        .replace("PATN2PATN1", "PATN1PATN2")
        .replace("snowPATN1", "PATN1snow")
        .replace("roanPATN1", "PATN1roan")
        .replace("snowPATN2", "PATN2snow")
        .replace("roanPATN2", "PATN2roan")
        .replace("Omn", "nOm");
    console.log("After Gene noGene swaps, combining of separate Lp mods and removal of nn: " + foalRESULT);

    // If there are nprl and nCr duplicates, merge.
    var prlocc = occurrences(foalRESULT, "&nbsp;nprl&nbsp;");
    console.log("The number of occurences of nprl is " + prlocc);
    var Crocc = occurrences(foalRESULT, "&nbsp;nCr&nbsp;");
    console.log("The number of occurences of nCr is " + Crocc);
    if (prlocc > 1) {
        foalRESULT = foalRESULT.replace(/&nbsp;nprl&nbsp;/g, "") + "&nbsp;prlprl&nbsp;";
    }
    if (Crocc > 1) {
        foalRESULT = foalRESULT.replace(/&nbsp;nCr&nbsp;/g, "") + "&nbsp;CrCr&nbsp;";
    }
    console.log("After nprl and nCr duplicate check: " + foalRESULT);

    // If there are nprl and an nCr, merge to form Crprl.
    if (foalRESULT.includes("&nbsp;nprl&nbsp;") && foalRESULT.includes("&nbsp;nCr&nbsp;")) {
        foalRESULT = foalRESULT.replace("&nbsp;nprl&nbsp;", "")
            .replace("&nbsp;nCr&nbsp;", "");
        foalRESULT = foalRESULT + "&nbsp;Crprl&nbsp;";
    }
    console.log("After nprl nCr merge check: " + foalRESULT);

    // If there are double mods, merge.
    foalRESULT = foalRESULT.replace("PATN1PATN1", "PATN1")
        .replace("PATN2PATN2", "PATN2")
        .replace("roanroan", "roan")
        .replace("snowsnow", "snow");
    console.log("After double mod check: " + foalRESULT);

    // If there are multiple mods, but only nLp.
    var chanceCHOOSEMOD = Math.floor(Math.random() * 100);
    console.log("The rolled chance for choosing mod when it's only nLp: " + chanceCHOOSEMOD);

    if (!foalRESULT.includes("LpLp") && foalRESULT.includes("nLp")) {
        if (foalRESULT.includes("PATN1") && foalRESULT.includes("roan")) {
            console.log("Before nLpDoubleModroller change: " + foalRESULT);
            if (chanceCHOOSEMOD < 50) {
                foalRESULT = foalRESULT.replace("PATN1", "");
                console.log("After nLpDoubleModroller change: " + foalRESULT);
            }
            else {
                foalRESULT = foalRESULT.replace("roan", "");
                console.log("After nLpDoubleModroller change: " + foalRESULT);
            }
        }
        else if (foalRESULT.includes("PATN1") && foalRESULT.includes("snow")) {
            console.log("Before nLpDoubleModroller change: " + foalRESULT);
            if (chanceCHOOSEMOD < 50) {
                foalRESULT = foalRESULT.replace("PATN1", "");
                console.log("After nLpDoubleModroller change: " + foalRESULT);
            }
            else {
                foalRESULT = foalRESULT.replace("snow", "");
                console.log("After nLpDoubleModroller change: " + foalRESULT);
            }
        }
        else if (foalRESULT.includes("PATN1") && foalRESULT.includes("PATN2")) {
            console.log("Before nLpDoubleModroller change: " + foalRESULT);
            if (chanceCHOOSEMOD < 50) {
                foalRESULT = foalRESULT.replace("PATN1", "");
                console.log("After nLpDoubleModroller change: " + foalRESULT);
            }
            else {
                foalRESULT = foalRESULT.replace("PATN2", "");
                console.log("After nLpDoubleModroller change: " + foalRESULT);
            }
        }
        else if (foalRESULT.includes("PATN2") && foalRESULT.includes("roan")) {
            console.log("Before nLpDoubleModroller change: " + foalRESULT);
            if (chanceCHOOSEMOD < 50) {
                foalRESULT = foalRESULT.replace("PATN2", "");
                console.log("After nLpDoubleModroller change: " + foalRESULT);
            }
            else {
                foalRESULT = foalRESULT.replace("roan", "");
                console.log("After nLpDoubleModroller change: " + foalRESULT);
            }
        }
        else if (foalRESULT.includes("PATN2") && foalRESULT.includes("snow")) {
            console.log("Before nLpDoubleModroller change: " + foalRESULT);
            if (chanceCHOOSEMOD < 50) {
                foalRESULT = foalRESULT.replace("PATN2", "");
                console.log("After nLpDoubleModroller change: " + foalRESULT);
            }
            else {
                foalRESULT = foalRESULT.replace("snow", "");
                console.log("After nLpDoubleModroller change: " + foalRESULT);
            }
        }
        else if (foalRESULT.includes("roan") && foalRESULT.includes("snow")) {
            console.log("Before nLpDoubleModroller change: " + foalRESULT);
            if (chanceCHOOSEMOD < 50) {
                foalRESULT = foalRESULT.replace("roan", "");
                console.log("After nLpDoubleModroller change: " + foalRESULT);
            }
            else {
                foalRESULT = foalRESULT.replace("snow", "");
                console.log("After nLpDoubleModroller change: " + foalRESULT);
            }
        }
    }

    console.log("After double mod check for nLp: " + foalRESULT);

    // If there are no Lp, remove mod.
    if (!foalRESULT.includes("LpLp") && !foalRESULT.includes("nLp")) {
        console.log("Does not include LpLp and nLp.")
        if (foalRESULT.includes("PATN1")) {
            foalRESULT = foalRESULT.replace(/\(|\)/g, "");
            foalRESULT = foalRESULT.replace("PATN1", "");
        }
        if (foalRESULT.includes("PATN2")) {
            foalRESULT = foalRESULT.replace(/\(|\)/g, "");
            foalRESULT = foalRESULT.replace("PATN2", "");
        }
        if (foalRESULT.includes("roan")) {
            foalRESULT = foalRESULT.replace(/\(|\)/g, "");
            foalRESULT = foalRESULT.replace("roan", "");
        }
        if (foalRESULT.includes("snow")) {
            foalRESULT = foalRESULT.replace(/\(|\)/g, "");
            foalRESULT = foalRESULT.replace("snow", "");
        }
    }
    console.log("After removal of mod because of no Lp: " + foalRESULT);

    // If there are no mod, remove Lp.
    console.log("Does it include LpLp? " + foalRESULT.includes("LpLp"));
    console.log("Does it include nLp? " + foalRESULT.includes("nLp"));

    if (!foalRESULT.includes("PATN1") && !foalRESULT.includes("PATN2") && !foalRESULT.includes("roan") && !foalRESULT.includes("snow")) {
        if (foalRESULT.includes("nLp")) {
            foalRESULT = foalRESULT.replace("nLp", "");
            console.log("nLp: Does not have PATN1 / PATN2 / roan / snow ");
        }
        else if (foalRESULT.includes("LpLp")) {
            foalRESULT = foalRESULT.replace("LpLp", "");
            console.log("LpLp: Does not have PATN1 / PATN2 / roan / snow ");
        }
    }
    console.log("After removal of Lp because of no mod: " + foalRESULT);

    // If there are multiple spaces, replace with 1 space. 
    if (foalRESULT.includes("&nbsp;&nbsp;&nbsp;")) {
        foalRESULT = foalRESULT.split(/&nbsp;&nbsp;&nbsp;/g).join("&nbsp;");
        foalRESULT = foalRESULT.split(/&nbsp;&nbsp;&nbsp;/g).join("&nbsp;");
    }
    if (foalRESULT.includes("&nbsp;&nbsp;")) {
        foalRESULT = foalRESULT.split(/&nbsp;&nbsp;/g).join("&nbsp;");
        foalRESULT = foalRESULT.split(/&nbsp;&nbsp;/g).join("&nbsp;");
    }

    console.log("Final foal geno: " + foalRESULT);
    // Return value of the foal genotype result.
    return foalRESULT;
}

// Phenotype generator functions based on the foal's genotype result.
function phenoGENERAL(result, HOMO, HETERO1, HETERO2, phenoSTRING, foalPHENO) {
    if (result.includes(HOMO) || result.includes(HETERO1) || result.includes(HETERO2)) {
        foalPHENO.push(phenoSTRING);
    }
}
function phenoLETHAL(result, HOMO, HETERO1, HETERO2, phenoSTRING1, phenoSTRING2, foalPHENO) {
    if (result.includes(HOMO)) {
        foalPHENO.push(phenoSTRING1);

    }
    else if (result.includes(HETERO1) || result.includes(HETERO2)) {
        foalPHENO.push(phenoSTRING2);

    }
}

function phenoGENMUT(result, HOMO, HETERO, phenoSTRING, foalPHENO) {
    if (result.includes(HOMO) || result.includes(HETERO)) {
        foalPHENO.push(phenoSTRING);
    }
}

function randomTRAIT() {
    var traits = ["Brindle ", "with Birdcatcher Spots ", "with Bend 'Or Spots ", "with Vitiligo ", "with Lacing "];
    var value = traits[Math.floor(Math.random() * traits.length)];
    return value;
}

// Foal phenotype roller.
function foalPHENOTYPE(result) {
    var foalPHENO = [];

    // Albino roller.
    var chanceALBINO = Math.floor(Math.random() * 100);
    console.log("Rolled chance for albino: " + chanceALBINO);
    if (60 < chanceALBINO < 66) {
        foalPHENO.push("Albino on ");
    }

    // Dominant white
    phenoLETHAL(result, "&nbsp;WW&nbsp;", "&nbsp;nW&nbsp;", "&nbsp;Wn&nbsp;", "Lethal Dominant White on ", "Dominant White on ", foalPHENO);
    // Grey
    phenoGENERAL(result, "&nbsp;GG&nbsp;", "&nbsp;nG&nbsp;", "&nbsp;Gn&nbsp;", "Grey on ", foalPHENO);
    // Silver
    if ((!result.includes("ee&nbsp;")) && (result.includes("&nbsp;ZZ&nbsp;") || result.includes("&nbsp;nZ&nbsp;") || result.includes("&nbsp;Zn&nbsp;"))) {
        foalPHENO.push("Silver ");
    }
    // Sooty
    phenoGENERAL(result, "&nbsp;StySty&nbsp;", "&nbsp;nSty&nbsp;", "&nbsp;Styn&nbsp;", "Sooty ", foalPHENO);
    // Flaxen
    if (result.includes(" ff&nbsp;") && result.includes("ee&nbsp;")) {
        foalPHENO.push("Flaxen ");
    }

    // Establish the bases. Chestnut / Bay / Black.
    if (result.includes("Ee&nbsp;") || result.includes("EE&nbsp;")) {
        if (result.includes("&nbsp;A+a&nbsp;") || result.includes("&nbsp;aA+&nbsp;") || result.includes("&nbsp;A+A&nbsp;") || result.includes("&nbsp;AA+&nbsp;") || result.includes("&nbsp;A+At&nbsp;") || result.includes("&nbsp;AtA+&nbsp;")) {
            foalPHENO.push("Wild Bay ");
        } else if (result.includes("&nbsp;Aa&nbsp;") || result.includes("&nbsp;AA&nbsp;") || result.includes("&nbsp;AAt&nbsp;") || result.includes("&nbsp;AtA&nbsp;")) {
            foalPHENO.push("Bay ");
        } else if (result.includes("&nbsp;Ata&nbsp;") || result.includes("&nbsp;AtAt&nbsp;")) {
            foalPHENO.push("Seal Bay ");
        } else {
            foalPHENO.push("Black ");
        }
    }
    else if (result.includes("ee&nbsp;")) {
        foalPHENO.push("Chestnut ");
    }

    // Diluters like Champagne, Cream, Dun and Roan.
    if (result.includes("&nbsp;ChCh&nbsp;") || result.includes("&nbsp;nCh&nbsp;")) {
        if (result.includes("&nbsp;CrCr&nbsp;") || result.includes("&nbsp;nCr&nbsp;")) {
            arraychanger(foalPHENO, "Seal Bay ", "Sable Cream Champagne ");
            arraychanger(foalPHENO, "Wild Bay ", "Wild Amber Cream Champagne ");
            arraychanger(foalPHENO, "Bay ", "Amber Cream Champagne ");
            arraychanger(foalPHENO, "Black ", "Classic Cream Champagne ");
            arraychanger(foalPHENO, "Chestnut ", "Gold Cream Champagne ");
            phenoGENERAL(result, "&nbsp;DD&nbsp;", "&nbsp;nD&nbsp;", "&nbsp;Dn&nbsp;", "Dun ", foalPHENO);
            phenoGENERAL(result, "&nbsp;RnRn&nbsp;", "&nbsp;nRn&nbsp;", "&nbsp;Rnn&nbsp;", "Roan ", foalPHENO);
            phenoGENERAL(result, "&nbsp;RR&nbsp;", "&nbsp;nR&nbsp;", "&nbsp;Rn&nbsp;", "Roan ", foalPHENO);
        }
        else {
            arraychanger(foalPHENO, "Seal Bay ", "Sable Champagne ");
            arraychanger(foalPHENO, "Wild Bay ", "Wild Amber Champagne ");
            arraychanger(foalPHENO, "Bay ", "Amber Champagne ");
            arraychanger(foalPHENO, "Black ", "Classic Champagne ");
            arraychanger(foalPHENO, "Chestnut ", "Gold Champagne ");
            phenoGENERAL(result, "&nbsp;DD&nbsp;", "&nbsp;nD&nbsp;", "&nbsp;Dn&nbsp;", "Dun ", foalPHENO);
            phenoGENERAL(result, "&nbsp;RnRn&nbsp;", "&nbsp;nRn&nbsp;", "&nbsp;Rnn&nbsp;", "Roan ", foalPHENO);
            phenoGENERAL(result, "&nbsp;RR&nbsp;", "&nbsp;nR&nbsp;", "&nbsp;Rn&nbsp;", "Roan ", foalPHENO);
        }
    }
    else if (result.includes("&nbsp;CrCr&nbsp;")) {
        console.log("CrCr detected!")

        arraychanger(foalPHENO, "Seal Bay ", "Burnt Perlino ");
        arraychanger(foalPHENO, "Wild Bay ", "Wild Perlino ");
        arraychanger(foalPHENO, "Bay ", "Perlino ");
        arraychanger(foalPHENO, "Black ", "Smokey Cream ");
        arraychanger(foalPHENO, "Chestnut ", "Cremello ");
        phenoGENERAL(result, "&nbsp;DD&nbsp;", "&nbsp;nD&nbsp;", "&nbsp;Dn&nbsp;", "Dun ", foalPHENO)
        phenoGENERAL(result, "&nbsp;RnRn&nbsp;", "&nbsp;nRn&nbsp;", "&nbsp;Rnn&nbsp;", "Roan ", foalPHENO);
        phenoGENERAL(result, "&nbsp;RR&nbsp;", "&nbsp;nR&nbsp;", "&nbsp;Rn&nbsp;", "Roan ", foalPHENO);
    }
    else if (result.includes("&nbsp;nCr&nbsp;")) {
        console.log("nCr detected!")

        arraychanger(foalPHENO, "Seal Bay ", "Burnt Buckskin ");
        arraychanger(foalPHENO, "Wild Bay ", "Wild Buckskin ");
        arraychanger(foalPHENO, "Bay ", "Buckskin ");
        arraychanger(foalPHENO, "Black ", "Smokey Black ");
        arraychanger(foalPHENO, "Chestnut ", "Palomino ");
        phenoGENERAL(result, "&nbsp;DD&nbsp;", "&nbsp;nD&nbsp;", "&nbsp;Dn&nbsp;", "Dun ", foalPHENO);
        phenoGENERAL(result, "&nbsp;RnRn&nbsp;", "&nbsp;nRn&nbsp;", "&nbsp;Rnn&nbsp;", "Roan ", foalPHENO);
        phenoGENERAL(result, "&nbsp;RR&nbsp;", "&nbsp;nR&nbsp;", "&nbsp;Rn&nbsp;", "Roan ", foalPHENO);
        if (foalPHENO.includes("Buckskin ") && foalPHENO.includes("Dun ")) {
            arraychanger(foalPHENO, "Dun ", "");
            arraychanger(foalPHENO, "Buckskin ", "Dunskin ");
        }
    }
    else if (result.includes("&nbsp;DD&nbsp;") || result.includes("&nbsp;nD&nbsp;")) {
        console.log("Dun detected!")

        arraychanger(foalPHENO, "Seal Bay", "Burnt Bay Dun ");
        arraychanger(foalPHENO, "Wild Bay ", "Wild Bay Dun ");
        arraychanger(foalPHENO, "Bay ", "Bay Dun ");
        arraychanger(foalPHENO, "Black ", "Grullo ");
        arraychanger(foalPHENO, "Chestnut ", "Red Dun ");
        phenoGENERAL(result, "&nbsp;RnRn&nbsp;", "&nbsp;nRn&nbsp;", "&nbsp;Rnn&nbsp;", "Roan ", foalPHENO);
        phenoGENERAL(result, "&nbsp;RR&nbsp;", "&nbsp;nR&nbsp;", "&nbsp;Rn&nbsp;", "Roan ", foalPHENO);
    }
    else if (result.includes("&nbsp;RnRn&nbsp;") || result.includes("&nbsp;nRn&nbsp;")) {
        console.log("Roan detected!")
        arraychanger(foalPHENO, "Seal Bay ", "Seal Bay Roan ");
        arraychanger(foalPHENO, "Wild Bay ", "Wild Bay Roan ");
        arraychanger(foalPHENO, "Bay ", "Bay Roan ");
        arraychanger(foalPHENO, "Black ", "Blue Roan ");
        arraychanger(foalPHENO, "Chestnut ", "Red Roan ");
    }
    else if (result.includes("&nbsp;RR&nbsp;") || result.includes("&nbsp;nR&nbsp;")) {
        // Tenjigoku specific
        console.log("Roan detected!")
        arraychanger(foalPHENO, "Seal Bay ", "Burnt Bay Roan ");
        arraychanger(foalPHENO, "Wild Bay ", "Wild Bay Roan ");
        arraychanger(foalPHENO, "Bay ", "Bay Roan ");
        arraychanger(foalPHENO, "Black ", "Blue Roan ");
        arraychanger(foalPHENO, "Chestnut ", "Red Roan ");
    }

    // Mushroom gene when not a carrier.
    if (result.includes("&nbsp;musmus&nbsp;") && result.includes("ee&nbsp;")) {
        foalPHENO.push("Mushroom ");
    }

    // When pearl is not a carrier.
    if (result.includes("&nbsp;Crprl&nbsp;") || result.includes("&nbsp;prlprl&nbsp;")) {
        foalPHENO.push("Pearl ");
    }

    // White pattern genes like Overo, Tobiano, Sabino, Rabicano and Splash.
    phenoLETHAL(result, "&nbsp;OO&nbsp;", "&nbsp;nO&nbsp;", "&nbsp;On&nbsp;", "Lethal Overo ", "Overo ", foalPHENO);
    phenoGENERAL(result, "&nbsp;TT&nbsp;", "&nbsp;nT&nbsp;", "&nbsp;Tn&nbsp;", "Tobiano ", foalPHENO); // Tenjigoku specific
    phenoGENERAL(result, "&nbsp;TbTb&nbsp;", "&nbsp;nTb&nbsp;", "&nbsp;Tbn&nbsp;", "Tobiano ", foalPHENO);
    phenoGENERAL(result, "&nbsp;SbSb&nbsp;", "&nbsp;nSb&nbsp;", "&nbsp;Sbn&nbsp;", "Sabino ", foalPHENO);
    phenoGENERAL(result, "&nbsp;RbRb&nbsp;", "&nbsp;nRb&nbsp;", "&nbsp;Rbn&nbsp;", "Rabicano ", foalPHENO);
    phenoGENERAL(result, "&nbsp;SplSpl&nbsp;", "&nbsp;nSpl&nbsp;", "&nbsp;Spln&nbsp;", "Splash ", foalPHENO);

    // nLp Leopard patterns.
    if (result.includes("&nbsp;nLp&nbsp;")) {
        if (result.includes("PATN1")) {
            foalPHENO.push("Leopard Appaloosa ");
        }
        else if (result.includes("PATN2")) {
            foalPHENO.push("Spotted Blanket Appaloosa ");
        }
        else if (result.includes("snow")) {
            foalPHENO.push("Frosted Appaloosa ");
        }
        else if (result.includes("roan")) {
            foalPHENO.push("Varnish Roan ");
        }
    }
    // LpLp Leopard patterns.
    if (result.includes("&nbsp;LpLp&nbsp;")) {
        if (result.includes("PATN1") && (!result.includes("PATN2") || !result.includes("snow") || !result.includes("roan"))) {
            foalPHENO.push("Fewspot Appaloosa ");
        }
        else if (result.includes("PATN2") && (!result.includes("PATN1") || !result.includes("snow") || !result.includes("roan"))) {
            foalPHENO.push("Snowcap Appaloosa ");
        }
        else if (result.includes("snow") && (!result.includes("PATN1") || !result.includes("PATN2") || !result.includes("roan"))) {
            foalPHENO.push("Snowflake Appaloosa ");
        }
        else if (result.includes("roan") && (!result.includes("PATN1") || !result.includes("PATN2") || !result.includes("snow"))) {
            foalPHENO.push("Varnish Roan ");
        }
        else {
            foalPHENO.push("Semi Leopard Appaloosa ");
        }
    }

    // Pangare when not a carrier (carrier when black).
    if (result.includes("&nbsp;PngPng&nbsp;") || result.includes("&nbsp;nPng&nbsp;") || result.includes("&nbsp;Pngn&nbsp;")) {
        if ((!result.includes("&nbsp;aa&nbsp;") && !result.includes("EE&nbsp;")) || (!result.includes("&nbsp;aa&nbsp;") && !result.includes("Ee&nbsp;")) || (!result.includes("&nbsp;aa&nbsp;") && !result.includes("Ee&nbsp;"))) {
            foalPHENO.push("Pangare ");
        }
    }

    console.log("foalPHENO array before mutations: " + foalPHENO);

    // Mutation genes.
    phenoGENMUT(result, "&nbsp;AkiAki&nbsp;", "&nbsp;nAki&nbsp;", "Akirajousho ", foalPHENO)
    phenoGENMUT(result, "&nbsp;BuBu", "&nbsp;nBu&nbsp;", "Bunkō ", foalPHENO)
    phenoGENMUT(result, "&nbsp;FeFe&nbsp;", "&nbsp;nFe&nbsp;", "Fearī ", foalPHENO)
    phenoGENMUT(result, "&nbsp;GinGin&nbsp;", "&nbsp;nGin&nbsp;", "Ginga ", foalPHENO)
    phenoGENMUT(result, "&nbsp;HaHa&nbsp;", "&nbsp;nHa&nbsp;", "Hachidori ", foalPHENO)
    phenoGENMUT(result, "&nbsp;HanHan&nbsp;", "&nbsp;nHan&nbsp;", "Hanawa ", foalPHENO)
    phenoGENMUT(result, "&nbsp;HeHe&nbsp;", "&nbsp;nHe&nbsp;", "Hebi ", foalPHENO)
    phenoGENMUT(result, "&nbsp;IroIro&nbsp;", "&nbsp;nIro&nbsp;", "Iroshima ", foalPHENO)
    phenoGENMUT(result, "&nbsp;KaKa&nbsp;", "&nbsp;nKa&nbsp;", "Kami ", foalPHENO)
    phenoGENMUT(result, "&nbsp;KinKin&nbsp;", "&nbsp;nKin&nbsp;", "Kiniro ", foalPHENO)
    phenoGENMUT(result, "&nbsp;KiKi&nbsp;", "&nbsp;nKi&nbsp;", "Kirameki ", foalPHENO)
    phenoGENMUT(result, "&nbsp;KirKir&nbsp;", "&nbsp;nKir&nbsp;", "Kirin ", foalPHENO)
    phenoGENMUT(result, "&nbsp;KoiKoi&nbsp;", "&nbsp;nKoi&nbsp;", "Koi ", foalPHENO)
    phenoGENMUT(result, "&nbsp;KoKo&nbsp;", "&nbsp;nKo&nbsp;", "Kojika ", foalPHENO)
    phenoGENMUT(result, "&nbsp;KjKj&nbsp;", "&nbsp;nKj&nbsp;", "Kujaku ", foalPHENO)
    phenoGENMUT(result, "&nbsp;KuKu&nbsp;", "&nbsp;nKu&nbsp;", "Kuma ", foalPHENO)
    phenoGENMUT(result, "&nbsp;MaMa&nbsp;", "&nbsp;nMa&nbsp;", "Mamushi ", foalPHENO)
    phenoGENMUT(result, "&nbsp;NiNi&nbsp;", "&nbsp;nNi&nbsp;", "Niji ", foalPHENO)
    phenoGENMUT(result, "&nbsp;NyNy&nbsp;", "&nbsp;nNy&nbsp;", "Nyara ", foalPHENO)
    phenoGENMUT(result, "&nbsp;OkaOka&nbsp;", "&nbsp;nOka&nbsp;", "Ōkami ", foalPHENO)
    phenoGENMUT(result, "&nbsp;RaRa&nbsp;", "&nbsp;nRa&nbsp;", "Rakurai ", foalPHENO)
    phenoGENMUT(result, "&nbsp;RiRi&nbsp;", "&nbsp;nRi&nbsp;", "Ri-su ", foalPHENO)
    phenoGENMUT(result, "&nbsp;RibRib&nbsp;", "&nbsp;nRib&nbsp;", "Ribāsu ", foalPHENO)
    phenoGENMUT(result, "&nbsp;RyRy&nbsp;", "&nbsp;nRy&nbsp;", "Ryūka ", foalPHENO)
    phenoGENMUT(result, "&nbsp;SakSak&nbsp;", "&nbsp;nSak&nbsp;", "Sakura ", foalPHENO)
    phenoGENMUT(result, "&nbsp;SeiSei&nbsp;", "&nbsp;nSei &nbsp;", "Seiunten ", foalPHENO)
    phenoGENMUT(result, "&nbsp;ShiShi&nbsp;", "&nbsp;nShi&nbsp;", "Shima ", foalPHENO)
    phenoGENMUT(result, "&nbsp;SogSog&nbsp;", "&nbsp;nSog&nbsp;", "Sōgyō ", foalPHENO)
    phenoGENMUT(result, "&nbsp;TaiTai&nbsp;", "&nbsp;nTai&nbsp;", "Taika ", foalPHENO)
    phenoGENMUT(result, "&nbsp;ToTo&nbsp;", "&nbsp;nTo&nbsp;", "Tōrō ", foalPHENO)
    phenoGENMUT(result, "&nbsp;TsuTsu&nbsp;", "&nbsp;nTsu&nbsp;", "Tsunami ", foalPHENO)
    phenoGENMUT(result, "&nbsp;YaYa&nbsp;", "&nbsp;nYa&nbsp;", "Yamaneko ", foalPHENO)

    // Christmas mutation genes.
    phenoGENMUT(result, "&nbsp;AmeAme&nbsp;", "&nbsp;nAme&nbsp;", "Ametsue ", foalPHENO)
    phenoGENMUT(result, "&nbsp;FuFu&nbsp;", "&nbsp;nFu&nbsp;", "Fubuki ", foalPHENO)
    phenoGENMUT(result, "&nbsp;OkuOku&nbsp;", "&nbsp;nOku&nbsp;", "Okurimono ", foalPHENO)
    phenoGENMUT(result, "&nbsp;ShoSho&nbsp;", "&nbsp;nSho&nbsp;", "Shogapan ", foalPHENO)

    //Halloween mutation genes.
    phenoGENMUT(result, "&nbsp;HiHi&nbsp;", "&nbsp;nHi&nbsp;", "Hitodama ", foalPHENO)
    phenoGENMUT(result, "&nbsp;DoDo&nbsp;", "&nbsp;nDo&nbsp;", "Dokurōkashi ", foalPHENO)
    phenoGENMUT(result, "&nbsp;YuYu&nbsp;", "&nbsp;nYu&nbsp;", "Yūreiji ", foalPHENO)
    phenoGENMUT(result, "&nbsp;OnOn&nbsp;", "&nbsp;nOn&nbsp;", "Oni ", foalPHENO)
    phenoGENMUT(result, "&nbsp;NuiNui&nbsp;", "&nbsp;nNui&nbsp;", "Nuime ", foalPHENO)
    phenoGENMUT(result, "&nbsp;ZonZon&nbsp;", "&nbsp;nZon&nbsp;", "Zonbi ", foalPHENO)
    phenoGENMUT(result, "&nbsp;ShaSha&nbsp;", "&nbsp;nSha&nbsp;", "Shanikusai ", foalPHENO)
    phenoGENMUT(result, "&nbsp;ShinShin&nbsp;", "&nbsp;nShin&nbsp;", "Shinigami ", foalPHENO)

    // Unique mutation genes.
    phenoGENMUT(result, "&nbsp;KagKag&nbsp;", "&nbsp;nKag&nbsp;", "Kage ", foalPHENO)
    phenoGENMUT(result, "&nbsp;BeBe&nbsp;", "&nbsp;nBe&nbsp;", "Beju ", foalPHENO)
    phenoGENMUT(result, "&nbsp;OmOm&nbsp;", "&nbsp;nOm&nbsp;", "Omoide ", foalPHENO)
    phenoGENMUT(result, "&nbsp;TanTan&nbsp;", "&nbsp;nTan&nbsp;", "Tanjoutama ", foalPHENO)
    phenoGENMUT(result, "&nbsp;RabRab&nbsp;", "&nbsp;nRab&nbsp;", "Rabendā ", foalPHENO)

    console.log("foalPHENO array after mutations: " + foalPHENO);

    // Random traits.
    var chanceTRAIT = Math.floor(Math.random() * 100);
    console.log("The rolled chance for the possibility of extra traits: " + chanceTRAIT);
    if (60 < chanceTRAIT < 71) {
        foalPHENO.push(randomTRAIT());
    }

    // Manchado trait.
    var chanceMANCHADO = Math.floor(Math.random() * 100);
    console.log("The rolled chance for manchado: " + chanceMANCHADO);
    if (60 < chanceMANCHADO < 69) {
        foalPHENO.push("Manchado ");
    }

    // Mushroom carrier (if on black, bay or heterozygous.)
    if ((result.includes("EE&nbsp;") || result.includes("Ee&nbsp;") || result.includes("eE&nbsp;")) && (result.includes("&nbsp;musmus&nbsp;"))) {
        foalPHENO.push("(Mushroom carrier) ");
    }
    else if (result.includes("&nbsp;nmus&nbsp;") || result.includes("&nbsp;musn&nbsp;")) {
        foalPHENO.push("(Mushroom carrier) ");
    }

    // Pangare carrier (if on black base.)
    if (result.includes("&nbsp;PngPng&nbsp;") || result.includes("&nbsp;nPng&nbsp;") || result.includes("&nbsp;Pngn&nbsp;")) {
        if (result.includes("&nbsp;aa&nbsp;") && (result.includes("EE&nbsp;") || result.includes("Ee&nbsp;") || result.includes("eE&nbsp;"))) {
            foalPHENO.push("(Pangare carrier) ");
        }
    }

    // Flaxen carrier (when on bay and black bases.)
    if (result.includes("&nbsp;nf&nbsp;") || result.includes("&nbsp;nf&nbsp;")) {
        foalPHENO.push("(Flaxen carrier) ");
    }
    else if (result.includes("&nbsp;ff&nbsp;") && (result.includes("EE&nbsp;") || result.includes("Ee&nbsp;") || result.includes("eE&nbsp;"))) {
        foalPHENO.push("(Flaxen carrier) ");
    }

    // Silver carrier (when on chestnut base.)
    if (result.includes("ee&nbsp;") && (result.includes("&nbsp;ZZ&nbsp;") || result.includes("&nbsp;nZ&nbsp;") || result.includes("&nbsp;Zn&nbsp;"))) {
        foalPHENO.push("(Silver carrier) ");
    }

    console.log("foalPHENO array after carriers: " + foalPHENO);

    var phenoRESULT = foalPHENO.join();
    phenoRESULT = phenoRESULT.replace(/,/g, "")
        .replace("Overo Tobiano", "Tovero");

    console.log("Final phenotype result: " + phenoRESULT)

    return phenoRESULT;
}

function foalINDIVIDUAL(idRESULT, idPHENO) {
    var foalGENOSTRING = foalGENOTYPE();
    var foalCHIMERASTRING = foalGENOTYPE();
    var foalPHENOSTRING = foalPHENOTYPE(foalGENOSTRING);
    var foalCHIMERAPHENOTYPE = foalPHENOTYPE(foalCHIMERASTRING);

    var finalCHIMERAGENO = "<b>" + "Genotype:" + "</b>" + "&nbsp;" + foalGENOSTRING + "&nbsp;//&nbsp;" + foalCHIMERASTRING;
    finalCHIMERAGENO = finalCHIMERAGENO.replace(/&nbsp;&nbsp;&nbsp;/g, "&nbsp;")
        .replace(/&nbsp;&nbsp;/g, "&nbsp;");

    var finalCHIMERAPHENO = "<b>" + "Phenotype:" + "</b>" + "&nbsp;" + foalPHENOSTRING + "&nbsp;//&nbsp;" + foalCHIMERAPHENOTYPE + "&nbsp;Chimera";
    finalCHIMERAPHENO = finalCHIMERAPHENO.replace(/&nbsp;&nbsp;&nbsp;/g, "&nbsp;")
    finalCHIMERAPHENO = finalCHIMERAPHENO.replace(/&nbsp;&nbsp;/g, "&nbsp;");

    var chanceFOALCHIMERA = Math.floor(Math.random() * 100);
    console.log("Chance of chimera rolled: " + chanceFOALCHIMERA)
    if (60 < chanceFOALCHIMERA < 69) {
        document.getElementById(idRESULT).innerHTML = finalCHIMERAGENO;
        document.getElementById(idPHENO).innerHTML = finalCHIMERAPHENO;
    }
    else {
        document.getElementById(idRESULT).innerHTML = "<b>" + "Genotype:" + "</b>" + "&nbsp;" + foalGENOSTRING;
        document.getElementById(idPHENO).innerHTML = "<b>" + "Phenotype:" + "</b>" + "&nbsp;" + foalPHENOSTRING;
    }
}
function foalSUMBIT() {
    var FOALID = document.getElementById("foalID").value;
    document.getElementById("outputID").innerHTML = "ID: " + FOALID;
    document.getElementById("ORSHOW1").innerHTML = "OR";
    document.getElementById("ORSHOW2").innerHTML = "OR";

    foalINDIVIDUAL("result1", "pheno1");
    if ((document.getElementById("result1").innerHTML).includes("OmOm")) {
        document.getElementById("fatal1").innerHTML = "Lethal Omoide - Dead Foal";
    }
    else {
        document.getElementById("fatal1").innerHTML = "";
    }
    foalINDIVIDUAL("result2", "pheno2");
    if ((document.getElementById("result2").innerHTML).includes("OmOm")) {
        document.getElementById("fatal2").innerHTML = "Lethal Omoide - Dead Foal";
    }
    else {
        document.getElementById("fatal2").innerHTML = "";
    }
    foalINDIVIDUAL("result3", "pheno3");
    if ((document.getElementById("result3").innerHTML).includes("OmOm")) {
        document.getElementById("fatal3").innerHTML = "Lethal Omoide - Dead Foal";
    }
    else {
        document.getElementById("fatal3").innerHTML = "";
    }

    var twinCHANCE = Math.floor(Math.random() * 100);
    console.log("The chance for twin that was rolled: " + twinCHANCE);
    console.log("ChristmasBreedingSeason is " + document.getElementById("ChristmasBreedingSeason").checked);
    if (document.getElementById("ChristmasBreedingSeason").checked == true) {
        if (60 < twinCHANCE < 81) {
            jQuery(document).ready(
                function () {
                    jQuery(".TWIN").show()
                }
            );
            document.getElementById("Annoucement").innerHTML = "You have successfully rolled for twins!";
            document.getElementById("twin1").innerHTML = "TWIN 1:";
            document.getElementById("twin2").innerHTML = "TWIN 2:";
            foalINDIVIDUAL("result4", "pheno4");
            if ((document.getElementById("result4").innerHTML).includes("OmOm")) {
                document.getElementById("fatal4").innerHTML = "Lethal Omoide - Dead Foal";
            }
            else {
                document.getElementById("fatal4").innerHTML = "";
            }
            foalINDIVIDUAL("result5", "pheno5");
            if ((document.getElementById("result5").innerHTML).includes("OmOm")) {
                document.getElementById("fatal5").innerHTML = "Lethal Omoide - Dead Foal";
            }
            else {
                document.getElementById("fatal5").innerHTML = "";
            }
            foalINDIVIDUAL("result6", "pheno6");
            if ((document.getElementById("result6").innerHTML).includes("OmOm")) {
                document.getElementById("fatal6").innerHTML = "Lethal Omoide - Dead Foal";
            }
            else {
                document.getElementById("fatal6").innerHTML = "";
            }
        }
        else {
            document.getElementById("Annoucement").innerHTML = "Roll for twins has failed to pass.";
            // To hide if there was twin roll before. DO NOT DELETE.
            jQuery(document).ready(function () {
                jQuery(".TWIN").hide()
            });
        }
    }
    else {
        if (60 < twinCHANCE < 71) {
            jQuery(document).ready(
                function () {
                jQuery(".TWIN").show()
                }
            );
            document.getElementById("Annoucement").innerHTML = "You have successfully rolled for twins!";
            document.getElementById("twin1").innerHTML = "TWIN 1:";
            document.getElementById("twin2").innerHTML = "TWIN 2:";
            foalINDIVIDUAL("result4", "pheno4");
            foalINDIVIDUAL("result5", "pheno5");
            foalINDIVIDUAL("result6", "pheno6");
        }
        else {
            document.getElementById("Annoucement").innerHTML = "Roll for twins has failed to pass.";
            // To hide if there was twin roll before. DO NOT DELETE.
            jQuery(document).ready(function () {
                jQuery(".TWIN").hide()
            });
        }
    }
}