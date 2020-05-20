function plus_minus(elem)
{
    var item=document.getElementsByClassName('plus_minus')[elem];
    var add=document.getElementsByClassName('item_add')[elem];
    add.style.visibility="hidden";
    item.style.visibility="visible";
    document.getElementsByClassName('quantity')[elem].innerHTML=1;
}

function minus(elem)
{
    var value=document.getElementsByClassName('quantity')[elem].textContent;
    value=parseInt(value, 10);
    value=value-1;
    if(value<=0)
    {
        var item=document.getElementsByClassName('plus_minus')[elem];
        var add=document.getElementsByClassName('item_add')[elem];
        add.style.visibility="visible";
        item.style.visibility="hidden"; 
    }
    else
    {
        document.getElementsByClassName('quantity')[elem].innerHTML=value;
    }
    
}

function add(elem)
{
    var value=document.getElementsByClassName('quantity')[elem].textContent;
    value=parseInt(value, 10);
    value=value+1;
    document.getElementsByClassName('quantity')[elem].innerHTML=value;
}