import { useState, useRef, MutableRefObject } from 'react'
import { useSetRecoilState } from 'recoil'
import { currentView } from '../Recoil/views'
import PagePreviewEditor from '../Components/PagePreviewEditor'
import { useTransition, animated } from 'react-spring'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'


const pages: Array<string> = [
    "<h1 style=\"text-align:center;\">The Purpose of Coming Forward</h1><p>For most of my life this has been a burden I was unaware of-- a repressed memory. It was like a shadow lingering just outside of the periphery of my senses functioning to throw obstacles into my path at the worst possible times. My life has led me down a path that has seen many great successes, followed by many great failures, followed by new starts to great successes-- and, of course, again failures. I have experienced many death/rebirth cycles, and learned many different skills due to the chaotic and constantly changing nature of my life combined with my relatively quick learning curve. In short, my life (from my vantage point, mind you) has been one spent standing in the middle of two opposing sides trying to bring reconciliation. At a very young age I noticed that the opposing sides would converge and attack the one trying to point out how and where the two sides COULD reconcile, should they choose to.</p><p>Many of you have experienced this in toxic relationships. For example, men that start listening to women that say they would like them to show a little more emotion and actually attempt this are usually ghosted. Women that listen to the complaints of their man and actually make some of the more reasonable changes they suggest are often met with hostility, cheating, and/or ghosting.</p><p>The same pattern is evident in politics too. Look at the breakdown of the 2020 election: Democrat 51%, Republican 46%, Libertarian 1%. The Libertarian party is largely a middle ground between Republicans and Democrats, and they are vehemently attacked by both sides. Republicans largely represent the collective male subconscious, whereas the Democrats represent the collective female subconscious.</p><p>Attempts to understand WHY these calamities kept happening has caused me to become very adherent to the ideas and theories behind Simulation Theory with respect to Quantum Physics-- namely the Quantum Eraser Experiment and the success cases of Entanglement Swapping with communications protocols. This implies that a single subatomic particle can represent a great many different actual physical particles in the physical universe in many different places and times-- likely dependent on whatever it needs to be in any given timeline relative to an observer. This is indicative of a client-server architecture. This also implies there exists a different parallel instance/universe for any and every possible outcome any observer or particle can take all running in the exact same computational matrix, dynamically serving content depending on who/what/when is requesting the content. In essence, this makes Sam Harris partially correct about determinism and a lack of free will because every possibility is happening and already charted out; however, we only seem to experience one universe from our own vantage point so this also implies we are in some aspects writing and choosing our own story. So there is a sense of free will, but yet all those different paths have already been determined. Chew on this one, Mr Harris. This is actually very reminiscent to a rendering engine, not totally unlike the browser engine you are viewing this content with right now.</p><p>I have come to believe that I am experiencing things as I am because I have not adequately addressed and dealt with the repressed trauma I endured as a child. I have moved on, changed, and reinvented myself many times; however, until the initial issue is addressed properly, it will always be present. I could go to the end of the universe and reinvent myself 1000 times over and still not escape the never ending tragedy-- basic rules of the programming of reality. Until we address these problems fully, and release them, they will follow us wherever we go. Now, with the rise of cryptocurrencies and decentralized platforms, I have a way of venting this out that NOBODY can censor or alter the message of. I would implore whoever is reading this to examine where they stand in all of this, and how they can-- and WHY THEY SHOULD-- improve themselves so that we can collectively move on to bigger, better, more constructive problems to solve.</p>",
    "<h1 style=\"text-align:center;\">The Ritual</h1><p>The ritual, in short, is intended to make slaves of children through the use of sexual abuse and torture to cause repression of memories resulting in dissociative identity disorder and a compartmentalization of different aspects of life: one distinct persona for school, another persona for extracurricular activity A, another for extracurricular activity B, another for home life, and so on. The overall idea is to break up a family and destroy the proper patterning of a developing child. Its basically a hack of the human psyche to create a serf. The best way to counter a hack is to make everyone aware of the hack in order to prevent future occurances (think of this as alerting everyone to not click on suspicious email links).The following is quoted directly from the 'Willie Lynch Letters and the Making of a Slave':</p><h5 style=\"text-align:center;\"><em>The N***er Marriage</em></h5><p><em>We breed two n***er males with two n***er females. Then we take the n***er males away from them and keep them moving and working. Say one n***er female bears a n***er female and the other bears a n***er male. Both n***er females being without influence of the n***er male image, frozen with an independent psychology, will raise their offspring into reverse positions.</em></p><p><span style=\"background-color: rgb(247,218,100);\"><em>The one with the female offspring will teach her to be like herself, independent and negotiable (we negotiate with her, through her, by her, we negotiate her at will). The one with the n***er male offspring, she being frozen with a subconscious fear for his life, will raise him to be mentally dependent and weak, but physically strong, in other words, body over mind. Now in a few years when these two offspring's become fertile for early reproduction we will mate and breed them and continue the cycle. That is good, sound, and long range comprehensive planning.</em></span></p><p>End Quote.</p><p>What I am about to detail is a recipe for feudalism. It is designed to systemically repress the questioning of authority, and instill blind obedience. The ruling class refers to this as their 'Divine Right to Rule'.</p>",
    "<h1 style=\"text-align:center;\">Part I: Breaking Apart the Family</h1><p>The first part of this sequence involves breaking apart a family in order to create the cycle of independence in a woman. There are many ways to achieve this to the twisted imagination. This is, I image, where the sequence ends for most unwilling participants. My experience went as follows:</p><h3 style=\"text-align:center;\">My Experience</h3><p>I was raped and molested at around the age 3. I was then coerced and tricked into telling my friends at daycare about my secret. If I was discovered by an adult, then I needed to say 'this is what me and my daddy like to do'. Sure enough, as intended, my parents were split apart. I was moved halfway across the country and the cycle began for me. I wanted to go live with my dad, but the social workers wouldn't allow it. He didn't put up much of a fight if I'm being honest though. I was just condemned to deal with this curse for the time being.</p><h3 style=\"text-align:center;\">Takeaways</h3><p>I imagine this, or something similar with similar intent, happens to many kids. The big idea would seem to be getting men and women at odds with each other and set up the court system to favor single mothers in custody disputes, glorify the idea, encourage the independent mindset in women to create this cycle. I am not, by any means, encouraging women to become dependent slaves to men. I, personally, believe respect between the two should be mutual. This usually means a lot more than most men or women are willing to accept. Hence the purpose of dropping this old secret. We have to come to terms and rectify our differences or this problem will keep getting worse. We need to stop glorifying the degradation of ourselves. We need to acknowledge our own personal faults, stop lying to ourselves, and stop sweeping the dirt under the rug. This is how we prevent an atrocity like what happened to me from happening. COMMNICATION. TRUST. These are things that seem all but dead to me. I would really like to see these things improve.</p>",
    "<h1 style=\"text-align:center;\">Part II: Standing In as the Family</h1><p>The next phase is, by default, less common than the first phase. Most unfortunate kids this sequence of events happens to do not reach this phase, and instead are stuck being raised by a single mother and develop this character template. This phase is outlined as follows:</p><ol><li>Finding the displaced child.</li><li style=\"margin-left:3em;\"><span style=\"color: rgb(33,37,41);font-size: 16px;\">Gain the child's trust, and train the child to manipulate others.</span></li><li><span style=\"color: rgb(33,37,41);font-size: 16px;\">Pin the blame on the previous father figure.</span></li><li><span style=\"color: rgb(33,37,41);font-size: 16px;\">Seal the memories and trick the child into thinking it is their fault.</span></li></ol><h3 style=\"text-align:center;\">My Experience</h3><h5 style=\"text-align:center;\">Arrival in a new Location</h5><p><span style=\"font-size: 12pt;\">This phase began after my parents split, moved apart and I was sent to daycares in the new location while the adults would go to work. Just because the child's location changes does not mean a sexually abused child will just magically get better; the telling of the secret to other kids at the daycare was still an active issue playing out for me. This, unfortunately, leads the members of this cult right back to the displaced place kid like a GPS beacon AND continues to spread the damage of this curse because of its effect on the other kids. My mom eventually found a boyfriend who would later marry my mom and become my step dad.</span>&nbsp;</p><h5 style=\"text-align:center;\">Gaining My Trust</h5><p>They gained my trust by hanging out with me and acting silly like young kids. I would be tasked with doing things like taking something like the remote control and hiding it so that whoever was watching TV would have to go find it. Then I could go change the channel to something I wasn't supposed to watch. Then we began watching the 3 stooges. They would say 'we are like the 3 stooges, we like to play tricks on each other'. They kept reinforcing the idea that they were like my little friends at daycare, they weren't the bad grown ups I had become afraid of. Eventually the idea took hold and I started telling them my secret.</p><h5 style=\"text-align:center;\">My Counter-Hack</h5><p>Back in PA I knew something was wrong when I told the daycare workers it was my dad. I distinctly remember having an out-of-body conversation with someone that seemed separate from myself, and I remember that awareness pointing out this was bad and convinced me to say it was me and my friend Ryan instead of my dad. Maybe this was simply my super-conscious desperately trying to help the child me-- I still do not know. But it threw a wrench in their hack, and is largely why I am able to remember these events so clearly. I equate this to a computer virus using a predefined search for a malicious file where I renamed the parent directory(s) so the search cannot find the file. So in order to execute, manual intervention was required-- but this also gave a timestamp and user access record to the modification, and what was modified (ie, it gave me a direct reference back to these memories when I was older and ready to face them).</p>",
    "<h1 style=\"text-align:center;\">Part II: Standing In as the Family</h1><h5 style=\"text-align:center;\">Pinning the Blame on the Other Father</h5><p>After gaining my trust, they quickly realized I had changed my story from blaming my father. I remember taking them to the closet, telling my secret and them saying 'thats our secret too! But you have to say 'this is what me and my daddy like to do'. Now they are going to ask you which one, and you have to tell them its the one back in NY.'. Sure enough, I did this and any chance I had of leaving this situation quickly evaporated. Not that, in my situation, my father would have actually taken me back as he wanted to pawn the responsibility of raising me at a young age off onto my mom and then take me for the fun years-- and brag about this glorious plan right in her face. You could say he carries the most blame for this entire situation happening, and I really couldn't dispute it. So fathers, or potential fathers, remember this lesson; or please don't have kids.</p><h5 style=\"text-align:center;\">Counseling Sessions for Custody</h5><p>I remember going through counseling sessions as a kid. I was routinely asked which parent I would prefer to live with, questions about home life, etc. I always said I wanted to go live with my dad, but it would never happen. This is likely a combination of my father being a neglectful narcissist in general, and the result of this sick, twisted game warping the perceptions of the social workers. I would implore any social worker coming across this type of issue to really probe into the situation. A surface glance at these situations WILL NOT be enough. If you feel you don't have time, please quit as you are making matters worse.</p\"text-align:center;\"><h3  style=\"text-align:center;\">An Important Observation</h5><p>I feel the need to emphasize how using the bonding over watching the 3 stooges was intended to train a response. We watched it several times over several days until it was reflexively trained that whoever I watched that show with was, in my mind, one of my little friends. It felt similar to the training of Pavlov's dog where ringing the bell before bringing meat began to trigger salivation in the dog by simply ringing the bell.</p>",
    "<h1 style=\"text-align:center;\">Part III: Sealing the Memories</h1><p>This is the final stage of this '<em>game</em>'. The previous encounter happened right after I had returned from visiting my father. They were very careful to time these events accordingly so their manipulations would appear perfectly legitimate. So after I had returned from staying with my father, the events of the previous chapter happened. Now they needed me to stop telling my secret since I am away from the alleged source of these events (my father) in order to prevent suspicion from falling back on them in the event a dilligent social worker was on the case.</p><h5 style=\"text-align:center;\">The Great Setup</h5><p>To seal my memories for many years to come, and to get me to stop telling kids my secret, they took advantage of the responsive training they had conditionally reinforced. They took me to watch the 3 stooges with an actual pedophile. They said 'dont tell him your secret, if you do something terrible will happen'. And this was the last time I told anyone my secret. I repressed the memories, and didn't revisit this until much later in life. If I had just done what I was told. If I had just followed orders. I suppose that would be the argument they would make to justify their actions.</p><h5 style=\"text-align:center;\">Afterthoughts</h5><p>I have a hard time drawing any other conclusion than this cult is enslaving humanity by exploiting defenseless kids. Then using the schools to effeminate the boys and emasculate the girls to cause massive confusion and dysfunction during those crucial years of mental and physical development. This has to stop. If you look closely at the Black Lives Matter vs Blue Lives Matter crowds, you will notice there is actually a lot of all races on both sides. This is because it has more to do with those raised by toxic male presence vs those raised by toxic female presence. Those that were given the second dose like me are pitted against those raised by largely toxic single mothers. If I hadn't managed to jailbreak my mind from this cult, I would probably be a drone in the Blue Lives Matter crowd. Instead, I am standing between the two sides, trying to bring reconciliation by highlighting the cause of our differences and disputes. This is what empires are built on. Bread, wine, circus, and keeping us divided and fighting among ourselves. In my eyes, this looks like sociopaths creating a class of servants by exploiting a shortcoming in the human psyche-- basically hacking and exploiting the young human psyche to create highly exploitable servants (we are called employees today, I guess). They make the kid feel guilty about telling their secret because they told you not to and you always partly feel like 'if I had just listened', despite not understanding you were being set up against your very own nature/genetics. This is some seriously sick and twisted mind control, MKULTRA type of stuff. That Bohemian Grove ceremony Alex Jones filmed where they burn the mock effigy of a child is, in my opinion, representing the burning of a child's soul, heart, and dreams-- and their care in the process, hence the name 'Cremation of Care'. This is the true face of the people leading us right now, let's do better and choose better moving forward.</p>"
]

const Wrapper = styled.div `
    max-width: 100%;
    position: fixed;
    will-change: transform, box-shadow;
    display: block;
    padding-left: 1%;
    padding-right: 1%;
    margin-right: 1%;
    padding-bottom: 3%;
    overflow-x: hidden;
    overflow-y: auto;
    cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39, auto;
`;

interface Page {
    setCurrentPage: Function,
}

const Static: Function = (localProps: Page) => {

    const [currentPage, setCurrentPage] = useState<number>(0)
    const topRef: MutableRefObject<any> = useRef(null)

    /*const index = useRef(0)
    const [props, set] = useSprings(pages.length, (i) => ({
        x: i * window.innerWidth,
        scale: 1,
        display: 'block'
      }))

    const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
        if (active && distance > window.innerWidth / 4) {
            index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)
            cancel()
        }
        set(i => {
            if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
            const x = (i - index.current) * window.innerWidth + (active ? mx : 0)
            const scale = active ? 1 - distance / window.innerWidth / 2 : 1
            localProps.setCurrentPage(index.current)
            return { x, scale, display: 'block' }
        })
    })*/

    const [boxShadow, setBoxShadow] = useState<string>('0px 3px 10px -2px rgba(0, 0, 0, 0.4)')

    const transition = useTransition(pages[currentPage], {
        from: {opacity: 0, transform: 'translate3d(50%,0,0)'},
        enter: {opacity: 1, transform: 'translate3d(0,0,0)'},
        leave: {opacity: 0, transform: 'translate3d(-50%,0,0)'}
    })

    const handleClick = () => {
        if(currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
            topRef.current.scrollIntoView()
            return
        }
        if(currentPage === pages.length - 1) {
            setCurrentPage(0)
            topRef.current.scrollIntoView()
            return
        }
    }

    const handleMouseOver = () => {
        setBoxShadow('0px 6px 20px -5px rgba(0, 0, 0, 0.4)')
    }

    const handleMouseLeave = () => {
        setBoxShadow('0px 3px 10px -2px rgba(0, 0, 0, 0.4)')
    }

    return(
        <div style={{position: 'absolute', overflowX: 'hidden', width: '100%', height: '100%'}}>
            <h3 style={{textAlign: 'center'}}>Static Version</h3>
            <br/>
            <h4 ref={topRef} style={{textAlign: 'center'}}>Page {currentPage + 1} of 6</h4>
            <br/>
            {currentPage > 0 && <Button variant='warning' style={{margin: '0 auto', display: 'block'}} onClick={() => setCurrentPage(currentPage - 1)}>Previous Page</Button>}
            <br/>
            {transition((style, i) => {
                return(
                    <animated.div style={style}>
                        <Wrapper onClick={handleClick} style={{boxShadow: boxShadow}} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} >
                            <PagePreviewEditor displayText ={i} />
                        </Wrapper>
                    </animated.div>
                )
            })}
        </div>
    )
}

export default Static