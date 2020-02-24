// CONSTANTS
const genoIDArray = ["geno1", "geno2", "geno3"];
const PhenoIDArray = ["pheno1", "pheno2", "pheno3"];
const fatalArray = ["fatal1", "fatal2", "fatal3"];

const twinGenoIDArray = ["geno1", "geno2", "geno3", "geno4", "geno5", "geno6"];
const twinPhenoIDArray = ["pheno1", "pheno2", "pheno3", "pheno4", "pheno5", "pheno6"];
const twinFatalArray = ["fatal1", "fatal2", "fatal3", "fatal4", "fatal5", "fatal6"];

const allGenes = [ 
    ["WW", "nW"], ["GG", "nG"], ["ZZ", "nZ"], ["StySty", ""], ["ff", "nf"], ["ChCh", "nCh"], 
    ["CrCr", "nCr"], ["DD", "nD"], ["RR", "nR"], ["RnRn", "nRn"], ["prlprl", "nprl"], 
    ["musmus", "nmus"], ["OO", "nO"], ["TT", "nT"], ["TbTb", "nTb"], ["SbSb", "nSb"], 
    ["RbRb", "nRb"],  ["SplSpl", "nSpl"], ["LpLp", "nLp"], ["PngPng", "nPng"],
    ["OmOm", "nOm"],  // Mutation, but passes like a gene
    ["DᴺˢDᴺˢ", "nDᴺˢ"], ["MerMer", "nMer"], ["KᵐKᵐ", "nKᵐ"]
];

const normalMut = [
    ["AkiAki", "nAki"], ["BuBu", "nBu"], ["FeFe", "nFe"], ["GinGin", "nGin"], ["HaHa", "nHa"],
    ["HanHan", "nHan"], ["HeHe", "nHe"], ["IroIro", "nIro"], ["KaKa", "nKa"], ["KinKin", "nKin"],
    ["KiKi", "nKi"], ["KirKir", "nKir"], ["KoiKoi", "nKoi"], ["KoKo", "nKo"], ["KjKj", "nKj"],
    ["KuKu", "nKu"], ["MaMa", "nMa"], ["NiNi", "nNi"], ["NyNy", "nNy"], ["OkaOka", "nOka"],
    ["RaRa", "nRa"], ["RiRi", "nRi"], ["RibRib", "nRib"], ["RyRy", "nRy"], ["SakSak", "nSak"],
    ["SeiSei", "nSei"], ["ShiShi", "nShi"], ["SogSog", "nSog"], ["TaiTai", "nTai"], 
    ["ToTo", "nTo"], ["TsuTsu", "nTsu"], ["YaYa", "nYa"],
    ["AmeAme", "nAme"], // Christmas Mutation
    ["FuFu", "nFu"],    // Christmas Mutation
    ["OkuOku", "nOku"], // Christmas Mutation
    ["ShoSho", "nSho"], // Christmas Mutation
    ["YuYu", "nYu"],    // Halloween Mutation
    ["OmOm", "nOm"], // OmOm nOm is in the regular gene roller array
    ["RabRab", "nRab"], // RabRab nRab is in the halloween roller array
    ["KagKag", "nKag"], ["BeBe", "nBe"], ["TanTan", "nTan"], 
    ["HiHi", "nHi"], ["DoDo", "nDo"], ["OnOn", "nOn"], ["NuiNui", "nNui"], 
    ["ZonZon", "nZon"], ["ShaSha", "nSha"], ["ShinShin", "nShin"]
];

const singleModArr = ["(PATN1)", "(PATN2)", "(snow)", "(roan)"];
const AlleleArr = ["PATN1", "PATN2", "snow", "roan"];

// ============== MAIN FUNCTION ====================================================

function main() {

    var twinChance = Math.floor(Math.random() * 100);
    console.log("The chance for twin that was rolled: " + twinChance);

    var twinMin = 60;
    var twinMax = 71;

    var isXmasSeason = document.getElementById("ChristmasBreedingSeason").checked;
    if (isXmasSeason == true) {
        twinMax = twinMax + 10; // 81
    }    

    const foalID1 = document.getElementById("foalID1").value;

    const div1 = document.getElementById("twinDiv1");
    div1.innerHTML = "";

    const div2 = document.getElementById("twinDiv2");
    div2.innerHTML = "";

    const foalResult1 = foalIndividual();
    var genoTxt1 = foalResult1[0];
    var phenoTxt1 = foalResult1[1];

    if ((twinMin < twinChance) && (twinChance < twinMax)) {
        document.getElementById("Annoucement").innerHTML = "You have successfully rolled for twins!";
        
        // TWIN 1 + ID
        var twinNumNode1 = document.createElement("P");
        twinNumNode1.innerHTML = "TWIN #1" + " - " + foalID1;
        div1.appendChild(twinNumNode1);

        for (var i = 0; i <= 3; i++) {
            // GENOTYPE
            var genoNode = document.createElement("P");
            genoNode.innerHTML = genoTxt1[i];
            div1.appendChild(genoNode);

            // PHENOTYPE
            var phenoNode = document.createElement("P");
            phenoNode.innerHTML = phenoTxt1[i];
            div1.appendChild(phenoNode);

            // DEAD?
            if (lethalOmoide(genoTxt1[i]) != "") {
                var fatalNode = document.createElement("P");
                fatalNode.innerHTML = lethalOmoide(genoTxt1[i]);
                div1.appendChild(fatalNode);
            }

            // OR LOOP
            if ( i < 3) {
                var OrNode = document.createElement("P");
                OrNode.innerHTML = "OR";
                div1.appendChild(OrNode);
            }
        }

        // TWIN 2 + ID

        const foalID2 = document.getElementById("foalID2").value;

        const foalResult2 = foalIndividual();
        var genoTxt2 = foalResult2[0];
        var phenoTxt2 = foalResult2[1];

        var twinNumNode2 = document.createElement("P");
        twinNumNode2.innerHTML = "TWIN #2" + " - " + foalID2;
        div2.appendChild(twinNumNode2);

        for (var j = 0; j <= 3; j++) {
            // GENOTYPE
            var genoNode2 = document.createElement("P");
            genoNode2.innerHTML = genoTxt2[j];
            div2.appendChild(genoNode2);

            // PHENOTYPE
            var phenoNode2 = document.createElement("P");
            phenoNode2.innerHTML = phenoTxt2[j];
            div2.appendChild(phenoNode2);

            // DEAD?
            if (lethalOmoide(genoTxt2[j]) != "") {
                var fatalNode2 = document.createElement("P");
                fatalNode2.innerHTML = lethalOmoide(genoTxt2[j]);
                div2.appendChild(fatalNode2);
            }

            // OR LOOP
            if ( j < 3) {
                var OrNode2 = document.createElement("P");
                OrNode2.innerHTML = "OR";
                div2.appendChild(OrNode2);
            }
        }

    } else {
        document.getElementById("Annoucement").innerHTML = "Roll for twins has failed to pass.";
        var IDNode = document.createElement("P");
        IDNode.innerHTML = foalID1;
        div1.appendChild(IDNode);
        
        for (var i = 0; i <= 3; i++) {
            // GENOTYPE
            var genoNode3 = document.createElement("P");
            genoNode3.innerHTML = genoTxt1[i];
            div1.appendChild(genoNode3);

            // PHENOTYPE
            var phenoNode3 = document.createElement("P");
            phenoNode3.innerHTML = phenoTxt1[i];
            div1.appendChild(phenoNode3);

            // DEAD?
            if (lethalOmoide(genoTxt1[i]) != "") {
                var fatalNode3 = document.createElement("P");
                fatalNode3.innerHTML = lethalOmoide(genoTxt1[i]);
                div1.appendChild(fatalNode3);
            }

            // OR LOOP
            if ( i < 3) {
                var OrNode3 = document.createElement("P");
                OrNode3.innerHTML = "OR";
                div1.appendChild(OrNode3);
            }
        }    
    }

}

// ============== HELPER FUNCTIONS FOR MAIN & OTHER COMMON HELPERS =================

// If results has OmOm, return dead foal.
function lethalOmoide(geno) {
    if (geno.includes("OmOm")) {
        return "Lethal Omoide - Dead Foal";
    } else {
        return "";
    }
}

// Roll phenotype and genotype. Roll chimera if applicable.
function foalIndividual() {
    var chimeraMin = 60;
    var chimeraMax = 69;

    var genoTxt = [];
    var phenoTxt = [];

    for (var i = 0; i <= 3; i++) {
        var chimeraChance = Math.floor(Math.random() * 100);
        if ((chimeraMin < chimeraChance) && (chimeraChance < chimeraMax)) {
            var genoArr1 = foalGenotype();
            var geno1 = genoArr1.join(" ");
            geno1 = geno1.trim();
            var genoArr2 = foalGenotype(); 
            var geno2 = genoArr2.join(" ");
            geno2 = geno2.trim();                   
            genoTxt.push("<b>Genotype: </b>" + geno1 + " // " + geno2);

            var pheno1 = foalPhenotype(genoArr1);
            var pheno2 = foalPhenotype(genoArr2);
            phenoTxt.push("<b>Phenotype: </b>" + pheno1 + " // " + pheno2 + " Chimera");
            
        } else {
            var genoArr3 = foalGenotype();
            var geno3 = genoArr3.join(" ");
            geno3 = geno3.trim();
            genoTxt.push("<b>Genotype: </b>" + geno3);

            var pheno3 = foalPhenotype(genoArr3);
            phenoTxt.push("<b>Phenotype: </b>" + pheno3);
        }
    }

    var temp = [];
    temp.push(genoTxt, phenoTxt);
    return temp;
}

// Replace every instance of Gene.n (Gene/No Gene) with n.Gene
// Array -> Array
function replaceGeneN(arr) {
    const lookingFor = [
        "eE", "aA", "aAt", "aA+", "AA+", "AtA+", "AtA", "Dn", "On", "Gn", "Wn", "fn", "Zn", "Rn", "Rnn", 
        "Lpn", "Tn", "Tbn", "Sbn", "Rbn", "prln", "Crn", "prlCr", "Chn", "musn", "Spln", "Styn", "Pngn", 
        "(PATN2PATN1)", "(snowPATN1)", "(roanPATN1)", "(snowPATN2)", "(roanPATN2)", "(roansnow)",
        "Akin", "Bun", "Fen", "Ginn", "Han", "Hann", "Hen", "Iron", "Kan", "Kinn", "Kin", "Kirn", "Koin",
        "Kon", "Kjn", "Kun", "Man", "Nin", "Nyn", "Okan", "Omn", "Rabn", "Ran", "Rin", "Ribn", "Ryn",
        "Sakn", "Sein", "Shin", "Sogn", "Tain", "Ton", "Tsun", "Yan", "Amen", "Fun", "Okun", "Shon", "Hin",
        "Don", "Zonn", "Nuin", "Shinn", "Shan", "Yun", "Dᴺˢn", "DDᴺˢ", "Kᵐn", "Mern"
    ];
    
    const replaceWith = [
        "Ee", "Aa", "Ata", "A+a", "A+A", "A+At", "AAt", "nD", "nO", "nG", "nW", "nf", "nZ", "nR", "nRn",
        "nLp", "nT", "nTb", "nSb", "nRb", "nprl", "nCr", "Crprl", "nCh", "nmus", "nSpl", "nSty", "nPng",
        "(PATN1PATN2)", "(PATN1snow)", "(PATN1roan)", "(PATN2snow)", "(PATN2roan)", "(snowroan)",
        "nAki", "nBu", "nFe", "nGin", "nHa", "nHan", "nHe", "nIro", "nKa", "nKin", "nKi", "nKir", "nKoi", 
        "nKo", "nKj", "nKu", "nMa", "nNi", "nNy", "nOka", "nOm", "nRab", "nRa", "nRi", "nRib", "nRy",
        "nSak", "nSei", "nShi", "nSog", "nTai", "nTo", "nTsu", "nYa", "nAme", "nFu", "nOku", "nSho", "nHi",
        "nDo", "nZon", "nNui", "nShin", "nSha", "nYu", "nDᴺˢ", "DᴺˢD", "nKᵐ", "nMer",
    ];

    var holdArr = [];

    for (var i = 0; i < arr.length; i++) {
        var index = lookingFor.indexOf(arr[i]);
        if (index != -1) {
           holdArr.push(replaceWith[index]);
        } else {
            holdArr.push(arr[i]);
        }
    }
    return holdArr;
}

// If arr2 has at least 1 element of arr1, produce true.
// Array Array -> Boolean
function arr2HasArr1(arr1, arr2) {
    return arr1.some(ele => arr2.includes(ele));
}

// Count the occurences of "what" in array.
// Array Element -> Natural
function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}

// -------------- HELPER FUNCTIONS FOR FOALINDIVIDUAL -----------------------------

// Make the phenotype according to the rolled genotype of the foal.
/* ORDER:
    Dom White ---------------------------------------------!!
    Grey --------------------------------------------------!!
    Silver - EXPRESSED ------------------------------------!!
    Sooty -------------------------------------------------!!
    Flaxen - EXPRESSED ------------------------------------!!
    ** Bases (Black, Bay Chesnut) -------------------------!!
    ** Champagne / Cream / Dun / Roan ---------------------!!
    Mushroom (recessive) - EXPRESSED ----------------------!!
    Peal (recessive) - EXPRESSED --------------------------!!
    Cream Pearl -------------------------------------------!!
    ** Overo / Tobiano / Sabino / Rabicano / Splash -------!!
    ** Leopard Complex ------------------------------------!!
    Pangare (carrier on blacks) - EXPRESSED ---------------!!
    ** Mutations (General) ________________________________!!
       Christmas Mutations ________________________________!!
       Halloween Mutations ________________________________!!
    ** Random Traits --------------------------------------!!
    ** Manchado ___________________________________________!!
    Carriers (Silver, Flaxen, Mushroom, Pearl, Pangare) ---!!  */
// Array -> String
function foalPhenotype(foalGeno) {
    console.log(foalGeno);
    console.log(typeof(foalGeno));

    var phenoArr = [];

    albinoPhenoRoll(phenoArr);
    console.log(phenoArr);

    regPheno(phenoArr, foalGeno);
    console.log(phenoArr);

    regMutPheno(phenoArr, foalGeno);
    console.log(phenoArr);

    randomTraitPheno(phenoArr);
    console.log(phenoArr);

    manchadoPheno(phenoArr);
    console.log(phenoArr);

    carrierPheno(phenoArr, foalGeno);
    console.log(phenoArr);

    var foalPhenoStr = phenoArr.join(" ");
    foalPhenoStr = foalPhenoStr.trim();
    return foalPhenoStr;
}

// Roll genotype according to the genotypes of the dam (mare) and sire (stallion).
// String String -> String
function foalGenotype() {
    var damGeno = parentGenotype("DamGeno", "DamChimera"); // String
    var sireGeno = parentGenotype("SireGeno", "SireChimera"); // String

    var damGenoArr = damGeno.trim().split(" ");
    var sireGenoArr = sireGeno.trim().split(" ");
    damGenoArr = replaceGeneN(damGenoArr);
    sireGenoArr = replaceGeneN(sireGenoArr);

    console.log("Dam Genotype Array is: " + damGenoArr);
    console.log("Sire Genotype Array is: " + sireGenoArr);

    var foalGenoArr = [];

    extGeneRoll(damGenoArr, sireGenoArr, foalGenoArr);
    agoutiGeneRoll(damGenoArr, sireGenoArr, foalGenoArr);
    CrprlGeneRoll(damGenoArr, sireGenoArr, foalGenoArr);
    regGeneRoll(damGenoArr, sireGenoArr, foalGenoArr);
    nobashitaDunRoll(damGenoArr, sireGenoArr, foalGenoArr)
    regMutRoll(damGenoArr, sireGenoArr, foalGenoArr);
    KageMutRoll(damGenoArr, sireGenoArr, foalGenoArr);
    BejuMutRoll(damGenoArr, sireGenoArr, foalGenoArr);
    TanjMutRoll(damGenoArr, sireGenoArr, foalGenoArr);
    halloweenMutRoll(damGenoArr, sireGenoArr, foalGenoArr);
    xmasSpecialRoll(foalGenoArr);
    LpModRoll(damGenoArr, sireGenoArr, foalGenoArr);
    CrprlCheck(foalGenoArr);
    specialDunCheck(foalGenoArr);

    foalGenoArr = replaceGeneN(foalGenoArr);

    return foalGenoArr;
}

// _ _ _ _ _ _ _ _ HELPER FUNCTIONS FOR FOALPHENOTYPE _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// Albino roller. 
// Array -> String (Pushed to Array)
function albinoPhenoRoll(foalArr) {
    const albinoChance = Math.floor(Math.random() * 100);
    var albinoLow = 60;
    var albinoHigh = 66;
    if ((albinoLow <albinoChance) && (albinoChance < albinoHigh)) {
        foalArr.push("Albino on ");
    }
}

// General phenotype maker.
// Array Array -> String (Pushed to 1st Array)
function regPheno(foalArr, foalGeno) {

    if (foalGeno.includes("WW")) {
        foalArr.push("Lethal Dominant White on ");
    }
    if (foalGeno.includes("nW")) {
        foalArr.push("Dominant White on ");
    }
    if (foalGeno.includes("GG") || foalGeno.includes("nG")) {
        foalArr.push("Grey on ");
    }
    if (!foalGeno.includes("ee") && (foalGeno.includes("ZZ") || foalGeno.includes("nZ"))) {
        foalArr.push("Silver ");
    }
    if (foalGeno.includes("StySty") || foalGeno.includes("nSty")) {
        foalArr.push("Sooty ");
    }
    if (!foalGeno.includes("EE") && !foalGeno.includes("Ee") && foalGeno.includes("ff")) {
        foalArr.push("Flaxen ");
    }

    basePheno(foalArr, foalGeno);
    dilutePheno(foalArr, foalGeno);

    if (foalGeno.includes("musmus") && foalGeno.includes("ee")) {
        foalArr.push("Mushroom ");
    }
    if (foalGeno.includes("prlprl")) {
        foalArr.push("Pearl ");
    }

    whitePatPheno(foalArr, foalGeno);
    LpPheno(foalArr, foalGeno);

    if ((foalGeno.includes("nPng") || foalGeno.includes("PngPng")) && !(foalGeno.includes("Ee") || foalGeno.includes("EE")) ) {
        foalArr.push("Pangare ");
    }
    
    if (foalGeno.includes("MerMer") || foalGeno.includes("nMer")) {
        foalArr.push("Meruru ");
    }

    if ((foalGeno.includes("KᵐKᵐ") || foalGeno.includes("nKᵐ")) && !foalGeno.includes("aa") && !(foalGeno.includes("EE") || foalGeno.includes("Ee")) ) {
        foalArr.push("Kamen  ");
    }
}

// Base colour pheno maker.
// Array Array -> String (Pushed to 1st Array)
function basePheno(foalArr, foalGeno) {
    const wildBay = ["A+A+", "A+A", "A+At", "A+a"];
    const bay = ["AA", "AAt", "Aa"];
    const sealBrown = ["AtAt", "Ata"];

    if (foalGeno.includes("Ee") || foalGeno.includes("EE")){
        if (arr2HasArr1(wildBay, foalGeno)) {
            foalArr.push("Wild Bay ");
        } else if (arr2HasArr1(bay, foalGeno)) {
            foalArr.push("Bay ");
        } else if (arr2HasArr1(sealBrown, foalGeno)) {
            foalArr.push("Seal Brown ");
        } else {
            foalArr.push("Black ");
        }
    } else if (foalGeno.includes("ee")) {  // ee
        foalArr.push("Chestnut ");
    }
}

// Dilutes pheno maker.
/* nCh or ChCh --------------------> (Classic / Gold / Wild Amber / Amber / Sable) Champagne
    + nCr or CrCr --------------> Cream -> Cream Champagne
    + nD or DD -----------------> ___ Dun
    + nRn or nR or RR or RnRn --> ___ Roan

CrCr ---------------------------> (Smokey Cream / Cremello / Wild Perlino / Perlino / Burnt Perlino)
    + nD or DD -----------------> ___ Dun 
    + nRn or nR or RR or RnRn --> ___ Roan

nCr ----------------------------> (Smokey Black / Palomino / Wild Buckskin / Buckskin / Burnt Buckskin)
    + nD or DD -----------------> ___ Dun (Buckskin + Dun -> Dunskin)
    + nRn or nR or RR or RnRn --> ___ Roan

nD or DD -----------------------> (Grullo / Red Dun / Wild Bay Dun / Bay Dun / Burnt Bay Dun) 
    + nRn or nR or RR or RnRn --> ___ Roan

nRn or nR or RR or RnRn --------> (Blue Roan / Red Roan / Wild Bay Roan / Bay Roan / Burnt Bay Roan)
    + nD or DD -----------------> ___ Dun */
// Array Array -> String (Pushed to 1st Array)
function dilutePheno(foalArr, foalGeno) {
    var index;
    if (foalGeno.includes("nCh") || foalGeno.includes("ChCh")) {
        console.log(foalArr);
        if (foalArr.includes("Black ")) {
            foalArr.push("Classic ", "Champagne ");
        } else if (foalArr.includes("Chestnut ")) {
            foalArr.push("Gold ", "Champagne ");
        } else if (foalArr.includes("Wild Bay ")) {
            foalArr.push("Wild Amber ", "Champagne ");
        } else if (foalArr.includes("Bay ")) {
            foalArr.push("Amber ", "Champagne ");
        } else if (foalArr.includes("Seal Brown ")) {
            foalArr.push("Sable ", "Champagne ");
        }
        if (foalGeno.includes("nCr") || foalGeno.includes("CrCr")) {
            index = foalArr.indexOf("Champagne ");
            foalArr.splice(index, 1, "Cream Champagne ");
        }
        addRoanorDun(foalArr, foalGeno);

    } else if (foalGeno.includes("CrCr")) {
        console.log(foalArr);

        if (foalArr.includes("Black ")) {
            index = foalArr.indexOf("Black ");
            foalArr.push("Smokey Cream ");
        } else if (foalArr.includes("Chestnut ")) {
            index = foalArr.indexOf("Chestnut ");
            foalArr.splice(index, 1, "Cremello ");

        } else if (foalArr.includes("Wild Bay ")) {
            index = foalArr.indexOf("Wild Bay ");
            foalArr.splice(index, 1, "Wild Perlino ");

        } else if (foalArr.includes("Bay ")) {
            index = foalArr.indexOf("Bay ");
            foalArr.splice(index, 1, "Perlino ");

        } else if (foalArr.includes("Seal Brown ")) {
            index = foalArr.indexOf("Seal Brown ");
            foalArr.splice(index, 1, "Burnt Perlino ");
        }
        addRoanorDun(foalArr, foalGeno);

    } else if (foalGeno.includes("nCr") || foalGeno.includes("Crprl")) {
        console.log(foalArr);

        if (foalGeno.includes("DᴺˢD")  || foalGeno.includes("nDᴺˢ")) {
            foalArr.push("Nobashita ");
        }

        if (foalArr.includes("Black ")) {
            index = foalArr.indexOf("Black ");
            foalArr.splice(index, 1, "Smokey ")
            foalArr.push("Black ");

        } else if (foalArr.includes("Chestnut ")) {
            index = foalArr.indexOf("Chestnut ");
            foalArr.splice(index, 1, "Palomino ");
            
        } else if (foalArr.includes("Wild Bay ")) {
            index = foalArr.indexOf("Wild Bay ");
            foalArr.splice(index, 1, "Wild ");
            foalArr.push("Buckskin ");

        } else if (foalArr.includes("Bay ")) {

            index = foalArr.indexOf("Bay ");
            foalArr.splice(index, 1, "Buckskin ");

        } else if (foalArr.includes("Seal Brown ")) {

            index = foalArr.indexOf("Seal Brown ");
            foalArr.splice(index, 1, "Burnt");
            foalArr.push("Buckskin ");
        }

        if (foalGeno.includes("nD") || foalGeno.includes("DD") || foalGeno.includes("DᴺˢD")  || foalGeno.includes("nDᴺˢ")) {
            if (foalArr.includes("Black ")) {
                index = foalArr.indexOf("Black ");
                foalArr.splice(index, 1, "Grullo ");
            } else {
                foalArr.push("Dun ");
            }
        }
        if (foalGeno.includes("nRn") || foalGeno.includes("RnRn") ) {
            if (foalArr.includes("Black ")) {
                index = foalArr.indexOf("Black ");
                foalArr.splice(index, 1, "Blue Roan ");
            } else {
                foalArr.push("Roan ");
            }
        } else if (foalGeno.includes("nR") || foalGeno.includes("RR") ) {
            if (foalArr.includes("Black ")) {
                index = foalArr.indexOf("Black ");
                foalArr.splice(index, 1, "Blue Roan ");
            } else {
                foalArr.push("Roan ");
            }
        }

        if (foalArr.includes("Buckskin ") && foalArr.includes("Dun ")) {
            index = foalArr.indexOf("Buckskin ");
            foalArr.splice(index, 1);
            index = foalArr.indexOf("Dun ");
            foalArr.splice(index, 1, "Dunskin ");
        }
        if (foalGeno.includes("Crprl")) {
            foalArr.push("Pearl ")
        }
    } else if (foalGeno.includes("nD") || foalGeno.includes("DD") || foalGeno.includes("DᴺˢD")  || foalGeno.includes("nDᴺˢ")) {
        console.log(foalArr);

        if (foalGeno.includes("DᴺˢD")  || foalGeno.includes("nDᴺˢ")) {
            foalArr.push("Nobashita ");
        }

        if (foalArr.includes("Black ")) {
            index = foalArr.indexOf("Black ");
            foalArr.splice(index, 1, "Grullo ");

        } else if (foalArr.includes("Chestnut ")) {
            index = foalArr.indexOf("Chestnut ");
            foalArr.splice(index, 1, "Red Dun ");

        } else if (foalArr.includes("Wild Bay ")) {
            index = foalArr.indexOf("Wild Bay ");
            foalArr.splice(index, 1, "Wild Bay Dun ");

        } else if (foalArr.includes("Bay ")) {
            index = foalArr.indexOf("Bay ");
            foalArr.splice(index, 1, "Bay Dun ");

        } else if (foalArr.includes("Seal Brown ")) {
            index = foalArr.indexOf("Seal Brown ");
            foalArr.splice(index, 1, "Burnt Bay Dun ");
        }
        if (foalGeno.includes("nRn") || foalGeno.includes("RnRn") ) {
            foalArr.push("Roan ");
        } else if (foalGeno.includes("nR") || foalGeno.includes("RR") ) {
            foalArr.push("Roan ");
        }
    } else if (foalGeno.includes("nRn") || foalGeno.includes("RnRn") ) {
        console.log(foalArr);
        allofRoan(foalArr);
    } else if (foalGeno.includes("nR") || foalGeno.includes("RR") ) {
        console.log(foalArr);
        allofRoan(foalArr);
    }
}

function addRoanorDun(foalArr, foalGeno) {
    var index;
    if (foalGeno.includes("nD") || foalGeno.includes("DD") || foalGeno.includes("DᴺˢD")  || foalGeno.includes("nDᴺˢ")) {
        if (foalGeno.includes("DᴺˢD")  || foalGeno.includes("nDᴺˢ")) {
            foalArr.push("Nobashita ");
        }
        if (foalArr.includes("Black ")) {
            index = foalArr.indexOf("Black ");
            foalArr.splice(index, 1, "Grullo ");

        } else {
            foalArr.push("Dun ");

        }
    }
    if (foalGeno.includes("nRn") || foalGeno.includes("RnRn") ) {
        if (foalArr.includes("Black ")) {
            index = foalArr.indexOf("Black ");
            foalArr.splice(index, 1, "Blue Roan ");

        } else {
            foalArr.push("Roan ");

        }
    } else if (foalGeno.includes("nR") || foalGeno.includes("RR") ) {
        if (foalArr.includes("Black ")) {
            index = foalArr.indexOf("Black ");
            foalArr.splice(index, 1, "Blue Roan ");

        } else {
            foalArr.push("Roan ");

        }
    }
}

function allofRoan(foalArr) {
    if (foalArr.includes("Black ")) {
        foalArr.push("Blue Roan ");
    } else if (foalArr.includes("Chestnut ")) {
        foalArr.push("Red Roan ");
    } else if (foalArr.includes("Wild Bay ")) {
        foalArr.push("Wild Bay Roan ");
    } else if (foalArr.includes("Bay ")) {
        foalArr.push("Bay Roan ");
    } else if (foalArr.includes("Seal Brown ")) {
        foalArr.push("Burnt Bay Roan ");
    }
}

// White pattern pheno maker.
// Array Array -> String (Pushed to 1st Array)
function whitePatPheno(foalArr, foalGeno) {
    if (foalGeno.includes("OO")) {
        foalArr.push("Lethal Overo ");
    }
    if (foalGeno.includes("nO")) {
        foalArr.push("Overo ");
    }
    if (foalGeno.includes("TbTb") || foalGeno.includes("nTb")) {
        foalArr.push("Tobiano ");
    }
    if (foalGeno.includes("TT") || foalGeno.includes("nT")) {
        foalArr.push("Tobiano ");
    }
    if (foalGeno.includes("TT") || foalGeno.includes("nT")) {
        foalArr.push("Tobiano ");
    }
    if (foalGeno.includes("SbSb") || foalGeno.includes("nSb")) {
        foalArr.push("Sabino ");
    }
    if (foalGeno.includes("RbRb") || foalGeno.includes("nRb")) {
        foalArr.push("Rabicano ");
    }
    if (foalGeno.includes("SplSpl") || foalGeno.includes("nSpl")) {
        foalArr.push("Splash ");
    }
    if (foalArr.includes("Overo ") && foalArr.includes("Tobiano ")) {
        foalArr.splice((foalArr.indexOf("Overo ")), 1);
        foalArr.splice((foalArr.indexOf("Tobiano ")), 1, "Tovero ");
    }
}

// Leopard Complex pheno maker.
/* LpLp
    PATN1 ----------> "Fewspot Appaloosa "
    PATN2 ----------> "Snowcap Appaloosa "
    Snow -----------> "Snowflake Appaloosa "
    Roan -----------> "Varnish Roan "
    ELSE -----------> "Semi Leopard Appaloosa "
nLp
    PATN1 ----------> "Leopard Appaloosa "
    PATN2 ----------> "Spotted Blanket Appaloosa "
    Snow -----------> "Frosted Appaloosa "
    Roan -----------> "Varnish Roan "
    ELSE -----------> "" */
// Array Array -> String (Pushed to 1st Array)
function LpPheno(foalArr, foalGeno) {
    if (foalGeno.includes("LpLp")) {
        if (foalGeno.includes("(PATN1)")) {
            foalArr.push("Fewspot Appaloosa ");
        } else if (foalGeno.includes("(PATN2)")) {
            foalArr.push("Snowcap Appaloosa ");
        } else if (foalGeno.includes("(snow)")) {
            foalArr.push("Snowflake Appaloosa ");
        } else if (foalGeno.includes("(roan)")) {
            foalArr.push("Varnish Roan ");
        } else {
            foalArr.push("Semi Leopard Appaloosa ");
        }
    } else if (foalGeno.includes("nLp")) {
        if (foalGeno.includes("(PATN1)")) {
            foalArr.push("Leopard Appaloosa ");
        } else if (foalGeno.includes("(PATN2)")) {
            foalArr.push("Spotted Blanket Appaloosa ");
        } else if (foalGeno.includes("(snow)")) {
            foalArr.push("Frosted Appaloosa ");
        } else if (foalGeno.includes("(roan)")) {
            foalArr.push("Varnish Roan ");
        } 
    }
}

// General mutation phenotype maker.
// Array Array -> String (Pushed to 1st Array)
function regMutPheno(foalArr, foalGeno) {
    const phenoMut = [
        "Akirajousho ", "Bunkō ", "Fearī ", "Ginga ", "Hachidori ",
        "Hanawa ", "Hebi ", "Iroshima ", "Kami ", "Kiniro ",
        "Kirameki ", "Kirin ", "Koi ", "Kojika ", "Kujaku ",
        "Kuma ", "Mamushi ", "Niji ", "Nyara ", "Ōkami ",
        "Rakurai ", "Ri-su ", "Ribāsu ", "Ryūka ", "Sakura ",
        "Seiunten ", "Shima ", "Sōgyō ", "Taika ", 
        "Tōrō ", "Tsunami ", "Yamaneko ",
        "Ametsue ", "Fubuki ", "Okurimono ", "Shogapan ", 
        "Yūreiji ", "Omoide ", "Rabendā ",
        "Kage ", "Beju ", "Tanjoutama ", 
        "Hitodama ", "Dokurōkashi ", "Oni ", "Nuime ",
        "Zonbi ", "Shanikusai ", "Shinigami "
    ];
    for (var i = 0; i < normalMut.length; i++) {
        console.log(normalMut[i]);
        console.log(normalMut[i][0]);
        console.log(normalMut[i][1]);

        if (foalGeno.includes(normalMut[i][0])) {
            foalArr.push(phenoMut[i]);
        } else if (foalGeno.includes(normalMut[i][1])) {
            foalArr.push(phenoMut[i]);
        } else {
            continue;
        }
    }
    return;
}

// Random Traits roller.
// Array -> String (Pushed to 1st Array)
function randomTraitPheno(foalArr) {
    const traitChance = Math.floor(Math.random() * 100);
    var chanceLow = 60;
    var chanceHigh = 71;
    if ((chanceLow < traitChance) && (traitChance < chanceHigh)) {
        var traits = ["Brindle ", "with Birdcatcher Spots ", "with Bend 'Or Spots ", "with Vitiligo ", "with Lacing "];
        var value = traits[Math.floor(Math.random() * traits.length)];
        foalArr.push(value);
    }
}

// Manchado roller.
// Array -> String (Pushed to 1st Array)
function manchadoPheno(foalArr) {
    const traitChance = Math.floor(Math.random() * 100);
    var chanceLow = 60;
    var chanceHigh = 69;
    if ((chanceLow < traitChance) && (traitChance < chanceHigh)) {
        foalArr.push("Manchado ");
    }
}

// Carrier pheno maker (if applicable).
// Array Array -> String (Pushed to 1st Array)
function carrierPheno(foalArr, foalGeno) {
    if ((foalGeno.includes("EE") || foalGeno.includes("Ee")) && foalGeno.includes("musmus")) {
        foalArr.push("(Mushroom carrier) ");
    } else if (foalGeno.includes("nmus")) {
        foalArr.push("(Mushroom carrier) ");
    }

    if (foalGeno.includes("PngPng") || foalGeno.includes("nPng")) {
        if (foalGeno.includes("aa") && (foalGeno.includes("EE") || foalGeno.includes("Ee"))) {
            foalArr.push("(Pangare carrier) ");
        }
    }

    if (foalGeno.includes("nf")) {
        foalArr.push("(Flaxen carrier) ");
    } else if (foalGeno.includes("ff") && (foalGeno.includes("EE") || foalGeno.includes("Ee"))) {
        foalArr.push("(Flaxen carrier) ");
    }

    if (foalGeno.includes("ee") && (foalGeno.includes("ZZ") || foalGeno.includes("nZ"))) {
        foalArr.push("(Silver carrier) ");
    }
}

// _ _ _ _ _ _ _ _ HELPER FUNCTIONS FOR FOALGENOTYPE _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// If applicable, pick the genotype of the parent to roll with.
// String (ID) String (ID) -> String
function parentGenotype(geno, chimera) {
    var x;
    if (document.getElementById(chimera).value != "") {
        var pickChance = Math.floor(Math.random() * 100);
        if (pickChance < 50) {
            x = document.getElementById(chimera).value;
            return x;
        } else {
            x = document.getElementById(geno).value;
            return x;
        }
    } else {
        x = document.getElementById(geno).value;
        return x;
    }
}

/* Extension gene roller. Follows regular gene passing probability. 
    CONSTRAINT: eE is already replaced with Ee. */
// Array Array Array -> String (pushed to 3rd Array)
function extGeneRoll(parArr1, parArr2, foalArr) {
    var rollChance = Math.floor(Math.random() * 100);
    if ((parArr1[0] === "EE") && (parArr2[0] === "EE")) {        // EE x EE
        foalArr.push("EE");
    } else if ((parArr1[0] === "EE") && (parArr2[0] === "Ee")) { // EE x Ee
        if (rollChance < 50) {
        foalArr.push("EE");
    } else {
        foalArr.push("Ee");
    }
    } else if ((parArr1[0] === "EE") && (parArr2[0] === "ee")) { // EE x ee
        foalArr.push("Ee");
    } else if ((parArr2[0] === "Ee") && (parArr2[0] === "EE")) { // Ee x EE
        if (rollChance < 50) {
        foalArr.push("EE");
        } else {
        foalArr.push("Ee");
        }
    } else if ((parArr2[0] === "Ee") && (parArr1[0] === "Ee")) { // Ee x Ee
        if (rollChance < 50) {
            foalArr.push("Ee");
        } else if ((50 <= rollChance) && (rollChance < 75)) {
            foalArr.push("EE");
        } else {
            foalArr.push("ee");
        }
    } else if ((parArr1[0] === "Ee") && (parArr2[0] === "ee")) { // Ee x ee
        if (rollChance < 50) {
            foalArr.push("Ee");
        } else {
            foalArr.push("ee");
        }
    } else if ((parArr1[0] === "ee") && (parArr2[0] === "EE")) { // ee x EE
        foalArr.push("Ee");
    } else if ((parArr1[0] === "ee") && (parArr2[0] === "Ee")) { // ee x Ee
        if (rollChance < 50) {
            foalArr.push("Ee");
        } else {
            foalArr.push("ee");
        }
    } else if ((parArr1[0] === "ee") && (parArr2[0] === "ee")) { // ee x ee
        foalArr.push("ee");
    }
}

/* Agouti gene roller. Follows regular gene passing probability. 
    At => Seal Brown
    A  => Bay
    A+ => Wild Bay
    a  => Black or chestnut depending on if there is Ee/EE or ee.
    CONSTRAINT: All heteroygous combinations (A+A, Ata, AAt etc) are replaced according to
    their relative strength (a < At < A < A+) in expresissing in the phenotype. */
// Array Array Array -> String (pushed to 3rd Array)
function agoutiGeneRoll(parArr1, parArr2, foalArr) {
    var alleleArr = ["A+", "A", "At", "a"];
    var geneArr = [
        ["A+A+", "A+A", "A+At", "A+a"],
        ["AA", "AAt", "Aa"],
        ["AtAt", "Ata"],
        ["aa"]
    ];
    var gene1 = agoutiParentRoll(parArr1, alleleArr, geneArr);

    alleleArr = ["A+", "A", "At", "a"];
    geneArr = [
        ["A+A+", "A+A", "A+At", "A+a"],
        ["AA", "AAt", "Aa"],
        ["AtAt", "Ata"],
        ["aa"]
    ];
    var gene2 = agoutiParentRoll(parArr2, alleleArr, geneArr);

    foalArr.splice(1, 0, (gene1.concat(gene2)));
}

/* Helper function for agoutiGeneRoll. Recursive function that goes through all of the
possible combinations of the allele and rolls for 1 parent. */
// Array Array Array -> String
function agoutiParentRoll(parentArr, alleleArr, geneArr) {
    var geneChance = Math.floor(Math.random() * 100);
    if (arr2HasArr1(geneArr[0], parentArr)) {
        for (var i = 0; i < geneArr[0].length; i++) {
            if (parentArr[1] === geneArr[0][i]) {
                if (geneChance < 50) {
                    return alleleArr[0];
                } else {
                    return alleleArr[i];
                }
            }
        }
    } else {
        geneArr.shift();
        alleleArr.shift();
        return agoutiParentRoll(parentArr, alleleArr, geneArr);
    }
}


// Crprl gene roller. Pushes to the foal's genotype array.
// Array Array Array -> String (pushed to 3rd Array)
function CrprlGeneRoll(parArr1, parArr2, foalArr) {
    var gene1 = TripleAlleleParentRoll(parArr1, "Crprl", "Cr", "prl");
    var gene2 = TripleAlleleParentRoll(parArr2, "Crprl", "Cr", "prl");
    var finalGene = gene1.concat(gene2);

    if (finalGene != "nn") {
        foalArr.push(finalGene);
    } // case of "nn" is never pushed.
}

//DᴺˢD gene roller. Pushes to the foal's genotype array.
// Array Array Array -> String (pushed to 3rd Array)
function nobashitaDunRoll(parArr1, parArr2, foalArr) {
    var gene1 = TripleAlleleParentRoll(parArr1, "DᴺˢD", "Dᴺˢ", "D");
    var gene2 = TripleAlleleParentRoll(parArr2, "DᴺˢD", "Dᴺˢ", "D");
    var finalGene = gene1.concat(gene2);

    if (finalGene != "nn") {
        foalArr.push(finalGene);
    } // case of "nn" is never pushed.
}

/* Helper function for CrprlGeneRoll and nobashitaDunRoll.
    Used when there is 3 options for alleles as opposed to the usual 2. 
    If found, choose one to return.
    CONSTRAINT: prlCr is already sorted out into Crprl.
                DDᴺˢ is already sorted out into DᴺˢD. */
// Array -> String
function TripleAlleleParentRoll(parArr, unusualDouble, allele1, allele2) {
    var geneChance = Math.floor(Math.random() * 100);
    if (parArr.includes(unusualDouble)) {
        if (geneChance < 50) {
        return allele1;
        } else {
        return allele2;
        }
    } else {
        return "n";
    }
}

/* Regular gene roller. Pushes the rolled genes into the foal's genotype array.
    CONSTRAINT: G.n is already sorted out into n.G */
// Array Array Array -> String (pushed to 3rd Array)
function regGeneRoll(parArr1, parArr2, foalArr) {
    for (var i = 0; i < allGenes.length; i++) {
        var geneChance = Math.floor(Math.random() * 100);

        if (parArr1.includes(allGenes[i][0]) && parArr2.includes(allGenes[i][0])) {                                              // GG x GG
            foalArr.push(allGenes[i][0]);
        } else if (parArr1.includes(allGenes[i][0]) && parArr2.includes(allGenes[i][1])) {                                       // GG x nG
            if (geneChance < 50) {
                foalArr.push(allGenes[i][0]);
            } else {
                foalArr.push(allGenes[i][1]);
            }
        } else if (parArr1.includes(allGenes[i][0]) && !parArr2.includes(allGenes[i][0]) && !parArr2.includes(allGenes[i][1])) { // GG x nn
            foalArr.push(allGenes[i][1]);

        } else if (parArr1.includes(allGenes[i][1]) && parArr2.includes(allGenes[i][0])) {                                       // nG x GG
            if (geneChance < 50) {
                foalArr.push(allGenes[i][0]);
            } else {
                foalArr.push(allGenes[i][1]);
            }
        } else if (parArr1.includes(allGenes[i][1]) && parArr2.includes(allGenes[i][1])) {                                       // nG x nG
            if (geneChance < 50) {
                foalArr.push(allGenes[i][1]);
            } else if ((50 <= geneChance) && (geneChance < 75)) {
                foalArr.push(allGenes[i][0]);
            }
        } else if (parArr1.includes(allGenes[i][1]) && !parArr2.includes(allGenes[i][0]) && !parArr2.includes(allGenes[i][1])) { // nG x nn 
            if (geneChance < 50) {
                foalArr.push(allGenes[i][1]);
            }
        } else if (!parArr1.includes(allGenes[i][0]) && !parArr1.includes(allGenes[i][1]) && parArr2.includes(allGenes[i][0])) { // nn x GG
            foalArr.push(allGenes[i][1]);
        } else if (!parArr1.includes(allGenes[i][0]) && !parArr1.includes(allGenes[i][1]) && parArr2.includes(allGenes[i][1])) { // nn x nG
            if (geneChance < 50) {
                foalArr.push(allGenes[i][1]);
            }
        }                                                                                                                        // nn x nn
    }
}


/* Regular mutation roller. 
    nMut x nn, nn x nMut, nn x nn
        are all omitted because they do not produce a foal with a mut.
*/
// Array Array Array -> String (pushed to 3rd Array)
function regMutRoll(parArr1, parArr2, foalArr) {
    for (var i = 0; i < (normalMut.length - 11); i++) {
        if (parArr1.includes(normalMut[i][0]) && parArr2.includes(normalMut[i][0])) {                                            // MutMut x MutMut
            foalArr.push(normalMut[i][0]);
        } else if (parArr1.includes(normalMut[i][0]) && parArr2.includes(normalMut[i][1])) {                                     // MutMut x nMut
            foalArr.push(normalMut[i][0]);
        } else if (parArr1.includes(normalMut[i][0]) && !parArr2.includes(normalMut[i][0]) && !parArr2.includes(normalMut[i][1])) { // MutMut x nn
            foalArr.push(normalMut[i][1]);
        } else if (parArr1.includes(normalMut[i][1]) && parArr2.includes(normalMut[i][0])) {                                     // nMut x MutMut
            foalArr.push(normalMut[i][0]);
        } else if (parArr1.includes(normalMut[i][1]) && parArr2.includes(normalMut[i][1])) {                                     // nMut x nMut
            foalArr.push(normalMut[i][1]);
        } else if (!parArr1.includes(normalMut[i][0]) && !parArr1.includes(normalMut[i][1]) && parArr2.includes(normalMut[i][0])) { // nn x MutMut
            foalArr.push(normalMut[i][1]);
        }                                                                                                                  // nn x nn
    }
}

/* Kage mutation roller. Kage (Shadow) Mutation: Genes: KagKag , nKag
    KagKag  x  KagKag = 100% KagKag            -
    KagKag  x    nKag = 100% KagKag            -
    KagKag  x Natural = 100% nKag              -
    nKag    x  KagKag = 100% KagKag            -
    nKag    x    nKag = 75% nKag , 25% KagKag  -
    nKag    x Natural = 50% nKag , 50% Natural -
    Natural x  KagKag = 100% nKag              -
    Natural x    nKag = 50% nKag , 50% Natural -
    Natural x Natural = 100% Natural           - (omitted) */
// Array Array Array -> String (pushed to 3rd Array)
function KageMutRoll(parArr1, parArr2, foalArr) {
    var geneChance = Math.floor(Math.random() * 100);
    if (parArr1.includes("KagKag") && parArr2.includes("KagKag")) {                                      // KagKag x KagKag
        foalArr.push("KagKag");
    } else if (parArr1.includes("KagKag") && parArr2.includes("nKag")) {                                 // KagKag x nKag
        foalArr.push("KagKag");
    } else if (parArr1.includes("KagKag") && !parArr2.includes("KagKag") && !parArr2.includes("nKag")) { // KagKag x nn
        foalArr.push("nKag");
    } else if (parArr1.includes("nKag") && parArr2.includes("KagKag")) {                                 // nKag x KagKag
        foalArr.push("KagKag");
    } else if (parArr1.includes("nKag") && parArr2.includes("nKag")) {                                   // nKag x nKag
        if (geneChance < 75) {
            foalArr.push("nKag");
        } else {
            foalArr.push("KagKag");
        }
    } else if (parArr1.includes("nKag") && !parArr2.includes("KagKag") && !parArr2.includes("nKag")) {   // nKag x nn
        if (geneChance < 50) {
            foalArr.push("nKag");
        }
    } else if (!parArr1.includes("KagKag") && !parArr1.includes("nKag") && parArr2.includes("KagKag")) { // nn x KagKag
        foalArr.push("nKag");
    } else if (!parArr1.includes("KagKag") && !parArr1.includes("nKag")  && parArr2.includes("nKag")) {  // nn x nKag
        if (geneChance < 50) {
            foalArr.push("nKag");
        }
    }                                                                                                    // nn x nn
}

/* Beju mutation roller. Beju (Beige/Tan) Mutation: Genes: BeBe , nBe
    BeBe    x    BeBe = 100% BeBe             1
    BeBe    x     nBe = 100% BeBe             1
    BeBe    x Natural = 100% nBe              1
    nBe     x    BeBe = 100% BeBe             1
    nBe     x     nBe = 50% nBe , 50% BeBe    1
    nBe     x Natural = 50% nBe , 50% Natural 1
    Natural x    BeBe = 100% nBe              1
    Natural x     nBe = 50% nBe , 50% Natural 1
    Natural x Natural = 100% Natural          1 (omitted) */
// Array Array Array -> String (pushed to 3rd Array)
function BejuMutRoll(parArr1, parArr2, foalArr) {
    var geneChance = Math.floor(Math.random() * 100);
    if (parArr1.includes("BeBe") && parArr2.includes("BeBe")) {                                     // BeBe x BeBe
        foalArr.push("BeBe");
    } else if (parArr1.includes("BeBe") && parArr2.includes("nBe")) {                               // BeBe x nBe
        foalArr.push("BeBe");
    } else if (parArr1.includes("BeBe") && !parArr2.includes("BeBe") && !parArr2.includes("nBe")) { // BeBe x nn
        foalArr.push("nBe");
    } else if (parArr1.includes("nBe") && parArr2.includes("BeBe")) {                               // nBe x BeBe
        foalArr.push("BeBe");
    } else if (parArr1.includes("nBe") && parArr2.includes("nBe")) {                                // nBe x nBe
        if (geneChance < 50) {
            foalArr.push("nBe");
        } else {
            foalArr.push("BeBe");
        }
    } else if (parArr1.includes("nBe") && !parArr2.includes("BeBe") && !parArr2.includes("nBe")) {  // nBe x nn
        if (geneChance < 50) {
            foalArr.push("nBe");
        }
    } else if (!parArr1.includes("BeBe") && !parArr1.includes("nBe") && parArr2.includes("BeBe")) { // nn x BeBe
        foalArr.push("nBe");
    } else if (!parArr1.includes("BeBe") && !parArr1.includes("nBe")  && parArr2.includes("nBe")) { // nn x nBe
        if (geneChance < 50) {
            foalArr.push("nBe");
        }
    }                                                                                               // nn x nn
}

/* Tanjoutama mutation roller. 
    TanTan  x  TanTan = 100% TanTan
    TanTan  x    nTan = 100% TanTan
    TanTan  x Natural = 100% nTan
    nTan    x  TanTan = 100% TanTan
    nTan    x    nTan = 100% nTan
    nTan    x Natural = 75% nTan, 25% Natural 
    Natural x  TanTan = 100% nTan
    Natural x    nTan = 75% nTan, 25% Natural 
    Natural x  Natural = 100% Natural (omitted) */
// Array Array Array -> String (pushed to 3rd Array)
function TanjMutRoll(parArr1, parArr2, foalArr) {
    var geneChance = Math.floor(Math.random() * 100);
    if (parArr1.includes("TanTan") && parArr2.includes("TanTan")) {                                      // TanTan x TanTan
        foalArr.push("TanTan");
    } else if (parArr1.includes("TanTan") && parArr2.includes("nTan")) {                                 // TanTan x nTan
        foalArr.push("TanTan");
    } else if (parArr1.includes("TanTan") && !parArr2.includes("TanTan") && !parArr2.includes("nTan")) { // TanTan x nn
        foalArr.push("nTan");
    } else if (parArr1.includes("nTan") && parArr2.includes("TanTan")) {                                 // nTan x TanTan
        foalArr.push("TanTan");
    } else if (parArr1.includes("nTan") && parArr2.includes("nTan")) {                                   // nTan x nTan
        foalArr.push("nTan");
    } else if (parArr1.includes("nTan") && !parArr2.includes("TanTan") && !parArr2.includes("nTan")) {   // nTan x nn
        if (geneChance < 75) {
            foalArr.push("nTan");
        }
    } else if (!parArr1.includes("TanTan") && !parArr1.includes("nTan") && parArr2.includes("TanTan")) { // nn x TanTan
        foalArr.push("nTan");
    } else if (!parArr1.includes("TanTan") && !parArr1.includes("nTan")  && parArr2.includes("nTan")) {  // nn x nTan
        if (geneChance < 75) {
            foalArr.push("nTan");
        }
    }                                                                                                    // nn x nn
}

/* Halloween mutation roller.
    - Hitodama (Jack O' Lantern / Human Soul) Mutation Genes: HiHi , nHi
    - Dokurōkashi (Candy Skull)               Mutation Genes: DoDo , nDo
    - Oni (Monster)                           Mutation Genes: OnOn , nOn
    - Nuime, (Sewn / Frakenstein)             Mutation Genes: NuiNui , nNui
    - Zombi (Zombie)                          Mutation Genes: ZonZon , nZon
    - Shanikusai (Carnival)                   Mutation Genes: ShaSha , nSha
    - Shinigami (God of Death)                Mutation Genes: ShinShin , nShin
    (Not actually a halloween mut) 
        - **Rabendā (Lilac / Lavender)        Mutation Genes: RabRab , nRab
    (Rolled under normal mut rates) 
        - Yūreiji (Hell Spirit)               Mutation Genes: YuYu , nYu 

    MutMut  x  MutMut = 50% MutMut , 50% nMut
    MutMut  x    nMut = 25% MutMut , 75% nMut
    MutMut  x Natural = 100% nMut
    nMut    x  MutMut = 25% MutMut , 75% nMut
    nMut    x    nMut = 10% MutMut , 40% nMut , 50% Natural
    nMut    x Natural = 100% Natural
    Natural x  MutMut = 100% nMut
    Natural x    nMut = 100% Natural
    Natural x Natural = 100% Natural 
*/
// Array Array Array -> String (pushed to 3rd Array)
function halloweenMutRoll(parArr1, parArr2, foalArr) {
    const geneArr = [
        ["HiHi", "nHi"], ["DoDo", "nDo"], ["OnOn", "nOn"], ["NuiNui", "nNui"], 
        ["ZonZon", "nZon"], ["ShaSha", "nSha"], ["ShinShin", "nShin"], ["RabRab", "nRab"]
    ];
    for (var i = 0; i < geneArr.length; i++) {
        var geneChance = Math.floor(Math.random() * 100);
        if (parArr1.includes(geneArr[i][0]) && parArr2.includes(geneArr[i][0])) {                                             // MutMut x MutMut
            if (geneChance < 50) {
                foalArr.push(geneArr[i][0]);
            } else {
                foalArr.push(geneArr[i][1]);
            }
        } else if (parArr1.includes(geneArr[i][0]) && parArr2.includes(geneArr[i][1])) {                                      // MutMut x nMut
            if (geneChance < 25) {
                foalArr.push(geneArr[i][0]);
            } else {
                foalArr.push(geneArr[i][1]);
            }
        } else if (parArr1.includes(geneArr[i][0]) && !parArr2.includes(geneArr[i][0]) && !parArr2.includes(geneArr[i][1])) { // MutMut x nn
            foalArr.push(geneArr[i][1]);
        } else if (parArr1.includes(geneArr[i][1]) && parArr2.includes(geneArr[i][0])) {                                      // nMut x MutMut
            if (geneChance < 25) {
                foalArr.push(geneArr[i][0]);
            } else {
                foalArr.push(geneArr[i][1]);
            }
        } else if (parArr1.includes(geneArr[i][1]) && parArr2.includes(geneArr[i][1])) {                                      // nMut x nMut
            if (geneChance < 10) {
                foalArr.push(geneArr[i][0]);
            } else if ((10 <= geneChance) && (geneChance < 50)) {
                foalArr.push(geneArr[i][1]);
            }                                                                                                                 // nMut x nn
        } else if (!parArr1.includes(geneArr[i][0]) && !parArr1.includes(geneArr[i][1]) && parArr2.includes(geneArr[i][0])) { // nn x MutMut
            foalArr.push(geneArr[i][1]);
        }                                                                                                                     // nn x nMut
    }                                                                                                                         // nn x nn
}

/* Christmas Breeding Season Special Roll. 
    CONSTRAINT: Date must be december to run. */
// Array -> String (Pushed to Array)
function xmasSpecialRoll(foalArr) {
    // December special christmas mutations.
    var dt = new Date();
    var month = dt.getMonth();
    var mutArr = [
        ["AmeAme", "nAme"], // Christmas Mutation
        ["FuFu", "nFu"],    // Christmas Mutation
        ["OkuOku", "nOku"], // Christmas Mutation
        ["ShoSho", "nSho"], // Christmas Mutation
    ];
    var valueMut;

    if (month === 11) {
        var xmasChance = Math.floor(Math.random() * 100);
        console.log("It's december!");
        for (var i = 0; i < mutArr.length; i++) {
            if (foalArr.includes(mutArr[i][0]) || foalArr.includes(mutArr[i][1])) {
                mutArr.splice(i, 1);
                if (xmasChance < 20) {
                    valueMut = mutArr[Math.floor(Math.random() * mutArr.length)][1];
                    foalArr.push(valueMut);
                } else if ((20 <= xmasChance) && (xmasChance < 30)) {
                    valueMut = mutArr[Math.floor(Math.random() * mutArr.length)][0];
                    foalArr.push(valueMut);
                }
                break;
            } else if (!arr2HasArr1(mutArr, foalArr)) {
                if (xmasChance < 20) {
                    valueMut = mutArr[Math.floor(Math.random() * mutArr.length)][1];
                    foalArr.push(valueMut);
                } else if ((20 <= xmasChance) && (xmasChance < 30)) {
                    valueMut = mutArr[Math.floor(Math.random() * mutArr.length)][0];
                    foalArr.push(valueMut);
                }
                break;
            }
        }
    } else {
        console.log("It's not december yet!");
    }
}

// Roller for Lp gene modifiers. (PATN1, PATN2, snow & roan.) Lp Mod roller has 3 phases.
// Array Array Array -> String (pushed to 3rd Array)
function LpModRoll(parArr1, parArr2, foalArr) {
    var modArr = [];
    var mod1 = phase1LpMod(parArr1);
    var mod2 = phase1LpMod(parArr2);

    if (mod1 != "") {
        modArr.push(mod1);
    } 
    if (mod2 != "") {
        modArr.push(mod2);
    }

    if ((modArr.length > 0) && (modArr != undefined)) {
        modArr = phase2LpMod(modArr, foalArr);
    }

    if ((modArr.length > 0) && (modArr != undefined)) {
        modArr = phase3LpMod(modArr);
        foalArr.push(modArr);
    }
}

/* Phase 1 of the Lp Mod Roller.
    PHASE 1 ------------------------------------------------------------------------------
    If parent has LpLp:
        100% probability of passing on the mod or either mod.
    If parent has nLp:
        50% probability of passing on the mod. */
// Array -> String
function phase1LpMod(parentArr) {
    // var index;
    const modAll = ["(PATN1)", "(PATN1PATN2)", "(PATN1snow)", "(PATN1roan)", "(PATN2)", "(PATN2snow)", "(PATN2roan)", "(snow)", "(snowroan)", "(roan)"];
    if (parentArr.includes("LpLp") && arr2HasArr1(modAll, parentArr)) {
            var modArr = ["PATN1", "PATN2", "snow", "roan"];
            var modComboArr = [
                ["(PATN1)", "(PATN1PATN2)", "(PATN1snow)", "(PATN1roan)"],
                ["(PATN2)", "(PATN2snow)", "(PATN2roan)"],
                ["(snow)", "(snowroan)"],
                ["(roan)"]
            ];
            var holdIt = HeterozModRoll(parentArr, modArr, modComboArr);
            return holdIt;
        
    } else if (parentArr.includes("nLp") && arr2HasArr1(singleModArr, parentArr)) {
        var modChance = Math.floor(Math.random() * 100);
        if (modChance < 50) {
            for (var i = 0; i < 4; i++) {
                if (parentArr.includes(singleModArr[i])) {
                    index = parentArr.indexOf(singleModArr[i]);
                    parentArr.splice(index, 1);
                    return AlleleArr[i];
                }
            }
        } else {
            return "";
        }
    } else {
        return "";
  }
}

// Recursive, helper function for phase1LpMod.
// Array Array Array -> String
function HeterozModRoll(parentArr, alleleArr, geneArr) {
    var geneChance = Math.floor(Math.random() * 100);
    
    if (arr2HasArr1(geneArr[0], parentArr)) {
        for (var i = 0; i < geneArr[0].length; i++) {
            if (parentArr.indexOf(geneArr[0][i]) != -1) {
                if (geneChance < 50) {
                    return alleleArr[0];
                } else {
                    return alleleArr[i];
                }
            }
        }
    } else {
        geneArr.shift();
        alleleArr.shift();
        return HeterozModRoll(parentArr, alleleArr, geneArr);
    }
}

/* Phase 2 of the Lp Mod Roller.
    PHASE 2 ------------------------------------------------------------------------------
        If foal has LpLp & has 2 mods:
            Keep the mods. 
        If foal has LpLp & has 1 mod:
            Convert to proper mod standard. (The one mod is in brackets.)
        If foal has nLp & has 1 mod:
            Convert to proper mod standard. (The one mod is in brackets.)
        If foal has nLp & has 2 mods:
            Only keeps 1. Length can be 1.
        If foal is nn for Lp gene:
            Looses any/all mods. 
    CONSTRAINT: ModArr will never contain "" and will never be empty. */
// Array Array -> Array
function phase2LpMod(modArr, foalArr) {
    var modChance = Math.floor(Math.random() * 100);
    var newArr = [];

    if (foalArr.includes("LpLp") && (modArr.length === 2)){
        return modArr;
    } else if (foalArr.includes("LpLp") && (modArr.length === 1)) {
        for (var i = 0; i < 4; i++) {
            if (modArr[0] === AlleleArr[i]) {
                newArr = [singleModArr[i]];
                return newArr;
            }
        }
    } else if (foalArr.includes("nLp") && (modArr.length === 1)) {
        for (var i = 0; i < 4; i++) {
            if (modArr[0] === AlleleArr[i]) {
                newArr = [singleModArr[i]];
                return newArr;
            }
        }
    } else if (foalArr.includes("nLp") && (modArr.length === 2)) {
        if (modChance < 50) {
            newArr = [("(" + modArr[0] + ")")];
            return newArr;
        } else {
            newArr = [("(" + modArr[1] + ")")];
            return newArr;
        }
    } else {
        return newArr;
    }
}

/*Phase 3 of the Lp Mod Roller.
    PHASE 3 ------------------------------------------------------------------------------
        Double of any mod is condensed into 1 word/mod.
        Hierarchy is PATN1 > PATN2 > SNOW > ROAN.
        Reorganize:
            PATN2 PATN1 -> PATN1 PATN2
            snow PATN1  -> PATN1 snow
            snow PATN2  -> PATN2 snow
            roan PATN1  -> PATN1 roan
            roan PATN2  -> PATN2 roan
            roan snow   -> snow roan */
// Array -> String
function phase3LpMod(modArr) {
    if (arr2HasArr1(singleModArr, modArr)) { // If it has any from singleModArr, return ModArr as string
        return modArr.toString();
    } else if (modArr.length === 2) { // If has length of 2 ...
        for (var i = 0; i < 4; i++) {
            if ((countInArray(modArr, AlleleArr[i])) > 1) { // and has duplicates, return the corresponding singleModArr.
                return modArr = singleModArr[i];
            } else {                            // are not duplicates, join both, sort hierachy and add str brackets.
                var hold = "(" + modArr.join("") + ")";
                const variations = [
                    ["(PATN2PATN1)", "(PATN1PATN2)"],
                    ["(snowPATN1)", "(PATN1snow)"],
                    ["(roanPATN1)", "(PATN1roan)"],
                    ["(snowPATN2)", "(PATN2snow)"],
                    ["(roanPATN2)", "(PATN2roan)"],
                    ["(roansnow)", "(snowroan)"]
                ];
                
                for (var i of variations) {
                    if (hold.includes(i[0])) {
                        hold = i[1];
                    }
                }
                return hold;
            }
        }
    }
}

/* If there are:
    A) x2 nCr => CrCr 
    B) x2 nprl =. prlprl 
    C) x1 nCr & x1 nprl => Crprl */ 
// Array -> Array
function CrprlCheck(foalArr) {
    var index0;
    var index1;
    if (countInArray(foalArr, "nCr") > 1) {
        index0 = foalArr.indexOf("nCr");
        foalArr.splice(index0, 1);

        index1 = foalArr.indexOf("nCr");
        foalArr.splice(index1, 1, "CrCr");
    }
    if (countInArray(foalArr, "nprl") > 1) {
        index0 = foalArr.indexOf("nprl");
        foalArr.splice(index0, 1);

        index1 = foalArr.indexOf("nprl");
        foalArr.splice(index1, 1, "prlprl");
    }
    if (foalArr.includes("nCr") && foalArr.includes("nprl")) {
        index0 = foalArr.indexOf("nCr");
        foalArr.splice(index0, 1);

        index1 = foalArr.indexOf("nprl");
        foalArr.splice(index1, 1, "Crprl");
    }
}

/* If there is nD and nDᴺˢ, combine into DᴺˢD */
function specialDunCheck(foalArr) {
    var index;
    if (foalArr.includes("nD") && foalArr.includes("nDᴺˢ")) {
        index = foalArr.indexOf("nD");
        foalArr.splice(index, 1);
        index = foalArr.indexOf("nDᴺˢ");
        foalArr.splice(index, 1, "DᴺˢD");
    }
}