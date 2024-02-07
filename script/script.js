const formatUang = (rupiah) => {
  return rupiah.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};
//ambil item nama
let nama = localStorage.getItem("nama");
//ambil item desc
let desc = localStorage.getItem("desc");
//perintahkan document untuk mengambil id info dan isi variabel untuk menampilkan nama dan desc!
document.getElementById(
  "info"
).innerHTML = `anda telah memesan ${nama}: ${desc}`;
//ambil item total
let total = localStorage.getItem("total");
//ubah element yang id nya total!
//isi parseInt()!
document.getElementById("total").innerHTML = formatUang(parseInt(total));
let saldo = 50000;
//ubah element yang id nya saldo!
let elementSaldo = document.getElementById("saldo");

elementSaldo.innerHTML = formatUang(saldo);
const bayar = () => {
  //mengambil resto-pay dan cash yang berbentuk input type radio, lalu ambil valuenya(true/false)
  let resto = document.getElementById("resto-pay").checked;
  let cash = document.getElementById("cash").checked;
  // Cek memilih metode
  if (!resto && !cash) {
  } else {
    //check jika resto pay di pilih
    if (resto === true) {
      //check jika saldo nya kurang!
      if (saldo < total) {
        //jika saldonya kurang maka akan terdapat pilihan apakah ingin topup atau engga
        const konfirmasi = confirm(
          "Saldo Tidak Cukup ! apakah anda ingin topup?"
        );
        //jika pilihan tersebut di klik oke atau setuju untuk topup maka
        if (konfirmasi) {
          //akan muncul isian atau formulir untuk topup!
          const topUp = prompt("masukan nominal pecahan 10000");
          //jika angka didalam var topup tersebut kelipatan sepuluh ribu maka
          if (topUp % 10000 == 0) {
            //saldo akan di tambahkan dengan topup!
            //topup di konversi menjadi angka
            saldo += Number(topUp);
            elementSaldo.innerHTML = formatUang(saldo);
          } else {
            alert("masukan nominal pecahan 10000");
          }
        }
      }else{
        localStorage.setItem("saldo", saldo - Number(total))
        window.location.href = "succes.html";
      }
    } else {
      window.location.href = "cashier.html";
    }
  }
};
