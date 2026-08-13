const updateHeaderHeight = () => {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    const blueRectangle = document.querySelector('.blueRectangle ');
    const blueRectangleHeight = blueRectangle.offsetHeight;
    const topTextContent = document.querySelector('.top-text-content');
    const topTextContentHeight = topTextContent.offsetHeight;
    

    // console.log(`Header height: ${headerHeight}px`);
    // console.log(`Blue rectangle height: ${blueRectangleHeight}px`);
    // const totalHeight = headerHeight + blueRectangleHeight;
    // console.log(`Total height: ${totalHeight}px`);
    // CSS変数 --header-height に高さをセット
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    document.documentElement.style.setProperty('--blue-rectangle-height', `${blueRectangleHeight}px`);
    document.documentElement.style.setProperty('--top-text-content-height', `${topTextContentHeight}px`);
    // document.documentElement.style.setProperty('--total-height', `${totalHeight}px`);
    
};

window.addEventListener('load', updateHeaderHeight);
window.addEventListener('resize', updateHeaderHeight); 
