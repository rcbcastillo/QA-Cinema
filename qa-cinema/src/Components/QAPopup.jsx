import React from 'react'

const QAPopup = ({trigger, children, setTrigger}) => {
  return (trigger) ? (
    <div className='popup-bg'>
        <div className='popup-content'>
              { children }
              <button className='sm-custom-button mt-5'
                onClick={() => setTrigger(false)}>
                    Close</button>
        </div> 
    </div>
  ) : '';
}

export default QAPopup;