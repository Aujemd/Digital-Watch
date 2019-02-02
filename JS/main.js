(function(){    
    var actualizar = function(){
        
    var dia = document.getElementById('dia');
    var numDia = document.getElementById('num-dia');
    var mes = document.getElementById('mes');
    var año = document.getElementById('año');

    var horas = document.getElementById('horas');
    var minutos = document.getElementById('minutos');
    var segundos = document.getElementById('segundos');
    var dias = ['Lunes', 'Martes', 'Miercóles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        
    var datos = new Date();
    
    dia.textContent = dias[datos.getDay() - 1]+" ";

    if(datos.getDate() < 10){
        numDia.textContent = "0"+datos.getDate();

    }else{
        numDia.textContent = datos.getDate();
    }
    mes.textContent = " "+meses[datos.getMonth()]+" ";
    año.textContent = datos.getFullYear();

    if(datos.getSeconds() < 10){
        segundos.textContent = "0"+datos.getSeconds();

    }else{
        segundos.textContent = datos.getSeconds();
    }

    if(datos.getMinutes() < 10){
        minutos.textContent = "0"+datos.getMinutes();

    }else{
        minutos.textContent = datos.getMinutes();
    }

    var fHoras = datos.getHours() - 12;
    
    if(fHoras < 10){
        horas.textContent = "0"+fHoras;
    }else{
        horas.textContent = fHoras;
    }


};

        setInterval(actualizar, 1000);

}())