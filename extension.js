const vscode = require('vscode');

const axios = require('axios');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "penguin-troubleshooting" is now active!');
	
	let disposable = vscode.commands.registerCommand('penguin-troubleshooting.penguserver', async function () {
		let input_value = await vscode.window.showInputBox({
			prompt:"Pengu, help me please.",
			placeHolder: 'Syntax error...',
		});

		const url = "https://pengu-server.herokuapp.com/procesar"
	
		const respuesta = await axios.put(url, {validacion: input_value})

		vscode.window.showInformationMessage(respuesta.data)


	});


	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
