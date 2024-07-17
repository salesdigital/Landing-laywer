import MaxWidthWrapper from "./MaxWidth"

export const Testimonial = () => {
    return (
        <section className="bg-white font-montserrat">
            <MaxWidthWrapper className="lg:px-0 lg:py-0">
                <section id="testimonials" aria-label="O que os nossos clientes tem a dizer" className="bg-white py-20 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl md:text-center">
                        <h2 className="font-normalidad-bold text-3xl tracking-tight text-slate-900 sm:text-4xl">O que os nossos clientes tem a dizer</h2>
                        </div>
                        <ul role="list"
                        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
                        <li>
                            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                            <li>
                                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                                    width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                                    <path
                                    d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                    </path>
                                </svg>
                                <blockquote className="relative">
                                    <p className="max-w-prose text-lg tracking-tight text-slate-900">"O Francisco de Assis e sua equipe foram fundamentais para resolver meu caso de divórcio de maneira rápida e justa. Sua abordagem profissional e dedicação excepcional me deram confiança durante todo o processo. Recomendo seus serviços sem hesitação."</p>
                                </blockquote>
                                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                    <div>
                                    <div className="font-display text-base text-slate-900">Maria Vitória</div>
                                    </div>
                                </figcaption>
                                </figure>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                            <li>
                                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                                    width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                                    <path
                                    d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                    </path>
                                </svg>
                                <blockquote className="relative">
                                    <p className="max-w-prose text-lg tracking-tight text-slate-900">"Estou muito satisfeito com os serviços prestados pelo escritório do Francisco. Eles não apenas conseguiram resolver meu caso trabalhista de forma favorável, mas também superaram minhas expectativas em termos de comprometimento e eficiência. Obrigado por tudo!"</p>
                                </blockquote>
                                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                    <div>
                                    <div className="font-display text-base text-slate-900">Fernanda Oliveira</div>
                                    </div>
                                </figcaption>
                                </figure>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                            <li>
                                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                                    width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                                    <path
                                    d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                    </path>
                                </svg>
                                <blockquote className="relative">
                                    <p className="max-w-prose text-lg tracking-tight text-slate-900">"Agradeço imensamente ao Francisco e sua equipe por me ajudarem a obter o benefício previdenciário que eu tinha direito. Seu conhecimento em direito previdenciário e dedicação fizeram toda a diferença na minha vida. Recomendo seus serviços a todos que precisam de assistência jurídica."</p>
                                </blockquote>
                                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                    <div>
                                    <div className="font-display text-base text-slate-900">João Vitor Farias</div>
                                    </div>
                                </figcaption>
                                </figure>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </div>  
                </section>
            </MaxWidthWrapper>
        </section>
    )
}
