let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector((".msg-container"));
let msg = document.querySelector("#msg");
let turno = true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resestgame = () =>{
    turno = true;
    enablebtns();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turno){
            box.innerText = 'O';
            turno = false;
        }
        else{
            box.innerText = 'X';
            if(box.innerText === 'X'){
                box.classList.add("new");
            }
            turno = true;
            
        }
        box.disabled = true;
        checkWinner();
    });
    
});
const disablebtns = () =>{
    for(let bol of boxes){
        bol.disabled = true;
    };
};
const enablebtns = () =>{
    for(let bol of boxes){
        bol.disabled = false;
        bol.innerText = "";
    };
};
const showWinner = (winner) =>{
    msgcontainer.classList.remove("hide");
    disablebtns();
};
const checkWinner = ()=>{
    for(let pattern of winPattern){
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // ); 
        let pos1val = boxes[pattern[0]].innerText;
        let pos1va2 = boxes[pattern[1]].innerText;
        let pos1va3 = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos1va2 !="" && pos1va3 !=""){
            if(pos1val === pos1va2 && pos1va2 === pos1va3){
                console.log("winner");
                showWinner(pos1val);
            };
        };
    };
};
newgamebtn.addEventListener("click",resestgame);
resetbtn.addEventListener("click",resestgame);




