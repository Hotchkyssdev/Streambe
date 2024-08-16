document.addEventListener('DOMContentLoaded', () => {
    const tracker = document.getElementById('tracker');
    let isMouseDown = false;

    document.body.addEventListener('mousedown', () => {
        isMouseDown = true;
    });

    document.body.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    document.body.addEventListener('mousemove', (event) => {
        if (isMouseDown) {
            tracker.style.top = `${event.clientY}px`;
            tracker.style.left = `${event.clientX}px`;
        }
    });
});
