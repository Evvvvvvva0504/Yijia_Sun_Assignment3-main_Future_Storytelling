const container = document.querySelector('.container');
const image = document.querySelector('.image');

let scrollValue = 0;

window.addEventListener('wheel', (e) => {
    // 获取滚轮滚动的方向（正数表示向上滚动，负数表示向下滚动）
    const delta = e.deltaY;

    // 根据滚动方向调整滚动值
    scrollValue += delta;

    // 限制滚动值的范围，确保图片不会移出视图
    scrollValue = Math.min(container.clientHeight, Math.max(0, scrollValue));

    // 设置图片的位置
    image.style.top = `${100 - (scrollValue / container.clientHeight) * 100}%`;
});
