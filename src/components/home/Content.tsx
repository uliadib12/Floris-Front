import CardContainer from "./CardContainer";
import Card from "./Card";

export default function Content() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                Category
            </h1>
            <CardContainer>
                <Card
                    path = "papan-bunga"
                    title="Papan Bunga"
                    description="
                        Papan bunga adalah salah satu jenis karangan bunga yang biasanya digunakan untuk acara pernikahan, wisuda, dan lain-lain
                    "
                    image="images/papan-bunga.webp"
                />
                <Card
                    path = "bouquet"
                    title="Bouquet"
                    description="
                        Bouquet adalah karangan bunga yang biasanya digunakan untuk acara pernikahan, wisuda, dan lain-lain
                    "
                    image="images/bouquet.webp"
                />
                <Card
                    path = "money-cake"
                    title="Money Cake"
                    description="
                        Money cake adalah kue yang dihias dengan uang kertas yang biasanya digunakan untuk acara pernikahan, wisuda, dan lain-lain
                    "
                    image="images/money-cake.webp"
                />
                <Card
                    path = "snack-tower"
                    title="Snack Tower"
                    description="
                        Snack tower adalah tumpukan makanan ringan yang biasanya digunakan untuk acara pernikahan, wisuda, dan lain-lain
                    "
                    image="images/snack-tower.webp"
                />
            </CardContainer>
        </div>
    )
}