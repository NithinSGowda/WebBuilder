
//audio.src ='https://hackapi.reverieinc.com/tts?lang=en&text=Enter-Your-Website_Name&api_key=7eb5c7d9836a09af789e3cb03cd2c329c4e42f1a';

const smallBox = document.getElementsByClassName('c');
		const header = document.querySelector('.blue');
		window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		const recognition = new SpeechRecognition();
		recognition.interimResults = true;
		
		let p= document.createElement('p');
		const words = document.querySelector('.words');
		words.appendChild(p);
	
		recognition.addEventListener('result', e => {
      var transcript=Array.from(e.results)
			.map(result=>result[0])
			.map(result=>result.transcript)
			.join('')
            p.textContent = transcript;
            if(e.results[0].isFinal){
            transcript=transcript.toLowerCase();
            if(transcript=="done")
            document.querySelector('.submit').click();
            document.querySelector('.url-holder').value=transcript;
			console.log(transcript);}
		});
	
		recognition.addEventListener('end',recognition.start);
	
recognition.start();

$(document).ready(function () {
    $("#startBtn").on('click', function (e) {
        var u1 = new SpeechSynthesisUtterance("Enter the website you want to build");
        u1.lang = 'en-IN';
        u1.pitch = 0.95;
        u1.rate = 1;
        //u1.voice = voices[10];
        u1.voiceURI = 'native';
        u1.volume = 1;
        speechSynthesis.speak(u1);

    });
});

var x=document.querySelector(".hin");
function play(){
    x.play();
}