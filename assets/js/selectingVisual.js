var speed=1000;
var delay_time=10;
var c_delay=0;
var selecting_algo = document.getElementsByClassName("selecting_alg");

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<selecting_algo.length;i++)
        {
            selecting_algo[i].classList=[];
            selecting_algo[i].classList.add("butt_unselected");

            selecting_algo[i].disabled=false;
        }
    },c_delay+=delay_time);
}