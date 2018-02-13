import { Template } from 'meteor/templating';

import './body.html'

const users = new MysqlSubscription('allUsers');

Template.userList.helpers({
    userIds: function() {
        users.depend();
        return Array.from(new Set(users.map((item) => item.id)));
    }
});

Template.userItem.helpers({
    userLogin: function() {
        users.depend();
        return users.filter((item) => item.id === this.userId).map((item) => item.login)[0];
    },
    userFullName: function() {
        users.depend();
        return users.filter((item) => item.id === this.userId).map((item) => item.fname + ' ' + item.lname)[0];
    },
    userEmails: function() {
        users.depend();
        let items = users.filter((item) => item.id === this.userId);
        if(!items.length) return[];
        return items.map((item) => item.alias);
    }
});