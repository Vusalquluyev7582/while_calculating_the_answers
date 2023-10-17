alert("0 basanda hesablama dayanacag")
let a = prompt("Reqem yaz")
let toplam = 0;
while (parseInt(a) != 0) {
    toplam = toplam + parseInt(a)
    a = prompt("Reqem yaz")
}
alert("toplam" + toplam)