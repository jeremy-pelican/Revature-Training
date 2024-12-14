const Hello = (props) => {
    return (
        <>
            <h2>Hello Functional Component.</h2>
            <p>Hello World from Hello Component...... {props.firstname} ---- {props.lastname}</p>
        </>
    );
}

export default Hello;