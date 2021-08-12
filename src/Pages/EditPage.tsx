import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { editorText } from '../Recoil'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Button } from 'react-bootstrap'
import { currentView } from '../Recoil/views'
import { getPageCount, activePage, pageSelector, initializeeBook, getAccount } from '../Recoil/eBook'
import { useSpring, useTransition } from "@react-spring/core";
import MyEditor from '../Components/MyEditor'

const text = "<h1 style=\"text-align:center;\">Part III: Sealing the Memories</h1><p>This is the final stage of this '<em>game</em>'. The previous encounter happened right after I had returned from visiting my father. They were very careful to time these events accordingly so their manipulations would appear perfectly legitimate. So after I had returned from staying with my father, the events of the previous chapter happened. Now they needed me to stop telling my secret since I am away from the alleged source of these events (my father) in order to prevent suspicion from falling back on them in the event a dilligent social worker was on the case.</p><h5 style=\"text-align:center;\">The Great Setup</h5><p>To seal my memories for many years to come, and to get me to stop telling kids my secret, they took advantage of the responsive training they had conditionally reinforced. They took me to watch the 3 stooges with an actual pedophile. They said 'don't tell him your secret, if you do something terrible will happen'. And this was the last time I told anyone my secret. I repressed the memories, and didn't revisit this until much later in life. If I had just done what I was told. If I had just followed orders. I suppose that would be the argument they would make to justify their actions.</p><h5 style=\"text-align:center;\">Afterthoughts</h5><p>I have a hard time drawing any other conclusion than this cult is enslaving humanity by exploiting defenseless kids. Then using the schools to effeminate the boys and emasculate the girls to cause massive confusion and dysfunction during those crucial years of mental and physical development. This has to stop. If you look closely at the Black Lives Matter vs Blue Lives Matter crowds, you will notice there is actually a lot of all races on both sides. This is because it has more to do with those raised by toxic male presence vs those raised by toxic female presence. Those that were given the second dose like me are pitted against those raised by largely toxic single mothers. If I hadn't managed to jailbreak my mind from this cult, I would probably be a drone in the Blue Lives Matter crowd. Instead, I am standing between the two sides, trying to bring reconciliation by highlighting the cause of our differences and disputes. This is what empires are built on. Bread, wine, circus, and keeping us divided and fighting among ourselves. In my eyes, this looks like sociopaths creating a class of servants by exploiting a shortcoming in the human psyche-- basically hacking and exploiting the young human psyche to create highly exploitable servants (we are called employees today, I guess). They make the kid feel guilty about telling their secret because they told you not to and you always partly feel like 'if I had just listened', despite not understanding you were being set up against your very own nature/genetics. This is some seriously sick and twisted mind control, MKULTRA type of stuff. That Bohemian Grove ceremony Alex Jones filmed where they burn the mock effigy of a child is, in my opinion, representing the burning of a child's soul, heart, and dreams-- and their care in the process, hence the name 'Cremation of Care'. This is the true face of the people leading us right now, let's do better and choose better moving forward.</p>"

const title = 'The Ritual'
const description = 'A Breakdown of the 3 Phases Involved'

const EditPage: FunctionComponent = (props: any) => {

    const [chapter, setChapter] = useState<number>(2)
    const methods = useRecoilValue(initializeeBook)
    const [view, setView] = useRecoilState<string>(currentView)
    const acct:string = useRecoilValue(getAccount)
    console.log(acct)
    const [html, setHtml] = useRecoilState<string>(editorText)

    useEffect(() => {
        setHtml(text)
    }, [])

    const handlePageChange = (action: string) => {
        switch(action) {
            case 'inc' : {
                setChapter(chapter + 1)
                break
            }
            case 'dec' : {
                setChapter(chapter - 1)
                break
            }
            default: break;
        }
    }

    const createPage = async () => {
        try {
            console.log(methods)
            await methods.createPage(1, html).send({from: acct})
        } catch (error) {
            console.log(error)
        }
    }

    const createChapter = async () => {
        try {
            await methods.createChapter(title, description).send({from: acct})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h3 style={{textAlign: 'center'}}>Selected Chapter: {chapter}</h3>
            <MyEditor />
            <Button variant='success' onClick={() => createPage()} style={{margin: '0 auto', display: 'block'}}>Create Page</Button>
            <br />
            <p>chapter: {chapter}</p>
            <Button variant='danger' onClick={() => handlePageChange('dec')} style={{margin: '0 auto', display: 'block'}}>{'<-- chapter'}</Button>
            <Button variant='info' onClick={() => handlePageChange('inc')} style={{margin: '0 auto', display: 'block'}}>{'chapter -->'}</Button>
            <br/>
            <Button variant='info' onClick={() => setView('boarding')} style={{margin: '0 auto', display: 'block'}}>Boarding Page</Button>
            <br/>
            <p>title: {title}</p>
            <p>desc: {description}</p>
            <Button variant='success' onClick={() => createChapter()}>Create Chapter</Button>
        </>
    )
}

export default EditPage