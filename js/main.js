
var  list = [
    {
        "desc":"rice",
        "amount":1,
        "value":5.40
    },
    {
        "desc":"beer",
        "amount":12,
        "value":1.99
    },
    {
        "desc":"meat",
        "amount":1,
        "value":15
    }
];

function getTotal(list){
    var total = 0;
    for (var key in list){
        total += list[key].value * list[key].amount;
    }
    return total;
}

function setList(list){
    var table = '<thead>' +
                    '<tr>' +
                        '<td>Description</td>' +
                        '<td>Quantidade</td>' +
                        '<td>Valor</td>' +
                        '<td>Ação</td>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>';

    for (var key in list){
        table +=        '<tr>' +
                            '<td>'+formatDesc(list[key].desc)+'</td>' +
                            '<td>'+list[key].amount+'</td>' +
                            '<td>'+formatValue(list[key].value)+'</td>' +
                            '<td><button class="btn btn-default" onclick="setUpdate('+key+')">Edit</button>'+
                            ' <button class="btn btn-default" onclick="deleteElement('+key+')">Delete</button></td>' +
                        '</tr>'
    }
    table += '</tbody>';

    document.getElementById('listTable').innerHTML = table;
}

function formatDesc(desc){
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatValue(value){
    var str = parseFloat(value).toFixed(2).toString();
    str = str.replace('.',',');
    str = 'R$ ' + str;
    return str;
}

function addData(){
    var desc = document.getElementById('desc').value;
    var amount = document.getElementById('amount').value;
    var value = document.getElementById('value').value;

    if (desc != "" && amount != "" && value != ""){
        list.unshift({
            desc: desc,
            amount: amount,
            value: value
        });
        setList(list);
        clearData();
    }else{
        alert("Preencha tudo");
    }
}

function clearData(){
    document.getElementById('desc').value = "";
    document.getElementById('amount').value = "";
    document.getElementById('value').value = "";

    document.getElementById('btnUpdate').style.display = 'none';
    document.getElementById('btnAdd').style.display = 'inline-block';
}

function setUpdate(id){
    var object = list[id];
    document.getElementById('desc').value = object.desc;
    document.getElementById('amount').value = object.amount;
    document.getElementById('value').value = object.value;

    document.getElementById('btnUpdate').style.display = 'inline-block';
    document.getElementById('btnAdd').style.display = 'none';
    document.getElementById('idElement').value = id;
}

function updateData() {
    var idObject = document.getElementById('idElement').value;

    list[idObject].desc = document.getElementById('desc').value;
    list[idObject].amount= document.getElementById('amount').value;
    list[idObject].value = document.getElementById('value').value;

    clearData();
    setList(list);
}

function deleteElement(id){
    if (confirm('Delete this item?')){
        if (id == list.length -1){
            list.pop();
        }else if (id === 0) {
            list.shift();
        }else{
             list.splice(id,1);
        }
        setList(list);
    }
}

setList(list);