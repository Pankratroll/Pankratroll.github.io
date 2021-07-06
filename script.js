
document.addEventListener("click", function(){
let items = ["cpu", "mob", "ram", "psu", "cas", "ssd", "col", "hdd", "hds", "sds", "hhh", "any"]

const Akac = (main) => {
let item = document.getElementById(main)
let price = item.value
let afa = Math.round((price / 127 * 100) * 1000) / 1000;
let wafa = price * 1.27;
document.getElementById(main + "afa").innerHTML = afa
document.getElementById(main + "wafa").innerHTML = wafa
  }

function Weak() {
    var arr = document.getElementsByName('item');
    var fullprice=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            fullprice += parseInt(arr[i].value);
    }
    document.getElementById('fullprice').innerHTML = fullprice;
    let fullafa = Math.round((fullprice / 127 * 100) * 1000) / 1000;
    document.getElementById('fullafa').innerHTML = fullafa;
    let fullwafa = fullprice * 1.27
    document.getElementById('fullwafa').innerHTML = fullwafa;
}
Weak()
  
  
  for (let index = 0; index < items.length; index++) {
      const element = items[index];
      Akac(element)
  }
});
