import css from "./InformationPage.module.css";

const InformationPage = () => {
  return (
    <div className={css.container}>
      <img className={css.info_img} src="../../../Section.jpg" alt="" />

      <video className={css.info_video} controls>
        <source type="video/mp4" src="../../../shurink_making_9-16 (1).mp4" />
      </video>

      <button className={css.info_btn}>
        <a
          className=""
          href="../../../shurink_making_9-16 (1).mp4"
          download="../../../shurink_making_9-16 (1).mp4"
        >
          Download
        </a>
      </button>
    </div>
  );
};
export default InformationPage;
