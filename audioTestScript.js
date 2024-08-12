document.getElementById('startButton').addEventListener('click', function() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(stream => {
        const audioContext = new AudioContext();
        const microphone = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        function updateVolume() {
            analyser.getByteTimeDomainData(dataArray);

            let sum = 0;
            for (let i = 0; i < bufferLength; i++) {
                sum += dataArray[i];
            }
            let average = sum / bufferLength;
            let adjustedAverage = (average - 128) * (average > 128 ? 1 : -1);

            document.getElementById('volume').innerText = `Volume Level: ${adjustedAverage.toFixed(2)}`;
            requestAnimationFrame(updateVolume);
        }

        updateVolume();
    })
    .catch(error => {
        console.error('Error accessing the microphone', error);
    });
});
