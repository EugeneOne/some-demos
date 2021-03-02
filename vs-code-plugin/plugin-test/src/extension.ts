// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "plugin-test" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('plugin-test.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from plugin-test!');
	});

	// 悬停
	const hover = vscode.languages.registerHoverProvider('json', {
		provideHover(document, position, token) {
            const fileName = document.fileName;
			const word = document.getText(document.getWordRangeAtPosition(position));
			console.log(fileName);
            if (/\/package\.json$/.test(fileName) && /\bmain\b/.test(word)) {
                return new vscode.Hover("测试悬停提示");
            }
            return undefined;
        }
	});

	const provider = vscode.languages.registerCompletionItemProvider('plaintext', {
        provideCompletionItems(document, position) {
			console.log(document, position);
			
            const completionItem1 = new vscode.CompletionItem('Hello World!');
            const completionItem2 = new vscode.CompletionItem('World Peace!');
            return [completionItem1, completionItem2];
        }
    });

	context.subscriptions.push(disposable, hover, provider);
}

// this method is called when your extension is deactivated
export function deactivate() {}
