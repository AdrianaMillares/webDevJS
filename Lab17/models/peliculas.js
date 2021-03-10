const db = require('../util/database');


module.exports = class Peliculas {

        constructor(nombre) {
        this.nombre = nombre;
    }
    
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        peliculas.push(this.nombre);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT* FROM pelicula')
    }

}