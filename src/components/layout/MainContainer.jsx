/* eslint-disable react/prop-types */


export default function MainContainer(props) {
  return (
    <main className={`
        p-8
    `}>
        {props.children}
    </main>
  )
}
