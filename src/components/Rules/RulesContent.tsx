export const RulesContent = [
  // Challenge Requirements
  [
    {
      que: "What will happen after successfully passing all evaluation phases?",
      ans: "Upon passing, traders will receive a funded account and can begin earning towards payouts.",
    },
    {
      que: "Is there a time limit for each phase?",
      ans: "Absolutely not! We provide our traders with unlimited time to pass evaluation phases. However, inactivity for 30 days will result in the account being closed.",
    },
    {
      que: "Daily Drawdown",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            The Maximum Daily Drawdown allowed is 3% from the current balance,
            breaching this will result in the account being closed.
          </div>

          <table className="table-auto border border-gray-400 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">
                  Account Size
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  Minimum Equity Allowed
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$5,000</td>
                <td className="border border-gray-400 px-4 py-2">$150</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$10,000</td>
                <td className="border border-gray-400 px-4 py-2">$300</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$25,000</td>
                <td className="border border-gray-400 px-4 py-2">$750</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$50,000</td>
                <td className="border border-gray-400 px-4 py-2">$1,500</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$100,000</td>
                <td className="border border-gray-400 px-4 py-2">$3,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$200,000</td>
                <td className="border border-gray-400 px-4 py-2">$6,000</td>
              </tr>
            </tbody>
          </table>
          <div>
            If our system detects that your equity has fallen below this
            threshold, all open positions will be automatically closed, and your
            account will be marked as breached.
          </div>
        </div>
      ),
    },
    {
      que: "Maximum Drawdown",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            All Empire Trading evaluations have static Drawdown limitations. The
            Maximum Drawdown allowed is 12% from the initial balance, breaching
            this will result in the account being closed.
          </div>

          <table className="table-auto border border-gray-400 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">
                  Account Size
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  Minimum Equity Allowed
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$5,000</td>
                <td className="border border-gray-400 px-4 py-2">$4,400</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$10,000</td>
                <td className="border border-gray-400 px-4 py-2">$8,800</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$25,000</td>
                <td className="border border-gray-400 px-4 py-2">$22,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$50,000</td>
                <td className="border border-gray-400 px-4 py-2">$44,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$100,000</td>
                <td className="border border-gray-400 px-4 py-2">$88,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$200,000</td>
                <td className="border border-gray-400 px-4 py-2">$176,000</td>
              </tr>
            </tbody>
          </table>
          <div>
            Your account equity will not be allowed to drop below 12% of your
            account size at any time. If our system detects that your equity has
            fallen below this threshold, all open positions will be
            automatically closed, and your account will be marked as breached.
          </div>
        </div>
      ),
    },
    {
      que: "Profit Target",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            The profit target represents the total amount of profit you need to
            reach during a specific Phase of the Challenge.
            <br />
            <br />
            It is determined based on the profit earned from closed positions,
            meaning open trades do not count.
            <br />
            <br />
            To advance through each phase, you must close all active positions.
            For instance, in our 2-Step Evaluation, if you achieve the 6% profit
            in Phase One, you have successfully met the Profit Target. This will
            then allow you to progress to Phase Two of the challenge, where your
            account will be reset to the initial balance.
          </div>

          <div>
            <div className="border border-gray-400 px-4 py-2">
              2-Step Challenge
            </div>

            <table className="table-auto border border-gray-400 w-full text-left">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">
                    Account Size
                  </th>
                  <th className="border border-gray-400 px-4 py-2">
                    Phase One - Profit Target
                  </th>
                  <th className="border border-gray-400 px-4 py-2">
                    Phase Two - Profit Target
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$5,000</td>
                  <td className="border border-gray-400 px-4 py-2">$5,300</td>
                  <td className="border border-gray-400 px-4 py-2">$5,250</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$10,000</td>
                  <td className="border border-gray-400 px-4 py-2">$10,600</td>
                  <td className="border border-gray-400 px-4 py-2">$10,500</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$25,000</td>
                  <td className="border border-gray-400 px-4 py-2">$26,500</td>
                  <td className="border border-gray-400 px-4 py-2">$26,250</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$50,000</td>
                  <td className="border border-gray-400 px-4 py-2">$53,000</td>
                  <td className="border border-gray-400 px-4 py-2">$52,500</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$100,000</td>
                  <td className="border border-gray-400 px-4 py-2">$106,000</td>
                  <td className="border border-gray-400 px-4 py-2">$105,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$200,000</td>
                  <td className="border border-gray-400 px-4 py-2">$212,000</td>
                  <td className="border border-gray-400 px-4 py-2">$210,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <div className="border border-gray-400 px-4 py-2">
              1-Step Challenge
            </div>
            <table className="table-auto border border-gray-400 w-full text-left">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">
                    Account Size
                  </th>
                  <th className="border border-gray-400 px-4 py-2">
                    Profit Target
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$5,000</td>
                  <td className="border border-gray-400 px-4 py-2">$5,400</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$10,000</td>
                  <td className="border border-gray-400 px-4 py-2">$10,800</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$25,000</td>
                  <td className="border border-gray-400 px-4 py-2">$27,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$50,000</td>
                  <td className="border border-gray-400 px-4 py-2">$54,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$100,000</td>
                  <td className="border border-gray-400 px-4 py-2">$108,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$200,000</td>
                  <td className="border border-gray-400 px-4 py-2">$216,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            Our goal is to ensure traders meet profit targets through
            disciplined and consistent trading. To maintain this standard, we do
            not allow passing challenges with a single oversized trade or by
            placing multiple trades on the same asset in the same direction if
            they collectively contribute to more than 70% of the Profit Target.
          </div>
        </div>
      ),
    },
    {
      que: "Minimum Profitable Days",
      ans: (
        <div>
          To successfully pass the Challenge, you must have at least three (or
          two for the 1-Step Challenge) Profitable Trading Days. This rule
          cannot be bypassed or modified - you are required to trade for a
          minimum of three days in each phase. A profitable day is defined as a
          day in which closed positions generate a positive profit of at least
          0.5% of the initial account balance.
        </div>
      ),
    },
    {
      que: "Inactivity",
      ans: (
        <div>
          If your account remains inactive for 30 consecutive days, it will be
          closed. Accounts are deemed inactive and subject to breach if no
          activity (open or closed position) occurs for a period of 30 days.
          This period starts right after the purchase of the challenge and
          resets after each sign of activity.
          <br />
          <br />
          We reserve the right to close accounts that engage in minimal trading
          solely to avoid inactivity penalties. Our platform is designed for
          traders who show consistent engagement and a well-founded trading
          approach.
        </div>
      ),
    },
  ],
  // Trading Settings & Conditions
  [
    {
      que: "Leverage & Commissions",
      ans: (
        <div>
          We charge $7.5 per lot across all markets.
          <br />
          <br />
          We offer the following leverage across each market:
          <br />
          <br />
          <div>
            <div className="border border-gray-400 px-4 py-2">Leverage</div>
            <table className="table-auto border border-gray-400 w-full text-left">
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Forex</td>
                  <td className="border border-gray-400 px-4 py-2">1:50</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    Commodities
                  </td>
                  <td className="border border-gray-400 px-4 py-2">1:10</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Futures</td>
                  <td className="border border-gray-400 px-4 py-2">1:10</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Stock</td>
                  <td className="border border-gray-400 px-4 py-2">1:10</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Crypto</td>
                  <td className="border border-gray-400 px-4 py-2">1:5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
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
      ans: (
        <div>
          Let&apos;s face it, trading news is addictive, which is why we allow
          it!
          <br />
          We allow news trading in all our evaluation accounts. This means you
          can trade freely during all news releases. However, we draw the line
          once you are funded.
          <br />
          News trading is NOT allowed on a funded account. Funded Traders must
          refrain from opening new positions within a two minute window before
          and after the news release. However, positions opened prior to this
          window are permitted, and you may hold your trade(s) throughout the
          news event.
        </div>
      ),
    },
    {
      que: "Use of Expert Advisors (EAs)",
      ans: (
        <div>
          We allow the use of Expert Advisors in the Challenge Phase only.
        </div>
      ),
    },
    {
      que: "Copy Trading",
      ans: (
        <div>
          We allow copy trading under certain conditions:
          <br />
          <br />
          Same Account Types: Copy Trading is only allowed between accounts of
          the same type. This means you can copy trades from one Challenge
          account to another, or from one Funded account to another. But you
          cannot cross over and copy trades from a Funded account to a Challenge
          account and vice versa.
          <br />
          <br />
          Prohibition of Reversal Mode: Using automated software that engages in
          reverse trading (copying trades in a reversal pattern from the source)
          is strictly prohibited.
          <br />
          <br />
          No Cross-Profile Copy Trading: Copy trading between different Empire
          Trading accounts is strictly prohibited. Any attempt to replicate
          trades across different accounts will result in a breach.
          <br />
          <br />
          No External Signal Copying: Copy trading signals or trades from
          external signal providers or other accounts (such as Prop Passing
          services) is strictly forbidden and may result in an account breach.
        </div>
      ),
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
less than 120 seconds. This will result in an account breach as it is considered as 'tick scalping' and an
abuse of trading systems.`,
    },
    {
      que: "Reverse Trading",
      ans: (
        <div>
          Reverse trading is simultaneously opening opposing positions on
          different trading accounts, often across multiple firms. The intent of
          this practice is to hedge bets, mitigate potential losses, or exploit
          discrepancies between account regulations and risk management systems.
          While hedging is a legitimate trading strategy when used within a
          single account, reverse trading across multiple accounts is seen as an
          abuse of trading systems.
          <br />
          Any signs of reverse trading detected on your account will be marked
          as a breach.
        </div>
      ),
    },
    {
      que: "Gambling",
      ans: (
        <div>
          We prohibit several trading behavior that are characteristics of
          gambling:
          <br />
          One-sided bets: Placing large trades without proper risk management or
          diversification is considered a forbidden trading practice.
          <br />
          Over-leveraging: Using excessive leverage to maximise potential
          profits can lead to significant losses and is therefore discouraged.
          <br />
          Overexposure: Allocating a substantial portion of your account to a
          single trade or correlated trades is not permitted.
          <br />
          Account Rolling: Transferring funds or trades between accounts to
          circumvent rules is prohibited.
        </div>
      ),
    },
    {
      que: "What Happens If I Break the Rules?",
      ans: (
        <div>
          Any violation of our rules entitled us to remove you from the ongoing
          challenge and close all your accounts.
          <br />
          We recognise that unintentional mistakes can be made which is why we
          evaluate each violation separately and with extreme care.
        </div>
      ),
    },
  ],
  // Funded Requirements
  [
    {
      que: "Consistency Rule",
      ans: (
        <div>
          We have a 45% Consistency Score on Funded accounts, and this must be
          met to request a payout.
          <br />
          <br />
          If you do not meet the 45% consistency score, you can continue trading
          until you meet the consistency score. This means that the biggest
          winning day can not exceed 45% of the profits
        </div>
      ),
    },
    {
      que: "News Trading",
      ans: (
        <div>
          In an Empire Trading Challenge Phase 1 and Phase 2, you can trade
          freely during new releases. However, we implement restrictions on
          Funded Accounts.
          <br />
          <br />
          On a Funded Account, traders are NOT allowed to execute any new trade
          or close an existing trade on the targeted instrument in the window of
          two minutes before, and after the release of news.
          <br />
          <br />
          We consider a trade execution as opening or closing either a pending
          order (including Stop Loss or Take Profit) or market execution. You
          are allowed to hold your trade(s) on the targeted instrument(s) that
          were opened more than two minutes before the restricted news event. If
          you Stop Loss or Take Profit is activated/filled during the restricted
          time window, it is also considered an order execution. If our system
          detects profits being made in this window,{" "}
          <strong>they will be deducted during the payout.</strong>
        </div>
      ),
    },
    {
      que: "Stop Loss Requirement",
      ans: (
        <div>
          Stop Losses are mandatory across all our Funded Accounts
          <br />
          <br />
          Each trade must contain a Stop Loss Order. Any trades closed without a
          Stop Loss Order will not count, and any profits gained will be
          deducted at the payout.
        </div>
      ),
    },
    {
      que: "Drawdown",
      ans: (
        <div>
          Drawdown requirements in the Funded Stage are the same as
          Evaluation/Challenge Stages.
        </div>
      ),
    },
    {
      que: "Holding time restrictions",
      ans: <div>All trades must be held for a minimum of two minutes.</div>,
    },
    {
      que: "Lot size restrictions",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            We have a tiered lot size system based on your account balance. As
            your account grows, so does your maximum allowable lot size. This
            approach helps ensure your risk aligns with your capital.
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto border border-gray-400 w-full text-left">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">
                    Asset Class
                  </th>
                  <th className="border border-gray-400 px-4 py-2">$5K</th>
                  <th className="border border-gray-400 px-4 py-2">$10K</th>
                  <th className="border border-gray-400 px-4 py-2">
                    $15K/$25K
                  </th>
                  <th className="border border-gray-400 px-4 py-2">$50K</th>
                  <th className="border border-gray-400 px-4 py-2">$100K</th>
                  <th className="border border-gray-400 px-4 py-2">$200K</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">XAU/USD</td>
                  <td className="border border-gray-400 px-4 py-2">0.1</td>
                  <td className="border border-gray-400 px-4 py-2">0.2</td>
                  <td className="border border-gray-400 px-4 py-2">0.5</td>
                  <td className="border border-gray-400 px-4 py-2">1</td>
                  <td className="border border-gray-400 px-4 py-2">2</td>
                  <td className="border border-gray-400 px-4 py-2">4</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">XAG/USD</td>
                  <td className="border border-gray-400 px-4 py-2">0.2</td>
                  <td className="border border-gray-400 px-4 py-2">0.4</td>
                  <td className="border border-gray-400 px-4 py-2">1</td>
                  <td className="border border-gray-400 px-4 py-2">2</td>
                  <td className="border border-gray-400 px-4 py-2">4</td>
                  <td className="border border-gray-400 px-4 py-2">8</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">DJ30</td>
                  <td className="border border-gray-400 px-4 py-2">0.05</td>
                  <td className="border border-gray-400 px-4 py-2">0.1</td>
                  <td className="border border-gray-400 px-4 py-2">0.25</td>
                  <td className="border border-gray-400 px-4 py-2">0.5</td>
                  <td className="border border-gray-400 px-4 py-2">1</td>
                  <td className="border border-gray-400 px-4 py-2">2</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">NAS100</td>
                  <td className="border border-gray-400 px-4 py-2">0.1</td>
                  <td className="border border-gray-400 px-4 py-2">0.2</td>
                  <td className="border border-gray-400 px-4 py-2">0.5</td>
                  <td className="border border-gray-400 px-4 py-2">1</td>
                  <td className="border border-gray-400 px-4 py-2">2</td>
                  <td className="border border-gray-400 px-4 py-2">4</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">SP500</td>
                  <td className="border border-gray-400 px-4 py-2">0.4</td>
                  <td className="border border-gray-400 px-4 py-2">0.8</td>
                  <td className="border border-gray-400 px-4 py-2">2</td>
                  <td className="border border-gray-400 px-4 py-2">4</td>
                  <td className="border border-gray-400 px-4 py-2">8</td>
                  <td className="border border-gray-400 px-4 py-2">16</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">GER40.p</td>
                  <td className="border border-gray-400 px-4 py-2">0.25</td>
                  <td className="border border-gray-400 px-4 py-2">0.5</td>
                  <td className="border border-gray-400 px-4 py-2">1.25</td>
                  <td className="border border-gray-400 px-4 py-2">2.5</td>
                  <td className="border border-gray-400 px-4 py-2">5</td>
                  <td className="border border-gray-400 px-4 py-2">10</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">BTC/USD</td>
                  <td className="border border-gray-400 px-4 py-2">0.05</td>
                  <td className="border border-gray-400 px-4 py-2">0.1</td>
                  <td className="border border-gray-400 px-4 py-2">0.25</td>
                  <td className="border border-gray-400 px-4 py-2">0.5</td>
                  <td className="border border-gray-400 px-4 py-2">1</td>
                  <td className="border border-gray-400 px-4 py-2">2</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">ETH/USD</td>
                  <td className="border border-gray-400 px-4 py-2">2</td>
                  <td className="border border-gray-400 px-4 py-2">4</td>
                  <td className="border border-gray-400 px-4 py-2">10</td>
                  <td className="border border-gray-400 px-4 py-2">20</td>
                  <td className="border border-gray-400 px-4 py-2">40</td>
                  <td className="border border-gray-400 px-4 py-2">80</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    SOL/USD.p
                  </td>
                  <td className="border border-gray-400 px-4 py-2">2</td>
                  <td className="border border-gray-400 px-4 py-2">4</td>
                  <td className="border border-gray-400 px-4 py-2">10</td>
                  <td className="border border-gray-400 px-4 py-2">20</td>
                  <td className="border border-gray-400 px-4 py-2">40</td>
                  <td className="border border-gray-400 px-4 py-2">80</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Forex</td>
                  <td className="border border-gray-400 px-4 py-2">0.6</td>
                  <td className="border border-gray-400 px-4 py-2">1.2</td>
                  <td className="border border-gray-400 px-4 py-2">3</td>
                  <td className="border border-gray-400 px-4 py-2">6</td>
                  <td className="border border-gray-400 px-4 py-2">12</td>
                  <td className="border border-gray-400 px-4 py-2">24</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    Other Indices
                  </td>
                  <td className="border border-gray-400 px-4 py-2">0.3</td>
                  <td className="border border-gray-400 px-4 py-2">0.6</td>
                  <td className="border border-gray-400 px-4 py-2">1.5</td>
                  <td className="border border-gray-400 px-4 py-2">3</td>
                  <td className="border border-gray-400 px-4 py-2">6</td>
                  <td className="border border-gray-400 px-4 py-2">12</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    Other Crypto
                  </td>
                  <td className="border border-gray-400 px-4 py-2">5</td>
                  <td className="border border-gray-400 px-4 py-2">10</td>
                  <td className="border border-gray-400 px-4 py-2">25</td>
                  <td className="border border-gray-400 px-4 py-2">50</td>
                  <td className="border border-gray-400 px-4 py-2">100</td>
                  <td className="border border-gray-400 px-4 py-2">200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      que: "Copy Trading",
      ans: (
        <div>
          While we allow it in our Evaluation/Challenge Phase, it is prohibited
          on Funded Accounts.
        </div>
      ),
    },
    {
      que: "Expert Advisors (EAs)",
      ans: (
        <div>
          While we allow it in our Evaluation/Challenge Phase, it is prohibited
          on Funded Accounts.
        </div>
      ),
    },
  ],
];
