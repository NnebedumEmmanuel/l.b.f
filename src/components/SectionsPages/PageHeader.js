import React from 'react'

const PageHeader = (props) => {
  return (
    <div class="pageheader">
      <div class="container">
        <div class="pageheader__area">
          <div class="pageheader__left">
            <h3>Blog</h3>
          </div>
          <div class="pageheader__right">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {props.page}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader
