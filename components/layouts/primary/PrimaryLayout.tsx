import Head from 'next/head';
import {Drawer} from "../../Drawer";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>Roey App 2.0</title>
      </Head>

      <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
          {/*<Drawer {children} />*/}
          <Drawer  >
              {children}
          </Drawer>
          {/*<main className="px-5">{children}</main>*/}
        <div className="m-auto" />
      </div>
    </>
  );
};

export default PrimaryLayout;
