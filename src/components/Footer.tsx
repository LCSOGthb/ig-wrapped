import Link from "next/link";
import React from "react";
import MutedText from "./Wrapped/MutedText";

function Footer() {
  return (
    <div>
      <div className="mt-12">
        <a
          href="https://vantezzen.io"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-800 font-medium"
        >
          Made by <span className="underline">vantezzen</span>
        </a>
        {" · "}
        <a
          href="https://github.com/LCSOGthb"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-800 font-medium"
        >
          continued/maintained by <span className="underline">LCS</span>
        </a>
        <br />
        <span className="text-sm">
          Silly little projects for when you need a break from reality
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-3 text-xs mt-6">
        <Link href="/legal/terms" className="text-zinc-800 font-medium">
          Terms of Service
        </Link>
        <Link href="/legal/privacy" className="text-zinc-800 font-medium">
          Privacy Policy
        </Link>
        <Link href="/legal/impressum" className="text-zinc-800 font-medium">
          Impressum
        </Link>
      </div>
      <div className="text-center mb-6 text-xs">
        <MutedText>
          Instagram is a registered trademark of Meta Technologies This website
          is not affiliated with or endorsed by Instagram or Meta Technologies
        </MutedText>
        <MutedText>
          Spotify is a registered trademark of Spotify AB. TrueShuffle is not
          associated with Spotify.
        </MutedText>
      </div>
    </div>
  );
}

export default Footer;
