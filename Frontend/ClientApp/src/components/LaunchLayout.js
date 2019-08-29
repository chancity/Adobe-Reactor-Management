import React from 'react'
import LaunchLayoutHeader from "../store/Reactor/containers/LaunchLayoutHeader";




const LaunchLayout = ({children, initialized}) => {
    return (
      <>
          {initialized &&
              <>
              <LaunchLayoutHeader/>
              {children}
              </>
          }
      </>)
};

export default LaunchLayout;