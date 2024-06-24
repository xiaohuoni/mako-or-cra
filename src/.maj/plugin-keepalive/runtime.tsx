// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { getKeepAlive } from 'src/runtime';
import React from 'react';
import { KeepAliveContext } from './context';

export const KeepAliveLayout = (props) => {
  const keepElements = React.useRef<any>({});
  const [cacheKeyMap, setCacheKeyMap] = React.useState({});
  const [keepalive, setKeepalive] = React.useState(['']);

  const init = async () => {
    try {
      const runtime = await getKeepAlive(keepalive);
      setKeepalive(runtime);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    init();
  }, []);

  function dropByCacheKey(path: string) {
    if (keepElements.current[path.toLowerCase()]) {
      delete keepElements.current[path.toLowerCase()];
      setCacheKeyMap((cacheKeyMap) => ({
        ...cacheKeyMap,
        [path.toLowerCase()]: Math.random(),
      }));
    }
  }
  return (
    <KeepAliveContext.Provider
      value={{
        keepalive,
        setKeepalive,
        keepElements,
        cacheKeyMap,
        dropByCacheKey,
      }}
      {...props}
    />
  );
};
export function rootContainer(container) {
  return React.createElement(KeepAliveLayout, null, container);
}