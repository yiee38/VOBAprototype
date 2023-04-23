import React, { useState } from 'react'

function DeleteModal(props) {
const [showModal, setShowModal] = useState(false);

// TODO This element will require the name of the specific test
return (
    <>
    <button class="px-6 py-2 bg-white font-medium text-sm border border-blue-200 hover:bg-gray-600 text-black rounded m-3" onClick={() => setShowModal(true)}>Delete</button>
      {showModal && (
        <div class="fixed z-50 inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div class="bg-white rounded-md p-6">
            <p>You are about to delete a Test.</p >
            <p>Do you wish to comfirm this process?</p>
            <div class="flex justify-center">
            <button class="px-6 py-2 bg-gray-500 font-medium text-sm hover:bg-gray-600 text-gray-100 rounded m-3" onClick={() => setShowModal(false)}>Cancel</button>
            <button class="px-6 py-2 bg-blue-500 font-medium text-sm hover:bg-blue-600 text-blue-100 rounded m-3" onClick={() => setShowModal(false)}>Confirm</button>
            </div>
          </div>
        </div>
     )}
  </>
);
}

export default DeleteModal;