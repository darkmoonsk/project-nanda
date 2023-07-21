/* eslint-disable react/prop-types */

export default function PageContainer(props) {
  return (
    <div className="lg:m-auto lg:w-4/5 h-screen">
        {props.children}
    </div>
  )
}
