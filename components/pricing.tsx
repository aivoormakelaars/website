import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Transparante Tarieven voor Makelaars</h1>
                    <p>Onze flexibele prijzen groeien met jouw makelaarskantoor mee. Kies het plan dat het beste bij je past.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
                    <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
                        <div className="space-y-4">
                            <div>
                                <h2 className="font-medium">Gratis Consult</h2>
                                <span className="my-3 block text-2xl font-semibold">€0</span>
                                <p className="text-muted-foreground text-sm">Krijg een persoonlijke kostenberekening op maat.</p>
                            </div>

                            <Button asChild variant="outline" className="w-full">
                                <Link href="">Plan een gesprek</Link>
                            </Button>

                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {["Vrijblijvend advies", "Kostenberekening op maat", "Overzicht van onze diensten"].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="font-medium">Pro Plan</h2>
                                    <span className="my-3 block text-2xl font-semibold">€600 / maand</span>
                                    <p className="text-muted-foreground text-sm">Voor makelaarskantoren die willen opschalen.</p>
                                </div>

                                <Button asChild className="w-full">
                                    <Link href="">Start nu</Link>
                                </Button>
                            </div>

                            <div>
                                <div className="text-sm font-medium">Inclusief:</div>

                                <ul className="mt-4 list-outside space-y-3 text-sm">
                                    {["24/7 support", "CRM-integratie", "AI-gebaseerde lead generatie", "Automatische opvolging van leads", "Geavanceerde data-analyse", "Persoonlijke accountmanager", "Telefonie: €0,22 per minuut", "E-mail: €0,14 per bericht", "Maandelijkse updates"].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
