import React from 'react'

const PaymentSuccess = () => {
    
    const queryParameters = new URLSearchParams(window.location.search);
    let sessionId = queryParameters.get("session_id");

    return (
      <div>
        <h1 className='custom-header'>Thank you for booking tickets!</h1>
        <p>Session ID: {sessionId}</p>
      </div>
    )
}

export default PaymentSuccess
