"use client";

import { useState } from "react";
import styles from "./LocationSection.module.css";

type Exit = "exit6" | "exit8";

export default function LocationMapPanel({
  brand,
  headingLine1,
  headingLine2,
  exit6Label,
  exit8Label,
}: {
  brand: string;
  headingLine1: string;
  headingLine2: string;
  exit6Label: string;
  exit8Label: string;
}) {
  const [activeExit, setActiveExit] = useState<Exit>("exit6");

  return (
    <>
      <div className={styles.headingCol}>
        <div className={styles.headingGroup}>
          <p className={styles.brand}>{brand}</p>
          <h2 className={styles.heading}>
            <span className={styles.headingLine}>{headingLine1}</span>
            <span className={styles.headingAccent}>{headingLine2}</span>
          </h2>
        </div>

        <div className={styles.exitToggle} role="tablist" aria-label="출구 선택">
          <button
            type="button"
            role="tab"
            aria-selected={activeExit === "exit6"}
            data-active={activeExit === "exit6"}
            className={styles.exitButton}
            onClick={() => setActiveExit("exit6")}
          >
            {exit6Label}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeExit === "exit8"}
            data-active={activeExit === "exit8"}
            className={styles.exitButton}
            onClick={() => setActiveExit("exit8")}
          >
            {exit8Label}
          </button>
        </div>
      </div>

      {/* 출구별 동영상이 들어갈 자리. 지금은 비워두고 선택 상태만 data-exit로 전달한다. */}
      <div className={styles.mapCard} data-exit={activeExit} aria-hidden="true" />
    </>
  );
}
