import React from "react"

document.addEventListener("mousemove", circleshake)
function circleshake(e){
  document.querySelectorAll(".circle").forEach(function(move){
    var moving_value = move.getAttribute("data-value")
    var x = (e.clientX * moving_value)/250
    var y = (e.clientY * moving_value)/250
    move.style.transform = "transformX(" + x + ") translateY(" + y + ")"
  })
}

const NewHome = () => {
  return (
    <>
      <div className="h-[650px] max-h-[650px] overflow-hidden relative select-none">
        <div className="flex h-full">
          <div className="mx-auto my-auto text-center w-max">
            <div className='w-full px-20'>
              <div className=''>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div>
                    <img className="rounded-t-lg" src="/dp6/dpaulos6.jpg" alt="" />
                  </div>
                  <div className="p-5">
                    <p>testing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewHome