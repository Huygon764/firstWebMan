function darkmode() {
    document.getElementsByClassName('container_main')[0].classList.toggle("background_content");
    document.getElementsByClassName('nav')[0].classList.toggle("background_nav");
    document.getElementsByClassName('content')[0].classList.toggle("dark");
    
    const length_name_item = document.getElementsByClassName('form_sign_in').length;

    const name_item = document.getElementsByClassName('form_sign_in');

    for (let j = 0; j < length_name_item; j++) 
    {
        name_item[j].classList.toggle("white");
    }

}