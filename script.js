'use strict';

function first_onclick (){
    let first_oclick = document.getElementById("first_click");
    let elem_style = first_oclick.style;
    if(elem_style.backgroundColor == 'yellow'){
        elem_style.backgroundColor = 'white';
        elem_style.color = "black";
    }
    else{
        elem_style.backgroundColor = 'yellow';
        elem_style.color = "white";
    }
}

function second_onclick(){
    let second_onclick = document.querySelector(".second_click");
    let elem_style = second_onclick.style;
    if(elem_style.backgroundColor == 'green'){
        elem_style.backgroundColor = 'white';
        elem_style.color = "black";
    }
    else{
        elem_style.backgroundColor = 'green';
        elem_style.color = "white";
    }
}


function add_image(){
    let main_div = document.getElementById("main_div");
    main_div.innerHTML += '<img class="image" src="frankfurt.jpg" style="width:500px" alt="Photo of Frankfurt"></img>';
}

function delete_image(){
    let images = document.getElementsByClassName("image");
    let main_div = document.getElementById("main_div");
    main_div.removeChild(images[images.length - 1]);
}

function zoom_image(){
    let images = document.getElementsByClassName("image");
    let image = images[images.length - 1];
    let image_width = image.style.width;
    let width_length = image_width.length;
    image.style.width = (image_width.slice(0, width_length-2)/10*11)+"px";
}

function anti_zoom_image(){
    let images = document.getElementsByClassName("image");
    let image = images[images.length - 1];
    let image_width = image.style.width;
    let width_length = image_width.length;
    image.style.width = (image_width.slice(0, width_length-2)/11*10)+"px";
}