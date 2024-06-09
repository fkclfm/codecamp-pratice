import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"   //export default로 한개만 가져오기
import { CREATE_BOARD } from './BoardWrite.queries' //export는 골라서 가져오기 가능

export default function BoardWrite() {
  const [writer, setWriter] = useState()
  const [title, setTitle] = useState()
  const [contents, setContents] = useState()

  const [나의함수] = useMutation(CREATE_BOARD)  

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {                    //variables 이게 $ 역할을 함
        writer: writer,
        title: title,
        contents: contents
      }
    })
    console.log(result)
  }

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const onChangeContents = (event) => {
    setContents(event.target.value)
  }
  
  return (
    <BoardWriteUI
      //props라는 객체 안에 key와 value를 넣는 개념
      aaa={onClickSubmit} 
      bbb={onChangeWriter}
      ccc={onChangeTitle}
      ddd={onChangeContents}
    />
  )

}