const sizes = {
  mobile: '30rem', // 480px
  tablet: '48rem', // 768px
  laptop: '64rem', // 1024px
  desktop: '80rem', // 1280px
};

export const media = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
