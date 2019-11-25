import { createConnection } from 'mysql';

var connection = createConnection(
    {
        user:'player',
        password:'notsetyet',
        database:'user_database',
        username:'playerName',
        level:'int',
        points:'int',
        wins:'int'
    }
    );
connection.connect();
