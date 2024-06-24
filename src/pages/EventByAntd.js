import React, { useState } from "react";
import styles from "./EventByAntd.module.css";

import { Flex, Button, Card } from "antd";
import arrow_left from "../assets/icons/arrow_left.svg";
import share from "../assets/icons/share.svg";

import AntdProductList from "../components/AntdProductList";
import EventMainSection from "../components/EventMainsection";

const EventByAntd = () => {
  const [currentFilter, setCurrentFilter] = useState("남성의류");

  const handleCurrentFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };
  return (
    <article className="layout">
      <div>
        <div className={styles.page__style}>
          <Flex
            justify="space-between"
            align="center"
            className={styles.header}
          >
            <button className={styles.header__btn}>
              <img src={arrow_left} alt="왼쪽 화살표" />
            </button>
            <h1 className={styles.header__title}>크리스마스 특별할인</h1>
            <button className={styles.header__btn}>
              <img src={share} alt="공유하기" />
            </button>
          </Flex>

          <EventMainSection />

          <section>
            <ul className={styles.filter__list}>
              <li
                className={styles.filter__btn}
                data-active={currentFilter === "남성의류"}
                onClick={() => handleCurrentFilter("남성의류")}
              >
                남성의류
              </li>
              <li
                className={styles.filter__btn}
                data-active={currentFilter === "여성의류"}
                onClick={() => handleCurrentFilter("여성의류")}
              >
                여성의류
              </li>
              <li
                className={styles.filter__btn}
                data-active={currentFilter === "가전제품"}
                onClick={() => handleCurrentFilter("가전제품")}
              >
                가전제품
              </li>
            </ul>
            <div className={styles.top__sales}>
              <h2>실시간 인기 TOP5</h2>

              <AntdProductList />

              <Button type="primary" block className={styles.show__all__btn}>
                전체 상품 보기
              </Button>
            </div>
          </section>

          <section className={styles.coupon__section}>
            <h2>
              어디서든 사용 가능한
              <br />
              15% 쿠폰을 드려요!
            </h2>
            <p>쿠폰 지급 기간 : ~12월 31일까지</p>
          </section>
        </div>
      </div>
    </article>
  );
};

export default EventByAntd;
