import readline from 'readline';
import greedy from './greedy';
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line',(line)=>{
    switch(line){
        case 'process':
            // console.log(input);
            // console.log( new greedy(input).result.path);
            console.log( new greedy(input).result.satisfaction);
            break;
        case 'end':
            console.log(input);
            process.exit();
            break;
        case'clear':
            input = [];
            console.log(input);
            break;
        default:
            input.push(line.split(','));
            break;
    }
});

rl.on('close',()=>{
    console.log(input);
    process.exit();
});
