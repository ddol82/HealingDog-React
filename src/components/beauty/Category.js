import "./Category.css";

const Category = (category) => {
  const handleSmallChange = (event) => {
    category.setForm({ ...category.form, small: event.target.checked });
  };
  const handleMediumChange = (event) => {
    category.setForm({ ...category.form, medium: event.target.checked });
  };
  const handleLargeChange = (event) => {
    category.setForm({ ...category.form, large: event.target.checked });
  };

  const handleOpenBeautyChange = (event) => {
    category.setForm({ ...category.form, openBeauty: event.target.checked });
  };
  const handleSpaChange = (event) => {
    category.setForm({ ...category.form, spa: event.target.checked });
  };
  const handleMassageChange = (event) => {
    category.setForm({ ...category.form, massage: event.target.checked });
  };
  const handleSelfBeautyChange = (event) => {
    category.setForm({ ...category.form, selfBeauty: event.target.checked });
  };
  const handleHotelingChange = (event) => {
    category.setForm({ ...category.form, hoteling: event.target.checked });
  };
  const handlePlaygroundChange = (event) => {
    category.setForm({ ...category.form, playground: event.target.checked });
  };
  const handleFreeParkingChange = (event) => {
    category.setForm({ ...category.form, freeParking: event.target.checked });
  };
  const handleWiFiChange = (event) => {
    category.setForm({ ...category.form, wiFi: event.target.checked });
  };
  return (
    <div className="beauty-category">
      <label>카테고리</label>
      <div className="beauty-category-1">
        <input
          type="checkbox"
          name="small"
          defaultValue={category.small}
          id="small"
          checked={category.small}
          onChange={handleSmallChange}
        />
        <label htmlFor="small">소형견</label>
        <input
          type="checkbox"
          name="medium"
          defaultValue={category.medium}
          id="medium"
          checked={category.medium}
          onChange={handleMediumChange}
        />
        <label htmlFor="medium">중형견</label>
        <input
          type="checkbox"
          name="large"
          defaultValue={category.large}
          id="large"
          checked={category.large}
          onChange={handleLargeChange}
        />
        <label htmlFor="large">대형견</label>
      </div>
      <div className="beauty-category-2">
        <input
          type="checkbox"
          name="openBeauty"
          defaultValue={category.openBeauty}
          id="openBeauty"
          checked={category.openBeauty}
          onChange={handleOpenBeautyChange}
        />
        <label htmlFor="openBeauty">오픈미용</label>

        <input
          type="checkbox"
          name="spa"
          defaultValue={category.spa}
          id="spa"
          checked={category.spa}
          onChange={handleSpaChange}
        />
        <label htmlFor="spa">스파</label>

        <input
          type="checkbox"
          name="massage"
          defaultValue={category.massage}
          id="massage"
          checked={category.massage}
          onChange={handleMassageChange}
        />
        <label htmlFor="massage">마사지</label>

        <input
          type="checkbox"
          name="selfBeauty"
          defaultValue={category.selfBeauty}
          id="selfBeauty"
          checked={category.selfBeauty}
          onChange={handleSelfBeautyChange}
        />
        <label htmlFor="selfBeauty">셀프목욕</label>

        <input
          type="checkbox"
          name="hoteling"
          defaultValue={category.hoteling}
          id="hoteling"
          checked={category.hoteling}
          onChange={handleHotelingChange}
        />
        <label htmlFor="hoteling">호텔링</label>

        <input
          type="checkbox"
          name="playground"
          defaultValue={category.playground}
          id="playground"
          checked={category.playground}
          onChange={handlePlaygroundChange}
        />
        <label htmlFor="playground">놀이터</label>

        <input
          type="checkbox"
          name="freeParking"
          defaultValue={category.freeParking}
          id="freeParking"
          checked={category.freeParking}
          onChange={handleFreeParkingChange}
        />
        <label htmlFor="freeParking">무료주차</label>

        <input
          type="checkbox"
          name="wiFi"
          defaultValue={category.wiFi}
          id="wiFi"
          checked={category.wiFi}
          onChange={handleWiFiChange}
        />
        <label htmlFor="wiFi">와이파이</label>
      </div>
    </div>
  );
};

export default Category;
