var text = document.getElementById('save')

function add_item(){
    var todo_add = document.getElementById('input')
    console.log(todo_add)
    var celement = document.createElement('li')
    console.log(celement)
    var ctext = document.createTextNode(todo_add.value)
    celement.appendChild(ctext)
    console.log(celement)
    text.appendChild(celement)
    input.value = " "
    var li = celement.setAttribute("class" , "li-style")

    var delbtn = document.createElement('button')
    var deltext = document.createTextNode('Delete')
    delbtn.appendChild(deltext)
    celement.appendChild(delbtn)
    var set = delbtn.setAttribute("class" , "del")
    var click = delbtn.setAttribute("onclick" , "del_click(this)")


    var editbtn = document.createElement('button')
    var edittext = document.createTextNode('Edit')
    editbtn.appendChild(edittext)
    celement.appendChild(editbtn)
    var set = editbtn.setAttribute("class" , "edit")
    var click = editbtn.setAttribute("onclick" , "edit_click(this)")
 

    
}
function del_all(){
    text.remove()
}

function del_click(e){
    console.log(e.parentNode.remove())
}

function edit_click(e){
    console.log(e.parentNode.firstChild.nodeValue)
    var update = prompt ("enter ")
    e.parentNode.firstChild.nodeValue =update
    
}