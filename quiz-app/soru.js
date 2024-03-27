function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;

}

Soru.cevapKontrolEt = function(cevap) {
        return cevap === this.dogruCevap
    }


    let sorular = [
        new Soru("1-Which is a javascript package management application?", { a: "node.js",b: "typescript",c: "npm", d: "nuget" }, "c"),
        new Soru("2-Which is not considered within the scope of frontend?", { a: "css",b: "html",c: "javascript", d: "sql"}, "d"),
        new Soru("3-Which is evaluated in the scope of backend?", { a: "node.js",b: "typescript",c: "angular", d: "angular"}, "a"),
        new Soru("4-Which does not use the javascript programming language?", { a: "react",b: "angular",c: "vuejs", d: "asp.net"}, "d")
    ];
    