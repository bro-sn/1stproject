// JavaScript에서 변수 설정
var myVariable = "Hello from JavaScript!";

// 변수를 URL 파라미터로 추가
var url = "myJsp.jsp?myVariable=" + encodeURIComponent(myVariable);

// JSP 페이지로 리다이렉트
window.location.href = url;
