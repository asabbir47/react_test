import Row from './Row'

function Table(props) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((e, i) => {
                    return (
                        <Row data={e} key={e.id} />
                    );
                })}
            </tbody>
        </table>

    );
}

export default Table;