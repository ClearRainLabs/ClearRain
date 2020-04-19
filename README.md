# Clear Rain: A Framework for Self-Governed Online Communities

## Overview

Websites open to users contributing content, most prominently social media and online reviews, rely on online identities, yet fail to create incentives for civil behavior. Offline there are natural incentives, including the threat of a bad reputation or exclusion, yet those incentives are lost in one-size-fits-all online networks. Corporations that control online networks focus on maximizing their quantity of users, and thus failed to create incentives around quality. Resultantly fake news, fake reviews, trolls, and bad content in general are prevalent seemingly everywhere anybody is free to post content. Even worse, the opaque company the controls the community has assymmetric power over user data and the content users see. And because many of these sites rely on network effects, users can often only use a site known to abuse its power, or forgo the functionality of that site entirely.

The solution, we propose, is to create an open standard for interoperable, smart contract governed communities. We believe that to bring real world civility online, online communities should mirror how humans naturally organize offline. Humans naturally organize in transparent, hierarchical groups. Our standard will have 2 core layers: An identity layer and a community layer. The identity layer will be decentralized, identity-owned storage so that identities own their data and will be able to take it with them to different communities. The community layer will be smart contracts to define its administrators, creators, and other roles designed for the specfied community. Smart contracts not only allow for transparent governance, but they also create monetization opportunities for communities.

## Background

### Problems Online

#### 1. Untrustwothy Identities

Untrustworthy content is prevalent seemingly everywhere online that unaccountable identities exist. Social media and review platforms rely on user contributions, yet have trouble making their users accountable. If an identity is not accountable and may be acting in their own self-interest at the expense of others, then their content is untrustworthy. They cannot be relied on as honest.

There are reliable identities online. Generally, identities online can be trusted when they are well-known to a community. Somebody is considered reliable after other's have verified what they say is generally true, or if those one considers trustworthy can vouch for the trustworthiness of some identity. Importantly, trust and reputation are completely subjective.[^1] Yet for one-size-fits-all communities, reputation intends to be objective.

Identities and their content get their reputation from follower counts, likes, views, and star-ratings. Those metrics are often fairly meaningless because users do not know who may have rated the content, and more importantly, those metrics are often bought. Without reliable reputation, there are no inherent disincentives in online networks. In the offline world, there are consequences to lying and cheating. Others lose trust in lyers and cheaters so that in the future, whether lying or cheating, nobody will believe them. We naturally ignore lyers and cheaters. We exclude them from our conversations and communities will sometimes physically exclude those who violate their norms. But on large, one-size-fits-all platforms, the authentic and malicious are indistinguishable because these platforms use reputation systems that do not work.

Resultantly, the internet is overflowing with unreliable content. Fake news, fake reviews, clickbait, and untrustworthy content exist everywhere. It is a problem inherent to all one-size-fits-all platforms. Even worse, the opaque companies that run these platforms have assymetric power over their network, and little to no accountability.

[^1]: Stated another way, reputation is inherently asymmetric. Here's a more technical proof showing only assymetric reputation systems can be reliable: [Sybilproof Repuation Mechanisms](http://www.eecs.harvard.edu/cs286r/courses/fall08/files/paper-CheFri.pdf)

#### 2.  Misaligned Incentives

The centralized, opaque companies behind platforms control the content users see, their data, and the ability to censor content. A fundamental issue with this uneven balance of power is misaligned incentives between companies and their users. Platforms often want to maximize ad revenue. They try to maximize user attention and user data. More attention so their ad space is worth more, and more data to improve their machine learning algorithms to generate more attention. Unfortunately, their algorithms to maximize attention have revealed that humans instinctively pay attention to sensationalist and provacative content. Mark Zuckerberg, our guinea pig for the problems section, acknowledged this problem on Facebook after activist like [Tristan Harris](https://www.ted.com/talks/tristan_harris_how_a_handful_of_tech_companies_control_billions_of_minds_every_day/transcript?language=en) started raising awareness; refering to this content, Zuckerberg says, “people will engage with it more on average — even when they tell us afterwards they don’t like the content” (Zuckerberg). Zuck even recognizes that people do not necessarily like content that grabs their attention. Just because a machine learning algorithm is able to keep users engaged on a platform for hours, unfortunately does not mean that the user liked the content they were seeing.

Additionally the data these sites hoard makes them prime targets for hacks. All Facebook data is hosted on Facebook’s servers which makes it really easy for say [Cambridge Analytica](https://www.theguardian.com/news/2018/mar/17/cambridge-analytica-facebook-influence-us-election) to access millions of users’ data or even for one hacker to [access](https://www.cnn.com/2019/07/29/business/capital-one-data-breach/index.html) over 100 million credit cards. These events are rare but completely unpreditable. As the amount of data that organizations stockpile grows, these hacks will likelyl only get bigger and bigger.

From big, opaque companies like Facebook, there is little to no accountability. Zuckerberg can say that he is doing all he can to fix these problems. He can say that his software engineers are coding up the solutions as we speak. But we believe that the fundamental problem is with the structure of Facebook. It is an opaque organization and Zuckerberg is able to pass on accountability to an unidentifiable group of Facebook workers.

#### 3. Asymmetric Power

Opaque organizations are great tools for benefiting from all the upside potential of their network while avoiding downside risk. Instead, downside risk is transferred to users. When Cambridge Analytica accesses the Facebook data of over 87 million users, Facebook publicly says that they have a team of software engineers fixing the issue (FB on data access). When people start speaking up about how addicting social media is and how machine learning algorithms favor provacative content, Zuckerberg tells everyone that Facebook has new, better than ever before algorithms that are going to solve everything. He has a team of software engineers coding them up right now. But no single person is ever accountable. Zuckerberg always claims that he had no idea and hands over the problem to someone else. This problem is not specific to just Facebook. Facebook is just one of the most prominent examples. Opaque organizations everywhere are great tools for avoiding downside risk. Without transparent governance, individuals will not be accountable.

Furthermore, only these opaque, one-size-fits-all platforms have the ability to ability to censor content. In the one-size-fits-all model censoring content often satisfies the most intolerant individuals. As Nassim Taleb discusses in *Skin in the Game*, in order to please as many people as possible, standards must comply with the most intolerant. One example Taleb gives is that nearly all drinks in the United States are kosher even though only a small minority of people are kosher. Drink manufacturers will not make kosher and non-kosher versions of each drink when the cost difference is tiny, if anything, and non-kosher people can drink kosher drinks. This rule, that the most intolerant win, also helps explain why online bulletin board systems in the late 90s became less tolerant after they were bought by corporations. The corporations started adding advertising, membership fees, and most importantly rules around what people could and could not say. Unfortunately, as Andreas Antonopoulos states, the weird people who made the bulletin board cool in the first place were no longer welcome (Antonopoulos).

This problem is inherent to all one-size-fits-all platforms. As the size of a one-size-fits-all platform grows, the intolerance of its standards must also grow. Early adopters should be rewarded by helping networks grow, not be forced out by making the network successful.

Current mainstream platforms control data, the content users see, avoid downside risk, and unfortunately often punish their early adopters through increasingly intolerant standards. But worst of all, their singular ability to censor means they are distorting Truth.

#### 4. Centralized Sources of Truth

An organization with the singular ability to censor content becomes a gatekeeper to what is good and what is bad. They become a moderator between the truth and the people. But give people power and they will use it in their own self-interest. It's human nature.

More specifically, *Homo sapiens* evolved to subconsciously justify what is in their own self-interest as cooperative. Like any animal, we naturally want to survive along with our kin. But we also need to coexist with others as larger groups of humans are more powerful than smaller ones. So to conflate our desire to be eternal and our need to cooperate with others, we subconsciously justify the selfish as cooperative, what Kevin Simler and Robin Hanson call *strategic ignorance* (The Elephant in the Brain).[^1] Strategic ignorance is why you should never trust a salesman who doesn't reveal their own self-interest. And it's also why you should be weary of anyone with the ability to censor content. It's not the Truth that they are censoring, it's probably their own subjective version of what they think is best for themself.

The concept of singular gatekeepers ignores that good and bad are *subjective*. Even fact can be considered subjective. Consider the thought experiment known as Last Thursdayism: the entire universe was created last Thursday and every memory you have prior to last Thursday was created last Thursday, too. While this may seem like a ridiculous idea, it's unfalsifiable. All evidence to show that the universe is older than a couple days could have been created last Thursday. The implication of unfalsifiable ideas like Last Thursdayism is that there is no objective fact.[^2]

Each and every person naturally decides what is true. The late writer David Foster Wallace says, "The only thing that is capital-T True is that you get to *decide* how you're gonna try to see (the world)" (DFW speech). The Truth is what someone decides for themself. Anything that others decide for you is dogma until you verify it (assuming you can). Fundamentally, no single entity can decide what is best for everyone. Anyone that tries to will inherently distort the truth. So that bring us to our thesis:

  **One-size-fits-all communities are design mistakes. Instead, let's allow people to make and join the communities that they actuallly want**

[^1]: A great example of strategic ignorance is what Princeton psychologists Emily Pronin and Matthew B. Kugler call the *introspection illusion* (Introspection Illusion). People naturally see themselves to less susceptible to bias than others. If you're like this author and try to recognize justifying selfishness in your everday life, you may recognize that you're far more likely to notice when others are susceptible to it than yourself. And even after recognizing this massive cognitive blindspot, it's still really hard to notice justifying your own selfishness in action.

[^2]: There's two important tools that thinkers often use to figure out what is likely to be true. The first is reproducibility. Scientific fact is that which can be consistently replicated. Think the theory of gravity is a conspiracy? Try testing it. Throw a ball into the air and see if the theory of gravity holds. If it does not and more importantly you find a procedure to constently replicate you finding, then you just disproved Newton and Einstein.
  The second tool is [Occam's razor](https://en.wikipedia.org/wiki/Occam%27s_razor): when faced with competing explanations, the simpler explanation is more likely to be right. If you have to jump through hoops to show that the the universe was created last Thursday, than the simpler explanation, that it was not, is more likely to be right. Another example is physicists could model the entire universe as revolving around the earth, as many did for thousands of years, but they'd have to create an alternate, more complicated theory of gravity. In the simplest theory of gravity we have, the earth is not the center of the universe.


### Human Organization

The genius of Sir Tim Berners-Lee's proposal for the web, we believe, is that he designed his information system based on how information naturally flowed at CERN, his workplace. Like how information naturally flows from person to person, Berners-Lee envisioned storing information in pages that linked to one another through hypertext.

Similarly, we believe that online communities should be designed based on how humans naturally organize offline. Instead of trying to adapt people to technology, we would rather adapt technology to people. Additionally, how humans organize is that structure that evolved to dominate the earth. It was picked by nature. Maybe we are just unconfident engineers, but we do not believe we can design a structure better than nature. For better or for worse, *Homo sapiens* have driven coutless species to extinction, built massive cities, and stepped foot on the moon. In our view, we have not accomplished these feats because we are so much smarter than every other animal, but because as Yuval Noah Harari argues, we are able to organize unlike any other animal, both largely and flexibly (Sapiens).

*Homo sapiens* are unique among primates in our ability to organize at large scales. We are able to organize largely because of our ability for intersubjective thought, our ability to think and communicate abstractly. Other primates are able to communicate with each other, but only regarding the present, objective world. Monkeys can tell others where to find food or that there is a lion nearby, but they cannot think in terms of abstract concepts (**Cite Yuval Noah Harari**). Humans, on the other hand, can additionally think in terms of what others are thinking, what we call abstract thinking.[^1] Money is a great example of intersubjective thought. A United States dollar has no objective value. One person's subjective belief regarding value will likely not impact other's beliefs on its value. Instead money gets value from the collective belief that it has value. A vendor could decide that USD has no value and may force you to pay in bitcoin or gold. His belief would have no effect on the value of USD. But if everyone suddenly decided they no longer want USD, then suddenly the American dollar would be worthless.

Collective thought unfortunately allows us to create hierachies to the benefit of those at its top. And in many cases those at the top (subconsciously) use their strategic igorance to justify the hierarchy as being great for everyone. Organizations like Facebook can create systems were they have all the upside of user data and control over what people see, but none of the downside risk. While you are at risk of data leaks and privacy violations, internet sites generate enormous profits with your data. To clarify, we do not think Facebook and other internet sites are run by bad people; everyone justifies the selfish as cooperative. Anyone with power is naturallly inclined to abuse it. But there may be ways to mitigate rent-seeking. Let's look to how humans are able to organize flexibly.

// Section needs to be pushed up in the problems section
We give a general definition of rent-seeking here for use later as using existing power and influence in one's own self-interest and against the interest of those without control. It is when centralized platforms shift from attracting users to extracting more from them as [Chris Dixon](https://onezero.medium.com/why-decentralization-matters-5e3f79f7638e) puts it, like when Facebook ends a 5-year agreement with Zynga 2 years early because presumably, Facebook no longer needed them (**cite**). There are many problems with opaque organizations as we have detailed, but fundamentally they are great tools for rent-seeking.
// move up

Flexible organization is a feature humans share with all primates. Primate groups are naturally organized into hierarchies of smaller subgroups. This discovery was made by anthropologist Robin Dunbar, the namesake for Dunbar's number. Dunbar's number is the cognitive limit on group size in humans, approximately 150. When groups human groups become larger than 150, they naturally begin to fragment into smaller groups. Dunbar found a correlation between neocortex size in primates (relative to their total size) and group size. More specifically, Dunbar argues that the limitation in group size comes from our brains limitations on monitoring cliques within groups;

> "This suggests: (a) that large groups are probably created by the hierarchical clustering of smaller cliques; and (b) that the cognitive limitations lie in the quality of the relationships involved in the structuring of these cliques" (Neocortex size.., 485).

When groups become larger than 150, our brains cannot simultaneously monitor all the cliques within the groups and groups naturally fragment.
- need to turn this section into a clear argument.

Additionally we argue that as political animals, humans must constantly monitor those in power. If you cannot monitor those in power (because maybe they are shrouded by an opaque organization), you cannot prevent them from abusing power. Anthropoligist Christopher Boehm makes a similar argument regarding egalitarian groups; "The rank and file, watching leaders with special care, keep them from developing serious degrees of authority" (Boehm, 10). Equal rights and opportunities come from constantly monitoring other's power so that no leader can abuse theirs. The necessity to monitor other's power bring us back to the problem with opaque organizations. If individuals are not accountable, there can be no checks on power, and leaders will naturally abuse their power in their own self-interest.


We would like to stress that the fundamental issue is not hierarchy. Hierarchies are inherenet to human organization. There will always be people that do a dispropotionate amount of work and should therefore have proportionately more control. Consider the [1% rule](https://en.wikipedia.org/wiki/1%25_rule_(Internet_culture)) online. The vast majority of people the vast majority of the time are consuming rather than creating content. On the English Wikipedia for instance, there are nearly 40 million registered users, likely a fraction of the total number of people that use the site. Of those 40 million, only about 1,000 are [administrators](https://en.wikipedia.org/wiki/Wikipedia:Administrators) (cite wiki statistics). It's a nice feature to have the ability to contribute, but most will not.

Instead the fundamental issue is rent-seeking.
  - the goal should be to prevent rent-seeking

[^1]: Primates can also think in terms of what others are thinking, what is commonly known as [theory of the mind](https://en.wikipedia.org/wiki/Theory_of_mind). We believe primates may need this trait to organize flexibly. What is unique among *Homo sapiens* is secondary theory of mind; "I think that Alice thinks that Bob thinks this." Secondary theory of mind allows humans to create shared beliefs or intersubjective thoughts. **(find a citation)**


### Wikipedia

Let's look to Wikipedia as a model for an online community. Wikipedia differs from most, if not all, sites open to contributions because it overwhelmingly publishes trustworthy content. There's three core reasons why we believe Wikipedia is successful, but fundamentally Wikipedia successfully limits rent-seeking by mirroring how humans naturally organize.

1. Wikipedia is transparent. Every change is tracked and the history of edits of every Wikipedia page is public. Users are auditable, too. Every registered Wikipedia user has their own page where all of their contributions are visible.

2. Wikipedia does not treat all users as equals. Wikipedia has a hierarchical governance system. [Administrators](https://en.wikipedia.org/wiki/Wikipedia:Administrators) are Wikipedia users with special privileges including the ability to block and unblock users and protect pages from editing. Anyone can apply to be an administrator and requests are approved by a vote open to the entire Wikipedia community. If a user is voted in, they are added to the list of administrators by a [bureaucrat](https://en.wikipedia.org/wiki/Wikipedia:Bureaucrats). Bureaucrats have special administrative functions mostly adding users to and removing users from administrative roles. At the top of the hierarchy, and not denoted in the structure from Wikipedia's site below, is the role of [founder](https://en.wikipedia.org/wiki/Wikipedia:User_access_levels#Founder). There is one founder, Jimmy Wales.

3. Wikipedia is entirely open source. If Wikipedia were ever controlled by a majority of profit-seeking actors, colluding to use their power to profit, anyone could fork Wikipedia to create a more trusthworthy version.

![Wikipedia Administrative Structure](https://en.wikipedia.org/wiki/Wikipedia:Administration#/media/File:Wikimedia_organizational_and_user_rights_hierarchy.svg)

Wikipedia's structure is entirely transparent. So while some users have more power, those users must also be more accountable or risk losing their position.

Wikipedia's auditable hierarchy seems to have extended Dunbar's number. There are millions of registered users that can all monitor each other. Instead of having to track relationships with others with our brains, Wikipedia has offloaded that task to a transparent database. Resultantly, they have seemingly extended Dunbar's number while still allowing everyone to ensure Wikipedia's leaders are not abusing their power.

It is not a completely decentralized, overly idealistic structure where everyone is equal. Wikipedia functions because it uses hierarchical goverance yet still limits rent-seeking by allowing users to fork the platform or leave. Additionally, the threat of a fork should prevent the leadership of an open source community from abusing their power.

Wikipedia did not necessarily find some secret recipe to creating a functional online community. A thought experiment to test whether incentive-design works well is, does it still operate is it is controlled by the most selfish, profit-driven people you can imagine? Bitcoin still works because miners are incentivized to mine blocks with which other miners will agree and because transactions can be verified objectively: is the sum of the inputs the same is the sum of the outputs? But that's not the case when governance is subjective. If Jimmy Wales was slighlty more intolerant or slightly more selfish individuals, than we could be using a different online encyclopedia today. A single platform with transparent governance cannot limit rent-seeking in itself, but competition in addition to transparent goveranance can. Auditable, forkable, hierachical goverance is functional and forces governance to continuously attract users.


## A Framework for Smart-Contract Governed Communities

Our goal is to help create an open standard for online communities that actually work. The goal should not be to eliminate hierarchy. Hierarchical governance is pratical, and it is not the fundamental issue. The goal should be to limit rent-seeking within the hierarchy.

Decreasing friction to make and join online communities should limit rent-seeking. If users have the ability to create and join communities, taking their data with them, nobody should have to tolerate communities they do not like. Instead people will gravitate towards communities they find fair and interesting. If someone is unhappy with the existing communities or has an idea for a new community, they can start it themselves.

In many ways communities can be compared to businesses. When someone finds an opportunity to create value in the market, they start a business, like how someone should be able to create a new community. Business founders must recruit people to join and use their service, and community founders will need to do the same. Also, as we will discuss in [Monetization](### Monetization), community founders may find ways to profit, too. Early adopters, like early employees may be able to profit, earn a say in governance decisions or both. But unlike building a company, creating a community shoul be much less effort, and hopefully be enjoyable.


### Design Goals

Online communities should be designed to be practical and limit rent-seeking. Here's some further specifications regarding our thoughts so far:

1. Interoperable, Personally Owned Data
> Data must be interoperable between communities and user controlled to reduce the friction of both leaving and joining communities. Therefore there needs to be a standard for how personal data is stored so that individuals do not need to alter their data for different communities.

2. Transparent, Hierarchical Governance
> Governance must be auditable by the members of a community. Therefore community members need access to the governance history of a community. Further specifications on governance should be community specific because there is no one-size fits all model for community governance.

3. Low Technical Barrier to Creating and Governing Communities
> Everyone should be able to create and govern communities, not just those with a technical background. At early stages a large technical barrier is inevitable but over time we hope to abstract it away so anyone can create and govern communities only by entering a few fields and clicking a button.

> Communitites should ideally be easy to understand, too. There should be as little a technical barrier to understanding their fundamentals as possible. Therefore we hope to design communities to be as simple as possible.

4. Flexibility
> An open source standard for communities should allow for a wide range of community functions. Some communities will mirror traditional social media while of others may be groups of writers looking to monetize their content (See [Example](### Examples)). A standard should be flexible so that it can easily support different types of communities.


### The Community Technical Stack

At early stages we consider these *guesses* as to what may work, not necessarily a plan. We still consider it important to have a long term vision, but we just do not plan to be confined by it.

In many cases, some layers of the stack will be totally dependent on the functionality of the community, but here's a general overview of what we think may work.

1. Smart Contract Governance
  Smart contracts will define community roles. They will be community specific, but here is an overview of the general positions we believe most communities will use: owner, administrator and creator. Creators can publish content within the community. Administrators can censor content and remove members who violate the community guidelines. Owners will have all the functionality of administrators, but also be able to edit the community guidelines.

  The community guidelines will define the roles within a community and expectations for each role. Among many other aspects of communities, the guidelines will outline what content is acceptable to publish, what actions may be grounds for removing someone, and how disputes will be resolved. The entire community guidelines will likely be too expensive to store on chain, but storing a hash of the guidelines should be sufficient. With just a hash members can be assured that the community guidelines have not been altered.

  Smart contracts may be the best option for governance because they provide immutable storage and are payable. We hope that payable communities will better allow content creators and curators to monetize their content (See [Monetization](### Monetization)).

  Eventually we will want to create smart contract templates so that communities can be created without coding experience. Ideally someone would be able to deploy a community smart contract by picking the community roles, entering a few fields, and then clicking a button to deploy the contract.

  Initially we plan to build on Ethereum because it is the most mature smart contract platform. We are also interested in looking further into Algorand and Ava, but are open to other platforms as well.

2. Identity Layer (Refactor after doing a 3Box tutorial)

  Individual data needs to be stored in individual storage. Everyone should control their own data, and by separating identities from communities, people can take their data initially posted to past communities, to new communities. It will be important to develop a standard for storing individual data so that it will be interoperable between communities.

  Initially we plan to use 3Box because it is currently integrated with Ethereum and was designed to be blockchain agnostic.

3. Front End

  Communities will eventurally use interoperable frontends. Users will be be able to switch between communities like they can view different ERC20 tokens in Metamask. They will search for the community, add it to their frontend, and then be able to load content from the community by selecting it.

  We expect many different types of frontends. Some frontends will mirror microblogging sites, some larger blogs, and others may need video or music players.


### Examples

Online communities can mirror traditional social media, like twitter or instagram but with transparent governance. Identities will be able to create communities on specific topics, too. It's like reddit, but with transparent community governance, quality control, and where ad revenue can be split between community members (See [Pay to Post](#### 3. Pay to Post)).

But communities can also be much more than that. Online creators can create communities with quality standards so that they can better monetize their content.

Let's say that Alice is a blogger. She used to work for Big Newspaper Inc. and left because she feels she no longer needs to work there. She has a following now and wants to write what she wants to write, not what Big Newspaper wants. She has been able to make some money setting up her own blog where her fans can pay a small monthly fee and get benefits like early access to content and special content.

Then Alice decides to create her own online community. Initially it may just be another open source tool so that she can monetize her content. She sets up the community and then users can pay to support her by sending crypto to the community smart contract. The monetization models Alice can choose are flexible. She can make viewers can a small fee to access an individual pieces or create a subscription model.

Alice starts recruiting other writers to join her community because that way everyone can benefit from everyone else's fanbase. Alice now creates her community guidelines with the help of a few members she was able to recruit. She posts the guidelines in her community so everyone can see them and she puts a hash of the guidelines on chain. One of the initial members, Bob, loves the community and wants more responsibility. Alice appoints im to be an administrator.

Now that Alice's community has a handful of writers, Charlie, a freelance writer wants to join so that he can increase his reach and make some more money. Charlie finds the community guidelines and sees that he must submit a writing sample and a small fee to be considered. The fee is required because Alice wants to prevent sybil attacks and doesn't want to waste her time reviewing halfhearted applications. It's also another way the community can make money. When Charlie pays the smart contract the small fee, the fee can be split between the members of the community. As defined in the guidelines and coded in the smart contract, Alice gets 40% as the community creator, the administrator, just Bob right now, gets 20%, and the few other writers split the remaining 40%.

More members are added as time goes by. There's now 5 administrators and 20 writers, and Alice needs to better realocate fees. If she does not, she may risk her members leaving to create a new community or to join another community. She updates the community guidelinse and the smart contract so that she only gets 20% of fees, 20% is split between the administrators, and the remaining 60% is split between the writers. Because Bob is both a writer and an administrator, he gets paid as both.

Eventually Charlie starts violating the community guideliens. The guidelines say not to use hostile language, and Charlie's been warned multiple times regarding his word choice. Instead of just deleting his post, fixing a symptom of the issue, they kick Charlie out of the community. Alice calls the smart contract to remove Charlie from the list of writers. Because this action is recorded on chain, it is public. If Alice starts abusing her power as creator of the community, the community members will likely find another community.

### Short Term Vision

This short term vision is not set in stone; it is only guesses as to what may work.

Short term we are going to start building communities. We want to find standards for smart contracts and decentralized storage that work in practice. We are going to create standards then create communities. After creating communities we will update the standards, update the communities, and create new communities.

The first community we plan to create is a research community on decentralized online communities. It is where we will post this overview and other related pieces. We will start reaching out to people and online groups to try to get some publicity so that we can start receiving and incorporating feedback. We hope that some people will be interested in getting publishing and administrative privileges and if they are a good fit, we will add them to the community.

Next, we plan to create a development community. It will be a simple community where people can pay the smart contract to help support developers working on creating decentralized online communities. Initially the developer community will be only us, but we plan to create a reproducible process to set up communities in hopes that others will tinker with our ideas. If other developers are working on cool projects, we will add them to our development community. Alternatively, developers can set up their own.

Initially, to get communities started quickly, we will focus on creating the smart contracts and the front end, using a centralized content management system to store community data. People will have to trust us initially, but we plan to incorporate decentralized storage as soon as we can.

## Implications

Ultimately it is impossible to know if this project will be adopted, and the implications if so, but here's some of our ideas.

### Protocols Not Platforms

- open data like if Facebook or Twitter were to open up their backends to developers
- interoperable frontends for a communities
- frontends that support multiple communities

- Chris Dixon's S curve of online communities no longer possible, communities do not have the ability to rent seek

### Community owned Communities

Someone that helps build a community should have a say in how it is governed, if they want to. Governing communities will be work. Identities can be part of many communities so it's unlikely that one identity will want to help govern every single community it participates in. Importantly, though, we believe people should have the option to govern online communities.

### Extending Natural Human Organization

Like how information management tools like computers and the web have extended our ability to manage information, a decenetralized ledger that tracks administrative interactions can help maintain stable groups over the Dunbar number.

- Wikipedia has millions of users, (incredibly broad guidelines [Neutral Point of View])
  - more specfic, quality controlled communities will have a small subset of contributors

- do not need to track interactions in our heads because a decentralized ledger can transparently track administrative actions
- timestamped decentralized storage with version control (Is 3Box timestamped?) for dispute resolution
  - also why posts do not need to be on chain, increasing efficiency


### Monetization

We opt to store community governance in smart contracts rather than other decentralized, immutable storage options because smart contracts will allow communities opportunities to capture the value they are creating. Anyone can pay the smart contract for a variety of reasons listed below and their payment will be distributed to community members as defined in the smart contract.

#### 1. Pay to Join

We envision some large communities that mirror traditional social media like Twitter and Instagram. To deter malicious identities from joining, communities can require a small fee.

#### 2. Pay to View

Communities of popular content creators can require viewers to pay to access their content. When someone pays their smart contract, their payment is immutably recorded and they can use the payment record to view the content. Communities can require reoccuring payments, one time payments to access all previous content, or one time payments to access single pieces of content.

#### 3. Pay to Post

Popular communities can make identities outside their community pay to post content within the community, mirroring traditional advertising on social networks.

#### 4. Mediators of Individual Data

Communities can act as intermediaries between users and those that want to buy their data. E. Glen Weyl and Jaron Lanier proposed these organizations under the name of mediators of individual data (MIDs). Weyl and Lanier's proposal identifies the problem that people are giving their data away from free to companies like Facebook and Google even though these companies find it super valuable. They predict, under many, many assumptions, that over the next 20 years people getting paid fairly for their data could raise the median income of a household of 4 by $20,000 (Radical Markets, 247).

In our model, community administrators would be responsible for bargaining with the companies and individuals that want to buy data.


## Conclusion


## References

Radical Markets

Skin in the Game

The Black Swan

Neocortex size as a constraint on group size in primates

Hierarchy in the Forest: The Evolution of Egalitarian Behavior

Wikipedia Administrators

Information Management: A Proposal

Zuckerberg: https://www.facebook.com/notes/mark-zuckerberg/a-blueprint-for-content-governance-and-enforcement/10156443129621634/

Andreas Antonopoulos, Keeping Digital Communities Weird: https://www.youtube.com/watch?v=1MG1aR71uFg

Kant: http://www.columbia.edu/acis/ets/CCREAD/etscc/kant.html#note1

The Elephant in the Brain

The Introspection Illusion

David Foster Wallace 2005 commencement

wiki statistics: https://en.wikipedia.org/wiki/Wikipedia:Statistics

Wikipedia governance 2002 essay: https://meta.wikimedia.org/wiki/Wikipedia_Governance_(2002_essay) (Language is aimed at a college student, international wikis as indenpendent projects, supposed to be neutral point of view but everyone has cognitive biases and their biases is for wikipedia)

FB on data access: https://about.fb.com/news/2018/04/restricting-data-access/

Dixon: Why Decentralization matters https://onezero.medium.com/why-decentralization-matters-5e3f79f7638e
