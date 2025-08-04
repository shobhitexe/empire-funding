import GreenText from "@/components/ui/green-text";
import Heading from "@/components/ui/heading";
import { Marquee } from "./Marquee";

const reviews = [
  {
    name: "Umang Mallick",
    time: "49 minutes ago",
    title: "Empire funded\u2019s discord support is lightning-fast",
    body: "empire Funded\u2019s Discord support is lightning-fast I get personalized help within minutes and never feel left in the dark",
  },
  {
    name: "Charvi Kapadia",
    time: "19 minutes ago",
    title: "As someone who trades forex and",
    body: "as someone who trades forex and commodities, I\u2019m very impressed with the  variety of instruments, and their Discord team is always ready to assist.",
  },
  {
    name: "Alia Raju",
    time: "9 hours ago",
    title: "I recently completed the challenge and",
    body: "I recently completed the challenge and the whole experience has been superrrrrrr smooth; the Discord and community support kept me motivated every step of the way!",
  },
  {
    name: "Mishti Cheema",
    time: "20 hours ago",
    title: "The ai trader dashboard is a",
    body: "The AI trader dashboard is a game changer brooo it\u2019s intuitive and Empire Funded\u2019s Discord team answered any qeury that i had in relation",
  },
  {
    name: "Martyn Read",
    time: "34 minutes ago",
    title: "I\u2019ve tried other prop firms, but",
    body: "I\u2019ve tried other prop firms, but this one  slaps man its supportive community on Discord and reliable access to stocks and crypto. very low spreads",
  },
  {
    name: "Marie Gregory-Ball",
    time: "15 days ago",
    title: "The challenge was tough but rewarding.",
    body: "The challenge was tough but rewarding. and the Discord support helped me push through to a profitable finish really impressed wow",
  },
  {
    name: "Andrew Ward",
    time: "21 minutes ago",
    title: "Whenever i\u2019m stuck analyzing a crypto",
    body: "Whenever I\u2019m stuck analyzing a crypto chart, the guys actually can assist and the ai dashboard helps alot",
  },
  {
    name: "Lesley Singh",
    time: "44 hours ago",
    title: "Their ai trader dashboard provides real-time",
    body: "Their AI trader dashboard provides real-time insights, and Empire Funded\u2019s Discord team walked me through every feature with patience.",
  },
  {
    name: "Saksham Virk",
    time: "20 hours ago",
    title: "Trading forex pairs has never been",
    body: "Trading forex pairs has never been easier \u2013 and if I ever need help, Empire Funded\u2019s Discord support is just a message away.",
  },
  {
    name: "Martyn Khan",
    time: "26 hours ago",
    title: "The support team answers within minutes",
    body: "the support team answers within minutes very good",
  },
  {
    name: "Dhruv Seth",
    time: "35 days ago",
    title: "I bought the challenge last month",
    body: "I bought the challenge last month and failed because i didnt use the ai journal. or maybe im jsut bad lol but im going to buy another and see",
  },
  {
    name: "Dr Jonathan Taylor",
    time: "47 hours ago",
    title: "Discord support answered all my questions",
    body: "discord support answered all my questions about rules, its super clear and straightforward i love it!",
  },
  {
    name: "Kavya Vasa",
    time: "25 minutes ago",
    title: "Empire funded never leaves traders in",
    body: "Empire Funded never leaves traders in the dark as other users have said like no wonder they growing super fast!",
  },
  {
    name: "Janet McLean",
    time: "23 minutes ago",
    title: "The 24/7 discord support makes me",
    body: "the 24/7 Discord support makes me feel like I have a full-time team behind me. and the other traders are great people. the Empire is just such a positive environment wher eyou want to thrive",
  },
  {
    name: "Seher Sinha",
    time: "35 days ago",
    title: "The rules are very simple and",
    body: "The rules are very simple and clear they list everything on the website, very good prop firm to partner with i think",
  },
  {
    name: "Hrishita Sha",
    time: "51 hours ago",
    title: "I had issues with setupo and",
    body: "I had issues with setupo and  support team helped me set up my acc quickly.",
  },
  {
    name: "Bethany Watson-Jackson",
    time: "31 days ago",
    title: "Their ai trader dashboard is intuitive,",
    body: "Their AI trader dashboard is intuitive, and I got a detailed walkthrough via Empire Funded\u2019s Discord within minutes of asking.",
  },
  {
    name: "Miraya Chaudry",
    time: "53 minutes ago",
    title: "Trading commodities felt intimidating at first",
    body: "Trading commodities felt intimidating at first because i was used to trading forex  but the ai journal is a cheat code XD",
  },
  {
    name: "Katherine Taylor",
    time: "49 days ago",
    title: "I started 100k instant and i",
    body: "I started 100k instant and i actually got payout i swear FN denied my payout on 100k instant but empire paid it out straight way like broo",
  },
  {
    name: "Jiya Sharaf",
    time: "58 hours ago",
    title: "The dashboard is very easy to",
    body: "the dashboard is very easy to use and clear. i love it",
  },
  {
    name: "Irene North",
    time: "53 hours ago",
    title: "The variety of instruments is fantastic,",
    body: "The variety of instruments is fantastic, and Empire Funded\u2019s Discord support ensures I never miss an opportunity in stocks or forex with their news updates",
  },
  {
    name: "Leah Bell",
    time: "20 days ago",
    title: "I joined the challenge during a",
    body: "I joined the challenge during a promotion and so far it\u2019s exceeded my expectations. Thanks so much",
  },
  {
    name: "Nitya Bali",
    time: "26 days ago",
    title: "I\u2019ve traded crypto and commodities with",
    body: "I\u2019ve traded crypto and commodities with Empire Funded, and their Discord support has answered every single question, no matter how small.",
  },
  {
    name: "James Burgess",
    time: "9 days ago",
    title: "The ai trader dashboard alerts help",
    body: "The AI trader dashboard alerts help me spot mistakes early in the challenge so i can become a better trader faster. Yes it helps you pass the challenge, but it aso makes you a better trader so empire will want to work with you and mae you spartan trader",
  },
  {
    name: "Divit Raj",
    time: "34 days ago",
    title: "You can literally build your empire.",
    body: "You can literally build your empire. scaling to 2mil?!? nuts",
  },
  {
    name: "Mrs Christine Gray",
    time: "44 days ago",
    title: "Am got the 50k instant and",
    body: "am got the 50k instant and yes its above expectations thank u empire",
  },
  {
    name: "Nishith Yohannan",
    time: "37 hours ago",
    title: "Whether you trade forex or crypto",
    body: "whether you trade forex or crypto you can do it at empire very nice team of support",
  },
  {
    name: "Neysa Rajan",
    time: "20 days ago",
    title: "Yes very good prop firm for",
    body: "yes very good prop firm for 2025",
  },
  {
    name: "Gary Shepherd",
    time: "7 hours ago",
    title: "The apyout guarantee is what attracted",
    body: "the apyout guarantee is what attracted me nd they kept their promise so thats good thnaks",
  },
  {
    name: "Hunar Chawla",
    time: "35 minutes ago",
    title: "The challenge was priced right and",
    body: "The challenge was priced right and the fees are non existent like very cheap for the quality of service and guarantee you get",
  },
  {
    name: "Vedika Karan",
    time: "33 days ago",
    title: "Their ai trader dashboard gives me",
    body: "Their AI trader dashboard gives me confidence in my trades especially as a beginer trader",
  },
  {
    name: "Shayak Jha",
    time: "59 hours ago",
    title: "I trade xauusd daily and these",
    body: "I trade XAUUSD daily and these are great going for 3rd payout",
  },
  {
    name: "Linda Woodward",
    time: "59 minutes ago",
    title: "I joined the 5k instant challenge",
    body: "I joined the 5k instant challenge to see if Empire Funded was legit, and I\u2019m shocked Discord support answered all my questions immediately. for once a prop firm does what they preach!",
  },
  {
    name: "Saksham Kunda",
    time: "2 minutes ago",
    title: "The features range is impressive, and",
    body: "The features range is impressive, and whenever I have doubts, Empire Funded\u2019s support team comes through.",
  },
  {
    name: "Zaina Sharaf",
    time: "40 days ago",
    title: "I lvoe the ceo's they are",
    body: "I lvoe the ceo's they are such funny guys, kind of guys you can have a drink with and chill.  they are active in the discord community which is great to see",
  },
  {
    name: "Parinaaz Sheth",
    time: "42 minutes ago",
    title: "Empire funded never leaves you in",
    body: "Empire Funded never leaves you in the darkn the suport is rlly good",
  },
  {
    name: "Dr Russell Andrews",
    time: "33 minutes ago",
    title: "I chose empire funded becayse #1",
    body: "I chose empire funded becayse #1 Best support team in the industry #2 48 hour payouts or they give you $2500 #3 they havent denied a single payout, according to multiple reddit users. i havent requested mine yet but willsoon",
  },
  {
    name: "Aarna Kapoor",
    time: "28 minutes ago",
    title: "Trading crypto, forex, and stocks in",
    body: "Trading crypto, forex, and stocks in one place is great, and discord support makes questionseasily answered",
  },
  {
    name: "Lavanya Sabharwal",
    time: "13 minutes ago",
    title: "The ai trader dashboard analytics are",
    body: "The AI trader dashboard analytics are top-notch imyet to see any of the big props do this but we will see",
  },
  {
    name: "Faiyaz Garde",
    time: "50 days ago",
    title: "The challenge experience was above average.",
    body: "The challenge experience was above average. i swear the ai journal actually works and gives you valuable insight",
  },
  {
    name: "Dr Lorraine Jones",
    time: "38 minutes ago",
    title: "Im new to commodities but chatted",
    body: "Im new to commodities but chatted to some guys online and they recommended empire for the low spreads very happy",
  },
  {
    name: "Armaan Bobal",
    time: "26 hours ago",
    title: "These guys impressed me alot. especially",
    body: "These guys impressed me alot. Especially for a newer firm. Im funded with ftmo and FN but decided to try empire because peopel have been talking about them and i can see why. Instantly you realise the support is better, which all prop firms lack. hoping their payouts come super smooth!",
  },
  {
    name: "Phillip Smith",
    time: "12 minutes ago",
    title: "I love how responsive the discord",
    body: "I love how responsive the  Discord support is",
  },
  {
    name: "Luke Hughes-Wright",
    time: "48 minutes ago",
    title: "I did the challenge and enjoyed",
    body: "I did the challenge and enjoyed the success evenn after the ups and downs. this is my second challenge",
  },
  {
    name: "Lagan Sarin",
    time: "29 minutes ago",
    title: "Have dealt with luke on the",
    body: "Have dealt with Luke on the discord multiple times and never get worried because Empire's discord support is always there to help.",
  },
  {
    name: "Glen Doherty-Banks",
    time: "34 days ago",
    title: "The ai trader dashboard has predictive",
    body: "The AI trader dashboard has predictive features that actually work, gamechanger bro",
  },
  {
    name: "Piya Sodhi",
    time: "39 days ago",
    title: "Empire funded offers end-of-day summaries and",
    body: "Empire Funded offers end-of-day summaries and their Discord support elaborated on the market moves so I stayed informed. massive plus fromme",
  },
  {
    name: "Vanya Rege",
    time: "47 days ago",
    title: "I traded stocks successfully thanks to",
    body: "I traded stocks successfully thanks to the support of Empire Funded\u2019s Discord community they literally never leave you hanging ever like one time i forgot password to dashboard and within seconds tjhey helped me fix the issue'",
  },
  {
    name: "Ms Olivia Woods",
    time: "20 minutes ago",
    title: "Completing the challenge was smooth because",
    body: "Completing the challenge was smooth because im quite experienced but Empire discord support provided clear answers and celebrated my progress.",
  },
  {
    name: "Andrew Leonard-Taylor",
    time: "19 hours ago",
    title: "I love having access to forex,",
    body: "I love having access to forex, commodities, stocks, and crypto under one roof, and Empire Funded\u2019s Discord support is phenomenal.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(1, reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 2);

export default function Testimonials() {
  return (
    <div className="container mx-auto text-center sm:my-24 my-14">
      <div className="text-[#40FF95] text-xl">Testimonials</div>

      <div className="flex flex-col items-center mt-2 gap-3">
        <Heading>
          <GreenText>Real Reviews.</GreenText> Real Traders. Real Payouts.
        </Heading>

        {/* <Image
          src={"/images/testimonials/t1.svg"}
          alt={"testinomials"}
          width={281}
          height={33}
          className="mt-2"
        /> */}

        <div className="flex sm:flex-row flex-col gap-2 items-center">
          <div
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="5419b6ffb0d04a076446a9af"
            data-businessunit-id="6861f3966deaf67934e504cd"
            data-style-height="20px"
            data-style-width="100%"
            data-theme="dark"
          >
            <a
              href="https://www.trustpilot.com/review/empirefunded.com"
              target="_blank"
              rel="noopener"
            >
              Trustpilot
            </a>
          </div>

          {/* <span className="pt-1">
            Rated 4.4 / 5 based on 4,258 reviews on Trustpilot
          </span> */}
          {/* <Image
            src={"/images/testimonials/t2.svg"}
            alt={"trustpilot"}
            width={104}
            height={24}
          /> */}
        </div>
      </div>

      <div className="sm:flex hidden mt-14">
        <div className="relative flex gap-5 h-[500px] w-full flex-row items-center justify-center overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((review, idx) => (
              <ReviewCard key={review.name + idx} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            {secondRow.map((review, idx) => (
              <ReviewCard key={review.name + idx} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {thirdRow.map((review, idx) => (
              <ReviewCard key={review.name + idx} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>
      </div>

      <div className="sm:hidden flex mt-5">
        <div className="relative flex gap-5 sm:h-[500px] h-full w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((review, idx) => (
              <ReviewCard key={review.name + idx} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((review, idx) => (
              <ReviewCard key={review.name + idx} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:40s]">
            {thirdRow.map((review, idx) => (
              <ReviewCard key={review.name + idx} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>
      </div>
    </div>
  );
}

const ReviewCard = ({
  name,
  time,
  title,
  body,
}: {
  name: string;
  time: string;
  title: string;
  body: string;
}) => {
  return (
    <div className="bg-gradient-to-b from-white/20 to-black p-px rounded-xl sm:max-w-md xs:max-w-sm max-w-xs">
      <figure
        className={
          "relative h-full w-full cursor-pointer overflow-hidden rounded-xl p-5 flex flex-col gap-4 bg-[#030907]"
        }
      >
        {/* <Image
          src={"/images/testimonials/stars.svg"}
          alt={"stars"}
          width={136}
          height={24}
        /> */}

        <div className="flex flex-row items-center gap-2">
          <div className="flex items-center gap-1">
            <figcaption className="text-sm font-medium dark:text-white">
              {name},
            </figcaption>
            <p className="text-xs pt-1 font-medium dark:text-white/40">
              {time}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-xl text-left text-light">
            {title}
          </div>
          <blockquote className="mt-1 text-left sm:text-base text-sm">
            {body}
          </blockquote>
        </div>
      </figure>
    </div>
  );
};
