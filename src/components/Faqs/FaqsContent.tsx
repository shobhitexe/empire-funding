import Link from "next/link";

export const FaqsContent = [
  // Accounts
  [
    {
      que: "What type of Accounts do you offer?",
      ans: (
        <div>
          We wanted to keep things simple.
          <br />
          <br />
          We offer the classic 2-Step and 1-Step Evaluation/Challenge Accounts
          that are well-known by the trading community.
          <br />
          <br />
          For the brave and bold, we provide Instant Funding solutions at
          competitive prices.
        </div>
      ),
    },
    {
      que: "Do I need to know how to trade?",
      ans: (
        <div>
          While it certainly helps, it is not necessary to purchase an account
          with us.
          <br />
          <br />
          All traders are welcome regardless of their skill level.
          <br />
          <br />
          Like most things, trading is a skill and requires time and effort to
          fully comprehend and master. With that said, we do provide a free
          community and resources to help you on your journey!
        </div>
      ),
    },
    {
      que: "What are your trading rules?",
      ans: (
        <div>
          We do implement rules across each account, you can view all of our
          rules here:
          <br />
          <Link href={"/rules"} className="underline">
            https://www.empiretrading.co/rules
          </Link>
          <br />
          <br />
          Note, our rules differ between the Challenge and Funded stage.
        </div>
      ),
    },
    {
      que: "Which markets can I trade?",
      ans: (
        <div>
          Our platform supports a wide range of markets:
          <br />
          <br />
          - Foreign Exchange Currencies (Forex) <br />
          - Commodities <br />
          - Stocks <br />
          - Futures <br />
          - Crypto <br />
        </div>
      ),
    },
    {
      que: "What platforms can I trade on?",
      ans: (
        <div>
          Currently, we only support Platform 5 with plans on integrating more
          platforms in the future!
        </div>
      ),
    },
    {
      que: "Are there any hidden fees?",
      ans: (
        <div>
          No hidden costs, we only charge one-off challenge fees that are paid
          prior to receiving your account with us.
        </div>
      ),
    },
    {
      que: "How do I get started?",
      ans: (
        <div>
          Simply sign-up with an email and login-in to our client dashboard to
          purchase an account and begin your trading journey with us!
        </div>
      ),
    },
  ],
  // Pay-outs
  [
    {
      que: "Is there a Minimum Payout amount?",
      ans: (
        <div>
          The Minimum Payout amount is set at $1 for Challenge Funded Accounts.
          <br />
          <br />
          Instant Funding accounts require a minimum of 5% gain on the initial
          balance before requesting a payout.
        </div>
      ),
    },
    {
      que: "How long does it take to process a payout?",
      ans: (
        <div>
          We provide bi-weekly payouts as the default standard across all Funded
          Accounts.
          <br />
          <br />
          There is an option to purchase 24-hour payout processing with our
          accounts, which can be added on at checkout.
          <br />
          <br />
          Note, payouts require KYC verification which may impact processing
          time.
        </div>
      ),
    },
  ],
  // Prohibited Strategies
  [
    {
      que: "Scalping",
      ans: (
        <div>
          Yes, scalping is allowed. We believe in providing our traders with the
          flexibility to employ various strategies, including scalping, to
          optimize their experience and achieve their financial goals.
          <br />
          <br />
          Tick Scalping
          <br />
          While the scalping strategies are allowed there is a restriction rule
          on the accounts that hold more than 25% of positions for less than 120
          seconds. This might result to account breach as considered as tick
          scalping that abuse the trading systems.
        </div>
      ),
    },
    {
      que: "HFT Trading",
      ans: (
        <div>
          We prioritize fairness and transparency. Consequently, we do not allow
          Hight-Frequency Trading (HFT) on our platform.
          <br />
          <br />
          Why HFT is Prohibited:
          <br />
          HFT relies on speed and technology rather than traditional trading
          methods, which can disadvantage other traders. We want to create an
          equitable environment where traders can succeed based on their skills
          and knowledge, not just technological wizardry.
        </div>
      ),
    },
    {
      que: "Reverse Trading",
      ans: "Reverse trading refers to the strategy of simultaneously opening opposing positions on different trading accounts, often across multiple firms. The primary intent behind this practice is to hedge bets, mitigate potential losses, or exploit discrepancies between account regulations and risk management systems. While hedging is a legitimate trading strategy when used within a single account, reverse trading across multiple accounts can be problematic, especially within the framework of prop trading firms that enforce strict risk and drawdown policies.",
    },
    {
      que: "What is Group Trading?",
      ans: "Group Trading refers to the coordinated action of multiple traders or multiple accounts under the same ownership taking identical or highly similar trading positions simultaneously across different Empire registrations. This practice is often employed to manipulate market outcomes, obscure individual trading performance, or bypass risk management systems.",
    },
  ],
];
