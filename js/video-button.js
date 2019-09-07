 // получаем все элементы
 var videoEl = document.getElementsByTagName('video')[0],
     playBtn = document.getElementById('playBtn'),
     vidControls = document.getElementById('controls'),
     volumeControl = document.getElementById('volume'),
     timePicker = document.getElementById('timer');
     varvideo = document.getElementById('video'),

     // запускам или останавливаем воспроизведение
     playBtn.addEventListener('click', function () {
         if (videoEl.paused) {
             videoEl.play();
         } else {

             videoEl.pause();
         }
     }, false);

 varvideo.addEventListener('click', function () {
    
     $('#controls').show(0);
     videoEl.pause();

 }, false);

 videoEl.addEventListener('play', function () {

    $('#controls').fadeOut(1500);  
    document.getElementById('controls').style.backgroundImage = 'none';
 }, false);

 videoEl.addEventListener('pause', function () {
     document.test.src = 'img/koleso-oreng.jpg';

 }, false);

 videoEl.addEventListener('ended', function () {
     videoEl.currentTime = 0;
 }, false);

 videoEl.addEventListener('ended', function () {

     document.getElementById('controls').style.backgroundImage = 'url(img/fon-photo1.jpg)';
     $('#controls').fadeIn(3000);

 }, false);


 videoEl.addEventListener('timeupdate', function () {
     timePicker.innerHTML = secondsToTime(videoEl.currentTime);
 }, false);

 // рассчет отображаемого времени
 function secondsToTime(time) {

     var h = Math.floor(time / (60 * 60)),
         dm = time % (60 * 60),
         m = Math.floor(dm / 60),
         ds = dm % 60,
         s = Math.ceil(ds);
     if (s === 60) {
         s = 0;
         m = m + 1;
     }
     if (s < 10) {
         s = '0' + s;
     }
     if (m === 60) {
         m = 0;
         h = h + 1;
     }
     if (m < 10) {
         m = '0' + m;
     }
     if (h === 0) {
         fulltime = m + ':' + s;
     } else {
         fulltime = h + ':' + m + ':' + s;
     }
     return fulltime;
 }