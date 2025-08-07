export const RulesContent = [
  // 2-Step Challenges
  [
    {
      que: "What will happen after successfully passing all evaluation phases?",
      ans: (
        <div>
          Upon passing both evaluation phases, traders will receive a funded
          account and can begin earning towards payouts.
        </div>
      ),
    },
    {
      que: "Timelimit",
      ans: (
        <div>
          We provide our traders with unlimited time to pass an evaluation.
          However, inactivity for 30 days will result in the account being
          closed.
        </div>
      ),
    },
    {
      que: "Daily Drawdown",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            Daily Drawdown refers to the maximum loss allowed, in a single
            trading day, before an account is breached. On our 2-Step Challenge
            Accounts, we allow for a{" "}
            <strong>5% Maximum Daily Drawdown limit.</strong>
          </div>

          <div>
            <div>
              Daily Drawdown limits are <strong>Static-trailing</strong> based
              from the <strong>initial account balance.</strong> Daily Drawdown
              Limits reset at the <strong>start of each trading day</strong>{" "}
              (UTC 00:00:00).
            </div>

            <div>
              <strong>Daily Drawdown limit (DDL)</strong> = Initial account
              balance x 0.95
            </div>

            <div>
              Maximum Daily Loss limits are also{" "}
              <strong>static-trailing</strong> based from the{" "}
              <strong>initial account balance.</strong> This means, traders will
              only be able to lose 5% of their initial account balance at any
              given time. Any profit made <strong>will not</strong> increase
              this threshold.
            </div>

            <div>
              <strong>Maximum Daily Loss (MDL)</strong> = Initial account
              balance x 0.05
            </div>
          </div>

          <div>
            The table below outlines the Maximum Daily Loss allowed under each
            account size:
          </div>

          <table className="table-auto border border-gray-400 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">
                  Account Size
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  Maximum Daily Loss
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$5,000</td>
                <td className="border border-gray-400 px-4 py-2">$250</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$10,000</td>
                <td className="border border-gray-400 px-4 py-2">$500</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$25,000</td>
                <td className="border border-gray-400 px-4 py-2">$1,250</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$50,000</td>
                <td className="border border-gray-400 px-4 py-2">$2,500</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$100,000</td>
                <td className="border border-gray-400 px-4 py-2">$5,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$200,000</td>
                <td className="border border-gray-400 px-4 py-2">$10,000</td>
              </tr>
            </tbody>
          </table>
          <div>
            We want to encourage trading with proper risk management and
            structure, as opposed to a gambling mindset. If our system detects
            that your equity has fallen below the Daily Drawdown Limit, all open
            positions will be automatically closed, and your account will be
            closed and marked as breached.
          </div>
        </div>
      ),
    },

    {
      que: "Max Drawdown",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            Max Drawdown refers to the <strong>maximum loss</strong> allowed
            before an account is breached. We allow for a generous{" "}
            <strong>12% max drawdown</strong> across all of our 2-Step Challenge
            accounts.
          </div>

          <div>
            Max Drawdown is <strong>trailing-based</strong> on the{" "}
            <strong>highest equity point</strong> achieved on the account. This
            limit adjusts at the end of each trading day (UTC: 00:00:00) if a
            new high is achieved.
          </div>

          <div>
            <strong>Maximum Drawdown Limit (MDL)</strong> = Highest equity point
            x 0.88
          </div>

          <div>
            Maximum Loss Limit is 12% of the{" "}
            <strong>highest equity point</strong> the account has achieved.
            <br />
            <br />
            <strong>Maximum Loss Limit (MLL)</strong>= Highest equity point x
            0.12
          </div>

          <div>
            <div>See the following example:</div>

            <ul>
              {" "}
              <li>
                - Trader A purchases Empire Funded&apos;s 2-Step 100K Challenge.
              </li>{" "}
              <li>
                - Their Max Drawdown Limits are defined as follows:{" "}
                <ul className="ml-4">
                  {" "}
                  <li>
                    - Highest Equity Point: $100,000{" "}
                    <em>(Account starting balance)</em>
                  </li>{" "}
                  <li>
                    - Max Drawdown Limit: $100,000 x 0.88 ={" "}
                    <strong>$88,000</strong>
                  </li>{" "}
                  <li>
                    - Max Loss Limit: $100,000 x 0.12 = <strong>$12,000</strong>
                  </li>{" "}
                </ul>{" "}
              </li>{" "}
              <li>
                - Trader A achieves a gain of $5,782 on trading day one. Their
                new Max Drawdown Limits are re-calculated at the end of trading
                day one based on the account&apos;s highest equity point:
                <ul className="ml-4">
                  {" "}
                  <li>
                    - Highest Equity Point: $100,000 + $5,782 ={" "}
                    <strong>$105,782</strong>
                  </li>{" "}
                  <li>
                    - Max Drawdown Limit: $105,782 x 0.88 ={" "}
                    <strong>$93,088.16</strong> (new MDL)
                  </li>{" "}
                  <li>
                    - Max Loss Limit: $105,782 x 0.12 ={" "}
                    <strong>$12,693.84</strong> (new MLL limit)
                  </li>{" "}
                </ul>{" "}
              </li>{" "}
              <li>
                - Trader A proceeds to end trading day two with losses amounting
                to $5,040. Since their account did not reach a new highest
                equity point, their Max Drawdown Limit remains the same.
              </li>{" "}
              <li>
                - If they lose a further $7,653.84, they will have breached
                their Max Loss Limit.
              </li>{" "}
            </ul>
          </div>

          <div>
            Your account equity cannot drop below 12% of the highest equity
            point achieved on the account at any time. If our system detects
            that your equity has fallen below this threshold, all open positions
            will be automatically closed, and your account will be marked as
            breached.
          </div>
        </div>
      ),
    },

    {
      que: "Absolute Drawdown",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            Absolute Drawdown refers to the maximum loss allowed before an
            account is breached. We allow for a generous 12% drawdown across all
            2-Step Challenge accounts.
          </div>

          <div>
            <div>
              Absolute Drawdown is <strong>equity-based</strong> on the total
              loss from the <strong>initial account balance.</strong> See the
              following example below:{" "}
            </div>

            <ul>
              <li>
                - Trader A on our 2-Step 100K Challenge endures losses amounting
                to $10,000, their current account balance is $90,000.{" "}
              </li>
              <li>
                - If they lose a further $2,000, their account will be breached.
              </li>
            </ul>
          </div>

          <div>
            The table below outlines the maximum absolute loss allowed for each
            2-Step Challenge Account:
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
            initial account size at any time. If our system detects that your
            equity has fallen below this threshold, all open positions will be
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
            The Profit Target represents the total amount of profit required to
            pass a Challenge Phase. The amount is based on the initial account
            balance.
            <br />
            <br />
            <div>
              Our 2-Step Challenge Accounts require the following Profit Targets
              to be met:
              <ul>
                <li>- Phase One: 6%</li>
                <li>- Phase Two: 5%</li>
              </ul>
            </div>
            <br />
            The Profit Target is balance-based meaning only{" "}
            <strong>closed positions</strong>
            contribute to the profit earned on an account. Open positions{" "}
            <strong>DO NOT</strong>
            contribute to the profit target.
            <br />
            <br />
            You must close all open positions to advance through to the next
            phase.
            <br />
            <br />
            The table below outlines the minimum equity required, for each
            2-Step Challenge Account, to satisfy the Profit Target:
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
                    Phase One - Minimum Equity
                  </th>
                  <th className="border border-gray-400 px-4 py-2">
                    Phase Two - Minimum Equity
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$5,000</td>
                  <td className="border border-gray-400 px-4 py-2">$5,300</td>
                  <td className="border border-gray-400 px-4 py-2">$5,300</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$10,000</td>
                  <td className="border border-gray-400 px-4 py-2">$10,600</td>
                  <td className="border border-gray-400 px-4 py-2">$10,600</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$25,000</td>
                  <td className="border border-gray-400 px-4 py-2">$26,500</td>
                  <td className="border border-gray-400 px-4 py-2">$26,500</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$50,000</td>
                  <td className="border border-gray-400 px-4 py-2">$53,000</td>
                  <td className="border border-gray-400 px-4 py-2">$53,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$100,000</td>
                  <td className="border border-gray-400 px-4 py-2">$106,000</td>
                  <td className="border border-gray-400 px-4 py-2">$106,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">$200,000</td>
                  <td className="border border-gray-400 px-4 py-2">$212,000</td>
                  <td className="border border-gray-400 px-4 py-2">$212,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            Our goal is to ensure traders meet profit targets through
            disciplined and consistent trading. To maintain this standard, we do
            not allow passing challenges with a{" "}
            <strong>single oversized trade</strong> or by placing{" "}
            <strong>
              multiple trades on the same asset in the same direction
            </strong>{" "}
            if they collectively contribute to more than{" "}
            <strong>70% of the Profit Target.</strong>
          </div>
        </div>
      ),
    },
    {
      que: "Minimum Profitable Days",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            To pass a Challenge phase, traders must satisfy a minimum of{" "}
            <strong>three Profitable Days.</strong>
          </div>

          <div>
            Trading days are considered profitable if all{" "}
            <strong>closed positions</strong>
            equate to a minimum gain of <strong>0.05%</strong> of the{" "}
            <strong>initial account balance</strong> at the end of the trading
            day (UTC: 00:00:00).
          </div>

          <div>
            The table below outlines the minimum gain required to end on, by the
            end of each trading day, to satisfy the profitable day requirement:
          </div>

          <table className="table-auto border border-gray-400 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">
                  Account Size
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  Minimum Gain
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$5,000</td>
                <td className="border border-gray-400 px-4 py-2">$25</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$10,000</td>
                <td className="border border-gray-400 px-4 py-2">$50</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$25,000</td>
                <td className="border border-gray-400 px-4 py-2">$125</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$50,000</td>
                <td className="border border-gray-400 px-4 py-2">$250</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$100,000</td>
                <td className="border border-gray-400 px-4 py-2">$500</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$200,000</td>
                <td className="border border-gray-400 px-4 py-2">$1000</td>
              </tr>
            </tbody>
          </table>
          <div>
            See the following example:
            <ul>
              <li>
                - Trader A purchases Empire Funded&apos;s 2-Step 100K Challenge.
              </li>
              <li>
                - Trader A achieves a gain of $626 by the end of trading day
                one. Since this is a gain of 0.06% on the initial account
                balance ($100,000), it satisfies the requirement and is counted
                as <strong>one profitable trading day.</strong>
              </li>
              <li>
                - Trader A achieves a gain of $314 by the end of trading day
                two. Since this is a gain of 0.03% on the initial account
                balance, it does not satisfy the Profitable Day requirement as
                it is not counted as one.
              </li>
              <li>
                - Trader A still requires <strong>two more</strong> Profitable
                Days to pass their challenge phase.
              </li>
            </ul>
            <div>
              This is a hard requirement, meaning even if you reach the Profit
              Target, you will not be able to pass the challenge unless you
              satisfy this rule.{" "}
            </div>
          </div>
        </div>
      ),
    },
    {
      que: "Inactivity",
      ans: (
        <div>
          If your account remains inactive for 30 consecutive days, it will be
          closed. Accounts are deemed inactive and subject to breach if no
          activity (open or closed position) occurs for 30 days. This period
          starts right after the purchase of the challenge and resets after each
          sign of activity.
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
  // 1-Step Challenges
  [
    {
      que: "What will happen after successfully passing all evaluation phases?",
      ans: (
        <div>
          Upon passing both evaluation phases, traders will receive a funded
          account and can begin earning towards payouts.
        </div>
      ),
    },
    {
      que: "Timelimit",
      ans: (
        <div>
          We provide our traders with unlimited time to pass an evaluation.
          However, inactivity for 30 days will result in the account being
          closed.
        </div>
      ),
    },
    {
      que: "Daily Drawdown",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            Daily Drawdown refers to the maximum loss allowed, in a single
            trading day, before an account is breached. On our 1-Step Challenge
            Accounts, we allow for a<strong>3% Daily Drawdown Limit.</strong>
          </div>

          <div>
            <div>
              Daily Drawdown limits are <strong>Static-trailing</strong> based
              from the <strong>initial account balance.</strong> Daily Drawdown
              Limits reset at the <strong>start of each trading day</strong>{" "}
              (UTC 00:00:00).
            </div>

            <div>
              <strong>Daily Drawdown limit (DDL)</strong> = Initial account
              balance x 0.97
            </div>

            <div>
              Maximum Daily Loss limits are also{" "}
              <strong>static-trailing</strong> based from the{" "}
              <strong>initial account balance.</strong> This means, traders will
              only be able to lose 5% of their initial account balance at any
              given time. Any profit made <strong>will not</strong> increase
              this threshold.
            </div>

            <div>
              <strong>Maximum Daily Loss (MDL)</strong> = Initial account
              balance x 0.03
            </div>
          </div>

          <div>
            The table below outlines the Maximum Daily Loss allowed under each
            account size:
          </div>

          <table className="table-auto border border-gray-400 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">
                  Account Size
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  Maximum Daily Loss
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
            We want to encourage trading with proper risk management and
            structure, as opposed to a gambling mindset. If our system detects
            that your equity has fallen below the Daily Drawdown Limit, all open
            positions will be automatically closed, and your account will be
            closed and marked as breached.
          </div>
        </div>
      ),
    },
    {
      que: "Max Drawdown",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            Max Drawdown refers to the <strong>maximum loss</strong> allowed
            before an account is breached. We allow for a generous{" "}
            <strong>7% max drawdown</strong> across all of our 1-Step Challenge
            accounts.
          </div>

          <div>
            Max Drawdown is <strong>trailing-based</strong> on the{" "}
            <strong>highest equity point</strong> achieved on the account. This
            limit adjusts at the end of each trading day (UTC: 00:00:00) if a
            new high is achieved.
          </div>

          <div>
            <strong>Maximum Drawdown Limit (MDL)</strong> = Highest equity point
            x 0.93
          </div>

          <div>
            Maximum Loss Limit is 7% of the{" "}
            <strong>highest equity point</strong> the account has achieved.
            <br />
            <br />
            <strong>Maximum Loss Limit (MLL)</strong>= Highest equity point x
            0.07
          </div>

          <div>
            <div>See the following example:</div>

            <ul>
              {" "}
              <li>
                - Trader A purchases Empire Funded&apos;s 1-Step 100K Challenge.
              </li>{" "}
              <li>
                - Their Max Drawdown Limits are defined as follows:{" "}
                <ul className="ml-4">
                  {" "}
                  <li>
                    - Highest Equity Point: $100,000{" "}
                    <em>(Account starting balance)</em>
                  </li>{" "}
                  <li>
                    - Max Drawdown Limit: $100,000 x 0.93 ={" "}
                    <strong>$93,000</strong>
                  </li>{" "}
                  <li>
                    - Max Loss Limit: $100,000 x 0.07 = <strong>$7,000</strong>
                  </li>{" "}
                </ul>{" "}
              </li>{" "}
              <li>
                - Trader A achieves a gain of $2,617.19 on trading day one.
                Their new Max Drawdown Limits are re-calculated at the end of
                trading day one based on the account&apos;s highest equity
                point:
                <ul className="ml-4">
                  {" "}
                  <li>
                    - Highest Equity Point: $100,000 + $2,617.19 ={" "}
                    <strong>$102,617.19</strong>
                  </li>{" "}
                  <li>
                    - Max Drawdown Limit: $105,782 x 0.93 ={" "}
                    <strong>$95,433.99</strong> (new MDL)
                  </li>{" "}
                  <li>
                    - Max Loss Limit: $105,782 x 0.07 ={" "}
                    <strong>$7,183.20</strong> (new MLL limit)
                  </li>{" "}
                </ul>{" "}
              </li>{" "}
              <li>
                - Trader A proceeds to end trading day two with losses amounting
                to $2,840. Since their account did not reach a new highest
                equity point, their Max Drawdown Limit remains the same.
              </li>{" "}
              <li>
                - If they lose a further $4343.2 they will have breached their
                Max Loss Limit.
              </li>{" "}
            </ul>
          </div>

          <div>
            Your account equity cannot drop below 7% of the highest equity point
            achieved on the account at any time. If our system detects that your
            equity has fallen below this threshold, all open positions will be
            automatically closed, and your account will be marked as breached.
          </div>
        </div>
      ),
    },
    {
      que: "Absolute Drawdown",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            Absolute Drawdown refers to the maximum loss allowed before an
            account is breached. We allow for a generous 12% drawdown across all
            1-Step Challenge accounts.
          </div>

          <div>
            <div>
              Absolute Drawdown is <strong>equity-based</strong> on the total
              loss from the <strong>initial account balance.</strong> See the
              following example below:{" "}
            </div>

            <ul>
              <li>
                - Trader A on our 1-Step 100K Challenge endures losses amounting
                to $10,000, their current account balance is $90,000.{" "}
              </li>
              <li>
                - If they lose a further $2,000, their account will be breached.
              </li>
            </ul>
          </div>

          <div>
            The table below outlines the maximum absolute loss allowed for each
            1-Step Challenge Account:
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
            initial account size at any time. If our system detects that your
            equity has fallen below this threshold, all open positions will be
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
            The Profit Target represents the total amount of profit required to
            pass a Challenge Phase. The amount is based on the initial account
            balance. Our 1-Step Challenge Accounts require an 8% profit target
            to pass.
            <br />
            <br />
            The Profit Target is balance-based meaning only{" "}
            <strong>closed positions</strong>
            contribute to the profit earned on an account. Open positions{" "}
            <strong>DO NOT</strong>
            contribute to the profit target.
            <br />
            <br />
            You must close all open positions to advance through the evaluation
            phase. Meeting the Profit Target will allow you to progress to the
            Funded Stage.
            <br />
            <br />
            The table below outlines the minimum equity required, for each
            1-Step Challenge Account, to satisfy the Profit Target:
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
                    Total balance required
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
            not allow passing challenges with a{" "}
            <strong>single oversized trade</strong> or by placing{" "}
            <strong>
              multiple trades on the same asset in the same direction
            </strong>{" "}
            if they collectively contribute to more than{" "}
            <strong>70% of the Profit Target.</strong>
          </div>
        </div>
      ),
    },
    {
      que: "Minimum Profitable Days",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            To pass a Challenge phase, traders must satisfy a minimum of{" "}
            <strong>three Profitable Days.</strong>
          </div>

          <div>
            Trading days are considered profitable if all{" "}
            <strong>closed positions</strong>
            equate to a minimum gain of <strong>0.05%</strong> of the{" "}
            <strong>initial account balance</strong> at the end of the trading
            day (UTC: 00:00:00).
          </div>

          <div>
            The table below outlines the minimum gain required to end on, by the
            end of each trading day, to satisfy the profitable day requirement:
          </div>

          <table className="table-auto border border-gray-400 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">
                  Account Size
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  Minimum Gain
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$5,000</td>
                <td className="border border-gray-400 px-4 py-2">$25</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$10,000</td>
                <td className="border border-gray-400 px-4 py-2">$50</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$25,000</td>
                <td className="border border-gray-400 px-4 py-2">$125</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$50,000</td>
                <td className="border border-gray-400 px-4 py-2">$250</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$100,000</td>
                <td className="border border-gray-400 px-4 py-2">$500</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">$200,000</td>
                <td className="border border-gray-400 px-4 py-2">$1000</td>
              </tr>
            </tbody>
          </table>
          <div>
            See the following example:
            <ul>
              <li>
                - Trader A purchases Empire Funded&apos;s 1-Step 100K Challenge.
              </li>
              <li>
                - Trader A achieves a gain of $626 by the end of trading day
                one. Since this is a gain of 0.06% on the initial account
                balance ($100,000), it satisfies the requirement and is counted
                as <strong>one profitable trading day.</strong>
              </li>
              <li>
                - Trader A achieves a gain of $314 by the end of trading day
                two. Since this is a gain of 0.03% on the initial account
                balance, it does not satisfy the Profitable Day requirement as
                it is not counted as one.
              </li>
              <li>
                - Trader A still requires <strong>two more</strong> Profitable
                Days to pass their challenge phase.
              </li>
            </ul>
            <div>
              This is a hard requirement, meaning even if you reach the Profit
              Target, you will not be able to pass the challenge unless you
              satisfy this rule.{" "}
            </div>
          </div>
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
  // Funded Accounts
  [
    {
      que: "Consistency Rule",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            The Consistency Rule refers to high-profit trading days. We have a
            45% Consistency Score on Funded accounts, and this must be met to
            request a payout. This means that the total profit gained cannot
            exceed 45% on a single trading day.{" "}
          </div>

          <ul>
            <li>
              - Trader A on a 100K Funded Account makes a gain of $2,000 on a
              single trading day.
            </li>
            <li>
              - They then make a further $1,000 the next trading day, totaling
              their profits to $3,000.
            </li>
            <li>
              - Trader A will be unable to request a payout since 60% ($2,000)
              of their profit came from a single trading day.
            </li>
            <li>
              - They will need to continue trading to decrease their consistency
              score.
            </li>
            <li>
              - Obtaining a further $2,000 will decrease their consistency score
              to 40% which means they will be eligible for a payout.
            </li>
          </ul>

          <div>
            If you do not meet the 45% consistency score, you can continue
            trading until you do. This means that the biggest winning day can
            not exceed 45% of the profits.
          </div>
        </div>
      ),
    },
    {
      que: "News Trading",
      ans: (
        <div>
          In an Empire Funded Challenge Phase 1 and Phase 2, you can trade
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
      que: "Max Allocation",
      ans: <div>We allow for a Maximum Allocation of 400K per trader.</div>,
    },
    {
      que: "Account Scaling",
      ans: <div>We allow for account scaling based on performance.</div>,
    },
  ],
  // Instant-Funded Accounts
  [
    {
      que: "90% What are Instant-Funded Accounts?",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            Instant offers a structured and scalable funded trader program
            designed to reward skilled traders and help them grow their capital
            while maintaining strict risk management. This program is ideal for
            disciplined traders aiming for long-term success.
          </div>

          <div>
            <div>
              Here are some of the highlights of our Instant-Funded program:
            </div>

            <ul>
              <li>
                - <strong>Access to Capital:</strong> Start trading with
                company-funded accounts, reducing personal risk.
              </li>
              <li>
                - <strong>Scaling Plan:</strong> Increase account size as you
                hit performance milestones.
              </li>
              <li>
                - <strong>Profit Sharing:</strong> Earn upto{" "}
                <strong>90% of the profits.</strong>
              </li>
              <li>
                - <strong>On-Demand Payouts:</strong> Withdraw your share
                whenever you meet profit targets.
              </li>
              <li>
                - <strong>No Personal Capital Risk:</strong> Trade without
                risking your own money.
              </li>
              <li>
                - <strong>Clear Rules & Transparent Structure:</strong> Designed
                to encourage sustainable trading.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      que: "Profit Target",
      ans: (
        <div className="flex flex-col gap-4">
          To request a payout on an Instant you must achieve a minimum of 8%
          profit on your starting balance.
        </div>
      ),
    },
    // {
    //   que: "Consistency Rule",
    //   ans: (
    //     <div className="flex flex-col gap-4">
    //       <div>
    //         The Consistency Rule refers to high-profit trading days. We have a
    //         45% Consistency Score on Funded accounts, and this must be met to
    //         request a payout. This means that the total profit gained cannot
    //         exceed 45% on a single trading day.{" "}
    //       </div>

    //       <ul>
    //         <li>
    //           - Trader A on a 100K Funded Account makes a gain of $2,000 on a
    //           single trading day.
    //         </li>
    //         <li>
    //           - They then make a further $1,000 the next trading day, totaling
    //           their profits to $3,000.
    //         </li>
    //         <li>
    //           - Trader A will be unable to request a payout since 60% ($2,000)
    //           of their profit came from a single trading day.
    //         </li>
    //         <li>
    //           - They will need to continue trading to decrease their consistency
    //           score.
    //         </li>
    //         <li>
    //           - Obtaining a further $2,000 will decrease their consistency score
    //           to 40% which means they will be eligible for a payout.
    //         </li>
    //       </ul>

    //       <div>
    //         If you do not meet the 45% consistency score, you can continue
    //         trading until you do. This means that the biggest winning day can
    //         not exceed 45% of the profits.
    //       </div>
    //     </div>
    //   ),
    // },

    {
      que: "Drawdown",
      ans: (
        <div>
          Considering the nature of Instant-Funding, our drawdown requirements
          are stricter than Challenge Accounts. <br />
          <br />
          Daily Drawdown is set at 3%
        </div>
      ),
    },

    {
      que: "Consistency Rule",
      ans: (
        <div>
          The Consistency Rule refers to high-profit trading days. We have a 45%
          Consistency Score on Funded accounts, and this must be met to request
          a payout. This means that the total profit gained cannot exceed 45% on
          a single trading day.
          <br />
          <br />
          For example:
          <ul>
            <li>
              - Trader A on a 100K Funded Account gains $2,000 on a single
              trading day.
            </li>
            <li>
              - They then make a further $1,000 the next trading day, totaling
              their profits to $3,000.
            </li>
            <li>
              - Trader A will be unable to request a payout since 60% ($2,000)
              of their profit came from a single trading day.
            </li>
            <li>
              - They will need to continue trading to decrease their consistency
              score.
            </li>
            <li>
              - Obtaining a further $2,000 will decrease their consistency score
              to 40% which means they will be eligible for a payout.
            </li>
          </ul>
          <br />
          If you do not meet the 45% consistency score, you can continue trading
          until you do. This means that the biggest winning day can not exceed
          45% of the profits.
        </div>
      ),
    },

    {
      que: "Holding time restrictions",
      ans: <div>All trades must be held for a minimum of 60 minutes.</div>,
    },

    {
      que: "Stop Loss Requirement",
      ans: (
        <div>
          Stop Losses are mandatory across all our Instant-Funded Accounts
          <br />
          <br />
          Each trade must contain a Stop Loss Order. Any trades closed without a
          Stop Loss Order will not count, and any profits gained will be
          deducted at the payout.
          <br />
          <br />
          Opening consecutive positions without placing a Stop Loss will result
          in a single strike. After three strikes, your account will be
          breached.
        </div>
      ),
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
      que: "Permitted vs Prohibited actions",
      ans: (
        <div>
          While we allow the vast majority, we do possess limitations on
          specific trading strategies and methods. This information can be found
          here:
        </div>
      ),
    },
  ],
  //Payouts and Scaling
  [
    {
      que: "When can I request my payout",
      ans: (
        <div>
          <strong>For the 1-step evaluation,</strong> you can request a payout
          every 30 days during the live phase, starting from the date of your
          first placed trade. No minimum number of trading days is required.
          However, each trade must have a{" "}
          <strong>minimum duration of 2 minutes</strong> and must follow the
          other rules to qualify for withdrawal
          <br />
          <br />
          <strong>For the 2-step evaluation,</strong>
          you can request a payout every 5 days during the live phase, starting
          from the date of your first placed trade. No minimum number of trading
          days is required. However, each trade must have a{" "}
          <strong>minimum duration of 1 minutes</strong> and must follow the
          other rules to qualify for withdrawal.
        </div>
      ),
    },
    {
      que: "Payout Cycle Limits 🧾",
      ans: (
        <div>
          For <strong>1-Step Accounts:</strong>
          <br />
          The <strong>maximum payout per cycle is capped at 7%</strong> of your
          account&apos;s starting balance. This means that even if you generate
          more profit, only up to 7% will be eligible for withdrawal in each
          payout request. Any excess profit remains in your account for future
          payouts.
          <br />
          <br />
          For <strong>2-Step Accounts:</strong>
          <br />
          The <strong>maximum payout per cycle</strong> is set at{" "}
          <strong>10%</strong> of your starting balance. Similar to the 1-step
          setup, any profit beyond the 10% cap won&apos;t be included in the
          current payout and can&apos;t be added/withdrawn in the next cycle.
        </div>
      ),
    },
    {
      que: "Payout Period",
      ans: (
        <div>
          Our Payout Period is Bi-weekly (14 days).
          <br />
          <br />
          Traders may request a Payout at the end of each Payout Period.
          <br />
          <br />
          Payouts are subject to approval by our team, and will be responded to
          within 48 hours after making a request.
        </div>
      ),
    },
    {
      que: "Payout Time",
      ans: (
        <div>
          Approved payouts will be deposited into your account within 24 hours
          or sooner.
        </div>
      ),
    },
    {
      que: "Payout Delays",
      ans: (
        <div>
          We guarantee that payout requests will be responded to within 48
          hours. If we fail to do so, we will deposit $2,500 into your account.
        </div>
      ),
    },
    {
      que: "Consistency Rule",
      ans: (
        <div>
          Our Payout Consistency Rule operates similar to the Funded
          Account&apos;s Consistency Rule.
          <br />
          <br />
          <strong> Daily Profit Limit</strong>
          <br />
          No single trading day&apos;s profit may exceed <strong>45%</strong> of
          the total Profit for the payout period.
          <br />
          For instance, if the total Profit over the Payout Period was $10,000,
          no single day&apos;s profit should exceed $4,500. Any profits above
          this limit are excluded from the payout.
          <br />
          <br />
          <strong> Daily Profit Limit</strong>
          <br />
          No individual trade can exceed <strong>40%</strong> of the total
          requested Profit for the payout period.
          <br />
          For example, if the total Profit is $10,000, a single trade cannot be
          responsible for generating $4,000 or more in that payout period.
          Profits above this limit will be excluded in the Payout.
        </div>
      ),
    },
    {
      que: "Approved vs Prohibited amounts",
      ans: (
        <div>
          During our evaluation of a payout request, if certain amounts are tied
          to trades that violate our rules, we will not include this in the
          final payout amount.
          <br />
          <br />
          For instance, if a trader requests a payout for $1,000 but $400 is
          tied to trades that violated our rules, the trader will only be
          eligible for a payout of $600.
        </div>
      ),
    },
    {
      que: "Minimum Payout Requirement",
      ans: (
        <div>
          The Minimum Payout Requirement on accounts below $25,000 is $1.
          <br />
          <br />
          On accounts that are above $25,000, we require a minimum of 5% gain on
          the initial account balance to request a payout.
        </div>
      ),
    },
    {
      que: "Account Scaling",
      ans: (
        <div>
          We provide the option to scale your account in place of a Payout.
          Account Scaling refers to increasing the initial balance of your
          Funded Account. We offer the opportunity to scale your account by
          double the Payout Amount.
          <br />
          <br />
          For instance, on a 100K Funded Account, if you have made a gain of
          $10,000 and have reached the end of the Payout Period. You may request
          to Scale your initial account size by $20,000, as opposed to receiving
          a Payout.
          <br />
          <br />
          Accounts may be scaled up to $1 million in capital. If you wish to
          scale further, please contact us.
        </div>
      ),
    },
    {
      que: "Challenge Fee Refund",
      ans: (
        <div>
          You will be refunded your challenge fee after passing your evaluation
          and upon achieving your third payout on your Funded Account.
        </div>
      ),
    },
  ],
  //Prohibited Actions
  [
    {
      que: "News Trading",
      ans: (
        <div>
          You may trade news freely on our Challenge accounts. However, we
          implement restrictions on Funded Accounts.
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
          detects profits being made in this window, they will be deducted
          during the payout.
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
    {
      que: "HFT",
      ans: (
        <div>
          We do not allow High-Frequency Trading (HFT) on our platform.
          <br />
          <br />
          HFT relies on speed and technology rather than actual analysis. Our
          aim is to create a fair and transparent environment where traders
          succeed based on their skill and discipline, rather than technological
          advantages
        </div>
      ),
    },
    {
      que: "Grid Trading",
      ans: (
        <div>
          We do not allow Grid-Trading on our platform.
          <br />
          <br />
          Grid-trading involves placing multiple buy and sell orders at
          predetermined price levels, creating a &apos;grid-like&apos;
          structure. This approach aims to profit from market fluctuations
          without the need to predict its direction.
        </div>
      ),
    },
    {
      que: "Tick Scalping",
      ans: (
        <div>
          While scalping strategies are allowed, there is a restriction on the
          accounts that hold more than 50% for less than 120 seconds. This will
          result in an account breach as it is considered as &apos;tick
          scalping&apos; and an abuse of trading systems.
        </div>
      ),
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
          abuse of trading systems. Any signs of reverse trading detected on
          your account will be marked as a breach.
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
          <br />
          One-sided bets: Placing large trades without proper risk management or
          diversification is considered a forbidden trading practice.
          <br />
          <br />
          Over-leveraging: Using excessive leverage to maximise potential
          profits can lead to significant losses and is therefore discouraged.
          <br />
          <br />
          Overexposure: Allocating a substantial portion of your account to a
          single trade or correlated trades is not permitted.
          <br />
          <br />
          Account Rolling: Transferring funds or trades between accounts to
          circumvent rules is prohibited.
        </div>
      ),
    },
    {
      que: "What happens if I win a giveaway?",
      ans: (
        <div>
          Congratulations!
          <br />
          <br />
          If you have won any of our giveaways, our support team will be in
          contact with you shortly.
          <br />
          <br />
          Once you have proven your identity, you will receive your account
          credentials shortly.
        </div>
      ),
    },
    {
      que: "What are the rules on giveaway accounts?",
      ans: (
        <div>
          Giveaway accounts follow the same rules regulating our 2-Step
          Challenge accounts. However, there are some additional rules
          concerning payouts.
          <br />
          <br />
          Giveaway accounts require a minimum of 10% profit to be achieved
          before requesting a payout in the Funded Account phase.
          <br />
          <br />
          Giveaway accounts contain a 3% profit cap per payout period. This
          means, the total profit you may withdraw from a giveaway account will
          always be 3% of the initial balance.
          <br />
          <br />
          The first withdrawal on a giveaway account is set as an automatic
          purchase of a 2-Step Challenge account of equal value.
        </div>
      ),
    },
  ],
];
