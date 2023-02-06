//割合から量を計算するための係数
const waterCoefficient =
    [
        13960,
        4291,
        8301,
        66,
        22926,
        13637,
        108,
        62798,
        19310,
        37353,
        296,
        29904,
        9195,
        17787,
        141,
    ]

//行のINPUTタグ要素数
const numOfelementOfLine = 2;
//列のINPUTタグ要素数
const numOfelementOfRow = 15;

//文字列を数字にする
function stringToNum(x) {
    if (isNaN(Number(x))) {
        return 0;
    }
    else if (x < 0) {
        return 0;
    }
    return Number(x);
}

function calctest(numString) {
    const num = Number(numString.substr(7));
    console.log(numString, num, document.form1["ans" + num].value);
    document.form1["ans" + num].value = waterCoefficient[num - 1] * stringToNum(document.form1["hinmoku" + num].value) / 1000;
}

function calc100() { let total = 0; total = 7050 * document.form1.hinmoku100.value / 1000; document.form1.ans100.value = total; }


function totalwf() {
    const m =
        stringToNum(document.form1.ans1.value) +
        stringToNum(document.form1.ans2.value) +
        stringToNum(document.form1.ans3.value) +
        stringToNum(document.form1.ans4.value) +
        stringToNum(document.form1.ans5.value) +
        stringToNum(document.form1.ans6.value) +
        stringToNum(document.form1.ans7.value) +
        stringToNum(document.form1.ans8.value) +
        stringToNum(document.form1.ans9.value) +
        stringToNum(document.form1.ans10.value) +
        stringToNum(document.form1.ans11.value) +
        stringToNum(document.form1.ans12.value) +
        stringToNum(document.form1.ans13.value) +
        stringToNum(document.form1.ans14.value) +
        stringToNum(document.form1.ans15.value) +
        stringToNum(document.form1.ans100.value);

    //合計
    document.getElementById('goukei').textContent = m;
    var goukei = document.getElementById('goukei');
    goukei.insertAdjacentHTML("beforeend", "(L)");

    //ペットボトル
    var pet = m / 2;
    var pet = Math.round(pet)
    document.getElementById('pet').textContent = (pet)
    var pet = document.getElementById('pet');
    pet.insertAdjacentHTML("beforeend", "(本)");

    //風呂
    var bath = m / 200;
    var bath = Math.round(bath)
    document.getElementById('bath').textContent = (bath)
    var bath = document.getElementById('bath');
    bath.insertAdjacentHTML("beforeend", "(杯)");
}

