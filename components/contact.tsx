"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default function ContactSectie() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        job: "",
        msg: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleJobChange = (value: string) => {
        setFormData({ ...formData, job: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage("");

        try {
            const response = await fetch(
                "https://services.leadconnectorhq.com/hooks/jrh0hAenHZob0d0wWGXU/webhook-trigger/e61e8d2f-ccea-4817-8631-459e3c65363b",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                setSuccessMessage("Je bericht is succesvol verzonden!");
                setFormData({ name: "", email: "", website: "", job: "", msg: "" });
            } else {
                throw new Error("Verzenden mislukt. Probeer het opnieuw.");
            }
        } catch (error) {
            setSuccessMessage("Er is een fout opgetreden, probeer het later opnieuw.");
        }

        setIsSubmitting(false);
    };

    return (
        <section className="py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl mt-16">
                    Neem contact op
                </h1>
                <p className="mt-4 text-center">
                    Wij helpen je graag bij het vinden van de juiste oplossing voor jouw bedrijf.
                </p>

                <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
                    <div>
                        <h2 className="text-xl font-semibold">
                            Wij brengen je in contact met de juiste persoon
                        </h2>
                        <p className="mt-4 text-sm">
                            Neem contact op met ons team! We zijn benieuwd hoe je onze diensten wilt gebruiken.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-12 space-y-6">
                        <div>
                            <Label htmlFor="name">Volledige naam</Label>
                            <Input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="email">Werk e-mail</Label>
                            <Input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="website">Bedrijfswebsite</Label>
                            <Input
                                type="url"
                                id="website"
                                value={formData.website}
                                onChange={handleChange}
                                placeholder="https://www."
                            />
                            <p className="mt-1 text-sm text-gray-500">Bijvoorbeeld: <span className="text-blue-600">https://www.aivoormakelaars.nl</span></p>
                        </div>

                        <div>
                            <Label htmlFor="job">Functie</Label>
                            <Select onValueChange={handleJobChange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecteer functie" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Makelaar">Makelaar</SelectItem>
                                    <SelectItem value="IT-verantwoordelijk gestelde">
                                        IT-verantwoordelijk gestelde
                                    </SelectItem>
                                    <SelectItem value="Algemeen Directeur">Algemeen Directeur</SelectItem>
                                    <SelectItem value="Vestigingsmanager">Vestigingsmanager</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="msg">Bericht</Label>
                            <Textarea
                                id="msg"
                                rows={3}
                                value={formData.msg}
                                onChange={handleChange}
                            />
                        </div>

                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Verzenden..." : "Verzenden"}
                        </Button>

                        {successMessage && (
                            <p className="mt-4 text-center text-green-600">{successMessage}</p>
                        )}
                    </form>
                </Card>
            </div>
        </section>
    );
}