const Main = ({ children, title }) => {
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          {/* Page Title Header Starts*/}
          <div className="row page-title-header">
            <div className="col-12">
              <div className="page-header">
                <h4 className="page-title">{title}</h4>
              </div>
            </div>
          </div>
          {/* Page Title Header Ends*/}
          <div className="row">
            <div className="col-md-12 grid-margin">{children}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Main;
  