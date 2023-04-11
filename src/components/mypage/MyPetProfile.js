import "./MyPetProfile.css";

function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function MyPetProfile(props) {
  const age = calculateAge(props.birthday);
  return (
    <>
      <div className="mypetprofile-box">
        <div className="mypetprofile-img"></div>
        <div className="mypetprofile-info">
          <p className="mypetprofile-mypet-name">{props.name}</p>
          <div className="mypetprofile-item">
            <p>{props.gender === "M" ? "남" : "여"}</p>
            <p>{age == 0 ? 1 : age}살</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPetProfile;
