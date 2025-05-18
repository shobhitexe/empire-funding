export const RulesContent = [
  // Challenge Requirements
  [
    {
      que: "What happens after successfully completing both phases?",
      ans: "Upon passing both phases, traders receive a funded account and can begin trading with Empire's capital.",
    },
    {
      que: "Is there a time limit for each phase?",
      ans: "No, Empire gives unlimited time for both phases. However, if the account is inactive for 30 days, it will be closed.",
    },
    {
      que: "Daily Drawdown",
      ans: "All Empire accounts have a Maximum Daily Drawdown of based on the end-of-day closing balance or equity (whichever is higher). This drawdown is calculated daily at 22:05 UTC.",
    },
    {
      que: "Max Drawdown",
      ans: "All our Empire Challenge accounts have Maximum allowed drawdown from the initial balance. This maximum allowed drawdown can not be breached at any given time of your challenge.",
    },
    {
      que: "Profit Target",
      ans: `The Profit Target represents the amount of profit you need to reach during a specific Phase of the Challenge.<br/><br/>
      It is determined based on the profit earned from closed positions, meaning any currently open trades do not count toward the Profit Target.<br/><br/>
      To advance to Phase 2 and ultimately qualify for the Funded stage, you must close all active positions. For instance, if you achieve a 10% profit in Phase 1, you have successfully met the Profit Target. However, in the next Phase, you will begin again from a fresh starting point.<br/><br/>
      Our goal is to ensure traders meet profit targets through disciplined and consistent trading. To maintain this standard, we do not allow passing the Challenge through a single oversized trade or by placing multiple trades on the same asset in the same direction if they collectively contribute more than 70% of the Profit Target. Such approaches do not provide enough data to accurately assess your skill and trading consistency, which are key factors in our evaluation process.`,
    },
    {
      que: "Minimum Profitable Days",
      ans: `To successfully pass the Challenge, you must have at least three (or two for the One Step Challenge) profitable trading days. This rule cannot be bypassed or modified—you are required to trade for a minimum of three days in each phase.<br/><br/>
      A profitable day is defined as a day in which closed positions generate a positive profit of at least 0.5% of the initial account balance.`,
    },
    {
      que: "Inactivity",
      ans: `If your account remains inactive for 30 consecutive days, it will be closed.<br/><br/>
      Your Empire Accounts are deemed inactive and subject to breach if no activity (trade taken) occurs for a period of 30 days. This period starts right after the purchase of the challenge.<br/><br/>
      We reserve the right to close accounts that engage in minimal trading solely to avoid inactivity penalties. Our platform is designed for traders who show consistent engagement and a well-founded trading approach.`,
    },
  ],
  // Trading Settings & Conditions
  [
    {
      que: "Leverage & Commissions",
      ans: `Empire offers a structured and transparent trading environment, with specific leverage ratios and commission rates across various asset classes.<br/><br/>
      1:50 (FX), 1:20 (Metals) - Ability to upgrade to 1:75 (FX), 1:30 (Metals)`,
    },
    {
      que: "Spreads",
      ans: "Try our test account to check our tradeable assets and spreads.",
    },
    {
      que: "What Is a Trading Challenge?",
      ans: "To win the game, you need strong support and diligent preparation. Join For Traders Community.",
    },
  ],
  // What is Allowed with us?
  [
    {
      que: "High Impact News Trading",
      ans: `In an Empire Challenge Phase 1 and Phase 2, you can trade freely during all news releases. However news trading on Funded Account has restrictions.<br/><br/>
      Our Empire Traders trading on an Empire Funded Account are NOT allowed to execute any new trade or close an existing trade on the targeted instrument in the window of 2 minutes before until 2 minutes after the release of the below news announcements.<br/><br/>
      To clarify, we define executing a trade as opening or closing either a pending order (including stop loss or a take profit) or market execution. You are allowed to hold your trade(s) on the targeted instrument(s) that were opened more than 2 minutes before the restricted news event. `,
    },
    {
      que: "Use of Expert Advisors (EAs)",
      ans: "Empire permits the use of Expert Advisors in both its Challenge and Funded accounts.",
    },
    {
      que: "Copy Trading",
      ans: `Empire permits copy trading under specific conditions:<br/><br/>
      Same Account Types: Copy trading is allowed only between accounts of the same type. This means you can copy trades from one Challenge account to another Challenge account, or from one Funded account to another Funded account.<br/><br/>
      Prohibition of Reversal Mode: Using automated software that engages in reverse trading (copying trades in a reversal pattern from the source) is strictly prohibited.<br/><br/>
      No Cross-Profile Copy Trading: Copy trading between different Empire profiles is strictly prohibited. Any attempt to replicate trades across different Empire accounts will result in the accounts being marked as breached and becoming non-tradeable.<br/><br/>
      No External Signal Copying: Copy trading signals or trades from external signal providers or other accounts (such as Prop Passing services) is strictly forbidden and may result in account breach.`,
    },
  ],
  // What is Forbidden with us?
  [
    {
      que: "HFT",
      ans: `At Empire, we prioritize fairness and transparency in our trading environment. Consequently, we do not allow High-Frequency Trading (HFT) on our platform.<br/><br/>
      HFT relies on speed and technology rather than traditional trading methods, which can disadvantage other traders. Our aim is to create an equitable environment where traders can succeed based on their skills and strategies, not just technological advantages.`,
    },
    {
      que: "Grid Trading",
      ans: `Grid trading is a strategy where traders place multiple buy and sell orders at predetermined price levels, creating a grid-like structure. This approach aims to profit from market fluctuations without the need to predict its direction.<br/><br/>
      Grid trading is a strategy where traders place multiple buy and sell orders at predetermined price levels, creating a grid-like structure. This approach aims to profit from market fluctuations without the need to predict its direction.`,
    },
    {
      que: "Tick Scalping",
      ans: `While the scalping strategies are allowed there is a restriction rule on the accounts that hold more than 50% for less than 120 seconds. This might result to account breach as considered as tick scalping that abuse the trading systems.`,
    },
    {
      que: "Reverse Trading",
      ans: `Reverse trading refers to the strategy of simultaneously opening opposing positions on different trading accounts, often across multiple firms. The primary intent behind this practice is to hedge bets, mitigate potential losses, or exploit discrepancies between account regulations and risk management systems. While hedging is a legitimate trading strategy when used within a single account, reverse trading across multiple accounts can be problematic, especially within the framework of prop trading firms that enforce strict risk and drawdown policies.<br/><br/>
      Signs and behavior, which includes risking the full daily loss on one trade, which often indicates reverse trading between different firms. If Reverse Trading or Arbitrage Hedging activity is detected on your Empire account, it will be marked as breached and will no longer be tradeable.`,
    },
    {
      que: "Gambling",
      ans: `Empire identifies and prohibits several trading behaviors that are characteristic of gambling:<br/><br/>
      One-Sided Bets: Placing large trades without proper risk management or diversification is considered a forbidden trading practice.<br/><br/>
      Overleveraging: Using excessive leverage to maximize potential profits can lead to significant losses and is discouraged.<br/><br/>
      Overexposure: Allocating a substantial portion of your account to a single trade or correlated trades increases risk and is not allowed.<br/><br/>
      Account Rolling: Transferring funds or trades between accounts to circumvent rules is prohibited.`,
    },
    {
      que: "What Happens If I Break the Rules?",
      ans: `If there is a serious violation of our rules, this is a violation that entitles us to remove you from the ongoing challenge and close all your accounts.<br/><br/>
      We recognize that everyone is only human and we distinguish between intentional and unintentional mistakes, so we consider each violation individually.`,
    },
  ],
];
