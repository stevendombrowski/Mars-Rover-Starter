class Rover {
   // Write code here!
   constructor(position, mode = 'NORMAL', generatorWatts = 110){
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
    }
    receiveMessage(message){
      let roverCommands = {
      message : message.name,
      results : []
      }
      for(let i = 0; i < message.commands.length; i++){
         if (message.commands[i] == 'MOVE'){
            if (this.mode == 'LOW_POWER'){
               result.push('completed: false')
            }
         }
      }
      return results
    }
    
}

module.exports = Rover;

let rover = new Rover(100);
// let commands = [
//    new Command('MOVE', 4321),
//    new Command('STATUS_CHECK'),
//    new Command('MODE_CHANGE', 'LOW_POWER'),
//    new Command('MOVE', 3579),
//    new Command('STATUS_CHECK')
// ];
// let message = new Message('TA power', commands);
let response = rover.receiveMessage(message);

console.log(JSON.stringify(response, null, 2));