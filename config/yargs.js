const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'describe la tarea por hacer'

};

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crea un nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea de la lista', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}