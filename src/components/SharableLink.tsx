import { useLocation } from 'solid-app-router'
import { createMemo } from 'solid-js'

const SharableLink = () => {
  const location = useLocation()

  const fullPath = (path: string) => {
    return `https://localhost:3000${path}`
  }

  const shareLink = createMemo(() => {
    return fullPath(location.pathname)
  })

  return <div class="flex mt-4 items-center justify-center">{shareLink}</div>
}

export default SharableLink
