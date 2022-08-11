import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Search from '../../components/google/utility/search/Search';
import { NextPageWithLayout } from './../page';
import PrimaryLayout from "../../components/layouts/primary/PrimaryLayout";


// All search / api part has been deleted -> go to full project to see it
const Google: NextPageWithLayout = () => {
    const { locale } = useRouter();

    return (
        <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">

            <button
                onClick={() => alert('FEATURE COMING SOON!')}
                className="btn-primary"
            >
                I&apos;m Feeling Lucky
            </button>

            <Image
                src="/Google.png"
                alt="Google Logo"
                width={272}
                height={92}
                priority
            />
            <Search />
            <p>
                Index offered in:{' '}
                <Link href="/" locale={locale === 'en' ? 'fr' : 'en'}>
                    <a className="underline text-blue-600"> Français</a>
                </Link>
            </p>
        </section>
    );
};

export default Google;

Google.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};
