import * as React from "react";
import * as ReactDOM from "react-dom";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { NavCommandBar } from "./components/navbar";

const NavBarMenu = () => (<Fabric><NavCommandBar /></Fabric>);
const MyPage = () => (<Fabric><DefaultButton>I am a button.</DefaultButton></Fabric>);

ReactDOM.render(<NavBarMenu />, document.getElementById("navigation"));
ReactDOM.render(<MyPage />, document.getElementById("main"));