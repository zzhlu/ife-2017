var inputs = document.getElementsByTagName("input");
var divs = document.getElementsByTagName("div");

window.onload = function () {
    nameValidator();
    passwordValidator();
    confirmPasswordValidator();
    emailValidator();
    phoneValidator();

    document.getElementsByTagName('button')[0].onclick = function () {
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].focus();
            inputs[i].blur();
        }

        for (var i = 0; i < divs.length; i++) {
            if (divs[i].style.color !== 'green') {
                alert('提交失败');
                return;
            }
        }

        alert('提交成功');
    }
};

function nameValidator() {
    inputs[0].onfocus = function () {
        divs[0].innerHTML = '必填，长度为4-16个字符';
    };

    inputs[0].onblur = function () {
        var len = getLength(inputs[0].value);

        if (len === 0) {
            divs[0].innerHTML = '名称不能为空';
            description(inputs[0], divs[0], false);

        } else if (len < 4 || len > 16) {
            divs[0].innerHTML = '字符数为4~16位';
            description(inputs[0], divs[0], false);

        } else {
            divs[0].innerHTML = '名称格式正确';
            description(inputs[0], divs[0], true);
        }
    }
}

function passwordValidator() {
    inputs[1].onfocus = function () {
        divs[1].innerHTML = '必填，长度为6-16位';
    };

    inputs[1].onblur = function () {
        var len = inputs[1].value.length;

        if (len === 0) {
            divs[1].innerHTML = '密码不能为空';
            description(inputs[1], divs[1], false);

        } else if (len < 6 || len > 16) {
            divs[1].innerHTML = '密码长度为6~16位';
            description(inputs[1], divs[1], false);

        } else {
            divs[1].innerHTML = '密码可用';
            description(inputs[1], divs[1], true);
        }
    }
}

function confirmPasswordValidator() {
    inputs[2].onfocus = function () {
        divs[2].innerHTML = '再次输入相同密码';
    };

    inputs[2].onblur = function () {
        var len = inputs[2].value.length;

        if (len == 0) {
            divs[2].innerHTML = '确认密码不能为空';
            description(inputs[2], divs[2], false);

        } else if (inputs[1].value === inputs[2].value) {
            divs[2].innerHTML = '密码输入一致';
            description(inputs[2], divs[2], true);

        } else {
            divs[2].innerHTML = '密码输入不一致';
            description(inputs[2], divs[2], false);
        }
    }
}

function emailValidator() {
    inputs[3].onfocus = function () {
        divs[3].innerHTML = '请输入邮箱地址';
    };

    inputs[3].onblur = function () {
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/g;

        if (inputs[3].value.length === 0) {
            divs[3].innerHTML = '邮箱不能为空';
            description(inputs[3], divs[3], false);

        } else if (reg.test(inputs[3].value)) {
            divs[3].innerHTML = '邮箱格式正确';
            description(inputs[3], divs[3], true);

        } else {
            divs[3].innerHTML = '邮箱格式错误';
            description(inputs[3], divs[3], false);
        }
    }
}

function phoneValidator() {
    inputs[4].onfocus = function () {
        divs[4].innerHTML = '请输入手机号码';
    };

    inputs[4].onblur = function () {
        var reg = /^\d{11}$/g;

        if (inputs[4].value.length === 0) {
            divs[4].innerHTML = '手机不能为空';
            description(inputs[4], divs[4], false);

        } else if (reg.test(inputs[4].value)) {
            divs[4].innerHTML = '手机格式正确';
            description(inputs[4], divs[4], true);

        } else {
            divs[4].innerHTML = '手机格式错误';
            description(inputs[4], divs[4], false);
        }
    }
}

function getLength(value) {
    var len = 0;

    for (var i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 255)
            len += 2;
        else
            len++;
    }

    return len;
}

function description(input, div, flag) {
    if (flag) {
        input.style.border = '1px solid green';
        div.style.color = 'green';

    } else {
        input.style.border = '1px solid red';
        div.style.color = 'red';
    }
}