import React from 'react';

export default function Alert(props) {

const capitalise=(word)=>{
    const lower= word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1);
}

  return (
    <div style={{height:'50px'}}> {/*fix the space for alert so that it won't displace the main section*/}
{props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalise(props.alert.type)}</strong>:{props.alert.msg}
</div>}
</div>
  )
}
