import { useEffect, useState } from "react";
import "./Address.css";
import DaumPostcode from "react-daum-postcode";

const Address = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [zonecode, setZonecode] = useState(props.zoneCode);
  // const [address, setAddress] = useState(props.address);
  // const [addressDetail, setAddressDetail] = useState(props.addressDetail);

  const handleAddressDetailChange = (event) => {
    props.setForm({ ...props.form, addressDetail: event.target.value });
  };

  const handleComplete = (data) => {
    console.log(data.zonecode);
    console.log(data.address);
    props.setForm({
      ...props.form,
      zoneCode: data.zonecode,
      address: data.address,
    });
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // useEffect(
  //   () => {
  //     props.setFrom({ ...props.form, zonecode: props.zonecode });
  //     props.setFrom({ ...props.form, address: props.address });
  //     props.setFrom({ ...props.form, addressDetail: props.addressDetail });
  //   }, // eslint-disable-next-line
  //   []
  // );

  return (
    <div className="address">
      {isModalOpen && (
        <div className="modal-address">
          <div className="modal-address-div">
            <DaumPostcode onComplete={handleComplete} />
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
      <div className="address-input">
        <label htmlFor="zonecode">우편번호</label>
        <input
          type="text"
          name="zonecode"
          id="zonecode"
          placeholder="우편번호"
          defaultValue={props.zoneCode}
          value={props.zoneCode}
          readOnly="readonly"
        />
        <button onClick={openModal}>검색하기</button>
      </div>
      <div className="address-input">
        <label htmlFor="address">주소</label>
        <input
          type="text"
          name="address"
          id="address"
          defaultValue={props.address}
          value={props.address}
          placeholder="주소"
          readOnly="readonly"
        />
      </div>
      <div className="address-input">
        <label htmlFor="addressDetail">상세주소</label>
        <input
          type="text"
          name="addressDetail"
          id="addressDetail"
          placeholder="상세주소"
          defaultValue={props.addressDetail}
          value={props.addressDetail}
          onChange={handleAddressDetailChange}
        />
      </div>
    </div>
  );
};

export default Address;
