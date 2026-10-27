import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
        src="/images/BackgroundDots.svg"
        alt=""
        width={500}
        height={300}
        className={styles.overlayLines}
        />
        <Image
        src="/images/PurpHill1.svg"
        alt=""
        width={500}
        height={300}
        className={styles.overlay1}
        />
        <Image
        src="/images/InvolvementMascot.svg"
        alt=""
        width={500}
        height={300}
        className={styles.overlayMascot}
        />
        <Image
        src="/images/PurpHill2.svg"
        alt=""
        width={500}
        height={300}
        className={styles.overlay2}
        />

        <section className={styles.content}>
          <h1 className={styles.includetitle}>Get involved</h1>
          <p className={styles.includesubtext}>Launch into tech with support, guidance, and mentorship. Drive a positive change with technology.</p>

          <div className={styles.choosepathway}>
            <h2>Choose your Pathway</h2>
            <div className={styles.pathways}>
              <div className={styles.pathway}>
                <h3 className={styles.pathwaytitle}> Developer Cohort</h3>
                <p className={styles.pathwaydesc}>Our beginner-friendly design cohort offers hands-on experience with real client projects. Over two quarters, you’ll strengthen your design skills.</p>
              </div>
              <div className={styles.pathway}>
                <h3 className={styles.pathwaytitle}> Design Cohort</h3>
                <p className={styles.pathwaydesc}>Our beginner-friendly tech cohort offers hands-on experience with real client projects. Over two quarters, you’ll strengthen your technical skills.</p>
              </div>   
              
            </div>
          </div>
        </section>  

        
        <Image
        src="/images/StarStreak.svg"
        alt=""
        width={100}
        height={100}
        className={styles.overlayStars}
        />

        <section className={styles.content1}>
          <div className={styles.teampositions}>
            <h2> Cohort Team Positions</h2>
            <div className={styles.cards}>
              <div className={styles.positioncard}>
                <h3 className={styles.pathwaytitle}> Cohort Design Team Lead</h3>
                <p className={styles.pathwaydesc}> Mentor beginner designers through a client project. Manage communication and collaboration with stakeholders through tech handoff. </p>
                <button className={styles.joinBtn}> Join Now </button>
              </div>
              <div className={styles.positioncard}>
                <h3 className={styles.pathwaytitle}> Cohort Lead Team Lead</h3>
                <p className={styles.pathwaydesc}> Teach beginner developers, lead workshops, and oversee a client website launch. Collaborate with designers for a great user experience. </p>
                <button className={styles.joinBtn}> Join Now </button>
              </div>
              <div className={styles.positioncard}>
                <h3 className={styles.pathwaytitle}>  Cohort Designers</h3>
                <p className={styles.pathwaydesc}> Learn design fundamentals, use Figma, and work on a client project with guidance from your Design Team Leads. Build your design skills. </p>
                <button className={styles.joinBtn}> Join Now </button>
              </div>
              <div className={styles.positioncard}>
                <h3 className={styles.pathwaytitle}> Cohort Developers</h3>
                <p className={styles.pathwaydesc}> Learn HTML/CSS, JavaScript, React, Next.js, and more. Gain hands-on experience with Git/GitHub and build a real client website from scratch. </p>
                <button className={styles.joinBtn}> Join Now </button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.content2}>
          <div className={styles.FAQcontainer}>
            <h1>Frequently Asked Questions</h1>

            <div className={styles.FAQ}>
              <button className={styles.FAQquestion}>
                What are the requirements to join a cohort?
              </button>
              <div className={styles.FAQanswer}>
                <p> apl </p>
              </div>

            </div>
          </div>
        </section>



      </main>
    </div>
  );
}
