import styles from "@/styles/hp/HeroMain.module.css";
import Image from "next/image";

const HeroMain = () => {
  // useEffect(() => {
  //   if (window.innerWidth > 794) {
  //     const lenis = new Lenis({ duration: 1.1 });

  //     function raf(time) {
  //       lenis.raf(time);
  //       requestAnimationFrame(raf);
  //     }

  //     requestAnimationFrame(raf);

  //     lenis.on("scroll", ScrollTrigger.update);

  //     gsap.ticker.add((time) => {
  //       lenis.raf(time * 1000);
  //     });

  //     gsap.registerPlugin(ScrollTrigger);
  //     const gsapAnim = gsap.utils.toArray(`.${styles.section}`);

  //     gsapAnim.forEach((section) => {
  //       gsap.to(section, {
  //         scrollTrigger: {
  //           trigger: section,
  //           start: "bottom bottom",
  //           end: "bottom top",
  //           scrub: true,
  //         },
  //         yPercent: 100,
  //         ease: "none",
  //       });
  //     });
  //   }
  // }, []);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.bgImg}>
          <Image src="/images/footerBg.webp" height={1080} width={1920} />
        </div>
        <div className={styles.inner}>
          <div className={styles.title}>
            <h1>CREATE HOMEPAGE</h1>
            <p>ホームページ制作・運用</p>
          </div>
          <section>
            <div className={styles.subtitle}>
              <p>
                ブリッジコーポレーションでは、戦略立案からホームページ制作、運用のPDCAまで、成果を出すホームページ活用をご提案いたします。
              </p>
            </div>
            <div className={styles.flows}>
              <p>ホームページ制作の流れ</p>
              <div className={styles.flowsBoxs}>
                <div className={styles.flowsBox}>
                  <Image src="/images/footerBg.webp" height={400} width={400} />
                  <span>プロジェクト企画</span>
                </div>
                <div className={styles.flowsBox}>
                  <Image src="/ads_fv.webp" height={400} width={400} />
                  <span>要件定義</span>
                </div>
                <div className={styles.flowsBox}>
                  <Image src="/images/footerBg.webp" height={400} width={400} />
                  <span>要件定義</span>
                </div>
              </div>
            </div>
            <div className={styles.project}>
              <h2 className={styles.title_left}>プロジェクト企画</h2>
              <div className={styles.items}>
                <Image src="/images/footerBg.webp" height={400} width={400} />
                <div className={styles.texts}>
                  <h3>1. ヒアリング</h3>
                  <p>
                    実際にお会いさせていただき、現在の課題やご要望、ご予算をヒアリングさせていただきます。
                    <br />
                    その後、お客様のサイトのアクセスデータ、市場・競合分析等を独自で調査を行います。
                  </p>
                </div>
              </div>
              <div className={styles.items}>
                <Image src="/images/footerBg.webp" height={400} width={400} />
                <div className={styles.texts}>
                  <h3>2. 施策選定</h3>
                  <p>
                    調査を元にゴールを設定し、ターゲットやペルソナの設定、施策の選定を行います。
                    <br />
                    「ホームページを作る目的」からどういった成果を生み出すかを踏まえてWeb戦略をご提案いたします。
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.project}>
              <h2 className={styles.title_left}>HP作成</h2>
              <div className={styles.items}>
                <Image src="/images/footerBg.webp" height={400} width={400} />
                <div className={styles.texts}>
                  <h3>1. 要件定義</h3>
                  <p>
                    「要件定義」とは、ホームページ制作における目的や要望を明確にする工程です。この段階で、お客様と弊社の間でホームページの内容や機能についての共通認識を持つことが重要です。<br />
                    要件定義をしっかりと行うことで、後の設計や実装がスムーズに進行し、期待通りのホームページを制作することができます。
                  </p>
                </div>
              </div>
              <div className={styles.items}>
                <Image src="/images/footerBg.webp" height={400} width={400} />
                <div className={styles.texts}>
                  <h3>2. デザイン</h3>
                  <p>
                  「デザイン」は、要件定義で明確にした目的や要望を元に、ホームページのビジュアルやレイアウトを考える工程です。この段階で、サイトの色合い、フォント、画像配置などのデザイン要素を決定します。お客様のブランドイメージやターゲットとするユーザー層に合わせたデザインを心がけます。
                  </p>
                </div>
              </div>
              <div className={styles.items}>
                <Image src="/images/footerBg.webp" height={400} width={400} />
                <div className={styles.texts}>
                  <h3>3. 実装</h3>
                  <p>
                  「実装」とは、デザインで決定したビジュアルを実際のホームページとして構築する工程です。この段階で、プログラミング言語やフレームワークを使用して、サイトの動作や機能を実現します。デザインの細部を忠実に再現しつつ、ユーザーフレンドリーな操作性を確保することが目標です。
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.project}>
              <h2 className={styles.title_left}>ホームページ運用</h2>
              <div className={styles.items}>
                <Image src="/images/footerBg.webp" height={400} width={400} />
                <div className={styles.texts}>
                  <h3>1. コンテンツ更新</h3>
                  <p>
                  「コンテンツ更新」とは、ホームページの情報を常に最新のものに保つための作業です。新しい記事の追加や商品情報の変更など、定期的に内容を更新することで、訪問者に新鮮な情報を提供します。
                  </p>
                </div>
              </div>
              <div className={styles.items}>
                <Image src="/images/footerBg.webp" height={400} width={400} />
                <div className={styles.texts}>
                  <h3>2. トラフィック分析</h3>
                  <p>
                  「トラフィック分析」とは、ホームページの訪問者数や行動パターンを分析することです。このデータを基に、サイトの改善点や新たな戦略を考える材料とします。
                  </p>
                </div>
              </div>
              <div className={styles.items}>
                <Image src="/images/footerBg.webp" height={400} width={400} />
                <div className={styles.texts}>
                  <h3>3. セキュリティ管理</h3>
                  <p>
                  「セキュリティ管理」とは、ホームページの安全性を確保するための作業です。定期的なセキュリティチェックやシステムのアップデートを行い、訪問者の情報を守ることを最優先とします。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HeroMain;
