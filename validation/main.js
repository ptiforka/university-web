let str = "192.168.1.2 192.168.33.12 192.168.1.2 169.13.13.13";
let ip_reg = /(?<=(^)|(\s))192\.168\.[0-9]\.[0-255](?=($)|(\s))/g;

let str2 = " Bslovo bslovo Aslovo bBb";
let words_reg = /(^|\s)(b|B)/g;

let phone_reg = /(^|\s)\+38(0[5-9][0-9]\d{7})(?=($)|(\s))/g;
let str3 = "  +380950830810 -390123213 142-81-248";

function validatePhone() {
    let phones = document.getElementById("phone").value;
    console.log(phones.replace(phone_reg, "valid"));
    return false
}
function validateIp() {
    let ips = document.getElementById("ip").value;
    console.log(ips.replace(ip_reg, "valid"));
    return false
}
function validateWords() {
    let words = document.getElementById("words").value;
    console.log(words.replace(words_reg, "valid"));
    return false
}

