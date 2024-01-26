let input = true;
while (input) {
  let nilai = prompt("Masukan nilai siswa . . .");
  let huruf = "";
  let tipe = nilai % 2 === 0 ? "Genap" : "Ganjil";

  if (nilai >= 85) {
    huruf = "A";
  } else if (nilai >= 75) {
    huruf = "B";
  } else if (nilai >= 60) {
    huruf = "C";
  } else {
    huruf = "D";
  }

  alert(
    "Nilai Angka : " +
      nilai +
      "\nNilai Huruf : " +
      huruf +
      "\nIni bilangan " +
      tipe
  );

  input = confirm("Masukan angka lagi?");
}

alert("Terimakasih sudah memasukan nilai");
