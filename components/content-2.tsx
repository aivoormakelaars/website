import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Het Aivoormakelaars ecosysteem brengt onze modellen samen.</h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p className="text-body">
                            Aivoormakelaars evolueert naar meer dan alleen modellen. <span className="text-title font-medium">Het ondersteunt een volledig ecosysteem</span> — van innovatieve producten.
                        </p>
                        <p>Het ondersteunt een volledig ecosysteem — van producten tot de API's en platforms die ontwikkelaars en bedrijven helpen innoveren.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Snel</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Het ondersteunt een volledig ecosysteem dat ontwikkelaars helpt te innoveren.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Krachtig</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Het ondersteunt een volledig ecosysteem dat ontwikkelaars en bedrijven helpt.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                        <div aria-hidden className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"></div>
                        <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                            <Image src="/charts.png" className="hidden rounded-[12px] dark:block" alt="betalingsillustratie donker" width={1207} height={929} />
                            <Image src="/charts-light.png" className="rounded-[12px] shadow dark:hidden" alt="betalingsillustratie licht" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
