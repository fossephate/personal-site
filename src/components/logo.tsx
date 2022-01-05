import React from 'react'

export default function Logo({ size = 75 }: { size?: number }) {
  return (
    <img src="/assets/logo.svg" height={size} title="Aleph.js" />
  )
}
