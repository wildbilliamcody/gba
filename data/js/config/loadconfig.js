let savedFav = null;
let savedIsCheck = null;
let savedTheme = null;

function loadConfig(){
    
    function onChange(event) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event){
        console.log(event.target.result);
        var obj = JSON.parse(event.target.result);
        alert_data(obj.userIsCheck, obj.userTheme);
        savedIsCheck = obj.userIsCheck
        savedTheme = obj.userTheme
        console.log(savedIsCheck);
        console.log(savedTheme);
        localStorage.setItem("isCheck", JSON.stringify(savedIsCheck));
        localStorage.setItem("theme", JSON.stringify(savedTheme));
    }
    
    function alert_data(isCheck, theme){
        alert('IsChecked : ' + isCheck + ', Theme : ' + theme);
    }
 
    document.getElementById('file').addEventListener('change', onChange);
}
loadConfig();

