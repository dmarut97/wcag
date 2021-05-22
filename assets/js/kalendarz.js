      function kalendarz()
      {
        var wiersz=1 
        Data = new Date();
        var aktmies=Data.getMonth() ;
        var aktdzien=Data.getDate() ;
        var dzien=1 ;
        Data.setDate(dzien) ;
        console.log(Data.getDate());
        console.log(aktdzien);
        console.log(aktmies);
        //document.getElementById("miesiac").innerHTML=Data.getMonth()+1 ;

        while (Data.getMonth()==aktmies)
        {
          
          document.getElementById("tabelka").rows[wiersz].cells[Data.getDay()].innerHTML=Data.getDate() ;
          if (Data.getDate()==aktdzien)
          {
            
            document.getElementById("tabelka").rows[wiersz].cells[Data.getDay()].className="dzis";
          }
            
          if (Data.getDay()==6) {
            wiersz++;
          } 
            dzien++ ;
            Data.setDate(dzien) ;
        }
      }