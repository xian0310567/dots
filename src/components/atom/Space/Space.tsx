import React from 'react';

import {Spec} from './lib/styled';

import {SpaceProps} from './lib/Space';

const Space = (props: SpaceProps) => {
  return <Spec>{props.children}</Spec>;
};

export default Space;
