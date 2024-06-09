import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"   //export default로 한개만 가져오기
import { CREATE_BOARD } from './BoardWrite.queries' //export는 골라서 가져오기 가능

export default function BoardWrite(props) {
  const [isActive, setIsActive] = useState(false)

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

    if(event.target.value && title && contents) {
      setIsActive(true)
    }
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)

    if(writer && event.target.value && contents) {
      setIsActive(true)
    }
  }

  const onChangeContents = (event) => {
    setContents(event.target.value)

    if(writer && title && event.target.value) {
      setIsActive(true)
    }
  }
  
  return (
    <BoardWriteUI
      //props라는 객체 안에 key와 value를 넣는 개념
      onClickSubmit={onClickSubmit} 
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isActive={isActive}
    />
  )

}