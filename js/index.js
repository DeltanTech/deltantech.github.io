function setbyid(){
    window.open('about:blank', '_self').close();
}

function Myfunction(){
    var num = prompt("「genki」と入力してください。\nこれはロボットが操作していないかの確認です。")
    if(num == "genki"){
        alert("ご協力ありがとうございます。");
        alert("アクセスしてくれてありがとうざいます!!");
    }
    else if(num == "command"){
        alert("特別コマンド" + num + "が入力されました。")
        location.href = "https://www.google.co.jp";
    }
    else if(num == null){
        alert("画面を終了します。")
        setbyid();
    }
    else if(num = "「genki」と入力してください。"){
        alert("「genki」と入力してください。")
        Myfunction()
    }
    else{
        setbyid();
    }
}
function henkou(){
    var cc = prompt("変更したい名前を入力してください。");
    document.getElementById("title").innerHTML = cc;
    if(cc == ""){
        alert("なにか入力してください。")
        henkou();
    }
    else if(cc == null){
        alert("キャンセルします。")
        location.href = "https://genkikun01.github.io";
    }
}
function henkou1(){
    var a = confirm("リセットしますか?");
    if(a == true){
        document.getElementById("title").innerHTML = "GenKiのブログ"
        alert("元に戻しました。")
    }
}

const myFunc = () =>{
    let da = confirm("本当に実行しますか?");
    if(da == true){
        myFunca();
    }
    else if(da == false){
        alert("キャンセルします。")
    }
}
// プログレスバーの進捗値
//var val;
// 一定間隔で処理を行うintervalのIDを保持
//var intervalID;
// ボタンを押した時に動く関数
let myFunca = () =>{
  suuzi = 0;
  // ボタンを無効にする(何回も押せないように)
  document.getElementById("myButton").disabled = true;
  // 50msおきにプログレスバーを更新する
  oh = setInterval("updateProgress()", 500);
}
// プログレスバーを更新する
function updateProgress(){
  // プログレスバーの進捗値を更新し、プログレスバーに反映させる
  suuzi += 1;
  document.getElementById("myProgress").value = suuzi;
  //document.getElementById("myProgress").innerText = val + "%";
  document.getElementById("p").innerHTML = suuzi + "%";

  // 最大値まで達したら終了
  if(suuzi == 100){
    clearInterval(oh);
    document.getElementById("myButton").disabled = false;
    document.getElementById("p").innerHTML = "完了しました";
    document.getElementById("ffffff").style.backgroundColor = "red";
  }
}

const show = () =>{
    let a = document.getElementById("butt");
    let i = document.getElementById("pass");
    if(i.type == "email"){
        a.value = "O";
        i.type = "password";
    }
    else if(i.type == "password"){
        a.value = "X";
        i.type = "email";
    }
}

function zikan(){
    document.getElementById("bu").style.display = "none"
    let kihon = document.getElementById("write");
    let time = new Date();
    let zikann = time.getHours();
    let hun = time.getMinutes();
    let byou = time.getSeconds();
    kihon.innerHTML = zikann + ":" + hun + ":" + byou;
    setInterval('zikan()',1000);
}
