var rutes =[
    ['001','img/peta.jpg','RUTE 1 JELAJAH TANAH LEGENDA','PESONA TASIKMALAYA','KOTA KREATIF','TASIK SOCIETY','PAHLAWAN TASIK','TASIK RESIK','JL. LETJEN MASHUDI --> ', 'JL. GUBENUR SWAKA --> ', 'BUNDERAN KH. ZAENAL MUSTOFA --> ', 'JL. IR H DJUANDA --> ', 'LAMPU MERAH INDIHIANG --> ', 'JL. RE MARTADINATA --> ', 'BUNDERAN SIMPANG LIMA --> ', 'JL. DR SOEKARDJO --> ', 'TAMAN KOTA TASIKMALAYA --> ', 'MASJID AGUNG KOTA TASIKMALAYA --> ', 'JL. KH ZAENAL MUSTOFA --> ', 'TUGU ASMAUL HUSNA --> ', 'JL. TENTARA PELAJAR --> ', 'JL. SUTISNA SENJAYA'],
    ['002','img/peta.jpg','RUTE 1 JELAJAH TANAH LEGENDA','PESONA TASIKMALAYA','KOTA KREATIF','TASIK SOCIETY','PAHLAWAN TASIK','TASIK RESIK','JL. LETJEN MASHUDI --> ', 'JL. GUBENUR SWAKA --> ', 'BUNDERAN KH. ZAENAL MUSTOFA --> ', 'JL. IR H DJUANDA --> ', 'LAMPU MERAH INDIHIANG --> ', 'JL. RE MARTADINATA --> ', 'BUNDERAN SIMPANG LIMA --> ', 'JL. DR SOEKARDJO --> ', 'TAMAN KOTA TASIKMALAYA --> ', 'MASJID AGUNG KOTA TASIKMALAYA --> ', 'JL. KH ZAENAL MUSTOFA --> ', 'TUGU ASMAUL HUSNA --> ', 'JL. TENTARA PELAJAR --> ', 'JL. SUTISNA SENJAYA'],
];

    //RELEASE RUTE 
    // var Rute = document.getElementById("Rute")
    //     function printRutes(array) {

    //         var ditampung ="";
    //     for (var i = 0; i < array.length; i++) {
    //         var currentRute = array[i]
    //         ditampung += `<h5 style="text-align: center; background-color:lightblue;" class="mt-5">${currentRute[2]}</h5>
    //                     <div class="card rounded mx-auto d-block" style="width: 900px;">
    //                         <img src="${currentRute[1]}" class=" card-img-top ">
    //                     </div>
    //                     <div class="text-rute p-3">
    //                     <h5 class="text-center m-3 p-3 " style="background-color: lightblue; color:black">${currentRute[8]}${currentRute[9]}${currentRute[10]}${currentRute[11]}${currentRute[12]}${currentRute[13]}${currentRute[14]}${currentRute[15]}${currentRute[16]}${currentRute[17]}${currentRute[18]}${currentRute[19]}${currentRute[20]}${currentRute[21]}</h5></div>
    //                     <div class="container" style="text-align:center;"><a href="index.html" class=" btn btn-info">Kembali</a></div>`
    //     }
    //     Rute.innerHTML = ditampung
    //     }

    //     printRutes(rutes)


      var Rute = document.getElementById("Rute")
        function printRutes(array) {

            var ditampung ="";
        for (var i = 0; i < array.length; i++) {
            var currentRute = array[i]
            ditampung += `<h5 style="text-align: center; background-color:lightblue;" class="mt-5">${currentRute[2]}</h5>
                        <div class="card rounded mx-auto d-block" style="width: 900px;">
                            <img src="${currentRute[1]}" class=" card-img-top ">
                        </div>
                        <div class="text-rute p-3">
                        <h5 class="text-center m-3 p-3 " style="background-color: lightblue; color:black">${currentRute[8]}${currentRute[9]}${currentRute[10]}${currentRute[11]}${currentRute[12]}${currentRute[13]}${currentRute[14]}${currentRute[15]}${currentRute[16]}${currentRute[17]}${currentRute[18]}${currentRute[19]}${currentRute[20]}${currentRute[21]}</h5></div>
                        <div class="container" style="text-align:center;"><a href="index.html" class=" btn btn-info">Kembali</a></div>`
        }
        Rute.innerHTML = ditampung
        }

        printRutes(rutes)