const secondHand = document.querySelector('.second-hand')
        const minsHand = document.querySelector('.min-hand')
        const hourHand = document.querySelector('.hour-hand')

        
        function setDate() {
            const now = new Date()

            const seconds = now.getSeconds()
            const minutes = now.getMinutes()
            const hours = now.getHours()

            let secondsDegrees = ((seconds / 60) * 360)
            const minutesDegrees = ((minutes / 60) * 360)
            const hoursDegrees = ((hours / 12) * 360)

            if (secondsDegrees === 0) {
                secondHand.style.transform = 'rotate(360deg)';
                secondHand.classList.remove('handTransition')
                const originalSecondHandStyleBackground = secondHand.style.background
                secondHand.style.background = 'none'
                secondHand.style.transform = 'rotate(0deg)';

                setTimeout(function(){
                    secondHand.style.background = originalSecondHandStyleBackground
                    secondHand.classList.add('handTransition')
                },1)

            } else {
                secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
            }

            minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
            hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
        }

        setInterval(setDate, 1000);