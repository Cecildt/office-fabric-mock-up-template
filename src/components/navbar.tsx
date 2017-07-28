import * as React from "react";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import { leftItems, rightItems } from "./navbar-items";

export class NavCommandBar extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <CommandBar
          isSearchBoxVisible={ false }
          items={ leftItems }
          farItems={ rightItems }
        />
      </div>
    );
  }

}