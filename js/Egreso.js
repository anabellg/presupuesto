let eliminarEgreso=(conteg)=>{
    let elemento = document.getElementById('egreso_padre');
    let egresodelete = conteg;
    if(egresodelete){
         elemento.removeChild(egresodelete);
    }
    else{
         alert('Ya no existen elementos para eliminar');
    }
}
