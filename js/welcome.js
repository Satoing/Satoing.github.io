function welcome() {
    let welcome_text = 'Ciallo!✨'
    if (document.referrer !== '') {
        let referrer = document.referrer.split("/")[2];
        welcome_text = "欢迎光临！";
    }
    swal({
        title: " Ciallo!✨",
        text: '这里可以听到超好听的音乐♬', //欢迎文本，可自行修改
        imageUrl: "https://cloud.fullcomb.top/private/source/image/build/roselia/9TMSoYRoselia-OHMORI-Visual-2S15q4.webp", //图片，自行修改位置
        showConfirmButton: true,
        showCancelButton: true
    });
}
$(document).ready(() => { //若未引用JQuery，请引用
    welcome()
})