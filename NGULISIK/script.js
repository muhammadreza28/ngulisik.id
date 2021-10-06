var items = [
    ['001', 'Rute 1', '50.000', 'JELAJAH TANAH LEGENDA', 'img/logitek.jpg'], 
    ['002', 'Rute 2', '40.000', 'PESONA TASIKMALAYA', 'img/msi.jpg'],
    ['003', 'Rute 3', '30.000', 'KOTA KREATIF', 'img/genius.jpeg'],
    ['004', 'Rute 4', '25.000', 'TASIK SOCIETY', 'img/jerry.jpg'],
    ['005', 'Rute 5', '15.000', 'PAHLAWAN TASIK', 'img/jerry.jpg'],
    ['006', 'Rute 6', '10.000', 'TASIK RESIK', 'img/jerry.jpg']
];

    // RELEASE 0 (Menampilkan list barang)
    var listBarang = document.getElementById("listBarang")
        function printItems(array) {

            var tampung ="";
        for (var i = 0; i < array.length; i++) {
            var currentItem = array[i]
            tampung += `<div class= "float-md-left d-flex justify-content-around mb-5">
                            <div class ="col-4 mt-2 "> 
                                <div class="card " style="width: 18rem;">
                                    <img src="${currentItem[4]}" class="card-img-top" height="200px" width="200px" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title" id="itemName">${currentItem[1]}</h5>
                                        <p class="card-text" id="itemDesc">${currentItem[3]}</p>
                                        <p class="card-text"> Rp. ${currentItem[2]}</p>
                                        <a href="index1.html" class="btn btn-primary" id="lihat rute" >Lihat Rute</a>
                                        <a href="#" class="btn btn-success  mt-2" id="addCart" onclick="addCart()" >Tambahkan Ke Keranjang</a>
                                    </div>
                                </div>
                            </div>
                        </div>`
        }
        
        listBarang.innerHTML = tampung

        }

        printItems(items)


        

    // RELEASE 1   
    function filter(keyword){

    var filteredItems = []
    for (var m = 0; m < items.length; m++){
        var item = items[m]
        var namaItem = item[3] 
        var cocok = namaItem.toLowerCase().includes(keyword.toLowerCase())
        if(cocok == true) {
            filteredItems.push(item)
        }
    }
    return filteredItems
    }
    var cekItem = filter ('eybo')
    console.log(cekItem)

    // Event Submmit
    var formSearch = document.getElementById("formItem")
    formSearch.addEventListener("submit", function (event) {
        event.preventDefault()
        var kunci = document.getElementById("keyword").value

        var terfilter = filter(kunci)
        printItems(terfilter)
})
    // Event keyup

    var inputSearch = document.getElementById("keyword")
    inputSearch.addEventListener("keyup", function (event) {
        var value = event.target.value

        var filterDgnKeyup = filter(value)
        printItems(filterDgnKeyup)
    })


    // RELEASE 2
    var cart = document.getElementById("cart");
    var cartNumber = cart.value;
    function addCart() {
        cartNumber++;
        cart.innerHTML = `<i class="fas fa-shopping-cart"></i>(${cartNumber})`;
     }

