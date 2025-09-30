import Link from "next/link"

export default function VercelPage() {
    return (
        <main className="">
            <p>AWS costs $.0209/hr for a t3.small, $.0225/hr for the load balancer, and $.005/hr for the VPC ip. Totalling $34/mo</p>
            <p>It{"'"}s great pricing and I love the control but Vercel is free.</p>
            <Link className="hover:font-bold underline" href="/">Return Home</Link>
        </main>
    )
}