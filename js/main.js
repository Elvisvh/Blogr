
const activeMenu= () => {
   
    const ham = document.querySelector('.ham');
    const menu = document.querySelector('.menu');

    const tituloprincipal = document.querySelector('.titulo__principal');
    const botonesheader = document.querySelector('.botones-del-header');

    const product = document.querySelector('.product');
    const desplegable_product = document.querySelector('.desplegable-1_d');

    const company = document.querySelector('.company');
    const desplegable_company = document.querySelector('.desplegable-2_d');

    const connect = document.querySelector('.connect');
    const desplegable_connect = document.querySelector('.desplegable-3_d');

    const login = document.querySelector('.boton-login');

    let productBool = false;
    let companyBool = false;
    let connectbool = false;

    //abrir el menu
    ham.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        tituloprincipal.classList.toggle('titulo__principal__desactivado');
        botonesheader.classList.toggle('botones-del-header__desactivado');
    });

    //abrir el primer submenu

    product.addEventListener('click', () => {
        productBool = true;
        /*if (productBool) {
            desplegable_product.classList.toggle('desplegable-1');
            companyBool = false;
            connectbool = false;
        }
        if(!companyBool){
            desplegable_company.classList.toggle('desplegable-2_d');
        }
        console.log(productBool);
        

        //console.log('hola mundo');*/
        activar();
    })

    function activar(){
        if(productBool){
            desplegable_product.classList.toggle('desplegable-1');
        }
    }
    

    company.addEventListener('click', () => {
        companyBool = true;
        if (companyBool){
            desplegable_company.classList.toggle('desplegable-2');
        }
        
        // console.log('hola mundo');
    })

    connect.addEventListener('click', () => {
        desplegable_connect.classList.toggle('desplegable-3');
        //console.log('hola mundo');
    })

    login.addEventListener('click', () => {
        //console.log('hola mundo');
    })

}

activeMenu();





