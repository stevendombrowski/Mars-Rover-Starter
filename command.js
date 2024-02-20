class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
 
 }
 

 let testCommand = new Command('MODE_CHANGE', 'LOW_POWER');
 console.log(testCommand.value)
 module.exports = Command;