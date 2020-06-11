

var puan = document.querySelectorAll(".puan");


puan.forEach(function (element) {  //Puanlamayı artan olarak yapmak için 
    var asil=element.innerHTML
    var start=element.innerHTML=0;
    var myInterval = setInterval(function(){
        element.innerHTML=`%${start}`;
         start=start+1;
         if(start==asil){ //eğer html in içindeki puanla eşit olursa sayacı durdur.
             clearInterval( myInterval);
         }
            
        },2500/asil); //bir tanesi bitip diğeri devam etmesin diye zaman ayarlaması
    } 
)

