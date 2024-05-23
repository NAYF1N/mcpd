function calculateDifference() {
      // Get the values from the text boxes
      const textBox1Value = document.getElementById('charged').value;
      const textBox2Value = document.getElementById('zone').value;

      // Calculate the difference between the values
      const difference = Math.round(textBox1Value - textBox2Value);

      // Display different text results based on the difference
      if (difference < 0) {
        document.getElementById('result').innerHTML = 'The Charged speed is lower than MPH Zone.<br>Check your numbers!';
      } else if (difference >= 1 && difference <= 10) {
        document.getElementById('result').innerHTML = 'The charged speed is between <span class="bold">1-10mph</span> above the posted limit.<br>The associated fine is <span class="bold">$130/$180</span>.';
      } else if (difference >= 11 && difference <= 15) {
        document.getElementById('result').innerHTML = 'The charged speed is between <span class="bold">11-15mph</span> above the posted limit.<br>The associated fine is <span class="bold">$160/$230</span>.';
      } else if (difference >= 16 && difference <= 20) {
        document.getElementById('result').innerHTML = 'The charged speed is between <span class="bold">16-20mph</span> above the posted limit.<br>The associated fine is <span class="bold">$210/$330</span>.';
      } else if (difference >= 21 && difference <= 25) {
        document.getElementById('result').innerHTML = 'The charged speed is between <span class="bold">21-25mph</span> above the posted limit.<br>The associated fine is <span class="bold">$280/$480</span>.';
      } else if (difference >= 26 && difference <= 30) {
        document.getElementById('result').innerHTML = 'The charged speed is between <span class="bold">26-30mph</span> above the posted limit.<br>The associated fine is <span class="bold">$380/$680</span>.';
      } else if (difference >= 31) {
        document.getElementById('result').innerHTML = 'The charged speed is <span class="bold">greater than 30mph</span> above the posted limit.<br><span class="bold">The driver is mandated to contact the court.</span>';
      } else {
        document.getElementById('result').innerHTML = '&#8224;Enter data in "MPH Zone" and "Charged" to get<br>associated monetary fine.';
      }
}




    function changeDataLoad(scriptId) {
      var allScriptElements = document.getElementsByTagName('script');

      for (var i = 0; i < allScriptElements.length; i++) {
        var scriptElement = allScriptElements[i];

        if (scriptElement.id === scriptId) {
          scriptElement.setAttribute('data-load', 'true');
        } else {
          scriptElement.setAttribute('data-load', 'false');
        }
      }

      var allLinkElements = document.querySelectorAll('a[id^="link"]');
      for (var j = 0; j < allLinkElements.length; j++) {
        var linkElement = allLinkElements[j];

        if (linkElement.id === scriptId + '-link') {
          linkElement.classList.add('active');
        } else {
          linkElement.classList.remove('active');
        }
      }
    }

function copyr() {
  let textarea = document.getElementById("text-radar");
  textarea.select();
  document.execCommand("copy");
}
function copyl() {
  let textarea = document.getElementById("text-lidar");
  textarea.select();
  document.execCommand("copy");
}

function update() {
if (document.getElementById("check-aware").checked == false) {{{
  document.querySelector("textarea.radar").value = `CALVIN I checked the calibration of my radar unit at the beginning of my shift, and I perform an internal systems check of my radar system after each traffic stop.

I observed a vehicle near ${locate.value} traveling ${observed.value}mph, and confirmed a speed of ${confirmed.value}mph in a ${zone.value}mph zone with my ${ms.value}, ${fr.value}, ${os.value} radar.

I decided to issue a ${cw.value} for driving ${charged.value}mph in a ${zone.value}mph zone.`
  }
;
    {
    document.querySelector("textarea.lidar").value = `CALVIN The LiDAR passed an internal systems check when it powered on.

While sitting stationary, I observed a vehicle near ${locate.value} traveling ${observed.value}mph, in the ${os.value} lane relative to my position, and confirmed a speed of ${confirmed.value}mph in a ${zone.value}mph zone with my LiDAR.

I decided to issue a ${cw.value} for driving ${charged.value}mph in a ${zone.value}mph zone.`
  }}

} else {{
  document.querySelector("textarea.radar").value = `CALVIN I checked the calibration of my radar unit at the beginning of my shift, and I perform an internal systems check of my radar system after each traffic stop.

I observed a vehicle near ${locate.value} traveling ${observed.value}mph, and confirmed a speed of ${confirmed.value}mph in a ${zone.value}mph zone with my ${ms.value}, ${fr.value}, ${os.value} radar.
    
When asked if the driver was aware of their speed and the speed limit, they stated they ${aspeed.value} of their speed, and ${alimit.value} of the speed limit.

I decided to issue a ${cw.value} for driving ${charged.value}mph in a ${zone.value}mph zone.`
  }
;
    {
    document.querySelector("textarea.lidar").value = `CALVIN The LiDAR passed an internal systems check when it powered on.

While sitting stationary, I observed a vehicle near ${locate.value} traveling ${observed.value}mph, in the ${os.value} lane relative to my position, and confirmed a speed of ${confirmed.value}mph in a ${zone.value}mph zone with my LiDAR.
    
When asked if the driver was aware of their speed and the speed limit, they stated they ${aspeed.value} of their speed, and ${alimit.value} of the speed limit.

I decided to issue a ${cw.value} for driving ${charged.value}mph in a ${zone.value}mph zone.`
  }}
}
