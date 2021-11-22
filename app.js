// ----place value--
// --create array split number---
// ---reverse array---
const convertBtn = document.getElementById('btn')
const outPut = document.getElementById('output')
const number = document.getElementById('input');
const clearBtn = document.getElementById("clear");

function convertNumRoman() {

    let num = number.value;
    // ----valid number---

    if (num >= 4000) {

        alert("The number you entered should be smaller than 4000 ");

    }
    if (num === "") {
        alert("Please enter a valid number!");

    }



    // -- - splitNumber pairs with arabRomanObj---
    let pairsNumbers = {

        onesNum: function (num) {

            if (num === 0) {
                return " ";
            }
            if (num === 1) {
                return 'I'
            }
            if (num === 2) {
                return 'II'
            }
            if (num === 3) {
                return 'III'
            }
            if (num === 4) {
                return 'IV'
            }
            if (num === 5) {
                return 'V'
            }
            if (num === 6) {
                return 'VI'
            }
            if (num === 7) {
                return 'VII'
            }
            if (num === 8) {
                return 'VIII'
            }
            if (num === 9) {
                return 'IX'
            }

        },

        tens: function (num) {

            if (num === 10) {
                return "X ";
            }
            if (num === 20) {
                return 'XX'
            }
            if (num === 30) {
                return 'XXX'
            }
            if (num === 40) {
                return 'XL'
            }
            if (num === 50) {
                return 'L'
            }
            if (num === 60) {
                return 'LX'
            }
            if (num === 70) {
                return 'LXX'
            }
            if (num === 80) {
                return 'LXXX'
            }
            if (num === 90) {
                return 'XC'
            }

        },

        hundreds: function (num) {

            if (num === 100) {
                return "C ";
            }
            if (num === 200) {
                return 'CC'
            }
            if (num === 300) {
                return 'CCC'
            }
            if (num === 400) {
                return 'CD'
            }
            if (num === 500) {
                return 'D'
            }
            if (num === 600) {
                return 'DC'
            }
            if (num === 700) {
                return 'DCC'
            }
            if (num === 800) {
                return 'DCCC'
            }
            if (num === 900) {
                return 'CM'
            }

        },
        thousands: function (num) {

            if (num === 1000) {
                return "M ";
            }
            if (num === 2000) {
                return 'MM'
            }
            if (num === 3000) {
                return 'MMM'
            }

        }

    }

    let splitNumber = (num, arr = [], m = 1) => {
        if (num) {
            return splitNumber(Math.floor(num / 10), [m * (num % 10)].concat(arr), m * 10);
        }
        return arr.reverse();
    };

    let romansArr = []
    romansArr.push(pairsNumbers.thousands(splitNumber(num)[3]), pairsNumbers.hundreds(splitNumber(num)[2]), pairsNumbers.tens(splitNumber(num)[1]), pairsNumbers.onesNum(splitNumber(num)[0]));
    console.log(romansArr);

    console.log(romansArr.join(''));
    outPut.innerText = romansArr.join('');
}

function clearNumbers() {
    number.value = " ";
    outPut.innerText = "";
}

convertBtn.addEventListener("click", convertNumRoman);
clearBtn.addEventListener("click", clearNumbers);
console.log(clearBtn);