/* Variable del contenedor */
var container = document.querySelectorAll(".generalContainer");
var signo;
var bool;
/*Lista de componentes */
var components = ["CE","C","←","÷",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,".","="];


var content = "<div class='subContainer'>";
//Ciclo para crear los elementos basados en el array
for(var i = 0; i < components.length; i++)
{
    if(typeof(components[i]) == 'number')
    {
        content += "<div class='elements numbers'>"+components[i]+"</div>";
    }else{
        content += "<div class='elements calcs'>"+components[i]+"</div>";
    }
};
content += "</div>";

container[0].innerHTML += content;


/*Containers*/
var numbers = document.querySelectorAll(".numbers");
var fieldDisplay = document.querySelector(".FieldDisplay");
var calcs = document.querySelectorAll(".calcs");
var sign = document.querySelectorAll(".sign");

assignEvent(numbers);

//Asignar los eventos a los numeros
function assignEvent(elements)
{
    for(var i = 0; i < elements.length; i++)
    {
        elements[i].addEventListener("click",function()
        {
 
            (fieldDisplay.innerText == "0") ? fieldDisplay.innerHTML = this.innerText : fieldDisplay.innerHTML += this.innerText;
            if(bool)
            {
                fieldDisplay.innerHTML = this.innerText;
                bool = false;
            }
        });
    };
};

//Funcion de borrado
function CE_C()
{
    fieldDisplay.innerHTML = 0;
    sign[0].innerHTML = "";
};

calcs[0].addEventListener("click",CE_C); //Funcion borrado
calcs[1].addEventListener("click",CE_C); //Funcion borrado

/*Funcion para el borrado de la pizarra*/
function backSpace()
{
    var temp = fieldDisplay.innerText.split("");
    temp.pop();
    (temp.length > 0) ? fieldDisplay.innerHTML = temp.join("") :  fieldDisplay.innerHTML = 0;
};
calcs[2].addEventListener("click",backSpace); //Se utiliza la func BackSpace


/**Funcion para el manejo de los signos en la pantalla de signos */
function hanndleSign(signHand)
{
    (sign[0].innerText == "") ? sign[0].innerHTML += fieldDisplay.innerHTML : (sign[0].innerText.endsWith(signHand.innerText)) ? sign[0].innerHTML += fieldDisplay.innerHTML  : sign[0].innerHTML += " " + signHand.innerText + " " + fieldDisplay.innerHTML;
    signo = signHand.innerText;
}



/*Funcion para la division*/
function divide()
{
    hanndleSign(calcs[3]);
    fieldDisplay.innerHTML = "";
};

calcs[3].addEventListener("click",divide);


/*Funcion para la multiplicacion*/
function multiply()
{
    hanndleSign(calcs[4]);
    fieldDisplay.innerHTML = "";
};

calcs[4].addEventListener("click",multiply);


/*Funcion para la substraccion*/
function subtraction()
{
    hanndleSign(calcs[5]);
    fieldDisplay.innerHTML = "";
};

calcs[5].addEventListener("click",subtraction);

/*Funcion para la suma*/
function sum()
{
    hanndleSign(calcs[6]);
    fieldDisplay.innerHTML = "";
};

calcs[6].addEventListener("click",sum);

/*Funcion para el punto*/
function dot(button)
{
    (fieldDisplay.innerText.match(/\./g) == null) ? fieldDisplay.innerHTML += "." : fieldDisplay.innerHTML += "";
}

calcs[7].addEventListener("click",dot);




//Funcion para calcular
function Equal()
{
    if(sign[0].innerText.length > 1)
    {
        var equation = '';
        if(fieldDisplay.innerText.length > 0)
        {
            equation = sign[0].innerText + signo + fieldDisplay.innerText; //Se toma el ultimo signo que se utilizó ya que no se muestra en pantalla
        }
        equation = equation.trim();
        sign[0].innerHTML = "";
        fieldDisplay.innerHTML = new Function("return " + equation)();
        bool = true;
    }
}

calcs[8].addEventListener("click",Equal);



/**Funcion para la animación */
function animationsOfButtons()
{
    /*Esta funcion se encargará de crear las animaciones para los botones*/
}