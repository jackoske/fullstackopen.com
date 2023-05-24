import Part from "./Part";

const Content =({parts}) => {
    return (
        <div>
            <Part info={parts[0]} />
            <Part info={parts[1]} />
            <Part info={parts[2]} />
        </div>
    )
};

export default Content;
