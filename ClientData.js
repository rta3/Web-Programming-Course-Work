import { createConnections } from 'user_info';

var conect = createConnections(
{
    host:'localhost',
    database:'user_database',
    UserEmail:'email',
    UserName:'player',
    Password:'password',
    Level:'0',
    Points:'0',
    Wins:'0'
});

conbect.connection(function(err){
    if(err)throw err;
    console.log("User Connected.");

    var insertSql = "INSERT INTO user_info VALUES('email','player','password,'0','0','0')";
    conect.query(insertSql, function(err,result)
    {
        if(err) throw err;
        console.log("Successful Insertion.");
    });
    
});