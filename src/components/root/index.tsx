import { Outlet } from "@tanstack/react-router";
import swords from "@/assets/main/swords.png";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { SDKProvider, useLaunchParams } from "@telegram-apps/sdk-react";
import { Toaster } from "@/components/ui/toaster";
import TelegramSDK from "./telegram-sdk";

export default function Root() {
  const [isFirstEnter, setIsFirstEnter] = useState<string | null>("0");
  const { platform } = useLaunchParams();
  useEffect(() => {
    if (!localStorage.getItem("isFirstEnter")) {
      localStorage.setItem("isFirstEnter", "0");
      setIsFirstEnter("0");
    } else {
      setIsFirstEnter(localStorage.getItem("isFirstEnter"));
    }
  }, []);

  const debug = useLaunchParams().startParam === "debug";

  useEffect(() => {
    if (debug) {
      const el = document.createElement("div");
      document.body.appendChild(el);
      import("eruda").then((lib) =>
        lib.default.init({ container: el, tool: ["console", "elements"] })
      );
    }
  }, [debug]);

  return (
    <SDKProvider debug={debug}>
      {" "}
      <main className="w-[100vw] h-[100vh] text-white font-primary overflow-y-auto overflow-x-hidden  overscroll-none   max-w-[100vw] bg-local bg-bottom bg-cover relative min-h-[100vh] flex flex-col justify-between mx-auto outline  2xl:max-w-[768px]">
        {isFirstEnter === "1" ? (
          <>
            {" "}
            <Outlet />
            <Toaster />
            <TelegramSDK />
            <div
              className={cn(
                "flex justify-between p-6 text-3xl",
                platform === "ios" ? "pb-3" : ""
              )}
            >
              <div>Фарм</div>
              <div className="relative flex flex-col items-center">
                {" "}
                <img
                  className="absolute -top-12 w-10 h-10"
                  src={swords}
                  alt=""
                />{" "}
                <span>Пари</span>
              </div>
              <div>Друзья</div>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-between h-full py-10">
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl">Добро пожаловать в $GO</span>
              <span className="text-5xl">Nagibator</span>
              <span className="text-3xl">Играй и зарабатывай</span>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  localStorage.setItem("isFirstEnter", "1");
                  setIsFirstEnter("1");
                }}
                className="bg-white text-black rounded-lg px-4 py-2 mb-20"
              >
                Начать
              </button>
            </div>
          </div>
        )}
      </main>
      )
    </SDKProvider>
  );
}
