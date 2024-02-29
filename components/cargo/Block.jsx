import Image from "next/image";

const Block = ({ t }) => {
    return (
        <>
            <div className="col-lg-9 px-30" style={{
                textAlign: 'justify',
                textJustify: 'inter-word',
            }}>
                <h2 className="text-30 fw-600"> {t('cargo:title')}</h2>
                {/* <p className="mt-5">{t('about:about-us-subtitle')}</p> */}
                <div className="mt-60 lg:mt-40 md:mt-20">
                    <p className="text-dark-1">
                        {t('cargo:first-paragraphe')}
                    </p>
                    <div className="mt-50 mb-50">
                        <h3 className="text-20 fw-500 text-center mt-50 mb-50 ">{t('cargo:types-title')}</h3>
                        <div className="">
                            <h4 className="text-20 fw-50"> {t('cargo:first-type-title')}</h4>
                            <p className="">{t('cargo:technical-details')}</p>

                            <p className="">{t('cargo:first-type-volume')}</p>
                            <p className="">{t('cargo:first-type-tara')}</p>
                            <p className="">{t('cargo:first-type-dimensions')}</p>
                            <div className="col-lg-9">
                                <Image
                                    width={400}
                                    height={400}
                                    src="/img/cargo/cargo1.png"
                                    alt="image"
                                    className="rounded-4 w-100"
                                />
                            </div>
                        </div>
                        <div className="mt-20">
                            <h4 className="text-20 fw-50"> {t('cargo:second-type-title')}</h4>
                            <p className="">{t('cargo:technical-details')}</p>

                            <p className="">{t('cargo:second-type-volume')}</p>
                            <p className="">{t('cargo:second-type-tara')}</p>
                            <p className="">{t('cargo:second-type-dimensions')}</p>
                            <div className="col-lg-9">
                                <Image
                                    width={400}
                                    height={400}
                                    src="/img/cargo/cargo2.png"
                                    alt="image"
                                    className="rounded-4 w-100"
                                />
                            </div>
                        </div>

                    </div>
                    <p className="text-dark-1">
                        {t('cargo:last-paragraphe')}
                    </p>
                </div>
            </div>
            {/* End .col */}
        </>
    );
};

export default Block;
