let o1 = {};
o1.a1 = "aaaaaaaa";
o1.a2 = "bbbbbbbb";

let { a1, a2 } = { ...o1 };

let f1=()={

    console.log("aaaaaa : ", a1, a2);
}

