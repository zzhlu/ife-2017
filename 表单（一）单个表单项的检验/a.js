document.getElementsByTagName("button")[0].onclick = function () {
    var input = document.getElementById("name");
    var length = getLength(input.value);
    var tip = document.getElementById("tip");

    if (length === 0) {
        tip.innerHTML = "姓名不能为空";
        tip.style.color = "red";
        input.style.border = "2px solid red";
        input.focus();
    } else if (length < 4 || length > 16) {
        tip.innerHTML = "长度为４～１６个字符";
        tip.style.color = "red";
        input.style.border = "2px solid red";
        input.value = "";
        input.focus();
    } else {
        tip.innerHTML = "名称格式正确";
        tip.style.color = "green";
        input.style.border = "2px solid green";
    }
};

function getLength(value) {
    var len = 0;

    for (var i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 255) {
            len += 2;
        } else {
            len++;
        }
    }

    return len;
}