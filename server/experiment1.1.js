const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();
// Greet event
emitter.on('greet', (name) => {
console.log(`Hello, ${name}!`);
});
// Exit event
emitter.on('exit', () => {
console.log('Goodbye! Program is exiting...');
});
// Trigger greet
emitter.emit('greet', 'Siddhant');
// Trigger exit
emitter.emit('exit');