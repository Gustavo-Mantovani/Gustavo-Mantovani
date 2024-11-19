const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20;
const canvasSize = 400;
canvas.width = canvas.height = canvasSize;

let lastFrameTime = 0;
let frameCount = 0;
let fps = 0;

// Função para desenhar um círculo para testar o FPS
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenha um círculo aleatório no canvas
    ctx.fillStyle = "lime";
    ctx.beginPath();
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, gridSize, 0, 2 * Math.PI);
    ctx.fill();
}

// Função para atualizar o FPS
function updateFPS() {
    const now = performance.now();
    frameCount++;

    // Calcular FPS a cada segundo (1000 ms)
    if (now - lastFrameTime >= 1000) {
        fps = frameCount;
        frameCount = 0;
        lastFrameTime = now;
        document.getElementById("fpsDisplay").innerText = `FPS: ${fps}`;
    }
}

// Função de animação
function animate() {
    updateFPS();
    draw();
    requestAnimationFrame(animate);
}

animate(); // Inicia a animação
