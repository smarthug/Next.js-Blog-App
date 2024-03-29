import {
    MainBanner,
    MainFooter,
    MainGrid,
    MainHeader,
  } from "@/components/main";

  
  export default function MainLayout({ children }) {
    return (
      <>
        {/* <MainBanner /> */}
        <MainHeader />
        <MainGrid>
          <div className="min-h-full py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-3xl">{children}</div>
            </div>
          </div>
        </MainGrid>
        <MainFooter />
      </>
    );
  }
  