import { Meteor } from 'meteor/meteor';
import '../imports/api/timecode.js';
//import '../imports/api/users.js'; 

Meteor.startup(() => {
	
	
	
	

	
	// code to run on server at startup
	//get (n secs)
	// 어떤 event (pause, 중간에 보다가 나갔다면 제외)	
	var whereYouAt = myPlayer.currentTime();
	var duration = myPlayer.duration();
	var timeCode = new Date();
		  
	// 전체길이 - whereYouAt
		
		
	//얻어낼 자료들	
		
	// Engagement time


	// 플레이를 시작한 시간부터 종료시간까지를 체크
	// 어떻게 아이디별로 제시하지?
	// * Report user activity (line 2268)	
	var isUserActive = myPlayer.userActive();		
	timeCode = timecode.prototype.getTime();
	if(userActive !== true) {
		console.log(timeCode);
		}
		
	
	// Engagement Time 
		//We use the length of time that a student spends on a video (i.e., video watching session length) as the main proxy for engagement. 
		 //get ~ currentTime
	
	var startTime;
	var endTime;
	var isBegun = myPlayer.play();
	var isEnded = myPlayer.ended();
	var playTime;
	
	
	if (isBegun){	
		startTime = timecode;
		console.log("Start Time: " + timeCode);
	}
	
	if (userActive !== true) {
		endTime = timeCode;
		console.log("End Time: " + timeCode);
	}
	//계산맞는지 확인 필요 
	playTime = endTime - startTime;
	console.log("Play Time: " + playTime);	
	


	// 종료 여부 (동영상이 끝날때마다 체크)	
	if (isEnded) {
		endTime = timeCode;
		console.log("End Time: " + lecture_name);
	}
	
	
	// Problem Attempt

	// playList
		
	
	
	//check if the player is paused
	//return이 의미가 있는가	
	var isPaused = myPlayer.paused();
	if (isPaused) {
		return whereYouAt;
	}
	
	
	
	
	// Problem attempts
		// We record whether a student attempted the follow-up problem within 30 minutes after watching a video. A problem attempt indicates more engagement than moving on without attempting.
		// 이걸 넣기 위해서는 수업 후 quiz를 풀기위해 쿼즈 페이지로 넘어가는 시간을 측정?하는 것인데 
	//  이 부분에 대한 논의 필요
	// timedata
	 	
	
	
});



