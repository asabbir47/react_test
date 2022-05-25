function Hello(e,a){
    alert(a);
}

function Row(props)
{
    return (
        <tr onClick={(e) => Hello(e,props.data.name)}>
            <td>{props.data.name}</td>
            <td>{props.data.phone}</td>
            <td>
                <button className="btn btn-primary"></button>
            </td>
        </tr>
    );
}

export default Row;