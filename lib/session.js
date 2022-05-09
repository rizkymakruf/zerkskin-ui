export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "alamerchant/sess",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
