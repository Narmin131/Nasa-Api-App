import React from 'react'
const Main = (props) => {

  function renderContentType() {
    if (props.photo.media_type === 'image') {
      return (
        <img
          className="img-fluid w-full h-auto md:h-auto object-cover md:w-2/5 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={props.photo.url}
          alt={props.photo.title}
        />
      )
    } else if (props.photo.media_type === 'video') {
      return (
        <iframe
          title="nasa video of the day"
          className="img-fluid w-full h-auto md:h-auto object-cover md:w-2/5 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={props.photo.url}
          alt={props.photo.title}
        ></iframe>
      )
    } else {
      return
    }
  }
  return (
    <> 
      <div className="flex justify-center mt-5 rounded">
        <div className="flex flex-col md:flex-row sm:flex-col md:w-4/5 sm:w-4/5 rounded-lg bg-white shadow-lg">
          <div />
          {renderContentType()}
          <div/>
          <div className="p-6 flex flex-col justify-start w-full">
            <h5 className="text-xl text-gray-900 pr-2 font-bold">{props.photo.title}</h5>
            <p className="text-gray-700 text-base mb-4 mt-2 text-slate-500 font-semibold">
            {props.photo.explanation}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
