import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{ background: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 72, fontWeight: 800 }}>
        PizzaHub
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
