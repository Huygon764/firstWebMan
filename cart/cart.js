function darkmode() {
    document.getElementsByClassName('container_main')[0].classList.toggle("background_content");
    document.getElementsByClassName('nav')[0].classList.toggle("background_nav");
    document.getElementsByClassName('content')[0].classList.toggle("dark");
    document.getElementsByClassName('sample_product')[0].classList.toggle("border_white");
    document.getElementsByClassName('product_added')[0].classList.toggle("border_white");


    const length_name_item = document.getElementsByClassName('product_sum').length;
    const name_item = document.getElementsByClassName('product_sum'); 

    const length_name_cart = document.getElementsByClassName('name_cart').length;
    const name_cart = document.getElementsByClassName('name_cart');

    for (let j = 0; j < length_name_item; j++) 
    {
        name_item[j].classList.toggle("white");
    }
    for (let i = 0; i < length_name_cart; i++) 
    {
        name_cart[i].classList.toggle("white");
    }
}

//button one piece
var quantity_onepiece = 0;
const price_onepiece = 999000;

function plusQuantityOnepiece () {
    document.getElementById('quantity_changable_id').innerHTML = ++quantity_onepiece;
    var sum = quantity_onepiece * price_onepiece;
    document.getElementById('sum_real_id_onepiece').innerHTML = new Intl.NumberFormat(["ban", "id"]).format(sum);
}
function minusQuantityOnepiece () {
    document.getElementById('quantity_changable_id').innerHTML = --quantity_onepiece;
    if (quantity_onepiece < 0) {
        document.getElementById('quantity_changable_id').innerHTML = 0;
        quantity_onepiece = 0;    
    }
    var sum = quantity_onepiece * price_onepiece;
    document.getElementById('sum_real_id_onepiece').innerHTML = new Intl.NumberFormat(["ban", "id"]).format(sum);
}

//button attack on titan
var quantity_aot = 0;
const price_aot = 999000;

function plusQuantityAOT () {
    document.getElementById('quantity_changable_id_aot').innerHTML = ++quantity_aot;
    var sum = quantity_aot * price_onepiece;
    document.getElementById('sum_real_id_aot').innerHTML = new Intl.NumberFormat(["ban", "id"]).format(sum);
}
function minusQuantityAOT () {
    document.getElementById('quantity_changable_id_aot').innerHTML = --quantity_aot;
    if (quantity_aot < 0) {
        document.getElementById('quantity_changable_id_aot').innerHTML = 0;
        quantity_aot = 0;    
    }
    var sum = quantity_aot * price_onepiece;
    document.getElementById('sum_real_id_aot').innerHTML = new Intl.NumberFormat(["ban", "id"]).format(sum);
}

//button one punch man 
var quantity_opm = 0;
const price_opm = 199000;

function plusQuantityOPM () {
    document.getElementById('quantity_changable_id_opm').innerHTML = ++quantity_opm;
    var sum = quantity_opm * price_opm;
    document.getElementById('sum_real_id_opm').innerHTML = new Intl.NumberFormat(["ban", "id"]).format(sum);
}
function minusQuantityOPM () {
    document.getElementById('quantity_changable_id_opm').innerHTML = --quantity_opm;
    if (quantity_opm < 0) {
        document.getElementById('quantity_changable_id_opm').innerHTML = 0;
        quantity_opm = 0;    
    }
    var sum = quantity_opm * price_opm;
    document.getElementById('sum_real_id_opm').innerHTML = new Intl.NumberFormat(["ban", "id"]).format(sum);
}

function countSum() {
    var str_sum_onepiece = document.getElementById('sum_real_id_onepiece').textContent;
    var str_sum_aot = document.getElementById('sum_real_id_aot').textContent;
    var str_sum_opm = document.getElementById('sum_real_id_opm').textContent;



    var sum_onepiece = parseInt(str_sum_onepiece.replaceAll('.',''));
    var sum_aot = parseInt(str_sum_aot.replaceAll('.',''));
    var sum_opm = parseInt(str_sum_opm.replaceAll('.',''));
    var sum_sum = sum_onepiece + sum_aot + sum_opm;
    document.getElementById('sum_order_money').innerHTML = new Intl.NumberFormat(["ban", "id"]).format(sum_sum);

}