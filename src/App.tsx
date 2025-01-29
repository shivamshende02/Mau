"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely (On My Knees)?",
      "Pretty please Mau",
      "With a chocolate Waffle and Your Fav Cake",
      "What about Cats?",
      "PLEASE SANTO",
      "But I M Your Pokkie:*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to Shibu's ghost",
      "please babe ",
      "Dont Be Rude ",
      "You are Rude ",
      ":((((",
      "God Will Never Forgive You",
      "I will Haunt you all the life",
      "I will steal Bishu",
      "I will kill you are marry your corspe",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
              <>
                  <div className="flex space-x-4 justify-center">
                      <img src="https://raw.githubusercontent.com/shivamshende02/Mau/main/assets/images/1.jpg" alt="Image 1" className="w-1/3" />
                      <img src="https://raw.githubusercontent.com/shivamshende02/Mau/main/assets/images/2.jpg" alt="Image 2" className="w-1/3" />
                      <img src="https://raw.githubusercontent.com/shivamshende02/Mau/main/assets/images/3.jpg" alt="Image 3" className="w-1/3" />
                  </div>



          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you Mauddiii...You are such a blessing into my Life!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine Mau ?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
