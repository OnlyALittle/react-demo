import React from 'react';
import Loadable from 'react-loadable';
// 按需加载组件
export default function withLoadable (comp) {
  return Loadable({
      loader:comp,
      loading: () => (
        <div>Loading...</div>
      ),
      timeout:10000
  })
}