import { ChangeEvent, DragEvent, useState, MouseEvent, useRef } from "react"

const EventPage = () => {

  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const changeHanlder = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Управляемый: ', value)
    console.log('Неуправляемый: ', inputRef.current?.value)
  }

  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log('Drag')
  }

  const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }

  const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  return (
    <div>
      <input value={value} onChange={changeHanlder} placeholder='Управляемый' />
      <div style={{ marginTop: 15 }}>
        <input ref={inputRef} placeholder='Неуправляемый' />
      </div>
      <div>
        <button onClick={clickHandler}>result in console</button>
      </div>
      <div draggable onDrag={dragHandler}
        style={{
          width: 200,
          height: 200,
          background: 'red',
          marginTop: 15,
          color: 'white',
          textAlign: 'center'
        }}>
        drag me to down
      </div>
      <div onDragOver={dragOverHandler} onDragLeave={dragLeaveHandler} onDrop={dropHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? 'blue' : 'red',
          marginTop: 15
        }}></div>
    </div>
  )
}

export default EventPage