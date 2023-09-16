let eliminarIngreso=(contid,valor,sumaingresos)=>{
    var Ingreso_restado = 0;
    var Ingreso_total = 0;
    console.log(sumaingresos);
    let elemento = document.getElementById('ingreso_padre');
    let ingresodelete = contid;
    if(ingresodelete){
        elemento.removeChild(ingresodelete);
        Ingreso_restado=Ingreso_restado+valor;
        Ingreso_total = Ingreso_total-Ingreso_restado;
        
        document.getElementById('ingresos').innerHTML=`<p> + ${Ingreso_total}</p>`;
    }
    else{
        alert('Ya no existen elementos para eliminar');
    }
}