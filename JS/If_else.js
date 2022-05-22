
var gender;
var age;
var result;

gender=prompt('성별 입력');
if(gender=='M') {
    age=prompt('나이 입력');
    if(age>=19) {
        result="남자 성인입니다."
    }
    else {
        result="남자 미성년자입니다."
    }
}
else if (gender=='W') {
    age=prompt('나이 입력');
    if(age>=19) {
        result="여자 성인입니다."
    }
    else {
        result="여자 미성년자입니다."
    }
}
else {
    result="오류"
}
document.write(<p>result</p>)