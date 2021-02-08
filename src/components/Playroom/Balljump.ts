import { Ref } from 'vue'

export const game = (
  canvasRef: Ref<HTMLCanvasElement | undefined>,
  divRef: Ref<HTMLDivElement | undefined>,
  isGameOver: Ref<boolean>,
  score: Ref<string>
) => {
  const canvas = canvasRef.value as HTMLCanvasElement
  const root = divRef.value as HTMLDivElement
  canvas.width = Math.min(root.clientWidth - 6, 800)
  canvas.height = Math.min(root.clientHeight - 6, 700)
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  canvas.style.border = 'solid'

  const ballRadius = 10
  let x = canvas.width / 2
  let y = ballRadius
  let vx = 0
  let vy = 0
  const g = 0.6

  const onClick = (e: MouseEvent) => {
    let clickX = e.clientX
    let clickY = e.clientY
    if (window.innerWidth >= 800) {
      clickX -= window.innerWidth / 2 - 400
    }
    if (window.innerHeight >= 700) {
      clickY -= window.innerHeight / 2 - 350
    }
    const k =
      0.1 * Math.sqrt((x - clickX) * (x - clickX) + (y - clickY) * (y - clickY))
    vx = (x - clickX) / k
    vy = (y - clickY) / k
  }
  canvas.addEventListener('click', onClick)

  const drawTimer = (start: number) => {
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, 200, 100)
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 3
    ctx.strokeRect(0, 0, 200, 100)

    const milliSecond = Date.now() - start
    const second = `${Math.floor(milliSecond / 1000)}`.padStart(3)
    const commaSecond = `${milliSecond -
      Math.floor(milliSecond / 1000) * 1000}`.padEnd(3, '0')
    const time = second + '.' + commaSecond
    ctx.font = '50px arial'
    ctx.fillStyle = '#000000'
    ctx.fillText(time, 10, 65)

    return time
  }

  const drawBall = () => {
    ctx.beginPath()
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 8
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
    ctx.fillStyle = '#eeeeee'
    ctx.fill()
    ctx.closePath()
  }

  const draw = (start: number) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const time = drawTimer(start)
    drawBall()

    if (x > canvas.width - ballRadius || x < ballRadius) {
      isGameOver.value = true
      score.value = time.trim()
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      clearInterval(interval)
    }
    if (y > canvas.height - ballRadius || y < ballRadius) {
      isGameOver.value = true
      score.value = time.trim()
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      clearInterval(interval)
    }

    x += vx
    y += vy
    vx += 0
    vy += g
  }

  const start = Date.now()
  const interval = setInterval(() => {
    draw(start)
  }, 1000 / 60)
}
