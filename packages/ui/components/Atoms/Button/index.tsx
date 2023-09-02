interface IButton {
    label?: string;
}

export const Button = ({ label }: IButton) => {
    return (
        <>
            <button className="bg-purple-300 p-2 m-2 border-2 rounded-lg">{label}</button>
        </>
    );
};
