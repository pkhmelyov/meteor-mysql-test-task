import { Meteor } from 'meteor/meteor';

// const settings = {
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '',
//     database: 'meteor_test_task',
// };

const settings = {
    host: '216.55.176.76',
    port: 3306,
    user: 'meteor_test',
    password: 'QFAZ7xMSWN7xQXkapUoO',
    database: 'meteor_test',
};

export const mysqlDb = new LiveMysql(settings);

if(Meteor.isServer) {
    Meteor.publish('allUsers', function () {
        return mysqlDb.select(
            `SELECT
                id,
                login,
                fname,
                lname
            FROM
                users`,
            [
                { table: 'users' },
            ]
        );
    });

    Meteor.publish('userEmails', function() {
        return mysqlDb.select(
            `SELECT
                user_id,
                alias
            FROM
                emails`,
            [
                { table: 'emails' },
            ]
        );
    });
}