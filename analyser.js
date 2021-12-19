function updateCpcPerCookies(){
    var largest = 0
    var cpcs = []
    for(var i=0, n=Game.ObjectsById.length; i<n; i++){
        var object = Game.ObjectsById[i]
        if(object.amount > 0){
            var price = object.price
            var cpc = object.storedCps
        
            var cpcPerCookie = cpc/price
            cpcs[i] = cpcPerCookie
            if(cpcPerCookie > cpcs[largest]){
                largest = i
            }
        }
    }

    for(var i=0, n=Game.ObjectsById.length; i<n; i++){
        var object = Game.ObjectsById[i]
        if(object.amount > 0){
            var productButton = document.getElementById('product' + i)
            
            var elem = document.getElementById('cpcIndicator' + i)
            if(!elem){
                var elem = document.createElement('p', );
                elem.id = 'cpcIndicator' + i
            }
        
            elem.innerText = cpcs[i];

            if(i == largest){
                elem.style='color: green';
                productButton.click();
            }else{
                elem.style='';
            }
        
            productButton.parentNode.insertBefore(elem, productButton);
        }
    }

    setTimeout(updateCpcPerCookies, 100)
}

setTimeout(updateCpcPerCookies, 1000)