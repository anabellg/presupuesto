let eliminarIngreso=(contid)=>{
    let elemento = document.getElementById('ingreso_padre');
    let ingresodelete = contid;
    if(ingresodelete){
        elemento.removeChild(ingresodelete);
    }
    else{
        alert('Ya no existen elementos para eliminar');
    }
}