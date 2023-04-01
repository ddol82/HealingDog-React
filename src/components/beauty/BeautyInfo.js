import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BeautyInfo = ({
  beauty: {
    beautyCode,
    providerCode,
    name,
    phone,
    web,
    address,
    intro,
    large,
    medium,
    small,
    openBeauty,
    spa,
    massage,
    selfBeauty,
    hoteling,
    playground,
    freeParking,
    wiFi,
  },
}) => {
  const navigate = useNavigate();

  const onClickBeautyHandler = (beautyCode) => {
    navigate(`/beauty-manage/${beautyCode}`, { replace: false });
  };

  return (
    <div onClick={() => onClickBeautyHandler(beautyCode)}>
      <h5>{name}</h5>
      <h5>{address}</h5>
      <h5>{phone}</h5>
      <h5>{intro}</h5>
    </div>
  );
};

export default BeautyInfo;
