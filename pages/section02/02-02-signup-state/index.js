import { useState } from "react"

export default function SignupStatePage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")

  function onChangeEmail(event) {
    setEmail(event.target.value) // 작동된 태그에 입력된 값
  }

  function onChangePassword(event) {
    setPassword(event.target.value) // 작동된 태그에 입력된 값
  }
  function onClickSignup(event) {

    // 1. 검증하기
    if (email.includes("@") === false) {
      setEmailError("이메일이 올바르지 않습니다!! @가 없음!!")
      //alert("이메일이 올바르지 않습니다!! @가 없음!!")
      //document.getElementById("myerror").innerText = "이메일이 올바르지 않습니다!! @가 없음" => 옛날방식
    } else {
      // 2. 백엔드 PC단에 보내주기(백엔드 개발자가 만든 함수, API)
      // => 나중에

      // 3. 성공 알람 보여주기
      alert("회원가입을 축하합니다!!")
    }


  }

  return (
    <div>
      이메일 : <input type="text" onChange={onChangeEmail} />
      {/* <div id="myerror"></div> ==> 옛날방식 */}
      <div>{emailError}</div>
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <div></div>
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  )

} 