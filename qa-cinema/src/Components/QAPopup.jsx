import React from 'react'

const QAPopup = (props) => {
  return (props.trigger) ? (
    <div className='popup-bg'>
        <div className='popup-content'>
              { props.children }
              <button className='sm-custom-button mt-5'
                onClick={() => props.setTrigger(false)}>
                    Close</button>
        </div> 
    </div>
  ) : '';
}

export default QAPopup;