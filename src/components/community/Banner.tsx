import BannerImage from "../../assets/dummy-banner.png"

const Banner = (): JSX.Element => (
    <div className='com-banner'>
        <img src={BannerImage} alt="Banner" />
    </div>
);

export default Banner;