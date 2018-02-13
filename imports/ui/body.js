import { Template } from 'meteor/templating';

import './body.html'

const users = new MysqlSubscription('allUsers');
const emails = new MysqlSubscription('userEmails')

Template.userList.helpers({
    users: function() {
        return users.reactive();
    }
});

Template.userItem.helpers({
    emails: function(userId) {
        return emails
            .reactive()
            .filter((item) => item.user_id === userId)
            .map((item) => item.alias);
    }
});