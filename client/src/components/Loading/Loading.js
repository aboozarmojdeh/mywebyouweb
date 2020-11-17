import React from 'react';
import './Loading.css';
import ContentLoader, { Facebook } from 'react-content-loader'

const Loading = (props) => {
  

  return (
    <div className="App container-fluid main-container">
      <main>
        <div className='row'>
          <div className='col-md-3 col-sm-12 col-12'>
            <div className="alert alert-info" role="alert">
            <ContentLoader viewBox="0 0 476 350" {...props}>
    <rect x="48" y="8" width="88" height="6" rx="3" />
    <rect x="48" y="26" width="52" height="6" rx="3" />
    <rect x="0" y="56" width="410" height="6" rx="3" />
    <rect x="0" y="72" width="380" height="6" rx="3" />
    <rect x="0" y="88" width="178" height="6" rx="3" />
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
            </div>
          </div>
          <div className='col-md-9 col-sm-12 col-12'>
            <div className="alert alert-info" role="alert">
            <ContentLoader viewBox="0 0 476 100" {...props}>
    <rect x="48" y="8" width="88" height="6" rx="3" />
    <rect x="48" y="26" width="52" height="6" rx="3" />
    <rect x="0" y="56" width="410" height="6" rx="3" />
    <rect x="0" y="72" width="380" height="6" rx="3" />
    <rect x="0" y="88" width="178" height="6" rx="3" />
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 col-sm-12 col-12'>
            <div className="alert alert-info col-height1" role="alert">
            <ContentLoader viewBox="0 0 476 350" {...props}>
    <rect x="48" y="8" width="88" height="6" rx="3" />
    <rect x="48" y="26" width="52" height="6" rx="3" />
    <rect x="0" y="56" width="410" height="6" rx="3" />
    <rect x="0" y="72" width="380" height="6" rx="3" />
    <rect x="0" y="88" width="178" height="6" rx="3" />
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
            </div>
          </div>
          <div className='col-md-9 col-sm-12 col-12'>
            <div className="alert alert-info col-height1" role="alert">
            <ContentLoader viewBox="0 0 476 100" {...props}>
    <rect x="48" y="8" width="88" height="6" rx="3" />
    <rect x="48" y="26" width="52" height="6" rx="3" />
    <rect x="0" y="56" width="410" height="6" rx="3" />
    <rect x="0" y="72" width="380" height="6" rx="3" />
    <rect x="0" y="88" width="178" height="6" rx="3" />
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 col-sm-12 col-12'>
            <div className="alert alert-info col-height2" role="alert">
            <ContentLoader viewBox="0 0 476 350" {...props}>
    <rect x="48" y="8" width="88" height="6" rx="3" />
    <rect x="48" y="26" width="52" height="6" rx="3" />
    <rect x="0" y="56" width="410" height="6" rx="3" />
    <rect x="0" y="72" width="380" height="6" rx="3" />
    <rect x="0" y="88" width="178" height="6" rx="3" />
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
            </div>
          </div>
          <div className='col-md-9 col-sm-12 col-12'>
            <div className="alert alert-info col-height2" role="alert">
            <ContentLoader viewBox="0 0 476 100" {...props}>
    <rect x="48" y="8" width="88" height="6" rx="3" />
    <rect x="48" y="26" width="52" height="6" rx="3" />
    <rect x="0" y="56" width="410" height="6" rx="3" />
    <rect x="0" y="72" width="380" height="6" rx="3" />
    <rect x="0" y="88" width="178" height="6" rx="3" />
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
            </div>
          </div>
        </div>

      </main>

    </div>
  )
}

export default Loading;