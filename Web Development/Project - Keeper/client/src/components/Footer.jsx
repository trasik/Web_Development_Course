import React from "react";

function Footer() {
  const getCurrentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; Torendra Rasik {getCurrentYear}</p>
    </footer>
  );
}

export default Footer;
