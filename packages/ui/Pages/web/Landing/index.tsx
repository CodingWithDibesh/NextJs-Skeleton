import { Button } from '../../../components/Atoms';

interface ILanding {
    title?: string;
}

export const Landing = ({ title }: ILanding) => {
    return (
        <>
            <div className="flex font-bold text-purple-600 leading-7 justify-center items-center h-11">
                {title}
            </div>
            <Button label="Hi There" />
        </>
    );
};
