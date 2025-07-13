module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35', // 温暖的橙色
        secondary: '#4ECDC4', // 清新的蓝绿色
        accent: '#FFD166', // 黄色强调色
        dark: '#292F36', // 深色文本
        light: '#F7FFF7', // 浅色背景
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}