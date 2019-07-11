const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se puedo Grabar', err);
        console.log('La tarea ha sido agregada!');
    });


}

const cargarDb = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}




const crear = (descripcion) => {

    // primero se debe cargar el arreglo
    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}

const getListado = () => {
    cargarDb();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    // primero se debe cargar el arreglo
    cargarDb();

    // segundo buscar que la descripción recibida coincida con la de arrego cargado
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {

        listadoPorHacer[index].completado = completado;
        // tercero guardar la base de datos
        guardarDB();

        return "Actualizado ...";

    } else {
        return "Tarea No encontrada";
    }

}

const borrar = (descripcion) => {
    cargarDb();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}