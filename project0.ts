import inquirer from 'inquirer';

const mainMenu = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'Select an operation:',
            choices: [
                'Addition',
                'Subtraction',
                'Multiplication',
                'Division',
                'Exit'
            ],
        },
    ]);

    if (answers.operation === 'Exit') {
        process.exit();
    }

    const numbers = await inquirer.prompt([
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (input) => !isNaN(parseFloat(input)) || 'Please enter a valid number.'
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (input) => !isNaN(parseFloat(input)) || 'Please enter a valid number.'
        }
    ]);

    const num1 = parseFloat(numbers.num1);
    const num2 = parseFloat(numbers.num2);
    let result: number;

    switch (answers.operation) {
        case 'Addition':
            result = num1 + num2;
            console.log(`Result: ${num1} + ${num2} = ${result}`);
            break;
        case 'Subtraction':
            result = num1 - num2;
            console.log(`Result: ${num1} - ${num2} = ${result}`);
            break;
        case 'Multiplication':
            result = num1 * num2;
            console.log(`Result: ${num1} * ${num2} = ${result}`);
            break;
        case 'Division':
            if (num2 !== 0) {
                result = num1 / num2;
                console.log(`Result: ${num1} / ${num2} = ${result}`);
            } else {
                console.log('Error: Division by zero is not allowed.');
            }
            break;
    }

    await mainMenu();
};

// Start the application
mainMenu();
