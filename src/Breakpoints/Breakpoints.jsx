export const screenSizes = {
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 1280,
};

export const devices = {
    mobile: `screen and (max-width: ${screenSizes.mobile}px)`,
    tablet: `screen and (max-width: ${screenSizes.tablet}px)`,
    laptop: `screen and (max-width: ${screenSizes.laptop}px)`,
    desktop: `screen and (max-width: ${screenSizes.desktop}px)`
};