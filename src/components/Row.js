function Row(props)
{
    return (
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.phone}</td>
            <td>
                <button className="btn btn-primary"></button>
            </td>
        </tr>
    );
}

export default Row;