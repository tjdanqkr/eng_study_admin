import Link from 'next/link';

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link href={'/'}>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 cursor-pointer">
          Admin
        </h1>
      </Link>
    </section>
  );
};

export default Intro;
