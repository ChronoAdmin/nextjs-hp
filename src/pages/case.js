import React from 'react'

export default function home() {
  return (
    <div>case</div>
  )
}

// getInitialPropsを使用してnavPositionを指定
home.getInitialProps = async () => {
    return { navPosition: "none" };
  };
  