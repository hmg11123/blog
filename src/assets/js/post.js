const delBtnHander = btn => {
  const answer = confirm("정말 해당 포스팅을 삭제하시겠습니까?");

  if (answer) {
    // '확인' 버튼을 누른 경우 -> form을 실행시켜야함
    btn.parentNode.submit();
  } else {
    // '취소' 버튼을 누른 경우 -> 함수 종료
    return;
  }
};
const writeBtnHandler = () => {
  const frm = document.getElementById("writeFrm-js");

  frm.submit();
};
