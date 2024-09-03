interface Props {
    id: number;
    data: string;
}

export const CardTitle =({id, data}: Props) => {
    return (
        <div>
            <p>Id: {id}</p>
            <p>Data: {data}</p>
        </div>
    );
}