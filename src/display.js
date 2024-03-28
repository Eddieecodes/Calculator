//prop passed
const Display = (props) => {
  const value = props.value;
  //display component
    return ( 
       <div className="displaycontainer">
    <div className="answerdisplay"></div>
    <div className="valuedisplay" >{value}</div>
  </div> );
}
 
export default Display;