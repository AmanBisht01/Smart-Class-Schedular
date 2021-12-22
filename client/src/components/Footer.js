import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container" style={{display: 'flex', justifyContent:'space-between'}}>
        <p></p>
        <p>Copyright &copy; {new Date().getFullYear()} </p>
        <p><a href="https://github.com/AmanBisht01"><i class="fa fa-star" aria-hidden="true"></i>Star Me</a></p>
      </div>
    </div>
  );
}

export default Footer;
