import BenefitCard from "@/app/Components/BenefitCard"

export default function Benefit () {
    return (
        <div className=" bg-gradient-to-b from-[rgba(245,245,245)] to-[#CAD2E1] w-screen pt-[50px] px-4 flex flex-col justify-start items-center container">
            <div className="px-4 text-center">
            <h2 className="mb-[10px] text-[28px] font-semibold">Benefits for Every Stakeholder</h2>
            <p className="text-[14px] font-normal">LIFE Protocol bridges science, technology, and community to deliver unique value to users, investors, and researchers.</p>
            </div>
            <BenefitCard src={"/images/Benefits/user-circle.png"} title={"FOR USERS"} firstHeader = {"Access to Life-Changing Innovations"} firstPara={"Be part of a community that supports groundbreaking biotech projects."} secondHeader={"Transparent Governance"} secondPara={"Participate in decision-making for the future of scientific breakthroughs."} thirdHeader={"Early Adoption Opportunities"} thirdPara={"Gain exclusive access to tokenized projects and innovative solutions."}/>
            <BenefitCard src={"/images/Benefits/bank.png"} title={"FOR INVESTORS"} firstHeader = {"High-Impact Opportunities"} firstPara={"Support projects with global potential and scalable solutions in biotech."} secondHeader={"Community-Driven Returns"} secondPara={"Earn rewards through milestone-based incentives and token allocations."} thirdHeader={"Secure and Transparent Investments"} thirdPara={"Leverage blockchain technology for trustless transactions and oversight."}/>
            <BenefitCard src={"/images/Benefits/beaker-02.png"} title={"FOR RESEARCHORS"} firstHeader = {"AI-Powered R&D"} firstPara={"Accelerate discoveries with cutting-edge AI tools for data analysis and collaboration."} secondHeader={"Decentralized Funding"} secondPara={"Access community-backed capital to bring your ideas to life."} thirdHeader={"Global Reach"} thirdPara={"Collaborate with leading labs and distribute your innovations worldwide."}/>
            <p className="text-[16px] font-medium text-[#080C1499]/60 mt-[51px] mb-[51px] text-center">Find out how LIFE Protocol empowers you to make a difference.</p>
        </div>
    )
}