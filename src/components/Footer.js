import React from "react";
import BottomFooterItem from "./BottomFooterItem";
import bottomItemData from "../data/bottomItemData";

function Footer() {
  // const hello = ["Contact", "Career", "About us", "Cat pictures"]
  return (
    <div>
      <div className="footer">tengberg</div>
      <div className="footerBottom">
        {bottomItemData.map((item) => (
        <BottomFooterItem {...item} key={item.id} />
      ))}
      </div>
      
    </div>
  );
}

export default Footer;
