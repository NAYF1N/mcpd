function update() {
if (document.getElementById("check-aware").checked == false) {{{
  document.querySelector("textarea.radar").value = `DULCE I checked the calibration of my radar unit at the beginning of my shift, and I perform an internal systems check of my radar system after each traffic stop.

I observed a vehicle near ${locate.value} traveling ${observed.value}mph, and confirmed a speed of ${confirmed.value}mph in a ${zone.value}mph zone with my ${ms.value}, ${fr.value}, ${os.value} radar.

I decided to issue a ${cw.value} for driving ${charged.value}mph in a ${zone.value}mph zone.`
  }
;
    {
    document.querySelector("textarea.lidar").value = `DULCE The LiDAR passed an internal systems check when it powered on.

While sitting stationary, I observed a vehicle near ${locate.value} traveling ${observed.value}mph, in the ${os.value} lane relative to my position, and confirmed a speed of ${confirmed.value}mph in a ${zone.value}mph zone with my LiDAR.

I decided to issue a ${cw.value} for driving ${charged.value}mph in a ${zone.value}mph zone.`
  }}

} else {{
  document.querySelector("textarea.radar").value = `DULCE I checked the calibration of my radar unit at the beginning of my shift, and I perform an internal systems check of my radar system after each traffic stop.

I observed a vehicle near ${locate.value} traveling ${observed.value}mph, and confirmed a speed of ${confirmed.value}mph in a ${zone.value}mph zone with my ${ms.value}, ${fr.value}, ${os.value} radar.
    
When asked if the driver was aware of their speed and the speed limit, they stated they ${aspeed.value} of their speed, and ${alimit.value} of the speed limit.

I decided to issue a ${cw.value} for driving ${charged.value}mph in a ${zone.value}mph zone.`
  }
;
    {
    document.querySelector("textarea.lidar").value = `DULCE The LiDAR passed an internal systems check when it powered on.

While sitting stationary, I observed a vehicle near ${locate.value} traveling ${observed.value}mph, in the ${os.value} lane relative to my position, and confirmed a speed of ${confirmed.value}mph in a ${zone.value}mph zone with my LiDAR.
    
When asked if the driver was aware of their speed and the speed limit, they stated they ${aspeed.value} of their speed, and ${alimit.value} of the speed limit.

I decided to issue a ${cw.value} for driving ${charged.value}mph in a ${zone.value}mph zone.`
  }}
}
