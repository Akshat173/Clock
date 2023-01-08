let day_arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let month_arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December']

let time_teller = () => {
    let clock_content = new Date()
    let date = clock_content.getDate();
    let month = clock_content.getMonth();
    let day = clock_content.getDay();
    let hour = clock_content.getHours();
    let minute = clock_content.getMinutes();
    let second = clock_content.getSeconds();
    let year = clock_content.getFullYear();

    if(hour<10){
        hour = '0' + hour
    }
    if(minute<10){
        minute = '0' + minute
    }
    if(second<10){
        second = '0' + second
    }

    let clock_box = document.getElementById("time")
    clock_box.innerHTML =`<h1 class="fs-c mx-4 my-4 mb-0">${hour}:${minute}:${second}</h1> `

    let clock_date = document.getElementById("date")
    clock_date.innerHTML =`<h1 class="fs-c2 mx-4">${day_arr[day]}, ${date} ${month_arr[month + 1]} ${year}</h1>`
}
// time_teller();
let a = setInterval(() => { time_teller()
}, 1000);