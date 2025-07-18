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
      que: "Maximum Daily Drawdown",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            Maximum Daily Drawdown refers to the maximum loss allowed, in a
            single trading day, before an account is breached. On our 2-Step
            Challenge Accounts, we allow for a{" "}
            <strong>5% Maximum Daily Drawdown limit.</strong>
          </div>

          <div>
            <div>
              Maximum Daily Drawdown limits are <strong>static-based</strong> on
              the <strong>current account balance,</strong> and reset at the
              <strong>start</strong> of each new trading day. See the following
              example:
            </div>

            <ul>
              <li>
                - Trader A on our 2-Step 100K Challenge has taken a loss of
                $4,000 in a single trading day.{" "}
              </li>
              <li>
                - If they continue to trade and loss a further $1,000, they will
                have exceeded the Maximum Daily Drawdown limit and their account
                will be breached.{" "}
              </li>
              <li>
                - However, if they refrain from trading and wait until the next
                trading day, their Maximum Daily Drawdown Limit will be reset.
              </li>

              <li>
                - They may then lose a further $1,000 without breaching the
                account under this rule.
              </li>
            </ul>
          </div>

          <div>
            The table below outlines the maximum daily loss allowed for each
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
            that your equity has fallen below these thresholds, all open
            positions will be automatically closed, and your account will be
            closed and marked as breached.
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
            <br />
            The Profit Target is balance-based meaning only closed positions
            contribute to the profit earned on an account. Open positions DO NOT
            contribute to the profit target.
            <br />
            <br />
            You must close all open positions to advance through the evaluation
            phase. Meeting the Profit Target will allow you to progress to the
            Funded Stage.
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
            To pass a Challenge, traders must satisfy the Minimum Profitable
            Days amount. We require traders to maintain a minimum of three
            profitable days across all Challenge accounts and phases.
          </div>

          <div>
            <div>
              Trading days are considered Profitable if all closed trades equate
              to a minimum gain of 0.5% of your initial balance. We included the
              following example to articulate this rule:
            </div>

            <ul>
              <li>- Trader A holds a 2-Step 100K Challenge Account.</li>
              <li>
                - Trader A maintains a gain of $1,000 by the end of the trading
                day. Since this is a gain of 1% on the initial account balance,
                it satisfies the minimum requirement and is counted as{" "}
                <strong>one profitable trading day.</strong>
              </li>
              <li>
                - Trader A then maintains a gain of $300 by the end of the next
                trading day. Since this is a gain of 0.3% on the initial account
                balance, it does not satisfy the minimum requirement and is
                therefore, not considered a profitable trading day.
              </li>

              <li>
                - Trader A still needs <strong>two</strong> more profitable
                trading days to pass their challenge phase.
              </li>
            </ul>
          </div>

          <div>
            The table below outlines the maximum daily loss allowed for each
            2-Step Challenge Account:
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
            This is a hard requirement, meaning even if you reach the Profit
            Target, you will not be able to pass the challenge unless you
            satisfy this rule.
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
      que: "Maximum Daily Drawdown",
      ans: (
        <div className="flex flex-col gap-4">
          <div>
            Maximum Daily Drawdown refers to the maximum loss allowed, in a
            single trading day, before an account is breached. On our 1-Step
            Challenge Accounts, we allow for a{" "}
            <strong>3% Maximum Daily Drawdown limit.</strong>
          </div>

          <div>
            <div>
              Maximum Daily Drawdown limits are <strong>static-based</strong> on
              the <strong>current account balance,</strong> and reset at the
              <strong>start</strong> of each new trading day. See the following
              example:
            </div>

            <ul>
              <li>
                - Trader A on our 1-Step 100K Challenge has taken a loss of
                $2,000 in a single trading day.{" "}
              </li>
              <li>
                - If they continue to trade and loss a further $1,000, they will
                have exceeded the Maximum Daily Drawdown limit and their account
                will be breached.{" "}
              </li>
              <li>
                - However, if they refrain from trading and wait until the next
                trading day, their Maximum Daily Drawdown Limit will be reset.
              </li>

              <li>
                - They may then lose a further $1,000 without breaching the
                account under this rule.
              </li>
            </ul>
          </div>

          <div>
            The table below outlines the maximum daily loss allowed for each
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
            that your equity has fallen below these thresholds, all open
            positions will be automatically closed, and your account will be
            closed and marked as breached.
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
            balance.
            <br />
            <br />
            The Profit Target is balance-based meaning only closed positions
            contribute to the profit earned on an account. Open positions DO NOT
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
              1-Step Challenge
            </div>

            <table className="table-auto border border-gray-400 w-full text-left">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">
                    Account Size
                  </th>
                  <th className="border border-gray-400 px-4 py-2">
                    Total Balance Required
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
            To pass a Challenge, traders must satisfy the Minimum Profitable
            Days amount. We require traders to maintain a minimum of three
            profitable days across all Challenge accounts and phases.
          </div>

          <div>
            <div>
              Trading days are considered Profitable if all closed trades equate
              to a minimum gain of 0.5% of your initial balance. We included the
              following example to articulate this rule:
            </div>

            <ul>
              <li>- Trader A holds a 1-Step 100K Challenge Account.</li>
              <li>
                - Trader A maintains a gain of $1,000 by the end of the trading
                day. Since this is a gain of 1% on the initial account balance,
                it satisfies the minimum requirement and is counted as{" "}
                <strong>one profitable trading day.</strong>
              </li>
              <li>
                - Trader A then maintains a gain of $300 by the end of the next
                trading day. Since this is a gain of 0.3% on the initial account
                balance, it does not satisfy the minimum requirement and is
                therefore, not considered a profitable trading day.
              </li>

              <li>
                - Trader A still needs <strong>two</strong> more profitable
                trading days to pass their challenge phase.
              </li>
            </ul>
          </div>

          <div>
            The table below outlines the maximum daily loss allowed for each
            2-Step Challenge Account:
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
            This is a hard requirement, meaning even if you reach the Profit
            Target, you will not be able to pass the challenge unless you
            satisfy this rule.
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
          Considering the nature of Instant-Funding, our drawdown requirements
          are stricter than Challenge Accounts. <br />
          <br />
          Daily Drawdown is set at 3%
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
  ],
];
