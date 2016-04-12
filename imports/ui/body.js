import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Mongo } from 'meteor/mongo';
import { Timecode } from '../api/timecode.js';
import './body.html';
//login
import { Accounts } from 'meteor/accounts-base';

// You can pass data into templates from your JavaScript code by defining helpers.In the code above, we defined a helper called tasks on Template.body that returns an array. 
// Template.body.helpers ({ tasks: [], });
//	Inside the body tag of the HTML, we can use {{#each tasks}} to iterate over the array and insert a task template for each value. Inside the #each block, we can display the text property of each array item using {{text}}.





Template.body.helpers({
	timecode() {
		return Timecode.find({}); //여기 수정필요
	},
});


// template? Everything inside <template> tags is compiled into Meteor templates, which can be included inside HTML with {{> templateName}} or referenced in your JavaScript with Template.templateName.



Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
		Accounts.createUser({
            email: emailVar,
            password: passwordVar
        });
    }
});


Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
    }
});



Template.dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});