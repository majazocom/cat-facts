function Fact({ data }) {
    const { text } = data;
    return (
        <article>
            <h3>{text}</h3>
        </article>
    );
}

export default Fact;