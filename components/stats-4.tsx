export default function StatsSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">Het AIVoormakelaars ecosysteem brengt slimme automatisering samen</h2>
                    <p>
                    AIVoormakelaars gaat verder dan alleen AI-modellen. Wij bieden een compleet ecosysteem - <span className="font-medium">van geavanceerde AI-assistenten </span> tot volledig geïntegreerde oplossingen voor makelaarskantoren.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <p>Ons platform ondersteunt een volledig AI-ecosysteem – van telefonische leads en e-mailbeheer tot automatisering van verkoopprocessen, zodat makelaars efficiënter en winstgevender kunnen werken.</p>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">90%</div>
                                <p>van inkomende telefoontjes automatisch verwerkt</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">60%</div>
                                <p>van e-mails direct beantwoord of doorgeschakelt</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 pl-4">
                            <p>Met AIvoorMakelaars voelt het alsof we een geheime superkracht hebben ontgrendeld. Het is de perfecte combinatie van efficiëntie en innovatie, waardoor we makelaars kunnen helpen om sneller, slimmer en klantgerichter te werken.</p>

                            <div className="mt-6 space-y-3">
                                <cite className="block font-medium">Luke, CEO</cite>
                                <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}
