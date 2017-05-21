module.exports = { info, error };

//temporário
//TO DO: implementar soluçao de log
const Console = console;

const info = (info) => Console.log(info);
const error = (error) => Console.error(error);