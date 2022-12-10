let myDate = new Date();

let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


let date = myDate.getDate();
let month = monthsList[myDate.getMonth()];
let year = myDate.getFullYear();
let day = daysList[myDate.getDay()];

let today = `${day}, ${date} ${month} ${year}`;

let amOrPm: string = '';
let twelveHours = function (){
    if(myDate.getHours() > 12)
    {
        amOrPm = 'PM';
        let twentyFourHourTime = myDate.getHours();
        let conversion = twentyFourHourTime - 12;
        return `${conversion}`

    }else {
        amOrPm = 'AM';
        return `${myDate.getHours()}`}
};
let hours = twelveHours();
let minutes = myDate.getMinutes();

let currentTime = `${hours}:${minutes} ${amOrPm}`;

// console.log(today + ' ' + currentTime);
// const dateTime = today + ' ' + currentTime
// 9 Dec 2022, Friday 1:11 PM
//1:11 PM - Friday, 9 Dec 2022

// export default today + ' ' + currentTime

export default currentTime + ' - ' + today