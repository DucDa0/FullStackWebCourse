const config=require('./config.json');


module.exports={
    getConnections : function(){
        return `${config.userName}/${config.pwd}`
    }
}