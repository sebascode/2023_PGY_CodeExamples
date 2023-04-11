let icon = "X";
let movimientos = 0;
let hayGanador = false;
function Click(e){
    const ev = e.target || e.srcElement;
    movimientos++;
    const texto = ev.innerText;
    if(texto == "X" || texto == "O" || hayGanador){
        return;
    }
    else{
        if(icon == "X")
            icon = "O";
        else
            icon = "X";
        ev.innerText = icon;
        ComprobarGanador();
    }
}

const arrGanador = [
    [ 1, 2, 3 ],
    [ 1, 4, 7 ],
    [ 1, 5, 9 ],
    [ 3, 6, 9 ],
    [ 7, 8, 9 ],
    [ 4, 5, 6 ],
    [ 2, 5, 8 ],
    [ 3, 5, 7 ]
]
function ComprobarGanador(){
    if(movimientos >= 5){
        console.log("comprobando....");

        const arrEquis = [];
        const arrCircle = [];
        let elementos = document.getElementsByTagName('td');
        for(i = 0; i < elementos.length; i++){
            const texto = elementos[i].innerText;
            if(texto == "X"){
                arrEquis.push(i+1);
            }
            if(texto == "O"){
                arrCircle.push(i+1);
            }
        }

        arrGanador.forEach((val) => {
            if(JSON.stringify(val) ===  JSON.stringify(arrEquis)){
                alert("Ganador Cruz!");
                hayGanador = true;
                return;
            }
            if(JSON.stringify(val) ===  JSON.stringify(arrCircle)){
                alert("Ganador circulito!")
                hayGanador = true;
                return;
            }
        });
    }
}

function Limpiar(){
    let elementos = document.getElementsByTagName('td');
    for(i = 0; i < elementos.length; i++){
        elementos[i].innerText = "";
    }
    movimientos = 0;
}


let elementos = document.getElementsByTagName('td');
for(i = 0; i < elementos.length; i++){
    elementos[i].addEventListener("click", Click);
}