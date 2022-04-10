function welcome() {
    let welcome_text = 'Ciallo!✨'
    if (document.referrer !== '') {
        let referrer = document.referrer.split("/")[2];
        welcome_text = "欢迎光临！";
    }
    swal({
        title: " Ciallo!✨",
        text: '这里可以听到纯度100%的二次元音乐喏~♬', //欢迎文本，可自行修改
        imageUrl: "https://thirdqq.qlogo.cn/g?b=sdk&k=GiaUWM9IAH7hSnDAXibKLt0Q&s=140&t=1644054638", //图片，自行修改位置
        showConfirmButton: true,
        showCancelButton: true
    });
}
$(document).ready(() => { //若未引用JQuery，请引用
    welcome()
})