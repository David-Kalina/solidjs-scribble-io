import {
  Component,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
} from 'solid-js'

const Canvas: Component = () => {
  let canvas: HTMLCanvasElement
  const [pos, setPos] = createSignal({ x: 0, y: 0 })
  const [drawing, setDrawing] = createSignal(false)

  function handleMouseMove(event: any) {
    setPos({
      x: event.clientX - canvas.offsetLeft,
      y: event.clientY - canvas.offsetTop,
    })
  }

  onMount(() => {
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    let frame = requestAnimationFrame(loop)

    function draw() {
      if (!drawing()) {
        ctx.beginPath()
        return
      }
      ctx.lineWidth = 10
      ctx.lineCap = 'round'
      ctx.lineTo(pos().x, pos().y)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(pos().x, pos().y)
    }

    function loop(t: number) {
      frame = requestAnimationFrame(loop)
      draw()
    }

    onCleanup(() => cancelAnimationFrame(frame))

    canvas.addEventListener('mousemove', handleMouseMove)

    canvas.style.width = '100%'
    canvas.style.height = '100%'

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  })

  return (
    <>
      <canvas
        // @ts-ignore
        ref={canvas}
        onMouseMove={handleMouseMove}
        onMouseDown={() => setDrawing(true)}
        onMouseUp={() => setDrawing(false)}
        class="border-4 border-red-500"
      ></canvas>
    </>
  )
}

export default Canvas
