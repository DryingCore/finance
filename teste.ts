// selectDate.mjs

import inquirer from 'inquirer';
import datePrompt from 'inquirer-datepicker-prompt';

// Register the custom prompt
inquirer.registerPrompt('datetime', datePrompt);

async function selectDate() {
    const response = await inquirer.prompt([
        {
            type: 'datetime',
            name: 'date',
            message: 'Please select a date',
            format: ['Y', '-', 'm', '-', 'd'],
        },
    ]);

    console.log('Selected Date:', response.date);
}

selectDate();
