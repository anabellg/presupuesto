var Ingreso_acumulado = 0;
var Egreso_acumulado = 0;
var porcentajeEgreso = 0;
var x = 0;
var y = 0;
let agregarDato=()=>{
  
    let valor=parseInt(document.getElementById('Valor').value);
    let descripcion=(document.getElementById('descripcion').value);
    let tipo=document.getElementById('tipo').value;
    let sumaingresos = parseInt(Ingreso_acumulado);
    let contid =('limpiar_Estilo' + x);
    let conteg =('limpiar_Egreso' + y);
    console.log(sumaingresos);

    if(tipo=="Ingreso"){

        let newboxent = document.createElement('div');
        newboxent.innerHTML=`
                    <div class="elemento_descripcion">
                        <p>${descripcion}</p>
                    </div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">
                            <p> + ${valor}</p>
                        </div>
                        <div class="elemento_eliminar">
                             <button type="button" class="btn-danger elemento_eliminar--btn" onclick="eliminarIngreso(${contid},${valor},${sumaingresos})">
                                Eliminar
                             </button>
                        </div>
                    </div>
        `;
        newboxent.setAttribute('class','elemento limpiarEstilos');
        newboxent.setAttribute('id','limpiar_Estilo' + x);
        let nuevocontenedor=document.getElementById('ingreso_padre');
        nuevocontenedor.insertAdjacentElement('beforeend',newboxent);
        Ingreso_acumulado=Ingreso_acumulado+valor;
        document.getElementById('ingresos').innerHTML=`<p> ${Ingreso_acumulado}</p>`;
         x++; 
    }
    else if(tipo=="Egreso"){
        let newboxEgreso = document.createElement('div');
        newboxEgreso.innerHTML=`
                <div class="elemento_descripcion">
                    <p>${descripcion}</p>
                </div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">
                        <p>-${valor}</p>
                </div>
                <div class="elemento_porcentaje">
                    <p>21%</p>
                </div>
                <div class="elemento_eliminar">
                    <button type="button" class="btn-danger elemento_eliminar--btn" onclick="eliminarEgreso(${conteg})">
                    Eliminar
                    </button>
                </div>
        `;
        newboxEgreso.setAttribute('class','elemento limpiarEstilos');
        newboxEgreso.setAttribute('id','limpiar_Egreso' + y);
        let contEgreso=document.getElementById('egreso_padre');
        contEgreso.insertAdjacentElement('beforeend',newboxEgreso);
        Egreso_acumulado=Egreso_acumulado+valor;
        document.getElementById('egresos').innerHTML=`<p> - ${Egreso_acumulado}</p>`;
        y++;
        
    }
    porcentajeEgreso = Egreso_acumulado/Ingreso_acumulado;
    document.getElementById('porcentaje').innerHTML=`<p> - ${porcentajeEgreso} % </p>`;
}

