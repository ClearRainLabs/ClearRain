# Clear Rain: An Initiative to Create an Open Source Standard for Online Communities

## Overview

A fundamental problem online is one-size-fits-all communities do not mirror how humans naturally organize. Social media, online reviews, and all other sites where anyone can add content rely on online identities, yet they clump everyone into a single community under the governance of the opaque company that runs them. This one-size-fits-all community structure is prevalent everywhere online and

fake news, fake reviews, clickbait, trolls and untrustworthy content in general are widespread online. Even worse, the opaque company the controls the community has assymmetric power over user data and the content users see. And because many of these sites rely on network effects, users can often only use a site known to abuse its power, or forgo the functionality of that site entirely.

The solution, we propose, is to create an open standard for interoperable, smart contract governed communities. We believe that to bring real world civility online, online communities should mirror how humans naturally organize offline. Humans naturally organize in hierarchical groups. Online communities will use smart contracts to define its administrators, creators, and other roles designed for the specfied community.
  - community governance will be transparent
  - smart contracts may specficy that some interactions must be performed on-chain so that they are auditable.
  - decentralized storage so network participants will control the data they create


This is not a typical whitepaper. We do not focus on *what* we are building because we are not sure yet. We think that great products and inventions come as the result of tinkering, not from an immutable plan that some genius created. So this paper is focused on *why* we are trying to create an open standard for online communities and *how* we may design it. In the scenario that nothing we create works or gains traction, we hope to at the very least spark a more informed conversation around online communities.

## Background

### Problems Online

#### 1. Untrustwothy Identities

Untrustworthy content is prevalent seemingly everywhere online that unaccountable identities exist. Social media and review platforms rely on user contributions, yet have trouble making their users accountable. If an identity may or may not be malicious, acting in their own self-interest at the expense of others, then their content is inherently untrustworthy. It cannot be relied on as honest.

Generally, identities online can be trusted when they are well-known to a community. Somebody can be considered trustworthy if one can verify that what they say is generally true, or if others one considers trustworthy vouch for the trustworthiness of some identity.

Importantly, the reputation of others needs to be verified for oneself. The majority of people in a group may think that Bob is awesome, but you, as a skeptic, think that Bob is just a great salesman of his point of view. While many accept what he says as dogma, you take it with a grain of salt.

Reputation is inherently asymmetric, they stem from each and every person's point of view.[^1] Yet in one-size-fits-all communities, reputation is only symmetric; there is a single system for the entire platform.

Without reliable reputation, there are no inherent disincentives to online networks. In the offline world, there are consequences to lying and cheating. Others lose trust in lyers and cheaters so that in the future, whether lying or cheating, nobody will believe them. We naturally ignore lyers and cheaters. We exclude them from our conversations and in more extreme cases, communities will physically exclude those who violate their norms. But on large, one-size-fits-all platforms, the benevolent and malevolent are indistinguishable.

Resultantly, the internet is overflowing with unreliable content. Fake news, fake reviews, clickbait, and untrustworthy content exist on all platforms where anyone can create content.

Furthermore, trying to include all people on a one-size-fits-all platform is overly idealistic. Some will be excluded by what others deem bad behavior because there is no single set of ethical rules. Even worse, the opaque companies that run these companies have assymetric power over their network, and little to no accountability.

[^1]: For the technically-inclined and those who are not convinced by jumping to the conclusion that reputation is asymmetric, check out this formal proof: [Sybilproof Repuation Mechanisms](http://www.eecs.harvard.edu/cs286r/courses/fall08/files/paper-CheFri.pdf)

#### 2.  Misaligned Incentives

Centralized platforms control the content users see, their data, and the ability to censor content on their platforms. The fundamental issue with this uneven balance of power is misaligned incentives between platforms and users. Platforms often want to maximize ad revenue. Resultantly, the want to maximize user attention and user data. More attention so their ad space is worth more and more data to improve their machine learning algorithms to generate more attention. Unfortunately, their algorithms to maximize attention have revealed that humans instinctively pay attention to sensationalist and provacative content. Mark Zuckerberg has acknowledged this problem on Facebook; refering to this content, he says, “people will engage with it more on average — even when they tell us afterwards they don’t like the content” (Zuckerberg). Just because a machine learning algorithm is able to keep users engaged on a platform for hours, unfortunately does not mean that the user liked the content they were seeing.

The data these sites hoard makes them prime targets for hacks. All Facebook data is hosted on Facebook’s servers which makes it really easy for say [Cambridge Analytica](https://www.theguardian.com/news/2018/mar/17/cambridge-analytica-facebook-influence-us-election) to access millions of users’ data or even for one hacker to [access](https://www.cnn.com/2019/07/29/business/capital-one-data-breach/index.html) over 100 million credit cards. Not ideal.

Unfortunately from big, opaque companies like Facebook, there is little to no accountability. Zuckerberg can say that he is doing all he can to fix these problems. He can say that his software engineers are coding up the solutions as we speak. But we believe that the fundamental problem is with the structure of Facebook. As long Facebook is an opaque organization running a one-size-fits-all platform, we do not trust it.

#### 3. Asymmetric Power

The great flaw of opaque organizations is they benefit from all the upside potential of a network but avoid all downside risk. Instead downside risk is transferred to users. When Cambridge Analytica accesses the Facebook data of over 50 million (find larger number) users, Facebook publicly says that they have a team of software engineers fixing the issue. When people start speaking up about how addicting social media is and how machine learning algorithms favor provacative content, Zuckerberg tells everyone that Facebook has new, better than ever before algorithms that are going to solve everything. He has a team of software engineers coding them up right now. But no single person is ever accountable. Zuckerberg always claims that he had no idea and hands over the problem to someone else. This problem is not specific to just Facebook. Facebook is just one of the most prominent examples. Opaque organizations anywhere are great tools for avoiding downside risk. Without transparent governance, individuals will not be accountable.

Furthermore, only these opaque, one-size-fits-all platforms have the ability to ability to censor content. But in the one-size-fits-all model censoring content favors the most intolerant individuals. As Taleb discusses in *Skin in the Game*, in order to please as many people as possible, standards must comply with the most intolerant individuals. One example Taleb gives is that nearly all drinks in the United States are kosher even though only a small minority of people are kosher. It does not make sense for drink manufacturers to make kosher and non-kosher versions of each drink when the cost difference is tiny, if anything, and non-kosher people can drink kosher drinks. This rule, that the most intolerant win, also helps explain why online bulletin board system in the late 90s became less tolerant after they were bought by corporations. The corporations started adding advertising, membership fees, and most importantly rules around what people could and could not say. Unfortunately, as Andreas Antonopoulos states, the weird people who made the bulletin board cool in the first place were no longer welcome (Antonopoulos). Early adopters should be able to be rewarded by helping networks grow, not be forced out as a result of helping a network succeed.

Current mainstream platforms control data, the content users see, avoid downside risk, and unfortunately often punish their early adopters. But worst of all, their singular ability to censor means they are distorting the Truth.

#### 4. Centralized Sources of Truth

An organization with the singular ability to censor content becomes a gatekeeper to what is good and what is bad. They become a moderator between the truth and the people. But give people power and they will use it in their own self-interest. It's human nature.

More broadly, *Homo sapiens* evolved to subconsciously justify what is in their own self-interest as cooperative. Like any animal, we naturally want to survive along with our kin. But we also need to coexist with others as larger groups of humans are much more powerful. So to conflate our animalistic desire to be eternal and our need to cooperate with others, we subconsciously justify the selfish as cooperative, what Kevin Simler and Robin Hanson call *strategic ignorance* (The Elephant in the Brain).[^1] Strategic ignorance is why you should never trust a salesman who doesn't reveal their own self-interest. And it's also why you should be weary of anyone with the ability to censor content. It's not the Truth that they are censoring upon, it's their own subjective version of what they probably believe is best for themself.

The concept of singular gatekeepers ignores that good and bad are *subjective*. Even the truth is subjective. Consider the thought experiment known as Last Thursdayism: the entire universe was created last Thursday and every memory you have prior to last Thursday was created last Thursday, too. While this may seem like a ridiculous idea, it's unfalsifiable. All evidence to show that the universe is older than a couple days could have been created last Thursday. The implication of unfalsifiable ideas like Last Thursdayism is that there is no objective truth.[^2]

Because truth is objective, each and everyone of us naturally gets to decide what is true. The late writer David Foster Wallace says, "The only thing that is capital-T True is that you get to *decide* how you're gonna try to see (the world)" (DFW speech). The Truth is what someone decides for themself.
  - value from our own subjective experiences,
Anything that others decide for you is dogma until you verify it for yourself (assuming you can).

Fundamentally, no single entity can decide what is best for everyone. Anyone that tries to will inherently distort the truth. So that bring us to our thesis:

  **Instead of trying to encompass everyone in a one-size-fits-all community, let's allow people to make and join the communities they actually want.**

[^1]: A great example of strategic ignorance is what Princeton psychologists Emily Pronin and Matthew B. Kugler call the *introspection illusion* (Introspection Illusion). People naturally see themselves to less susceptible to bias than others. If you're like this author and try to recognize justifying selfishness in your everday life, you may recognize that you're far more likely to notice when others are susceptible to it than yourself. And even after recognizing this massive cognitive blindspot, it's still really hard to notice it in action.

[^2]: There's two important tools that thinkers often use to figure out what is likely to be true. The first is reproducibility. Scientific fact is that which can be consistently replicated. Think the theory of gravity is a conspiracy? Try testing it. Throw a ball into the air and see if the theory of gravity holds. If it does not and more importantly you find a procedure to constently replicate you finding, then you just disproved Newton and Einstein.
  The second tool is [Occam's razor](https://en.wikipedia.org/wiki/Occam%27s_razor): when faced with competing explanations, the simpler explanation is more likely to be right. If you have to jump through hoops to show that the the universe was created last Thursday, than the simpler explanation, that it was not, is more likely to be right. Another example is that physicists could model the entire galaxy as revolving around the earth as many did for hundreds of years, but they'd have to create an alternate, more complicated theory of gravity. In the simplest theory of gravity we have, the earth is not the center of the universe.


### Human Organization

- genius of Sir Tim Berners-Lee's proposal for the web, we believe, is that he designed his information systems on how information naturally flowed at CERN, his organization. Similarly, we believe that online communities should be designed based on how humans naturally organize offline. Instead of trying to adapt people to technology, we would rather adapt technology to people.

Additionally, how humans organize is that structure that evolved to dominate the earth. For better or for worse, *Homo sapiens* have drive coutless species to extinction, built massive cities, and stepped foot on the moon. We have not accomplished these feats because we are so much smarter than every other animal, but because as Yuval Noah Harari argues, we are able to organize unlike any other animal, both largely and flexibly (Sapiens).

*Homo sapiens* are unique among primates in our ability to organize at large scales. We are able to organize largely because of our ability for intersubjective thought, our ability to think and communicate abstractly. Other primates are able to communicate with each other, but only regarding the present, objective world. Monkeys can tell others where to find food or that there is a lion nearby, but they cannot think in terms of abstract concepts (Cite Yuval Noah Harari). Humans, on the other hand, can additionally think in terms of what others are thinking, what we call abstract thinking. Money is a great example of intersubjective thought. A United States dollar has no objective value. One person's subjective belief regarding value will likely not hugely impact other's beliefs on value. Instead money gets value from the collective belief that it has value. A vendor could decide that USD has no value and may force you to pay in bitcoin or gold. His belief would have little to no effect on the value of USD, though. But if everyone suddenly decided that they no longer want USD, then suddenly the American dollar would be worthless.

Intersubjective thought allows us to also create large scale organizations. Institutions like the United States governments have no objective link to the real world. There are government buildings, legal documents and law enforcement, but these manifestations of government are only tied to the the collective idea of a United States government throught the collective idea that they are manifestations of the government: a circular argument.

Collective thought unfortunately allows us to create hierachies to the benefit of those at its top. And then those at the top use their strategic igorance (subconsciously) to justify the hierarchy as being great for everyone. Resultantly, organizations like Facebook can create systems were they have all the upside of user data and control over what people see, but none of the downside risk. While you are at risk of data leaks and privacy violations, internet sites are able to generate enormous profits. To clarify, we do not think Facebook and other internet sites are run by bad people; everyone justifies the selfish as cooperative so anyone with power is likely prone to abuse it. But there may be ways to mitigate rent-seeking. We define rent-seeking generally here as using existing power and influence in one's own self-interest and against the interest of those without control.

Next, let's look at how humans organize flexibly, a feature humans share with all primates. Primate groups are naturally organized into hierarchies of smaller subgroups. This discovery was made by anthropologist Robin Dunbar, the namesake for Dunbar's number. Dunbar's number is the cognitive limit on group size in humans, approximately 150. When groups human groups become larger than 150, they naturally begin to fragment into smaller groups. Dunbar found a correlation between neocortex size in primates (relative to their total size) and group size. More specifically, Dunbar argues that the limitation in group size comes from our brains limitations on monitoring cliques within groups;
    "This suggests: (a) that large groups are probably created by the hierarchical clustering of smaller cliques; and (b) that the cognitive limitations lie in the quality of the relationships involved in the structuring of these cliques" (Neocortex size.., 485).
When groups become larger than 150, our brains cannot simultaneously monitor all the cliques within the group. Humans have shortcut to get around this limitation, intersubjectivity, but unfortunately intersubjectivity allows those in power to rent-seek.

We would like to stress that the fundamental issue is not hierarchy. Hierarchies are inherenet to human organization. There will always be people that do a dispropotionate amount of work. Consider the [1% rule](https://en.wikipedia.org/wiki/1%25_rule_(Internet_culture)) online. The vast majority of people the vast majority of the time are consuming rather than creating content. On the English Wikipedia for instance, there are nearly 40 million registered users, likely a fraction of the total number of people that use the site. Of those 40 million, only about 1,000 are [administrators](https://en.wikipedia.org/wiki/Wikipedia:Administrators) (cite wiki statistics). It's a nice feature to have the ability to contribute, but most will not.

Instead the fundamental issue is rent-seeking. Egalitarian human groups, for instance, do not somehow subvert our natural tendency to form hierarchical groups; they prevent rent-seeking. Specfically anthropoligist Christopher Boehm argues regarding egalitarian groups, "The rank and file, watching leaders with special care, keep them from developing serious degrees of authority" (Boehm, 10). Equal rights and opportunities come from constantly monitoring other's power so that no leader can abuse theirs. The necessity to monitor other's power bring us back to the problem with opaque organizations. If individuals are not accountable, there can be no checks on power, and leaders will naturally abuse their power in their own self-interest.


### Wikipedia

Let's look to Wikipedia as a model for an online community. Wikipedia differs from most, if not all, sites open to contributions because it overwhelmingly publishes trustworthy content. There's three core reasons why we believe Wikipedia is successful, but fundamentally Wikipedia successfully limits rent-seeking by mirroring how humans naturally organize.

1. Wikipedia is transparent. Every change is tracked and the history of edits of every Wikipedia page is public. Users are auditable, too. Every registered Wikipedia user has their own page where all of their contributions are visible to the public.

2. Foremost, Wikipedia does not have a flat structure. Wikipedia has a hierarchical governance system. [Administrators](https://en.wikipedia.org/wiki/Wikipedia:Administrators) are Wikipedia users with special privileges including the ability to block and unblock users and protect pages from editing. Anyone can apply to be an administrator and requests are approved by a vote open to the entire Wikipedia community. If a user is voted in, they are added to the list of administrators by a [bureaucrat](https://en.wikipedia.org/wiki/Wikipedia:Bureaucrats). Bureaucrats have special administrative functions mostly adding users to and removing users from administrative roles. At the top of the hierarchy, and not denoted in the structure from Wikipedia's site below, is the role of [founder](https://en.wikipedia.org/wiki/Wikipedia:User_access_levels#Founder). There is one founder, Jimmy Wales.

3. Wikipedia is entirely open source. If Wikipedia were ever controlled by a majority of profit-seeking actors, colluding to use their power to profit, anyone could fork Wikipedia to create a more trusthworthy version.

![Wikipedia Administrative Structure](https://en.wikipedia.org/wiki/Wikipedia:Administration#/media/File:Wikimedia_organizational_and_user_rights_hierarchy.svg)

Wikipedia's structure is entirely transparent. So while some users have more power, those users must also be more accountable or risk losing their position. Interestingly, Wikipedia's auditable hierarchy seems to have extended Dunbar's number. There are millions of registered that can all watch each other. Instead of having to track relationships with others with our brains, Wikipedia has offloaded that task to a transparent database. Resultantly, the have seemingly extended Dunbar's number while still allowing everyone to ensure Wikipedia's leaders are not abusing their power.

It is not a completely decentralized, overly idealistic structure where everyone is equal. While some may fear taht Jimmy Wales may abuse his power, violating the policies he created, he says, "If I attempted to deviate from the (Neutral Point of View) policy, to push my own political agenda for example, then the contributors can and should take the database and the software and set up a competing project." Anyone who disagrees with Wales' governance decisions can fork Wikipedia, use someone else's fork, or merely use another encyclopedia. An open source community like Wikipedia can prevent leadership from abusing their power through the threat of a fork. People are allowed to vote with their feet, a feature typically not present online. Offline, though, most people are (hopefully) free to leave organizations, join new alternatives and create their own.

Wikipedia is not and does not try to be comepletely decentralized. Instead Wikipedia is an auditable, forkable hierarchy.


## Smart-Contract Governed Communities

Our goal is to help create an open standard for online communities that actually work. There are many projects we consider overly-idealistic. While we agree they would be awesome if they worked, many of these projects completely ignore how humans naturally organize. The goal should not be to eliminate hierarchy. Hierarchy is not the fundamental issue. The goal should be to limit rent-seeking within the hierarchy.

Decreasing friction to make and join online communities should limit rent-seeking. If end-users have the ability to create and join communities, taking their data with them, nobody will tolerate communities they do not like. Instead people will gravitate towards communities they find fair and interesting. If someone is unhappy with the existing communities or has an idea for a new community, they can start it themselves.

In many ways communities can be compared to businesses. When someone finds an opportunity to create value in the market, they start a business, like how someone can create a new community. Community founders will need to recruit people to join and use it. As we will discuss in [Monetization](### Monetization), community founders may find ways to profit, too. Early adopters, like early employees may be able to profit, earn a say in governance decisions or both.


### Design Goals

"You know the most information when you're doing something, not *before* you've done it." -Jason Fried and David Heinemeier Hansson, *Rework*

Early stages we consider these *guesses* as to what may work, not necessarily a plan. We still consider it important to have a long term vision, but we just do not plan to be confined by it. We plan to reconsider everything as we build so our guesses can be considered strong opinions of what may work, but weakly held.[^5] Our fundmanetal goal is to create an open source standard for communities. It should be designed to be practical and limit rent-seeking. Here's some further specifications regarding our thoughts so far:

1. Interoperable, personally owned data
  Data must be interoperable between communities and user controlled to reduce the friction of both leaving and joining communities. Therefore there should be a standard for how personal data is stored so that individuals do not need to alter how their data is stored to share it with different communities.

2. Transparent, hierarchical governance
  Governance must be auditable by the members of a community. Therefore community members need access to the governance history of a community. Further specifications on governance should be community specific because there is no one-size fits all model for community governance.

3. Low technical barrier to creating and governing communities
  - technical barrier to create and govern communities increases friction
  - early stages a large technical barrier is inevitable but over time we hope to abstract it away so that anyone can easily create and govern communities.

4. Flexibility
  - overall standard should be minimal
  - limited to only what is necessary so that communities are not confined by this standard

[^5]: I think someone came up with something like this before me.

### Technical Stack

- stack is dependent on the totally dependent on the functionality of the community but here's a general overview of what we think may work

1. Smart Contract Governance
  - governance decisions happen on chain
    - immutable, transaction fees -> costly to make governance decisions

  - communities are payable

  - smart contract is community specfic

  smart contracts define community roles and who has each role
      - basic community roles: administrators and creators
          - communities should define other roles as needed
          - different administrative roles (so people are accountable)
          - potentially different tiers of creators
            - rewarded for staying longer or for producing a lot of good content (that is, content people in the community like, not content that grabs attention)
      - community guidelines
          - expectations for administrators and creators
          - dispute resolution

  - eventually want smart contract templates so communities can be created by anyone without coding experience, ideally someone would be able to deploy a community specific smart contract by picking a predefined governance structure, entering a few fields, and then clicking a button that deploys it.

2. Storage
  - 3Box: so people actually own their own data, so if they want to go to a new community, they can take their data from past communities with them

  - standard for storing individual data

3. Front End

  - create interoperable front ends for communities

  - switching communities like finding an ERC20 token in Metamask, just type in the name of the token

  - people able to access the content of a private community by connecting their wallet to the frontend

  - expect community specific sites, but also want to create community independent sites
    - community specific likely necessary to abstract away community-specific smart contract function calls


### Examples

- freelance writers, instead of posting to their personal blog, they're able to create content for a writing community
  - community stated by a high profile journalist who decided he had enough reach by himself that he no longer needed to work for a newspaper or magazine.
  - he'd make more money starting his own community and have a say in how it's governed
  - recruits other writers, some writers apply to join the community by sending him writing samples

- video creators, like YouTubers or video game streamers all streaming to the same community. The community administrators create a rule that there is an advertisement at the beginning of each video and advertising funds get split up between members according to the smart contract

### A Community Lifecycle ^^^ combine these two sections

- Bob is a freelance writer, wants to join a community of bloggers to increase his reach.
  - community of writers was started by Charlie, a popular writer who already had a large following
    - approved writers are able to post

  - Bob submits an application to be part of the community, it's a writing sample and a his ethereum address
  - Charlie likes Bobs writing and adds Bob to the community smart contract as an address capable of joining the community.
  - once Bob has been approved, he's able to pay the smart contract the entrance fee to the community and he's in.
  -

- pay to join a community, small fee to stop sybil identities, fee goes to Charlie because he's the only administrator. If there were more, the fee could be split between them.
- able to post content, all content (can be) stored in your 3Box as well as the community server
- start violating the community guidelines, guidelines say not to use offensive language and Bob uses offensive. He gets kicked out.
- He may be able to get back in by creating another identity or just by requesting to get back in, but he'd have to pay the entrance fee again.

- Charlie starts abusing his power as the sole administrator? Someone makes a new community that is more fair and eventually everyone from Charlie's community goes there.

### Short Term Vision

- constantly iterating to find a set of standards that works well
- create standards -> start creating communities -> update standards -> update communities and create new communities

- create a researach community, people able to submit research to the community.
  - most importantly, get this information up so we can start receiving feedback
- hope to get feedback from others and we hope others tinker to find a community system that works, too.

- members of the community, those that contribute, can apply for administrative privileges

- create a development community, pay the smart contract and funds get split between the group of developers working on it

- create a research community, build on top of open source technology

- initially focus on smart contracts and the frontend, use a content management system

- spend time testing storage systems and actually understanding git under the hood

  - then switch to decentralized storage -> community specific decentralized storage

- anyone can fund the community and funding gets distributed to members based on the smart contract



## Anticipated Implications

- ultimately impossible to know if this project will be adopted, and what it's implications would be if so, but here's some ideas

### Extending Natural Human Organization
- as information management tools have extended our ability to manage information, a decentralized ledger that tracks interactions may potentially allow for accurate reputation with over 150 members in a group

- while posts may not be on chain yet,

- ref sybil proof reputation?

### Communities within communities

- like how businesses can have different departments managed by different people, communities can have communities within them
- Charlie's blogging community starts getting big, he can't oversee everything, creates subcommunities that can be managed by middle managers, middle managers get paid for their work and get to use Charlie's esteem to bootstrap their community, Charlie taking a risk on the community because funding a bad community will affect his reputation.

### Democratizing Control Over Communities
- communities controlled by opaque companies

- communities can allow anyone to be an administrator, administrators are known

- we believe that most people will not want to be administrators, as most people who use wikipedia do not contribute to it. (90-9-1 rule of the internet)

- anyone can create their own community
- status quo is that early adopters to social networks or contributors to review sites are treated like everyone else
- But now, early adopters of networks have the ability to participate in governance
- creating communities like creating a startup, most will likely be worthless

- less friction to creating a new community -> less likely that communities will be able to abuse their power

### Monetization

#### 1. Pay to Join

- large communities you need to pay to be able to view and post in, mirrors traditional social media
- prevents malicious identities, abusive identities get kicked out, can try to re-enter but they'll need to pay the fee again
- where fees go is determine by the smart contract, distributed to administrators and contributors of the community.
  - smart contracts specifies community ownership. Alice owns 20% of the community -> 20% of fees go to alice

#### 2. Pay to View

- community of content creators and viewers need to pay to view content, mirrors subscription services like Netflix or the New York Times

#### 3. Pay to Post

- communities can make outsiders pay to post content within the community, mirrors advertising on social networks

#### 4. Pay to Support

- pay smart contract to support a group of developers or a group of researchers
- decentralized donations, smart contract determines how funds are split up, so that donators know exactly who their funds are going to
  - tracking people's contributions in 3Box may be able to give people to ability to easily audit where their funds are going

  - can request developers to create a new smart contract that splits a certain ratio between developers

#### 5. Mediators of Individual Data

- communities can act as intermediaries between users and those that want to buy their data
- idea proposed by E. Glen Weyl and Jaron Lanier (Radical Markets)

- inalienable data the is aggregated on a radix like server so it can't be copied?

### Privacy
- people control their own data

- encourage people not to be cautious of linking online identities to real world identities
- encourage people to create multiple different identities
- in private communities, data will only be available within the community
- large technical problem of inalienable provenance

In the former case, there is an issue of user privacy. While many, we believe, will have no problem linking their online and offline identities, users should have a choice whether or not to remain anonymous. We worry about cases where people may lose jobs over activity online. It's previously unprecendented to say something just meant to friends and have consequences in other parts of their lives.


### Consolidation
This section is mere speculation. We're uncertain if decentralized communities would lead to more or less polarization and ultimately nobody can predict the future. But here's our argument for why we believe that the online communities we propose will decrease polarization.

- people decide what groups to join -> won't it lead to more polarization?
- most people are fairly moderate, most people will join moderate groups
- emphasizing content people actually like, no sensationalist and provacative content -> more moderate content

- people will join 'alt' groups, but most groups will join moderate groups. While members of alt groups today may think that the centralized networks are conspiring against the truth
- such conspiracies depend on

-


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
