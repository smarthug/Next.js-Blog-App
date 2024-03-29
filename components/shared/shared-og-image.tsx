import { FC } from "react";
import { SharedOgImageWrapper } from "./shared-og-image-wrapper";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

interface SharedOgImageProps {
  title: string;
  subTitle: string;
  tags: Array<string>;
  slug: string;
}

const SharedOgImage: FC<SharedOgImageProps> = ({
  title,
  subTitle,
  tags,
  slug,
}) => {
  return (
    <>
      <SharedOgImageWrapper>
        <div tw="flex relative flex-col p-12 w-full h-full items-start">
          <div tw="flex flex-col flex-1 py-10">
            <div
              tw="flex text-xl font-bold text-gray-900"
              style={{
                fontFamily: "Inter",
                fontWeight: "bold",
                fontSize: 46,
                marginBottom: 16,
              }}
            >
              {title}
            </div>
            <div
              tw="flex text-[40px] font-bold text-gray-500"
              style={{
                fontFamily: "Inter",
                fontWeight: "bold",
                fontSize: 36,
                marginBottom: 16,
              }}
            >
              {subTitle}
            </div>
            <div tw="flex">
              {tags.slice(0, 3).map((tag) => (
                <div
                  tw="flex bg-gray-200 text-[30px] text-gray-500"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "normal",
                    alignItems: "center",
                    borderRadius: 100,
                    display: "flex",
                    height: 48,
                    marginRight: 16,
                    marginTop: 16,
                    paddingLeft: 16,
                    paddingRight: 20,
                  }}
                  key={tag}
                >
                  <div tw="flex">{tag}</div>
                </div>
              ))}
            </div>
          </div>
          <div tw="flex w-full justify-between">
            <div tw="flex justify-start">
              <div
                tw="flex items-center font-bold text-3xl"
                style={{ fontFamily: "Inter", fontWeight: "bolder" }}
              >
                {`https://blockmoment.com${slug}`}
              </div>
            </div>
          </div>
        </div>
      </SharedOgImageWrapper>
    </>
  );
};

export default SharedOgImage;
