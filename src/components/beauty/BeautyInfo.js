import { useNavigate } from "react-router-dom";

function BeautyInfo({
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
}) {
  const navigate = useNavigate();

  const onClickBeautyHandler = (providerCode) => {
    navigate(`/beauty-manage/${providerCode}`, { replace: false });
  };

  return (
    <div onClick={() => onClickBeautyHandler(providerCode)}>
      <h5>{name}</h5>
      <h5>{address}</h5>
      <h5>{phone}</h5>
      <h5>{intro}</h5>
    </div>
  );
}

export default BeautyInfo;
