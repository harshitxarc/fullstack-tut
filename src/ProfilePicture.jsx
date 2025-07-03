
function ProfilePicture(){
    const url = "./src/assets/kaka.jpg";
    const handleClick = (e) => e.target.style.display = "none";

    return (
        <img onClick={(e)=> handleClick(e)} src={url} alt="Kaka"></img>
    );
}

export default ProfilePicture;