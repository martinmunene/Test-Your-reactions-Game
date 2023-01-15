
        var start = new Date().getTime();

        function timeTakenToAppera(){

            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                  color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
              }

            var top = Math.random() * 300;
            document.getElementById("shape"). style.top = top + "px";

            var left = Math.random() * 300;
            document.getElementById("shape"). style.left = left + "px";

            var width = (Math.random() * 300) + 100;
            document.getElementById("shape"). style.width = width + "px";
            document.getElementById("shape"). style.height = width + "px";

            if (Math.random() > 0.5){
                document.getElementById("shape"). style.borderRadius = "50%";
            }else {

                document.getElementById("shape"). style.borderRadius = "0%";
            }

            document.getElementById("shape"). style.backgroundColor = getRandomColor();

            document.getElementById("shape"). style.display = "block";
            start = new Date().getTime();
        

        }
        function delayTime(){

            setTimeout(timeTakenToAppera, Math.random() * 2000);
        }

        delayTime();
        
        document.getElementById("shape"). onclick = function(){
            document.getElementById("shape"). style.display = "none";

            var end = new Date().getTime();
            var timeTaken  = (end - start) / 1000;
           
            document.getElementById("timetaken"). innerHTML = timeTaken + " s"; 
        delayTime();
        }

       