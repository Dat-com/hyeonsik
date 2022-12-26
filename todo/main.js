    document.addEventListener("DOMContentLoaded", function(){   
    //localStorage.setItem(key, value);
    //localStorage.getItem(key);
    //localStorage.removeItem(key);

    function check() {
        let issign = localStorage.getItem("userName");
    if(issign) {
        return true;
    } else{
        return false;
    }
} // 사용자 이름이 있는지 확인

    function printWelcome(){
        let issign = check();
        let user = localStorage.getItem("userName")
        if(issign){
            document.querySelector(".Loggin").style.display="block";//대부분의 요소는 블락
            document.querySelector(".notLoggin").style.display="none";
            document.querySelector(".output-username .name").innerText = user;
        }
        else{
            document.querySelector(".Loggin").style.display="none";//대부분의 요소는 블락
            document.querySelector(".notLoggin").style.display="blcok";
        }
    } // 이름 유무에 따라 ui 결정

    function setUserTodo(item){
        let todolist = localStorage.getItem("userTodo") || [];
        if(todolist.length){
            todolist = todolist.split(",") // ,를 기준으로 문자열들을 배열로 바꿔줌
        }                                  //그로인해 push를 해줄수 있는것 문자열이면 push가 불가능
                                         // 꼭 split으로 배열로 바꿔준후 push
        todolist.push(item);
        localStorage.setItem("usertodo",todolist)

    } //사용자의 todo 키워드를 저장

    function init(){
        printWelcome();
    } //전역에서 실행 되야할 함수 실행문들


   const userName = document.querySelector("#userName");
    userName.addEventListener("submit", function(e){
        e.preventDefault(); //특정 요소의 기능을 상쇄
        let userInput = this.children[0].value;
        localStorage.setItem("userName", userInput);
        printWelcome();
    }); //이벤트문
    const userTodo = document.querySelector(".#userTodo");
    userTodo.addEventListener("submit",function(e){
        e.preventDefault();
        let userInput = this.children[0].value;
        setUserTodo(userInput);
    }) //이벤트문

    init();
});