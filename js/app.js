var Ingreso_acumulado = 0;
let agregarDato = () =>{
  
    let valor=parseInt(document.getElementById('Valor').value);
    let descripcion=(document.getElementById('descripcion').value);
    let tipo=document.getElementById('tipo').value;
    console.log(tipo);

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
                            <button class="elemento_eliminar--btn">
                                Agregar
                                <!-- <span>ion-icon</span> -->
                            </button>
                        </div>
                    </div>
        `;
        newboxent.setAttribute('class','elemento limpiarEstilos');
        let nuevocontenedor=document.getElementById('ingreso_padre');
        nuevocontenedor.insertAdjacentElement('beforeend',newboxent);

        Ingreso_acumulado=Ingreso_acumulado+valor;

        document.getElementById('ingresos').innerHTML=`<p>${Ingreso_acumulado}</p>
        `;

        // console.log(Ingreso_acumulado);
   

    }
}