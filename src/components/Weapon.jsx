
export default function Weapon(props) {
  const { weapon, choose } = props;
  const rockPicUrl =
    "http://www.clker.com/cliparts/F/M/x/W/i/S/rock-rubble-hi.png";
  const ScissorsPicUrl =
    "https://webstockreview.net/images/clipart-scissors-orange-4.png";
  const PaperPicUrl = "https://cdn.onlinewebfonts.com/svg/img_548933.png";
  const weaponPic = {
    "rock": rockPicUrl,
    "scissors": ScissorsPicUrl,
    "paper": PaperPicUrl,
  };
  
  return (
      <div className="weapon"  key={weapon} onClick={(e)=>choose(weapon)}>
        <h3>{weapon}</h3>
      <p><img id="weapon-pic" src={weaponPic[weapon]} alt={weapon} /></p>
    </div>
  );
}
