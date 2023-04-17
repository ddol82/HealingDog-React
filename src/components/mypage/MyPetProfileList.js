import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callSelectMyPetProfileListAPI } from "apis/MyPetAPICalls";
import MyPetProfile from "./MyPetProfile";

function MyPetProfileList() {
  //redux
  const dispatch = useDispatch();
  const myPetProfile = useSelector((state) => state.myPetReducer);
  const myPetProfileList = myPetProfile.data;

  //useEffect
  useEffect(() => {
    dispatch(callSelectMyPetProfileListAPI());
  }, []);

  return (
    <>
      {Array.isArray(myPetProfileList) &&
        myPetProfileList.map((val) => (
          <MyPetProfile
            key={val.mypetCode}
            userCode={val.userCode}
            mypetCode={val.mypetCode}
            name={val.name}
            gender={val.gender}
            birthday={val.birthday}
            weight={val.weight}
          />
        ))}
    </>
  );
}

export default MyPetProfileList;
