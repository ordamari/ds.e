import FlowMenu from './FlowMenu';
import React from 'react';
import '@or.ds.e/scss/lib/FlowMenu.css';

export default {
  title: 'Organisms/FlowMenu',
};

export const Default = () => (
  <div className="test">
    <FlowMenu
      isChangeHorizontally={true}
      isOpen={true}
      defaultHorizontalSide="right"
    >
      <div>FlowMenu</div>
    </FlowMenu>
  </div>
);
