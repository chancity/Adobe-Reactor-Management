import React from 'react'
import LaunchLayoutHeader from "../store/Reactor/containers/LaunchLayoutHeader";




export const LaunchLayout = ({children, initialized}) => {
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

