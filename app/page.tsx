"use client";

import Link from "next/link";
import css from "./home.module.css";

export default function Page() {
  return (
    <main className={css.homeContainer}>
      <div className={css.subcontainer}>
        <h1>Mitigation Planner</h1>
        <p>
          Mitigation Planner is a tool for organizing raid mitigation with a
          more straightforward UI compared to traditional spreadsheets. It is
          especially recommended for individual mitigations in party finder and
          intended to be a repository of community plans such as the ones for
          ultimate raids.
        </p>
      </div>
      <div className={css.subcontainer}>
        <h2 style={{ flexBasis: "100%" }}>Current Savage</h2>
        <Link href={"/encounters/1/"} className={css.link}>
          <h3>Dancing Green</h3>
          <img src={"/encounters/m5s.png"} alt="" />
        </Link>
        <Link href={"/encounters/2/"} className={css.link}>
          <h3>Sugar Riot</h3>
          <img src={"/encounters/m6s.png"} alt="" />
        </Link>
        <Link href={"/encounters/3/"} className={css.link}>
          <h3>Brute Abombinator</h3>
          <img src={"/encounters/m7s.png"} alt="" />
        </Link>
        <Link href={"/encounters/4/"} className={css.link}>
          <h3>Howling Blade</h3>
          <img src={"/encounters/m8s.png"} alt="" />
        </Link>
      </div>
    </main>
  );
}
