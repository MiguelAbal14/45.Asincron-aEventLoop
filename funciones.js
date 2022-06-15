//código sincrono bloqueante

(() => {

    console.log("código sincrono");
    console.log("Inicio");

    let dos = () => console.log("Dos");

    let uno = () => {
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");

})()

console.log("--------------------------------");

//CODIGO ASINCRONO NO BLOQEUANTE
(() => {
    console.log("código asincrono");
    console.log("inicio");

    const dos = () => {
        setTimeout(() => {
            console.log("dos");
        }, 1000)
    }

    const uno = () => {
        setTimeout(() => {
            console.log("uno");
        }, 1)

        dos();
        console.log("tres");
    }

    uno();
    console.log("fin");

})()