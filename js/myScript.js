setInterval(() => {
    let dt = new Date();
    let hour = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();

    let hour_rotation = 30 * hour + min / 2;
    let min_rotation = 6 * min;
    let sec_rotation = 6 * sec;

    let hour_Zone = document.getElementById("hour");
    let min_Zone = document.getElementById("mins");
    let sec_Zone = document.getElementById("secs");

    hour_Zone.style.transform = "rotate(" + hour_rotation + "deg)";
    min_Zone.style.transform = "rotate(" + min_rotation + "deg)";
    sec_Zone.style.transform = "rotate(" + sec_rotation + "deg)";
  }, 1000);