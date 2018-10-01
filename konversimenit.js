function konversiMenit(menit) {
    var mnt = Math.floor(menit / 60)
    var dtk = menit % 60
    if (String(dtk).length === 1) {
      dtk = "0" + dtk
    }
    var hasil = mnt + ":" + dtk
    return String(hasil)
  }
  
  console.log(konversiMenit(63))
  console.log(konversiMenit(124))
  console.log(konversiMenit(53))
  console.log(konversiMenit(88))
  console.log(konversiMenit(120))
  