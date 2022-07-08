import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import styled from "styled-components";

export const WrapperTabs = styled(Tabs)`
  font-size: 12px;
  width: 50%;
  margin-top: 40px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  gap: 8px;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 8px;
  user-select: none;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);
  }
  &.is-selected {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid white;
    z-index: 9999;
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding: 8px;
  border: 1px solid #ccc;
  margin-top: -1px;
  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";
