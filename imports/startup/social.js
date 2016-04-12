import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Mongo } from 'meteor/mongo';
import { Timecode } from '../api/timecode.js';
import './body.html';

if (Meteor.isServer) {
	Meteor.startup(function () {
		function on_Off(event) {
				var onOff = setInterval(function(){randomNum()}, 20000);
				return onOff;
		
				function randomNum() {
					function randomNumber() {
						var rand = Math.floor(Math.random()*10) + 1;
						return rand;
					}
		
					if(rand%2 === 0) {
						return true;
					}
					else {
						return false;
					} 
		
				} //function randomNum()
			} // function on_Off(event)
		
		// draw circles
	    function circles(event){
				var c = document.getElementById("myCanvas")
				var ctx = c.getContext("2d");
				var centerX = canvas.width / 2;
				var centerY = y_value;
				var radius = centerX;	
		
				for (i = 0; i < canvas.height - canvas.width/2; i += canvas.width/2 * 3/2) {
					y_value = i + radius;
					return y_value;
			
					ctx.beginPath();
					ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
			
					//onOff 실행되나 확인 필요
					if (onOff === true) {
						ctx.fillStyle = 'green';
					}
					else {
						ctx.fillStyle = 'grey';
					}
					ctx.fill();
					ctx.lineWidth = 5;
					ctx.strokeStyle = '#003300';
					ctx.stroke(); 
			
				} //for loop		
			} // function circles	
	} // startup
} //isServer

	
