function darkmode() {
    document.getElementsByClassName('container_main')[0].classList.toggle("background_content");
    document.getElementsByClassName('nav')[0].classList.toggle("background_nav");
    document.getElementsByClassName('content')[0].classList.toggle("dark");
    document.getElementsByClassName('content_aside')[0].classList.toggle("dark")
    document.getElementsByClassName('aside')[0].classList.toggle("dark");
    document.getElementsByClassName('frame_top5')[0].classList.toggle('border_white');
    
    const length_grid = document.getElementsByClassName('grid_content').length;
    const length_name_item = document.getElementsByClassName('name_darkmode').length;

    const grid = document.getElementsByClassName('grid_content');
    const name_item = document.getElementsByClassName('name_darkmode');

    for (let i = 0; i < length_grid; i++) 
    {
        grid[i].classList.toggle("dark");
    }

    for (let j = 0; j < length_name_item; j++) 
    {
        name_item[j].classList.toggle("white");
    }

}