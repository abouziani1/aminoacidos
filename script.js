const ARNm = document.querySelector(".secuencia-traducir");
const comprobarBtn = document.querySelector(".btn-traducir");
const secuenciaProteina = document.querySelector(".secuencia-proteina");

const basesNitrogenadas = ["A", "U", "C", "G"];
const codigoGenetico = {
    // U
    "UUU": { aminoacido: "Fenilalanina", abrev: "Phe", ARNt: "AAA" },
    "UUC": { aminoacido: "Fenilalanina", abrev: "Phe", ARNt: "AAG" },
    "UUA": { aminoacido: "Leucina", abrev: "Leu", ARNt: "AAU" },
    "UUG": { aminoacido: "Leucina", abrev: "Leu", ARNt: "AAC" },
    "UCU": { aminoacido: "Serina", abrev: "Ser", ARNt: "AGA" },
    "UCC": { aminoacido: "Serina", abrev: "Ser", ARNt: "AGG" },
    "UCA": { aminoacido: "Serina", abrev: "Ser", ARNt: "AGU" },
    "UCG": { aminoacido: "Serina", abrev: "Ser", ARNt: "AGC" },
    "UAU": { aminoacido: "Tirosina", abrev: "Tyr", ARNt: "AUA" },
    "UAC": { aminoacido: "Tirosina", abrev: "Tyr", ARNt: "AUG" },
    "UAA": { aminoacido: "STOP (Fin)", abrev: "STOP", ARNt: "AUU" },
    "UAG": { aminoacido: "STOP (Fin)", abrev: "STOP", ARNt: "AUC" },
    "UGU": { aminoacido: "Cisteína", abrev: "Cys", ARNt: "ACA" },
    "UGC": { aminoacido: "Cisteína", abrev: "Cys", ARNt: "ACG" },
    "UGA": { aminoacido: "STOP (Fin)", abrev: "STOP", ARNt: "ACU" },
    "UGG": { aminoacido: "Triptófano", abrev: "Trp", ARNt: "ACC" },

    // C
    "CUU": { aminoacido: "Leucina", abrev: "Leu", ARNt: "GAA" },
    "CUC": { aminoacido: "Leucina", abrev: "Leu", ARNt: "GAG" },
    "CUA": { aminoacido: "Leucina", abrev: "Leu", ARNt: "GAU" },
    "CUG": { aminoacido: "Leucina", abrev: "Leu", ARNt: "GAC" },
    "CCU": { aminoacido: "Prolina", abrev: "Pro", ARNt: "GGA" },
    "CCC": { aminoacido: "Prolina", abrev: "Pro", ARNt: "GGG" },
    "CCA": { aminoacido: "Prolina", abrev: "Pro", ARNt: "GGU" },
    "CCG": { aminoacido: "Prolina", abrev: "Pro", ARNt: "GGC" },
    "CAU": { aminoacido: "Histidina", abrev: "His", ARNt: "GUA" },
    "CAC": { aminoacido: "Histidina", abrev: "His", ARNt: "GUG" },
    "CAA": { aminoacido: "Glutamina", abrev: "Gln", ARNt: "GUU" },
    "CAG": { aminoacido: "Glutamina", abrev: "Gln", ARNt: "GUC" },
    "CGU": { aminoacido: "Arginina", abrev: "Arg", ARNt: "GCA" },
    "CGC": { aminoacido: "Arginina", abrev: "Arg", ARNt: "GCG" },
    "CGA": { aminoacido: "Arginina", abrev: "Arg", ARNt: "GCU" },
    "CGG": { aminoacido: "Arginina", abrev: "Arg", ARNt: "GCC" },

    // A
    "AUU": { aminoacido: "Isoleucina", abrev: "Ile", ARNt: "UAA" },
    "AUC": { aminoacido: "Isoleucina", abrev: "Ile", ARNt: "UAG" },
    "AUA": { aminoacido: "Isoleucina", abrev: "Ile", ARNt: "UAU" },
    "AUG": { aminoacido: "Metionina", abrev: "Met", ARNt: "UAC" }, // Codón de inicio
    "ACU": { aminoacido: "Treonina", abrev: "Thr", ARNt: "UGA" },
    "ACC": { aminoacido: "Treonina", abrev: "Thr", ARNt: "UGG" },
    "ACA": { aminoacido: "Treonina", abrev: "Thr", ARNt: "UGU" },
    "ACG": { aminoacido: "Treonina", abrev: "Thr", ARNt: "UGC" },
    "AAU": { aminoacido: "Asparagina", abrev: "Asn", ARNt: "UUA" },
    "AAC": { aminoacido: "Asparagina", abrev: "Asn", ARNt: "UUG" },
    "AAA": { aminoacido: "Lisina", abrev: "Lys", ARNt: "UUU" },
    "AAG": { aminoacido: "Lisina", abrev: "Lys", ARNt: "UUC" },
    "AGU": { aminoacido: "Serina", abrev: "Ser", ARNt: "UCA" },
    "AGC": { aminoacido: "Serina", abrev: "Ser", ARNt: "UCG" },
    "AGA": { aminoacido: "Arginina", abrev: "Arg", ARNt: "UCU" },
    "AGG": { aminoacido: "Arginina", abrev: "Arg", ARNt: "UCC" },

    // G
    "GUU": { aminoacido: "Valina", abrev: "Val", ARNt: "CAA" },
    "GUC": { aminoacido: "Valina", abrev: "Val", ARNt: "CAG" },
    "GUA": { aminoacido: "Valina", abrev: "Val", ARNt: "CAU" },
    "GUG": { aminoacido: "Valina", abrev: "Val", ARNt: "CAC" },
    "GCU": { aminoacido: "Alanina", abrev: "Ala", ARNt: "CGA" },
    "GCC": { aminoacido: "Alanina", abrev: "Ala", ARNt: "CGG" },
    "GCA": { aminoacido: "Alanina", abrev: "Ala", ARNt: "CGU" },
    "GCG": { aminoacido: "Alanina", abrev: "Ala", ARNt: "CGC" },
    "GAU": { aminoacido: "Ácido Aspártico", abrev: "Asp", ARNt: "CUA" },
    "GAC": { aminoacido: "Ácido Aspártico", abrev: "Asp", ARNt: "CUG" },
    "GAA": { aminoacido: "Ácido Glutámico", abrev: "Glu", ARNt: "CUU" },
    "GAG": { aminoacido: "Ácido Glutámico", abrev: "Glu", ARNt: "CUC" },
    "GGU": { aminoacido: "Glicina", abrev: "Gly", ARNt: "CCA" },
    "GGC": { aminoacido: "Glicina", abrev: "Gly", ARNt: "CCG" },
    "GGA": { aminoacido: "Glicina", abrev: "Gly", ARNt: "CCU" },
    "GGG": { aminoacido: "Glicina", abrev: "Gly", ARNt: "CCC" }
};

function comprobarARNm() {
    let secuencia = ARNm.value
    secuencia = secuencia.toUpperCase()
        .replaceAll(" ", "")
        .replaceAll("-", "")
        .split('')

    if(secuencia.length === 0){
        secuenciaProteina.textContent = "Introduzca una secuencia."
        return false;
    }

    for (let i = 0; i < secuencia.length; i++) {
        const baseNitrogenada = secuencia[i];
        if (!basesNitrogenadas.includes(baseNitrogenada)) {
            secuenciaProteina.textContent = "Error: La secuencia contiene bases no válidas."
            return false;
        }
    }
    return true;
}

function traducirSecuencia() {
    let secuencia = ARNm.value
    secuencia = secuencia.toUpperCase()
        .replaceAll(" ", "")
        .replaceAll("-", "")

    let codones = []

    for (let i = 0; i < secuencia.length; i += 3) {
        let trillete = secuencia.slice(i, i + 3)
        
        codones.push(trillete)
    }

    let aa = []

    for (let i = 0; i < codones.length; i++) {
        const trillete = codones[i];
        let datosCodones = codigoGenetico[trillete];

        aa.push(datosCodones.abrev)
    }

    secuenciaProteina.textContent = aa.join(", ")
}

function ejecutarTraduccion() {
    if (comprobarARNm()) {
        traducirSecuencia();
    }
}

ARNm.addEventListener("input", () => {
    let textoLimpio = ARNm.value.toUpperCase().replace(/[^A-Z]/g, "");
    let textoConGuiones = textoLimpio.match(/.{1,3}/g)?.join("-") || "";
    ARNm.value = textoConGuiones;
});

comprobarBtn.addEventListener("click", ejecutarTraduccion);

window.addEventListener("keydown", (e)=>{
    if (e.key == "Enter") {
        ejecutarTraduccion()
    }
})
