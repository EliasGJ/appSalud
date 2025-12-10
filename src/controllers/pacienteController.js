const obtenerPaciente = async (req, res) => {
   
};

const crearPaciente = async (req, res) => {

};

const actualizarPaciente = async (req, res) => {

};

const eliminarPaciente = async (req, res) => {
 
};  

const listarPacientes = async (req, res) => {
    const pacientes = await pacienteRepository.listar();
    res.render('index', {
        title: 'App Salud',
        pacientes,
        message: 'Bienvenidos a la App Salud'
    });
};

module.exports = {
    obtenerPaciente,
    crearPaciente,
    actualizarPaciente,
    eliminarPaciente,
    listarPacientes
};