import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware() {
    return NextResponse.next();
  },
  {
    callbacks: {
      // @ts-ignore
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        if (
          pathname.startsWith("/api/auth") ||
          pathname == "/user/login" ||
          pathname == "/user/signup"
        ) {
          return true;
        }

        if (
          pathname === "/" ||
          pathname === "/pages/resources/allresource" ||
          pathname === "/pages/contact" ||
          pathname === "/pages/courses/allcourses"
        ) {
          return true;
        }

        return !!token;
      },
    },
  }
);


// export {default} from "next-auth/middleware";

// export const config = { matcher: ["/"] };