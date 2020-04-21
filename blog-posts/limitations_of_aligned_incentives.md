# The Limitations of Aligned Incentives

The hype around cryptocurrencies like Bitcoin and Ethereum lead to a surge of projects trying to put seemingly everything on a blockchain including social media. Projects like [Steem], [Props] and [Kin] all use blockchain to reward users, developers, or both of social systems. These projects market themselves as realigning incentives between users and content creators by rewarding creators for the quality of their content, not the attention it receives. Resultantly these projects should in theory reward quality content rather than the sensationalist and provocative, attention-grabbing content that is often rewarded on advertising platforms like Facebook and YouTube. And because these are protocols that nobody owns, there is no worry that some centralized company with misuse user data. Discussing projects like these the often cited article [Protocols Not Platforms]()(Jack Dorsey [cited]() it as a inspiration for Twitter's Blue Sky initiative) argues that social cryptocurrencies like those mentioned above may be able to both create a sustainable business model, and align incentives between participants on the network.

For many, aligned incentives are the be-all and end-all of network design (including us in our original version of [Realigning Online Incentives], yet as we argue here, it is not that simple. First, these subjective rewards protocols are inherently flawed due to the impossibility of subjective consensus. Without consensus, these reward mechanisms are gameable. The most problematic way to exploit the rewards, we argue, may be collusion, which is impossible to detect and stop. Finally we question whether economically aligned incentives would even lead to a healthy social ecosystem online.

Although we are critical here of projects in our space, we wish to do so with good intentions. We think it is important to move the conversation forward on decentralized social media so that we can ultimately create better online social systems. And while we criticize some of the projects mentioned here, we would like to note that there’s also a lot these projects did really well to become reputable. Ultimately we hope that we will grow large enough to be criticized in blog posts discussing social media.

## The Lack of Subjective Consensus

Let’s first take a look at how the aforementioned subjective reward protocols attempt to reward quality content and apps on their networks. Generally these projects distribute rewards at set intervals to the creators, developers, or both based on some metric. In the case of [Steemit], the blogging platform on the Steem blockchain, Steem tokens are minted and rewarded to content creators proportional to the votes on their posts during the interval. The Steem [whitepaper]() calls this process ‘subjective proof of work’ referencing Bitcoin’s Proof of Work consensus mechanism. But unlike Bitcoin’s objective consensus mechanism, Steem’s fundamental flaw is that there is no subjective consensus.

Consensus protocols are meant to allow distributed identities to agree on some sort of truth. There are limitations of what different identities can agree upon. Consider three people in the physical world sitting around a table with three pencils on it. Everyone agrees on a standard definition for a pencil and that there are 3 objects on the table that satisfy that definition. Everybody agrees because the number of pencils is objective. Yet now Alice, Bob and Charlie want to figure out which one is the best pencil. Alice says it’s the first because it is the biggest so it will last the longest. Bob says it is the second because it has the best shade of yellow, and Charlie, who considers himself a contrarian, likes the third. They argue for hours and cannot agree on the truth. There is no consensus.

With that said, bitcoin’s consensus works because it is purely objective. The inputs of a transaction either have the same sum as the outputs or they do not. A block either only contains valid transactions or it does not. And a block is either on the longest chain or it is not. Resultantly, there are clear definitions of honest and malicious validators to the Bitcoin network. Just as importantly, Bitcoin’s miners are doing objective work for the network. Miners use their hash power to increase security. The more honest hash power validating the network, the harder it is to attack. Miners provide objective value to the network and they are rewarded proportionally to the value they provide.

The same is not true for subjective consensus. Everyone will have different definitions of what constitutes good and bad content and therefore it is impossible to differentiate between honest and malicious actions. More importantly, there is no consensus regarding what content and actions may increase the quality of social networks and which do not. With a lack of consensus regarding what is honest, and what is valuable work for the network, there is no way to detect or stop people from creating different accounts to vote on their own posts or from [paying] bots vote on them. The latter is [already happening] on Steem and we would be shocked if the former was not. The Steem whitepaper even acknowledges and tries to justify this flaw saying, “Eliminating ‘abuse’ is not possible and shouldn’t be the goal. Even those who are attempting to ‘abuse’ the system are still doing work.”

- [Props](https://open.spotify.com/episode/1iS3r5EEAEWZvOMCmGokSp)
  - minted a bunch of tokens and gave it to themselves (find source)
  - apps rewarded for the demand they drive for the token
  - apps can reward users for their valuable actions

- [Kin](https://www.kin.org/kre/): rewards developers based on payments within an app
  - minted tokens to themselves?

there is no subjective consensus
lack of subjective consensus allows people to take advantage of the protocol
- all rewarding users based on metrics that are gameable
- in the pencil scenario, imagine if Alice tells a couple pencil manufacturers that she will heavily reward whichever manufacturer can make the best pencil. As soon as the manufacturers discover that Alice likes big pencils that last long, they will focus on maximizing those metrics, ignoring others that Bob or Charlie may care about.

- likes are gameable,
- payments within an app are gameable

## The Collusion Problem

Subjective reward protocols work in theory under the assumption that all individuals are acting independently and purely in their own self-interest. If everyone acts independent of each other, then everyone will only vote on content that they actually like. Yet the ability to pay bots to vote on content brings up a larger problem with subjective reward protocols: the problem of collusion. There is no way to stop people from working together in distributed systems. It happens on Bitcoin in the form of mining pools so that miners can get more steady returns, yet mining pools do not undermine Bitcoin consensus. In the case of social rewards protocols, people can work together to get a disproportionate share of the rewards.

Even more common than payments as collusion is likely be coalitions as collusion. As Kevin Simler and Robin Hanson discuss in *The Elephant in the Brain*, all humans form coalitions in their self-interest, and subconsciously justify their selfish motives as cooperative. It is already happening on social media. Successful YouTubers often do collaboration videos with each other. Successful podcasts hosts often have each other on their own podcasts. In many cases, yes, these collaborations produce awesome content. But in many cases, successful creators Dan and Erin would never have worked together if Erin was not as popular. She could create just as awesome content and their collaboration would be just as great, but Dan may not care about working together if Erin has a lesser audience. Obviously there are exceptions where established creators find budding talent, but those are in the vast minority.

Coalitions will undermine subjective rewards protocols. In the case of Steem, established creators will have the most tokens and therefore the greatest voting power. They will naturally want to support other established creators so that they will return the favor. To reiterate, people subconsciously justify selfish intentions as cooperative. Established creators will argue that they actually like the content of other established creators, but we believe that in many cases, these creators would not like the content if it came from someone of lower status. Because we cannot see the inner workings of someone's brain, it is impossible to know if they truly like the content or if they just like it because it is in their self-interest to do so.

Vitalik Buterin also wrote a great piece [on collusion](https://vitalik.ca/general/2019/04/03/collusion.html) that greatly influenced our thinking on this subject.

## Subjective Governance

The fundamental issues with subjective rewards protocols brings us to the larger problem of subjective governance in decentralized systems. The [Zcash] privacy cryptocurrency recently [encountered](https://messari.io/article/decentralizing-zcash) this with their development fund. Initially the protocol was designed so that 20% of all block rewards would further fund the development of the project. The Founders Reward is set to end later this year, but there is still a lot of development work to be done. They need to upgrade their protocol in a way that will hopefully satisfy everyone so that the blockchain does not fork. At first glance, the simple solution would be vote on it, but decentralized voting is much easier said than done. One-identity, one-vote systems cannot work in distributed systems because there is no way to differentiate between a vote tied to a real person and a vote generated by a bot.[^1] Dishonest voters could create many identities to gain disproportionate control over the network.

More complex voting systems do not solve this issue either. Zcash founding scientist Eran Tromer [explains](https://forum.zcashcommunity.com/t/staked-poll-on-zcash-dev-fund-debate/34846/51) there is an inherent trillema between coin-weighted, permissionless, and whale-resistant voting systems. If a system is coin-weighted and permissionless then whales, those with a lot of funds or the ability to get a lot of funds, can have a disproportionate impact on the outcome, swaying the vote in their favor. You could try capping the amount of funds someone can use, but then whales can split their funds among multiple wallets and gain the same voting power. You could create a coin-weighted and whale-resistant system by creating a permissioned vote where all identities are known. In that system, though, someone would inevitably be able to choose who can and cannot vote. It is also contrary to the ethos of a permissionless, privacy-focused blockchain.

There is no perfect solution to subjective, distributed decision making. Each has flaws that potentially allow some identities to gain a disproportionate control over the vote. We therefore do not consider subjective voting protocols to be decentralized and we doubt that they can be. We do not consider Steem, Props or Kin to be decentralized. They are plutocracies, governance systems controlled by the rich, and we see no way that they can become sufficiently decentralized. And the rich are incentivized to use their existing power to stay the rich.

We would like to note that we are solely talking about subjective governance. Objective governance still works. Projects like MakerDao, UMA, and Augur all have objective governance systems that work. Their governance is objective so their aligned economic incentives work. Additionally, there are projects that are not yet sufficiently decentralized, yet at least have the ability to become entirely decentralized. Although the [Algorand company and foundation] combined control a substantial amount of their blockchain's tokens for instance, they can become decentralized and have a plan to do so. Subjective governance on the other hand, cannot be decentralized.

## Where Incentives are Counterproductive

- tie back to aligned incentives in social systems, would they even work as intended

Many may hear about the problems inherent to these reward protocols and think the answer must be to choose better metrics or to redesign the reward scheme. Well, that's at least exactly what we initially thought. But the perfect metric existed so that it was ungameable and everyone considered the reward scheme fair, would it necessarily work as intended? Would it actually lead to better quality content online and a healthy online ecosystem?

For many economists, it is a law of nature that rewards directly impact motivation, yet psychologists and behavioral economists believe it is more nuanced. Psychologists and behavioral economists often differentiate between intrinsic motivation, motivation for the activity in and of itself, and extrinsic motivation, doing an activity for an external reward. Economists Roland Bénabou and Jean Tirole modelled how extrinsic rewards impact motivation in their paper "[Intrinsic and Extrinsic Motivation](https://www.princeton.edu/~rbenabou/papers/RES2003.pdf)." Their findings generally agree with psychological research that promised rewards often undermine intrinsic motivation. Bénabou and Tirole argue that promised rewards signal a task is unattractive. The larger the promised reward, the more unattractive the task must be.

Psychologists John Condry and James Chambers provide a different explanation for why extrinsic motivation can counteract intrinsic motivation in "Intrinsic Motivation and the Process of Learning."[^2] The two studied how extrinsic rewards affect how adolescents learn and they discovered that when many people were promised rewards, they chose significantly easier tasks. Their explanation is that rewards shift people's focus from the activity itself to the reward they will receive after the activity.

Whatever the reason, promised rewards can undermine the intrinsic enjoyment of an activity. As a result, promising rewards to creators likely leads to more content, but likely does not lead to better quality content.

- we have only focused on promised rewards, though. Bénabou and Tirole discuss both promised rewards, and *ex-post* rewards, rewards given unexpectedly at full discretion of the giver.
  - subscription payments, and advertising revenue can

- all content creation, just because someone 'liked' it, should not be economically rewarded.
  - doing so can undermine people's intrinsic motivation for the activity


## (Some dope name for a conclusion)


[^1]: See '[The Sybil Attack](https://www.microsoft.com/en-us/research/publication/the-sybil-attack/)' for the proof behind this claim.

[^2]: Their paper is in [*The Hidden Costs of Reward: New Perspectives on the Psychology of Human Motivation*](https://www.taylorfrancis.com/books/e/9781315666983)
