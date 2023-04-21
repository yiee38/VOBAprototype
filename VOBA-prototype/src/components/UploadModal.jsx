import React, { useState } from 'react'


function UploadModal(props) {
const [showModal, setShowModal] = useState(false);




// TODO This element will require the name of the specific test
return (
    <>
    <button class="px-6 py-2 bg-blue-500 font-medium text-sm hover:bg-blue-600 text-blue-100 rounded m-3" onClick={() => setShowModal(true)}>Upload</button>
      {showModal && (
        <div class="fixed z-50 inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div class="bg-white rounded-md p-6">
            <p>You have successfully uploaded your report to the database!</p >
            <div class="flex justify-center">
            <button class="px-6 py-2 bg-blue-500 font-medium text-sm hover:bg-blue-600 text-blue-100 rounded mt-4" onClick={() => setShowModal(false)}>Okay</button>
            </div>
          </div>
        </div>
     )}
  </>
);
}


export default UploadModal;