import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import SnapBlocks from '@site/src/components/SnapBlocks';
// import SnapBlocks from 'snapblocks-react'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  SnapBlocks,
  Tabs,
  TabItem,
};