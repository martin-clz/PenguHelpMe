// Especificacion de las librerias requeridas
const vscode = require('vscode');
const axios = require('axios');

// Definicion del parametro context
/**
 * @param {vscode.ExtensionContext} context
 */

// Activacion de la extension
function activate(context) {

	// Mensaje de inicio en la linea de consola
	console.log('Iniciando Pengu Help Me.');
	
	// Registro del comando 'penguin-troubleshooting.penguserver' como disposable
	let disposable = vscode.commands.registerCommand('penguin-troubleshooting.penguserver', async function () {
		
		// Ventana de input para que el usuario ingrese el error
		let input_value = await vscode.window.showInputBox({
			prompt:"Pengu, help me please.",
			placeHolder: 'Syntax error...',
		});

		// Definicion del servidor donde se aloja la base de datos
		const url = "https://pengu-server.herokuapp.com/procesar"

		// La extension manda un request al server con el error del usuario
		const respuesta = await axios.put(url, {validacion: input_value})

		// La respuesta del server se visualiza en una notificacion
		vscode.window.showInformationMessage(respuesta.data)

	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
