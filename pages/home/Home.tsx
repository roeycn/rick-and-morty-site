import { useRouter } from 'next/router';
import { NextPageWithLayout } from './../page';
import PrimaryLayout from "../../components/layouts/primary/PrimaryLayout";

const Home: NextPageWithLayout = () => {
    const { locale } = useRouter();

    return (
        <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
            <p>
                Main Screen
            </p>
        </section>
    );
};

export default Home;

Home.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};
