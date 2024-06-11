import styles from "./style.module.css";

export const AboutPreviewText = () => {
  return (
    <div className={styles.about_content}>
      <h2 className={styles.about_content_header}>
        We Value Our Clients And Want Them To Have An Excellent Experience.
      </h2>
      <div className={styles.about_content_paragraphs}>
        <p>
          Welcome to ZoninCars, the premier platform for buying and selling
          vehicles. At ZoninCars, we are committed to providing an exceptional
          experience for our customers. Whether you're in the market for a new
          or used car, or looking to sell your current vehicle, our
          comprehensive services and dedicated team are here to assist you every
          step of the way.
        </p>
        <p>
          Our extensive inventory includes a wide range of makes and models to
          suit every taste and budget. From sleek sedans and powerful SUVs to
          fuel-efficient hybrids and reliable trucks, we have something for
          everyone. Our knowledgeable sales staff is dedicated to helping you
          find the perfect vehicle that meets your needs and preferences. Plus,
          our competitive pricing and financing options ensure that you drive
          away satisfied.
        </p>
        <p>
          For those looking to sell, ZoninCars offers a seamless and
          straightforward process. We provide accurate appraisals and fair
          market value offers to make sure you get the best deal for your
          vehicle. Our goal is to make the selling experience as stress-free and
          rewarding as possible. At ZoninCars, we believe in building lasting
          relationships with our customers by delivering unparalleled service
          and support in all your automotive needs.
        </p>
      </div>
    </div>
  );
};
