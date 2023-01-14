import React from "react";
import AncordA from "../ancord/AncordA";
import { FaHome } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export default function AsideA() {
  return (
    <div className="header-aside-a">
      <AncordA href={"/Bruno/#start"} key={"#start"} text={"START"} icone={"FaHome"}>
        <FaHome />
      </AncordA>
      <AncordA
        href={"/Bruno/#about"}
        key={"#about"}
        text={"ABOUT"}
        icone={"FaUserAlt"}
      >
        <FaUserAlt />
      </AncordA>
      <AncordA
        href={"/Bruno/#skills"}
        key={"#skills"}
        text={"SKILLS"}
        icone={"FaDraftingCompass"}
      >
        <FaDraftingCompass />
      </AncordA>
      <AncordA
        href={"/Bruno/#works"}
        key={"#work"}
        text={"WORKS"}
        icone={"FaPencilRuler"}
      >
        <FaPencilRuler />
      </AncordA>
      <AncordA
        href={"/Bruno/#services"}
        key={"#services"}
        text={"SERVICES"}
        icone={"FaPencilRuler"}
      >
        <FaPencilRuler />
      </AncordA>
      <AncordA
        href={"/Bruno/#projects"}
        key={"#projects"}
        text={"PROJECTS"}
        icone={"FaBook"}
      >
        <FaBook />
      </AncordA>
      <AncordA
        href={"/Bruno/#contact"}
        key={"#contact"}
        text={"CONTACT"}
        icone={"FaPhone"}
      >
        <FaPhone />
      </AncordA>
      <AncordA
        href={"/Bruno/#footer"}
        key={"#footer"}
        text={"FOOTER"}
        icone={"FaCode"}
      >
        <FaCode />
      </AncordA>
    </div>
  );
}
