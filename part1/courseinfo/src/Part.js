const Part = (props) => {
    console.log(props);
    return <p>{props.info.part} {props.info.exercise}</p>;
  };
  
  export default Part;
  