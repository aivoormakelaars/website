import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl">Vertrouwd door makelaars en klanten van makelaars</h2>
                    <p>Aivoor Makelaars biedt slimme AI-oplossingen om vastgoedtransacties sneller en efficiënter te maken. Ontdek hoe onze technologie het verschil maakt.</p>
                </div>

                <div className="grid gap-4 [--color-card:var(--color-muted)] *:border-none *:shadow-none sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <img className="h-12 w-fit dark:invert" src="logo1.jpg" alt="Aivoor Makelaars Logo" height="24" width="auto" />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">De AI-telefoonassistent van Aivoor Makelaars heeft me enorm geholpen bij het vinden van een nieuwe woning. Binnen enkele minuten had ik een bezichtiging ingepland. Super efficiënt!</p>
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="/images/clients/lisa_de_vries.jpg" alt="Lisa de Vries" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>LV</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Lisa de Vries</cite>
                                        <span className="text-muted-foreground block text-sm">Woningzoeker</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Dankzij de AI-tools van Aivoor kan ik mijn leads beter beheren en meer tijd besteden aan persoonlijke service. Een game-changer voor makelaars!</p>
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="/images/clients/mark_jansen.jpg" alt="Mark Jansen" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>MJ</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Mark Jansen</cite>
                                        <span className="text-muted-foreground block text-sm">Makelaar</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>De AI-chatbot gaf mij direct alle informatie die ik nodig had over een woning. Hierdoor kon ik snel beslissen om een afspraak te maken. Echt een tijdbesparing!</p>
                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage src="/images/clients/thomas_meijer.jpg" alt="Thomas Meijer" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>TM</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Thomas Meijer</cite>
                                        <span className="text-muted-foreground block text-sm">Koper</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Met de AI-ondersteuning van Aivoor kan ik 24/7 reageren op klantvragen, zonder dat ik zelf constant bereikbaar hoef te zijn. Dit maakt mijn werk zoveel efficiënter.</p>
                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="/images/clients/sophie_bakker.jpg" alt="Sophie Bakker" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>SB</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Sophie Bakker</p>
                                        <span className="text-muted-foreground block text-sm">Makelaar</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}