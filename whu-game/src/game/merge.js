// src/game/merge.js
function renderItem(item) {
    const img = new Image();
    // public 里的文件原样拷贝到 dist 根，用绝对路径引用
    img.src = `/assets/${item.id}.svg`;
    img.onload = () => drawToCanvas(img, item.x, item.y);
    img.onerror = () => console.error('加载失败', img.src);
    return img;
}