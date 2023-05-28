import { useState, useEffect } from "react";
import * as C from "./App.styles";

import { Loading } from "./components/common/Loading";
import { WelcomeScreen } from "./components/common/WelcomeScreen";
import { MenuIcon } from "./components/screen/MenuIcon";
import { Window } from "./components/common/Window";

import { MenuIconListLeft } from "./data/MenuIconList";
// import { MenuIconListRight } from "./data/MenuIconList";
import { MenuLeftItems } from "./data/MenuList/MenuLeftItems";
import { MenuRightItems } from "./data/MenuList/MenuRightItems";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [loadingFadeOut, setLoadingFadeOut] = useState(false);
  const [welcomeScreen, setWelcomeScreen] = useState(false);
  const [welcomeScreenFadeOut, setWelcomeScreenFadeOut] = useState(false);

  const [ChromeOpenName, setChromeOpenName] = useState("none");
  const [TerminalOpenName, setTerminalOpenName] = useState("none");

  const handleChromeClose = () => setChromeOpenName("none");
  const handleTerminalClose = () => setTerminalOpenName("none");

  const handleChrome = (item: string) => {
    const audio = new Audio("/assets/sounds/click.mp3");
    audio.currentTime = 1;
    audio.play();
    setChromeOpenName(item);
  };

  const handleTerminal = (item: string) => {
    const audio = new Audio("/assets/sounds/click.mp3");
    audio.currentTime = 1;
    audio.play();
    setTerminalOpenName(item);
  };






  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setWelcomeScreen(true);
    }, 5000);

    setTimeout(() => {
      setLoadingFadeOut(true);
    }, 3000);

    // setTimeout(() => {
    //   setWelcomeScreenFadeOut(true);
    // }, 0);

    setTimeout(() => {
      setWelcomeScreen(false);
    },9000);
  }, []);

  if (loading) {
    return <Loading fadeOut={loadingFadeOut} />;
  }

  // if (!loading && welcomeScreen === true) {
  //   return <WelcomeScreen fadeOut={welcomeScreenFadeOut} />;
  // }

  return (
    <C.Container>
      {!loading && !welcomeScreen && (
        <>
          <C.MenuTop>
            <C.MenuTopLeft>
              <C.MenuTopList>
                <li>
                  <img src="/assets/images/apple-logo.png" />
                </li>
                {MenuLeftItems.map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </C.MenuTopList>
            </C.MenuTopLeft>
            <C.MenuTopRight>
              <C.MenuTopList>
                <li>
                  <img src="/assets/images/icons/battery.png" />
                </li>
                <li>
                  <img src="/assets/images/icons/wifi.png" />
                </li>
                <li>
                  <img src="/assets/images/icons/search.png" />
                </li>
                <a href="https://github.com/iamdevmarcos/macOS">
                  <li>
                    <img src="/assets/images/icons/github.png" />
                  </li>
                </a>
                {MenuRightItems.map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </C.MenuTopList>
            </C.MenuTopRight>
          </C.MenuTop>

          {ChromeOpenName !== "none" && (
            <Window name={ChromeOpenName} closeWindow={handleChromeClose} />
          )}

          {TerminalOpenName !== "none" && (
            <Window name={TerminalOpenName} closeWindow={handleTerminalClose} />
          )}

          <C.MenuBottom>
            <>
              {/* {MenuIconListLeft.map((item, index) => (
                <MenuIcon
                  key={index}
                  icon={item.icon}
                  onClick={() => handleOpenApp(item.icon)}
                />
              ))} */}
              <MenuIcon
                icon={MenuIconListLeft[0].icon}
                onClick={() => handleTerminal(MenuIconListLeft[0].icon)}
              />
              <MenuIcon
                icon={MenuIconListLeft[1].icon}
                onClick={() => handleChrome(MenuIconListLeft[1].icon)}
              />
              {/* <C.Container icon={item.icon}></C.Container> */}
              {/* <C.Border></C.Border> */}
              {/* {MenuIconListRight.map((item, index) => (
                <MenuIcon
                  key={index}
                  icon={item.icon}
                  onClick={() => handleOpenApp(item.icon)}
                />
              ))} */}
            </>
          </C.MenuBottom>
        </>
      )}
    </C.Container>
  );
};

export default App;
