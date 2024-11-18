
            // Toggle menu for small screens (burger menu)
            const burgerMenu = document.getElementById('burgerMenu');
            const menu = document.getElementById('menu');
            
            burgerMenu.addEventListener('click', () => {
                menu.classList.toggle('active');
                if (menu.classList.contains('active')) {
                    menu.style.display = 'block';
                } else {
                    menu.style.display = 'none';
                }
            });

            // WebCam functionality
            function startWebCam() {
                const video = document.querySelector('video');
                if (navigator.mediaDevices.getUserMedia) {
                    navigator.mediaDevices.getUserMedia({ video: true })
                        .then(function(stream) {
                            video.srcObject = stream;
                        })
                        .catch(function(error) {
                            console.log("Error accessing the webcam: ", error);
                        });
                } else {
                    alert("Webcam not supported on this browser.");
                }
            }