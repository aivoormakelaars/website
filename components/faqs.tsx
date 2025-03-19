export default function FAQs() {
    return (
        <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                    <div className="text-center lg:text-left">
                        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                            Veelgestelde <br className="hidden lg:block" /> Vragen
                        </h2>
                        <p>Antwoorden op de meest voorkomende vragen.</p>
                    </div>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                        <div className="pb-6">
                            <h3 className="font-medium">Wat is het restitutiebeleid?</h3>
                            <p className="text-muted-foreground mt-4">Na het implementatieproces bieden wij geen restitutie aan. Wij streven er echter naar om 100% tevredenheid te garanderen.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Hoe verloopt een samenwerking?</h3>
                            <p className="text-muted-foreground mt-4">Bij een samenwerking wordt er een consult en een developer gekoppeld om de integratie zo soepel mogelijk te laten verlopen.</p>
                            <p className="text-muted-foreground mt-4">De implementatie duurt gemiddeld 14 dagen.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Wat zijn de kosten?</h3>
                            <p className="text-muted-foreground my-4">De maandelijkse kosten bedragen €600 per maand, plus een implementatiefee die kan variëren. Daarnaast worden telefoonkosten 1-op-1 doorberekend met een tarief van €0,22 per belminuut en €0,14 per e-mail.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Welke support bieden jullie?</h3>
                            <p className="text-muted-foreground mt-4">Bij de maandelijkse tarief is 24/7 support inbegrepen. Zo kun jij je veilig voelen en de verantwoordelijkheid aan ons overlaten.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
