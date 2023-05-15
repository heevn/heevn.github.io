module.exports = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_LOGIN:process.env.NEXT_PUBLIC_LOGIN,
        NEXT_PUBLIC_PASSWORD:process.env.NEXT_PUBLIC_PASSWORD,
        NEXT_PUBLIC_CLIENT_ID:process.env.NEXT_PUBLIC_CLIENT_ID,
        NEXT_PUBLIC_CLIENT_SECRET:process.env.NEXT_PUBLIC_CLIENT_SECRET,
        NEXT_PUBLIC_HR:process.env.NEXT_PUBLIC_HR,
        NEXT_PUBLIC_X_SECRET_KEY:process.env.NEXT_PUBLIC_X_SECRET_KEY,
        NEXT_PUBLIC_API_URL:process.env.NEXT_PUBLIC_API_URL,
    }
  }