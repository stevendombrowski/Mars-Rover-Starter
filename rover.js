const Message = require('./message.js');
const Command = require('./command.js');
class Rover {
   // Write code here!
   constructor(position, mode = 'NORMAL', generatorWatts = 110){
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
    }
    
    receiveMessage(message){
      let commands = message.commands
      let result = {
         receivedMessage :`${message.name} received!`,
         results : [],

      }
      for (let i = 0; i < commands.length; i++){
         if (commands[i].commandType === 'MOVE'){
            if (this.mode === 'LOW_POWER'){
               result.results.push("completed: false")
            }else{
            this.position = commands[i].value,
            result.results.push("completed: true")}}
         else if (commands[i].commandType === 'MODE_CHANGE'){
            this.mode = commands[i].value
            result.results.push("completed: true")
         }
         else if (commands[i].commandType === 'STATUS_CHECK'){
            result.results.push( {
               roverStatus : {
                  mode: this.mode,
                  position : this.position,
                  generatorWatts : this.generatorWatts
               }
            }
         )}
      }
      return result
      

}
}
module.exports = Rover;



let rover = new Rover(100);
let commands = [
   new Command('MOVE', 4321),
   new Command('STATUS_CHECK'),
   new Command('MODE_CHANGE', 'LOW_POWER'),
   new Command('MOVE', 3579),
   new Command('STATUS_CHECK')
];
let message = new Message('TA power', commands);
let response = rover.receiveMessage(message);

console.log(JSON.stringify(response, null, 2));