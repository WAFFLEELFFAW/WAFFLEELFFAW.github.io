
//文字列を数字にする
function stringToNum(x) {
    if (isNaN(Number(x))) {
        return 0;
    }
    return Number(x);
}

function calc1() { total = 0; total = 13960 * stringToNum(document.form1.hinmoku1.value) / 1000; document.form1.ans1.value = total; }
function calc2() { total = 0; total = 4291 * stringToNum(document.form1.hinmoku2.value) / 1000; document.form1.ans2.value = total; }
function calc3() { total = 0; total = 8300 * stringToNum(document.form1.hinmoku3.value) / 1000; document.form1.ans3.value = total; }
function calc4() { total = 0; total = 66 * stringToNum(document.form1.hinmoku4.value) / 1000; document.form1.ans4.value = total; }
function calc5() { total = 0; total = 22926 * stringToNum(document.form1.hinmoku5.value) / 1000; document.form1.ans5.value = total; }
function calc6() { total = 0; total = 13637 * stringToNum(document.form1.hinmoku6.value) / 1000; document.form1.ans6.value = total; }
function calc7() { total = 0; total = 108 * stringToNum(document.form1.hinmoku7.value) / 1000; document.form1.ans7.value = total; }


function calc100() { total = 0; total = 7046 * document.form1.hinmoku100.value / 1000; document.form1.ans100.value = total; }


function totalwf() {
    document.getElementById('goukei').textContent =
        stringToNum(document.form1.ans1.value) +
        stringToNum(document.form1.ans2.value) +
        stringToNum(document.form1.ans3.value) +
        stringToNum(document.form1.ans4.value) +
        stringToNum(document.form1.ans5.value) +
        stringToNum(document.form1.ans6.value) +
        stringToNum(document.form1.ans7.value) +
        stringToNum(document.form1.ans100.value);
        var goukei= document.getElementById('goukei');
        goukei.insertAdjacentHTML("beforeend","(L)");
                var pet_m =
                stringToNum(document.form1.ans1.value) +
                stringToNum(document.form1.ans2.value) +
                stringToNum(document.form1.ans3.value) +
                stringToNum(document.form1.ans4.value) +
                stringToNum(document.form1.ans5.value) +
                stringToNum(document.form1.ans6.value) +
                stringToNum(document.form1.ans7.value) +
                stringToNum(document.form1.ans100.value);
                var pet = pet_m /2;
                var pet = Math.round(pet)
                document.getElementById('pet').textContent = (pet)
             var pet =  document.getElementById('pet');
                pet.insertAdjacentHTML("beforeend","(本)");
                var bath_m =
                stringToNum(document.form1.ans1.value) +
                stringToNum(document.form1.ans2.value) +
                stringToNum(document.form1.ans3.value) +
                stringToNum(document.form1.ans4.value) +
                stringToNum(document.form1.ans5.value) +
                stringToNum(document.form1.ans6.value) +
                stringToNum(document.form1.ans7.value) +
                stringToNum(document.form1.ans100.value);
                var bath = bath_m /200;
                var bath = Math.round(bath)
                document.getElementById('bath').textContent = (bath)
             var bath =  document.getElementById('bath');
                bath.insertAdjacentHTML("beforeend","(杯)");
	}
}
