
const boxes = document.querySelectorAll(".box11");
const body = document.querySelector("body");
for (const i of boxes) {
    i.addEventListener('click', function(e) {
        switch(e.target.id){
            case 'box1':
                body.style.backgroundColor = 'grey';
                break;
            case 'box2':
                body.style.backgroundColor = 'white';
                break;
            case 'box3':
                body.style.backgroundColor = "rgb(62, 62, 231)";
                break;
            case 'box4':
                body.style.backgroundColor = "yellow";
                break;
        }
    });
}
// boxes.forEach(function(box) {
//     box.addEventListener('click', function(e) {
//         switch(e.target.id){
//             case 'box1':
//                 body.style.backgroundColor='grey';
//                 break;
//             case 'box2':
//                 body.style.backgroundColor='white';
//                 break;
//             case 'box3':
//                 body.style.backgroundColor="rgb(62, 62, 231)";
//                 break;
//             case 'box4':
//                 body.style.backgroundColor="yellow";
//                 break;

            
//         }
        

//     });
// });


const button1=document.querySelector("#but1");
button1.addEventListener('click', function(event){
    body.style.backgroundColor="white";
});
const button2 = document.querySelector('#but2');

button2.addEventListener('click', function(ev) {
  window.location.href = "https://www.youtube.com/";
});
