import "./Team.css";

const Team = (props) => {
  return (
    <section className="team" style={{ backgroundColor: props.SecondaryColor }}>
      <h3>{props.name}</h3>  
    </section>
  );
};

export default Team;
