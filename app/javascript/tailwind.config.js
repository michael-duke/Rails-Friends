tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        widest: '.19em',
      },
      colors: {
        heroblue: '#137dc5',
        herored: '#bf1922',
        speed: '#fbbf24',
      }
    }
  }
}
