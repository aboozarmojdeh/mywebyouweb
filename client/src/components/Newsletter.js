import React from 'react';

const Newsletter=()=>{
    return(
<div className="container newsletter-form" style={{ backgroundColor: '#dbdbdb', borderRadius: '10px' }}>
                <form className="">
                  <div className="form-group">
                    <label className="title form-label" htmlFor="email">
                      Newsletter</label>
                    <br />
                    <small className="sub-title">Get weekly updates for new APIs.</small>
                    <input placeholder="Enter email" type="email" id="email" className="form-control" />
                    <small className="text-muted form-text">We'll never share your email with anyone else.</small>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Subscribe</button>
                  <div className="warning-msg"> </div>
                  <div className="warning-success"> </div>
                </form>
              </div>
    )

};

export default Newsletter;
