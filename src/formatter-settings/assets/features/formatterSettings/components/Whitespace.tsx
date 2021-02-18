// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import React from "react";
import { useSelector } from "react-redux";
import { Catagory, JavaFormatterSetting } from "../../../../FormatterConstants";
import Setting from "./Setting";

const WhiteSpace = (): JSX.Element => {
  const settings: JavaFormatterSetting[] = useSelector((state: any) => state.formatterSettings.settings);

  return (
    <div>
        <Setting setting={settings} catagory={Catagory.Whitespace}/>
    </div>
  );
};

export default WhiteSpace;
