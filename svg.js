const headM = document.querySelector('.headM').attributes.d.value;

function cords (d){
    cs = d.split(/([A-Z])/);
    for(i=1;(cs.length-1)>=i;i++){
        console.log(cs[i]+cs[i+1]);
        i++;
    }
}
