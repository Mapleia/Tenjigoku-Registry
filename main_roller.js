// CONSTANTS
const genoIDArray = ["geno1", "geno2", "geno3"];
const PhenoIDArray = ["pheno1", "pheno2", "pheno3"];
const fatalArray = ["fatal1", "fatal2", "fatal3"];

const twinGenoIDArray = ["geno1", "geno2", "geno3", "geno4", "geno5", "geno6"];
const twinPhenoIDArray = ["pheno1", "pheno2", "pheno3", "pheno4", "pheno5", "pheno6"];
const twinFatalArray = ["fatal1", "fatal2","fatal3", "fatal4", "fatal5", "fatal6"];

const allGenes = [
    ["WW", "nW"],
    ["GG", "nG"],
    ["ZZ", "nZ"],
    ["StySty", ""],
    ["ff", "nf"],
    ["ChCh", "nCh"],
    ["CrCr", "nCr"],
    ["DD", "nD"],
    ["RR", "nR"],
    ["RnRn", "nRn"],
    ["prlprl", "nprl"],
    ["musmus", "nmus"],
    ["OO", "nO"],
    ["TT", "nT"],
    ["TbTb", "nTb"],
    ["SbSb", "nSb"],
    ["RbRb", "nRb"],
    ["SplSpl", "nSpl"],
    ["LpLp", "nLp"],
    ["PngPng", "nPng"],
    ["OmOm", "nOm"] // Mutation, but passes like a gene
];

const normalMut = [
    ["AkiAki", "nAki"],
    ["BuBu", "nBu"],
    ["FeFe", "nFe"],
    ["GinGin", "nGin"],
    ["HaHa", "nHa"],
    ["HanHan", "nHan"],
    ["HeHe", "nHe"],
    ["IroIro", "nIro"],
    ["KaKa", "nKa"],
    ["KinKin", "nKin"],
    ["KiKi", "nKi"],
    ["KirKir", "nKir"],
    ["KoiKoi", "nKoi"],
    ["KoKo", "nKo"],
    ["KjKj", "nKj"],
    ["KuKu", "nKu"],
    ["MaMa", "nMa"],
    ["NiNi", "nNi"],
    ["NyNy", "nNy"],
    ["OkaOka", "nOka"],
    ["RaRa", "nRa"],
    ["RiRi", "nRi"],
    ["RibRib", "nRib"],
    ["RyRy", "nRy"],
    ["SakSak", "nSak"],
    ["SeiSei", "nSei"],
    ["ShiShi", "nShi"],
    ["SogSog", "nSog"],
    ["TaiTai", "nTai"],
    ["ToTo", "nTo"],
    ["TsuTsu", "nTsu"],
    ["YaYa", "nYa"],
    ["AmeAme", "nAme"], // Christmas Mutation
    ["FuFu", "nFu"],    // Christmas Mutation
    ["OkuOku", "nOku"], // Christmas Mutation
    ["ShoSho", "nSho"], // Christmas Mutation
    ["YuYu", "nYu"]     // Halloween Mutation
    // OmOm nOm is in the regular gene roller array
    // RabRab nRab is in the halloween roller array
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

/* function main2() {
    const foalID1 = document.getElementById("foalID1").value;
    document.getElementById("outputID1").innerHTML = "ID: " + foalID1;
    const foalID2 = document.getElementById("foalID2").value;
    document.getElementById("outputID2").innerHTML = "ID: " + foalID2;

    var isXmasSeason = document.getElementById("ChristmasBreedingSeason").checked;
    console.log("ChristmasBreedingSeason is " + isXmasSeason);

    var twinChance = Math.floor(Math.random() * 100);
    console.log("The chance for twin that was rolled: " + twinChance);
    var twinMin = 60;
    var twinMax = 71;
    if (isXmasSeason == true) {
        twinMax = twinMax + 10; // 81
    }

    if ((twinMin < twinChance) && (twinChance < twinMax)) {
        document.getElementById("Annoucement").innerHTML = "You have successfully rolled for twins!";
        showElement("twin1");
        showElement("twinDiv1");
        showElement("twinDiv2");

        foalIndividual(twinGenoIDArray, twinPhenoIDArray);
        lethalOmoide(twinGenoIDArray, twinFatalArray);
    } else {
        document.getElementById("Annoucement").innerHTML = "Roll for twins has failed to pass.";
        hideElement("twinDiv2");
        showElement("twinDiv1");
        hideElement("twin1");

        foalIndividual(genoIDArray, PhenoIDArray);
        lethalOmoide(genoIDArray, PhenoIDArray);
    }
} */

// ============== HELPER FUNCTIONS FOR MAIN ========================================

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
            var geno1 = foalGenotype();
            var geno2 = foalGenotype();                    
            genoTxt.push("<b>Genotype: </b>" + geno1 + "//" + geno2);

            var pheno1 = foalPhenotype(geno1);
            var pheno2 = foalPhenotype(geno2);
            phenoTxt.push("<b>Phenotype: </b>" + pheno1 + "//" + pheno2 + " Chimera");
            
        } else {
            var geno3 = foalGenotype();
            genoTxt.push("<b>Genotype: </b>" + geno3);

            var pheno3 = foalPhenotype(geno3);
            phenoTxt.push("<b>Phenotype: </b>" + pheno3);
        }
    }

    var temp = [];
    temp.push(genoTxt, phenoTxt);
    return temp;
}

// Array Array -> Element
/* function foalIndividual2(genoidarr, phenoidarr) {
    var chimeraMin = 60;
    var chimeraMax = 69;
    for (var i = 0; i < phenoidarr.length; i++) {

        var genotype = foalGenotype();
        var phenotype = foalPhenotype(genotype);
        genotype = genotype.trim();
        phenotype = phenotype.trim();
        console.log("Genotype: " + genotype);
        console.log("Phenotype: " + phenotype);        

        var chimeraGenotype = foalGenotype();
        var chimeraPhenotype = foalPhenotype(chimeraGenotype);
        chimeraGenotype = chimeraGenotype.trim();
        chimeraPhenotype = chimeraPhenotype.trim();
        console.log("Chimera Genotype: " + chimeraGenotype);
        console.log("Chimera Phenotype: " + chimeraPhenotype);        

        var chimeraChance = Math.floor(Math.random() * 100);
        var currentGenoEle = document.getElementById(genoidarr[i]);
        var currentPhenoEle = document.getElementById(phenoidarr[i]);

        if ((chimeraMin < chimeraChance) && (chimeraChance < chimeraMax)) {
            currentPhenoEle.innerHTML = phenotype + " // " + chimeraPhenotype;
            currentGenoEle.innerHTML = genotype + " // " + chimeraGenotype;

        } else {
            currentPhenoEle.innerHTML = phenotype;
            currentGenoEle.innerHTML = genotype;
        }
    }
} */

// Array Array -> Element
/* function lethalOmoide2(resultarr, fatalarr) {
  for (var i = 0; i < resultarr.length; i++) {
    var doubleOm = document.getElementById(resultarr[i]).innerHTML;
    if (doubleOm.includes("OmOm")) {
      document.getElementById(fatalarr[i]).innerHTML = "Lethal Omoide - Dead Foal";
    } else {
      document.getElementById(fatalarr[i]).innerHTML = "";
    }
  }
} */

// If style display is hidden, show it.
// String -> Element
/* function showElement(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}*/

// If style display is showing, hide it.
// String -> Element
/* function hideElement(id) {
  var x = document.getElementById(id);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
} */

// -------------- HELPER FUNCTIONS FOR FOALINDIVIDUAL -----------------------------

// Make the phenotype according to the rolled genotype of the foal.
// String -> String
// !!!
function foalPhenotype(foalGeno) {
    console.log(foalGeno);
    console.log(typeof(foalGeno));
    return "NOT DONE YET";
}

// Roll genotype according to the genotypes of the dam (mare) and sire (stallion).
// String String -> String
function foalGenotype() {
    var damGeno = parentGenotype("DamGeno", "DamChimera");
    var sireGeno = parentGenotype("SireGeno", "SireChimera");

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
    regMutRoll(damGenoArr, sireGenoArr, foalGenoArr);
    KageMutRoll(damGenoArr, sireGenoArr, foalGenoArr);
    BejuMutRoll(damGenoArr, sireGenoArr, foalGenoArr);
    TanjMutRoll(damGenoArr, sireGenoArr, foalGenoArr);
    halloweenMutRoll(damGenoArr, sireGenoArr, foalGenoArr);
    xmasSpecialRoll(foalGenoArr);
    LpModRoll(damGenoArr, sireGenoArr, foalGenoArr);
    CrprlCheck(foalGenoArr);
    console.log("foalGenoArr is: " + foalGenoArr);
    var foalGenoStr = foalGenoArr.join(" ");
    foalGenoStr = foalGenoStr.trim();
    console.log("foalGenoStr is: " + foalGenoStr);
    return foalGenoStr;
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

// Replace every instance of Gene.n (Gene/No Gene) with n.Gene
// Array -> Array
function replaceGeneN(arr) {
    const lookingFor = [
        "eE", "aA", "aAt", "aA+", "AA+", "AtA+", "AtA", "Dn","On", "Gn", "Wn", "fn", "Zn", "Rn", "Rnn", 
        "Lpn", "Tn", "Tbn", "Sbn", "Rbn", "prln", "Crn", "prlCr", "Chn", "musn", "Spln", "Styn", "Pngn", 
        "(PATN2PATN1)", "(snowPATN1)", "(roanPATN1)", "(snowPATN2)", "(roanPATN2)", "(roansnow)",
        "Akin","Bun", "Fen", "Ginn", "Han", "Hann", "Hen","Iron", "Kan", "Kinn", "Kin", "Kirn", "Koin",
        "Kon", "Kjn", "Kun", "Man", "Nin", "Nyn", "Okan", "Omn", "Rabn", "Ran", "Rin", "Ribn", "Ryn",
        "Sakn", "Sein", "Shin", "Sogn", "Tain", "Ton", "Tsun", "Yan", "Amen", "Fun", "Okun", "Shon", "Hin",
        "Don", "Zonn", "Nuin", "Shinn", "Shan", "Yun"
    ];
    
    const replaceWith = [
        "Ee", "Aa", "Ata", "A+a", "A+A", "A+At", "AAt", "nD", "nO", "nG", "nW", "nf", "nZ", "nR", "nRn",
        "nLp", "nT", "nTb", "nSb", "nRb", "nprl", "nCr", "Crprl", "nCh", "nmus", "nSpl", "nSty", "nPng",
        "(PATN1PATN2)", "(PATN1snow)","(PATN1roan)","(PATN2snow)","(PATN2roan)","(snowroan)",
        "nAki", "nBu", "nFe", "nGin", "nHa", "nHan", "nHe","nIro","nKa","nKin","nKi","nKir","nKoi","nKo",
        "nKj","nKu","nMa","nNi","nNy","nOka","nOm","nRab","nRa","nRi","nRib","nRy","nSak","nSei","nShi",
        "nSog","nTai","nTo","nTsu","nYa","nAme","nFu","nOku","nSho","nHi","nDo","nZon","nNui","nShin","nSha","nYu"
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

// If arr2 has at least 1 element of arr1, produce true.
// Array Array -> Boolean
function arr2HasArr1(arr1, arr2) {
    return arr1.some(ele => arr2.includes(ele));
}

// Crprl gene roller. Pushes to the foal's genotype array.
// Array Array Array -> String (pushed to 3rd Array)
function CrprlGeneRoll(parArr1, parArr2, foalArr) {
    var gene1 = CrprlParentRoll(parArr1);
    var gene2 = CrprlParentRoll(parArr2);
    var finalGene = gene1.concat(gene2);

    if (finalGene === "Crn") {
        foalArr.push("nCr");
    } else if (finalGene === "prln") {
        foalArr.push("nprl");
    } else if (finalGene === "prlCr") {
        foalArr.push("Crprl");
    } else if (finalGene === ("CrCr" || "nCr" || "Crprl" || "nprl" || "prlprl")) {
        foalArr.push(finalGene);
    } // case of "nn" is never pushed.
}

/* Helper function for CrprlGeneRoll. If found, remove the gene from parent array(s).
    CONSTRAINT: prlCr is already sorted out into Crprl.*/
// Array -> String
function CrprlParentRoll(parArr) {
    var geneChance = Math.floor(Math.random() * 100);
    if (parArr.includes("Crprl")) {
        if (geneChance < 50) {
        return "Cr";
        } else {
        return "prl";
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
    for (var i = 0; i < normalMut.length; i++) {
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

/* Tanjoutama mutation roller. TanTan X TanTan = 100% TanTan
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
(Not actually a halloween mut) 
    - **Rabendā (Lilac / Lavender)        Mutation Genes: RabRab , nRab
- Zombi (Zombie)                          Mutation Genes: ZonZon , nZon
- Nuime, (Sewn / Frakenstein)             Mutation Genes: NuiNui , nNui
- Shinigami (God of Death)                Mutation Genes: ShinShin , nShin
- Shanikusai (Carnival)                   Mutation Genes: ShaSha , nSha
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
Natural x Natural = 100% Natural */
// Array Array Array -> String (pushed to 3rd Array)
// !!!
function halloweenMutRoll(parArr1, parArr2, foalArr) {
    const geneArr = [
        ["HiHi", "nHi"],
        ["DoDo", "nDo"],
        ["RabRab", "nRab"],
        ["ZonZon", "nZon"],
        ["NuiNui", "nNui"],
        ["ShinShin", "nShin"],
        ["ShaSha", "nSha"]
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
            } else if ((10 <= x) && (x < 50)) {
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
        var xmaxChance = Math.floor(Math.random() * 100);
        console.log("It's december!");
        for (var i = 0; i < mutArr.length; i++) {
            if (foalArr.includes(mutArr[i][0]) || foalArr.includes(mutArr[i][1])) {
                mutArr.splice(i, 1);
                if (xmaxChance < 20) {
                    valueMut = mutArr[Math.floor(Math.random() * mutArr.length)][1];
                    foalArr.push(valueMut);
                } else if ((20 <= xmaxChance) && (xmaxChance < 30)) {
                    valueMut = mutArr[Math.floor(Math.random() * mutArr.length)][0];
                    foalArr.push(valueMut);
                }
                break;
            } else if (!arr2HasArr1(mutArr, foalArr)) {
                if (xmaxChance < 20) {
                    valueMut = mutArr[Math.floor(Math.random() * mutArr.length)][1];
                    foalArr.push(valueMut);
                } else if ((20 <= xmaxChance) && (xmaxChance < 30)) {
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

    if ((modArr.length > 0) || (modArr != undefined)) {
        modArr = phase2LpMod(modArr, foalArr);
    }

    if ((modArr.length > 0) || (modArr != undefined)) {
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
    const modAll = ["(PATN1)", "(PATN1PATN2)", "(PATN1snow)", "(PATN1roan)", "(PATN2)", "(PATN2snow)", "(PATN2roan)", "(snow)", "(snowroan)","(roan)"];
    if (parentArr.includes("LpLp") && arr2HasArr1(modAll, parentArr)) {
            var modArr = ["PATN1", "PATN2", "snow", "roan"];
            var modComboArr = [
                ["(PATN1)", "(PATN1PATN2)", "(PATN1snow)", "(PATN1roan)"],
                ["(PATN2)", "(PATN2snow)", "(PATN2roan)"],
                ["(snow)", "(snowroan)"],
                ["(roan)"]
            ];
            var holdIt = MultiAlleleRoll(parentArr, modArr, modComboArr);
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

function MultiAlleleRoll(parentArr, alleleArr, geneArr) {
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
        return MultiAlleleRoll(parentArr, alleleArr, geneArr);
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

/* If there are:
    A) x2 nCr => CrCr 
    B) x2 nprl =. prlprl 
    C) x1 nCr & x1 nprl => Crprl */ 
// Array -> Array
function CrprlCheck(foalArr) {
    if (countInArray(foalArr, "nCr") > 1) {
        var index0 = foalArr.indexOf("nCr");
        var index1 = foalArr.indexOf("nCr", (index0 + 1));
        foalArr.splice(index0, 1);
        foalArr.splice(index1, 1, "CrCr");
    }
    if (countInArray(foalArr, "nprl") > 1) {
        var index2 = foalArr.indexOf("nprl");
        var index3 = foalArr.indexOf("nprl", (index2 + 1));
        foalArr.splice(index2, 1);
        foalArr.splice(index3, 1, "prlprl");
    }
    if (foalArr.includes("nCr") && foalArr.includes("nprl")) {
        var index4 = foalArr.indexOf("nCr");
        var index5 = foalArr.indexOf("nprl");
        foalArr.splice(index4, 1);
        foalArr.splice(index5, 1, "Crprl");
    }
}