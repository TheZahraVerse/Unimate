import React from 'react'
import MainLayout from "../layouts/MainLayout";

export default function Landing() {
  return (
    <div>Landing</div>
  )
}

// connect to layout
Landing.layout = page => <MainLayout>{page}</MainLayout>;
