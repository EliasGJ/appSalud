const pool = require('../db/mysql');
const Paciente = require('../models/paciente');


const listar = async () => {
    // Ejecutamos la consulta SQL para obtener todos los pacientes
    const [results] = await pool.query('SELECT * FROM pacientes');

    // Convertimos cada registro en una instancia del modelo Paciente
    const pacientes = results.map(p => new Paciente(
        p.id,
        p.nombre,
        p.apellidos,
        p.fechaDeNacimiento
    ));

    // Devolvemos el listado de pacientes
    return pacientes;
};

const guardar = async (paciente) => {
    // Ejecutamos la consulta SQL para insertar un nuevo paciente
    const [results] = await pool.query('INSERT INTO pacientes (nombre, apellidos, fechabehacimiento) VALUES (?, ?, ?)',
        [paciente.nombre, paciente.apellidos, paciente.fechabehacimiento]);
    // Creamos una nueva instancia del modelo Paciente con el ID generado
    const nuevoPaciente = new Paciente(
        results.insertid,
        paciente.nombre,
        paciente.apellidos,
        paciente.fechabehacimiento
    );
    //Devolvemmos el nuevo paciente creado
  return nuevoPaciente;
}

const buscarPorId = async (id) => {
    // Ejecutamos la consulta SQL para buscar un paciente por su ID
    const [results] = await pool.query('SELECT * FROM pacientes WHERE id = ?', [id]);
    // Si no se encuentra el paciente, devolvemos null
    if (results.length == 0) {
    return null;
}

const p = results[0];
// Creamos una instancia del modelo Paciente con los datos obtenidos
const paciente = new Paciente(
    p.id,
    p.nombre,
    p.apellidos,
    p.fechabehacimiento
);
// Devolvemos el paciente encontrado
return paciente;
}

const actualizar = async (paciente) => {
    // Ejecutamos la consulta SQL para actualizar un paciente existente
    await pool.query('UPDATE pacientes SET nombre = ?, apellidos = ?, fechabehacimiento = ? WHERE id = ?',
        [paciente.nombre, paciente.apellidos, paciente.fechabehacimiento, paciente.id]);
    // Devolvemos el paciente actualizado
    return new Paciente(
        paciente.id,
        paciente.nombre,
        paciente.apellidos,
        paciente.fechabehacimiento
    );
};

const eliminar = async (id) => {
    // Ejecutamos la consulta SQL para eliminar un paciente por su ID
    const [results] = await pool.query('DELETE FROM pacientes WHERE id = ?', [id]);
    // Si no elimino ninguna fila, devuelvo false
    if (results.affectedRows === 0) {
        return false;
    }
    // Si se eliminó al menos una fila, devolvemos true
    return true;
}




module.exports = {
    listar,
    guardar,
    buscarPorId,
    actualizar,
    eliminar

};