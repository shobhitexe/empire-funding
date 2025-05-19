export const RulesContent = [
  // Challenge Requirements
  [
    {
      que: "What will happen after successfully passing all evaluation phases?",
      ans: "Upon passing, traders will receive a funded account and can begin earning towards payouts with our capital",
    },
    {
      que: "Is there a time limit for each phase?",
      ans: "Absolutely not! We provide our traders with unlimited time to pass evaluation phases. However, inactivity for 30 days will result in the account being closed.",
    },
    {
      que: "Daily Drawdown",
      ans: "All accounts have a Maximum Daily Drawdown limit. Daily Drawdown is equity based and will reset at the end of each trading day. If the Maximum Daily Drawdown limit is breached, the account will be closed.",
    },
    {
      que: "Max Drawdown",
      ans: "All accounts have a Maximum Drawdown limit from the initial account balance. If the Maximum Drawdown limit is breached, the account will be closed.",
    },
    {
      que: "Profit Target",
      ans: `The Profit Target represents the amount of profit you need to reach during a specific Phase of the
Challenge.<br/><br/>It is determined based on the profit earned from closed positions, meaning any currently open trades do
not count toward the Profit Target.<br/><br/>To advance through each phase and ultimately qualify for the Funded stage, you must close all active
positions. For instance, if you achieve a 10% profit in Phase one, you have successfully met the Profit
Target. However, in the next Phase, you will begin again from a fresh starting point.<br/><br/>Our goal is to ensure traders meet profit targets through disciplined and consistent trading. To maintain
this standard, we do not allow passing the Challenge through a single oversized trade or by placing
multiple trades on the same asset in the same direction if they collectively contribute more than 70% of
the Profit Target. Such approaches do not provide enough data to accurately assess your skill and trading
consistency, which are key factors in our evaluation process.`,
    },
    {
      que: "Minimum Profitable Days",
      ans: `To successfully pass the Challenge, you must have at least three (or two for the One Step Challenge)
profitable trading days. This rule cannot be bypassed or modified—you are required to trade for a
minimum of three days in each phase.
A profitable day is defined as a day in which closed positions generate a positive profit of at least 0.5% of
the initial account balance.`,
    },
    {
      que: "Inactivity",
      ans: `If your account remains inactive for 30 consecutive days, it will be closed.
Accounts are deemed inactive and subject to breach if no activity (open or closed position) occurs for a
period of 30 days. This period starts right after the purchase of the challenge and resets after each sign of
activity.<br/><br/>We reserve the right to close accounts that engage in minimal trading solely to avoid inactivity penalties.
Our platform is designed for traders who show consistent engagement and a well-founded trading
approach.`,
    },
  ],
  // Trading Settings & Conditions
  [
    {
      que: "Leverage & Commissions",
      ans: `We offer a structured and transparent trading environment, with specific leverage ratios and commission
rates across various asset classes.<br/>Forex (FX) - 1:50<br/>Metals - 1:20 (ability to upgrade to 1:75)<br/>Crypto - 1:5`,
    },
    {
      que: "Spreads",
      ans: "Test our free demo account to check our spreads. We promise you won't regret it ;)",
    },
  ],
  // What we allow
  [
    {
      que: "High Impact News Trading",
      ans: `Let's face it, trading news is addictive, which is why we allow it!<br/>We allow news trading in all our evaluation accounts. This means you can trade freely during all news
releases. However, we draw the line once you are funded.<br/>News trading is NOT allowed on a funded account. Funded Traders must refrain from opening new
positions within a two minute window before and after the news release.
However, positions opened prior to this window are permitted, and you may hold your trade(s) throughout
the news event.`,
    },
    {
      que: "Use of Expert Advisors (EAs)",
      ans: "We allow the use of Expert Advisors in both Challenge and Funded accounts.",
    },
    {
      que: "Copy Trading",
      ans: `We allow copy trading under certain conditions:<br/><br/>Same Account Types: Copy Trading is only allowed between accounts of the same type. This means
you can copy trades from one Challenge account to another, or from one Funded account to another. But
you cannot cross over and copy trades from a Funded account to a Challenge account and vice versa.<br/><br/>Prohibition of Reversal Mode: Using automated software that engages in reverse trading (copying
trades in a reversal pattern from the source) is strictly prohibited.<br/><br/>No Cross-Profile Copy Trading: Copy trading between different Empire Trading accounts is strictly
prohibited. Any attempt to replicate trades across different accounts will result in a breach.<br/><br/>No External Signal Copying: Copy trading signals or trades from external signal providers or other
accounts (such as Prop Passing services) is strictly forbidden and may result in an account breach.`,
    },
  ],
  // What we don’t allow
  [
    {
      que: "HFT",
      ans: `We do not allow High-Frequency Trading (HFT) on our platform.
HFT relies on speed and technology rather than actual analysis. Our aim is to create a fair and
transparent environment where traders succeed based on their skill and discipline, rather than
technological advantages`,
    },
    {
      que: "Grid Trading",
      ans: `Grid-trading involves placing multiple buy and sell orders at predetermined price levels, creating a
'grid-like' structure. This approach aims to profit from market fluctuations without the need to predict its
direction.`,
    },
    {
      que: "Tick Scalping",
      ans: `While scalping strategies are allowed, there is a restriction on the accounts that hold more than 50% for
less than 120 seconds. This will result in an account breach as it is considered as ‘tick scalping’ and an
abuse of trading systems.`,
    },
    {
      que: "Reverse Trading",
      ans: `Reverse trading is simultaneously opening opposing positions on different trading accounts, often across
multiple firms. The intent of this practice is to hedge bets, mitigate potential losses, or exploit
discrepancies between account regulations and risk management systems. While hedging is a legitimate
trading strategy when used within a single account, reverse trading across multiple accounts is seen as
an abuse of trading systems.<br/>Any signs of reverse trading detected on your account will be marked as a breach.`,
    },
    {
      que: "Gambling",
      ans: `We prohibit several trading behavior that are characteristics of gambling:<br/>One-sided bets: Placing large trades without proper risk management or diversification is considered a
forbidden trading practice.<br/>Over-leveraging: Using excessive leverage to maximise potential profits can lead to significant losses
and is therefore discouraged.<br/>Overexposure: Allocating a substantial portion of your account to a single trade or correlated trades is
not permitted.<br/>Account Rolling: Transferring funds or trades between accounts to circumvent rules is prohibited.`,
    },
    {
      que: "What Happens If I Break the Rules?",
      ans: `Any violation of our rules entitled us to remove you from the ongoing challenge and close all your
accounts.<br/>We recognise that unintentional mistakes can be made which is why we evaluate each violation
separately and with extreme care.`,
    },
  ],
];
