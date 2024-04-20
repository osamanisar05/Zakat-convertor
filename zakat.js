#! /usr/bin/env node
import inquirer from "inquirer";
let zakat = 2.5;
let goldValueInTola = 234800;
let goldWeightInTolaReq = 7.5;
let condition = true;
while (condition) {
    const answer = await inquirer.prompt([
        {
            name: "goldWeight",
            message: "Enter your Gold Weight in Tola",
            type: "number"
        }
    ]);
    let goldWeight = answer.goldWeight;
    if (goldWeight >= goldWeightInTolaReq) {
        let calculationZakat = (goldWeight * goldValueInTola) * (zakat / 100);
        console.log(`The calculated value of gold weighing ${goldWeight} tola is ${calculationZakat}`);
    }
    else {
        console.log("Zakat not applicable");
    }
    condition = false;
}
