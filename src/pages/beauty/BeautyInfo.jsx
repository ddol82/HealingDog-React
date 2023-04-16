import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  callSelectBeautyInfoAPI,
  callSelectBeautyPriceAPI,
  callUpdateBeautyInfoAPI,
} from "apis/BeautyAPICalls";
import beautyImg from "../../assets/beauty_img1.png";
import Time from "../../components/beauty/Time";
import Career from "../../components/beauty/Career";
import Price from "../../components/beauty/Price";
import HomePage from "../../components/beauty/HomePage";
import Address from "components/beauty/Address";
import Phone from "components/beauty/Phone";
import Category from "components/beauty/Category";

import "../../styles/BeautyInfo.css";

const BeautyInfo = () => {
  // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const beautyInfo = useSelector((state) => state.beautyReducer.data);
  const beautyPriceList = useSelector((state) => state.beautyPriceReducer.data);

  useEffect(
    () => {
      dispatch(callSelectBeautyInfoAPI());
    }, // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      dispatch(callSelectBeautyPriceAPI());
    }, // eslint-disable-next-line
    []
  );

  const onClickUpdateHandler = () => {
    const formData = new FormData();
    formData.append("providerCode", form.providerCode);
    formData.append("name", form.name);
    formData.append("day", form.day);
    formData.append("startTime", form.startTime);
    formData.append("endTime", form.endTime);
    formData.append("certificateName", form.certificateName);
    formData.append("text", form.text);
    formData.append("size", form.size);
    formData.append("cut", form.cut);
    formData.append("price", form.price);
    formData.append("phone", form.phone);
    formData.append("web", form.web);
    formData.append("zoneCode", form.zoneCode);
    formData.append("address", form.address);
    formData.append("addressDetail", form.addressDetail);
    formData.append("intro", form.intro);
    formData.append("large", form.large);
    formData.append("medium", form.medium);
    formData.append("small", form.small);
    formData.append("openBeauty", form.openBeauty);
    formData.append("spa", form.spa);
    formData.append("massage", form.massage);
    formData.append("selfBeauty", form.selfBeauty);
    formData.append("hoteling", form.hoteling);
    formData.append("playground", form.playground);
    formData.append("freeParking", form.freeParking);
    formData.append("wiFi", form.wiFi);

    dispatch(
      callUpdateBeautyInfoAPI({
        form: formData,
      })
    );

    window.location.reload();
  };

  const [form, setForm] = useState({
    providerCode: "",

    name: "",

    day: "",
    startTime: "",
    endTime: "",

    certificateName: "",
    text: "",

    size: "",
    cut: "",
    price: "",

    phone: "",
    web: "",

    zoneCode: "",
    address: "",
    addressDetail: "",

    intro: "",

    large: false,
    medium: false,
    small: false,
    openBeauty: false,
    spa: false,
    massage: false,
    selfBeauty: false,
    hoteling: false,
    playground: false,
    freeParking: false,
    wiFi: false,
  });

  useEffect(() => {
    setForm({
      providerCode: beautyInfo?.providerCode,
      name: beautyInfo?.name,

      day: beautyInfo?.day,
      startTime: beautyInfo?.startTime,
      endTime: beautyInfo?.endTime,

      certificateName: beautyInfo?.certificateName,
      text: beautyInfo?.text,

      size: beautyInfo?.size,
      cut: beautyInfo?.cut,
      price: beautyInfo?.price,

      phone: beautyInfo?.phone,
      web: beautyInfo?.web,

      zoneCode: beautyInfo?.zoneCode,
      address: beautyInfo?.address,
      addressDetail: beautyInfo?.addressDetail,

      intro: beautyInfo?.intro,

      large: beautyInfo?.large === "O",
      medium: beautyInfo?.medium === "O",
      small: beautyInfo?.small === "O",
      openBeauty: beautyInfo?.openBeauty === "O",
      spa: beautyInfo?.spa === "O",
      massage: beautyInfo?.massage === "O",
      selfBeauty: beautyInfo?.selfBeauty === "O",
      hoteling: beautyInfo?.hoteling === "O",
      playground: beautyInfo?.playground === "O",
      freeParking: beautyInfo?.freeParking === "O",
      wiFi: beautyInfo?.wiFi === "O",
    });
  }, [beautyInfo]);

  const handleNameChange = (event) => {
    setForm({ ...form, name: event.target.value });
  };

  const handleIntroChange = (event) => {
    setForm({ ...form, intro: event.target.value });
  };

  return (
    beautyInfo && (
      <div className="beauty-info-box">
        <div className="info-top">
          <button className="beauty-review-btn review-btn-l">{"<"}</button>
          <div className="info-img">
            <img src={beautyImg} alt="beautyImg" />
          </div>
          <button className="beauty-review-btn review-btn-r">{">"}</button>
        </div>
        <input
          className="beauty-name"
          type="text"
          defaultValue={form.name}
          onChange={handleNameChange}
        />
        <div className="beauty-info-wrap">
          <Time
            day={form.day}
            startTime={form.startTime}
            endTime={form.endTime}
            form={form}
            setForm={setForm}
          />
          <Career
            certificateName={form.certificateName}
            certificateText={form.text}
            form={form}
            setForm={setForm}
          />

          <div className="price-list">
            {Array.isArray(beautyPriceList) &&
              beautyPriceList.map((beautyPrice) => (
                <Price
                  key={beautyPrice.beautyPriceCode}
                  beautyPrice={beautyPrice}
                  form={form}
                  setForm={setForm}
                />
              ))}
          </div>
          <Phone phone={form.phone} form={form} setForm={setForm} />
          <HomePage web={form.web} form={form} setForm={setForm} />
          <Address
            zoneCode={form.zoneCode}
            address={form.address}
            addressDetail={form.addressDetail}
            form={form}
            setForm={setForm}
          />
        </div>

        <Category
          large={form.large}
          medium={form.medium}
          small={form.small}
          openBeauty={form.openBeauty}
          spa={form.spa}
          massage={form.massage}
          selfBeauty={form.selfBeauty}
          hoteling={form.hoteling}
          playground={form.playground}
          freeParking={form.freeParking}
          wiFi={form.wiFi}
          form={form}
          setForm={setForm}
        />
        <div className="beauty-info-intro">
          <label>자기소개</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="자기소개를 입력해주세요."
            defaultValue={form.intro}
            onChange={handleIntroChange}
          ></textarea>
        </div>
        <div className="beauty-info-btn-wrap">
          <button className="beauty-info-btn" onClick={onClickUpdateHandler}>
            수정하기
          </button>
        </div>
      </div>
    )
  );
};

export default BeautyInfo;
