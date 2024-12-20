import React, { useEffect, useRef, useState } from 'react'
import gimg6 from "assets/gimg6.png"
import { SlArrowDown } from 'react-icons/sl'
import { FaCaretDown } from 'react-icons/fa6';

function ModalSelector({ error, closeview, caret = true, source, Options, defaultValue, balance=false, open, setOpen, tops="top-[4rem]", title='search wallet', box=true, DataSelected }) {
    const togref = useRef(null)
    const [content, setContent] = useState({})

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (togref.current && !togref.current.contains(e.target) &&
                !document.querySelector('.MuiPopover-root')?.contains(e.target)) {
                closeview();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeview]);

    useEffect(() => {
        (() => {
            if(!content?.short && defaultValue) {
                const image = source.find(ele => ele.short === defaultValue?.wallet)
                const optionTag = Options.find(ele => ele.short === defaultValue?.wallet)
                const data = {
                    ...defaultValue,
                    image: image?.image,
                    short: image?.short,
                    name: optionTag?.name
                }
                setContent(data)
            }
        })()
    }, [])

    function HandleSingles(item) {
        const image = source.find(ele => ele.short === item.short)

        const data = {
            ...item,
            image: image?.image
        }
        setContent(data)
        setOpen(false)
        DataSelected(data)
    }

    return (
        <div ref={togref}>
            <div
                onClick={() => setOpen(open ? false : true)}
                className={`input ${error ? '!border-red-700' : '!border-slate-300 dark:!border-maindark dark:!bg-maindark/40'} dark:!text-slate-300 !p-1 dark:placeholder:!text-slate-300 border flex items-center justify-between cursor-pointer group ${box ? '' : 'hidden'}`}>
               {content?.short ? <div className="flex gap-4 items-center">
                    <div className="">
                        <img src={content?.image} alt="" className="size-8" />
                    </div>
                    <div className="">
                        <div className="capitalize font-bold text-primary">{content?.name}</div>
                        <div className="uppercase text-xs font-semibold text-zinc-500 dark:text-zinc-400">{content?.balance} {content?.short}</div>
                    </div>
                </div>: <div className="text-zinc-400 p-2.5">{title}</div> }
                <div className="text-zinc-300 group-hover:text-primary"> {caret ? <FaCaretDown /> : <SlArrowDown />} </div>
            </div>
            {open && <div className={`absolute ${tops} dark:text-zinc-200 left-0 w-full max-w-lg bg-white dark:bg-maindark dark:border-maindark z-10 border shadow-md`}>
                <div className="p-2">
                    <input type="text" placeholder={title} className="border-b bg-transparent dark:border-black w-full outline-none p-2 text-sm" />
                </div>
                <div className="h-fit max-h-[17rem] overflow-y-auto scrolls">
                    {Options?.map((item, index) => {
                        const image = source.find(ele => ele.short === item.short)
                        return (
                            <div
                                onClick={() => HandleSingles(item)}
                                className="flex gap-4 p-2.5 cursor-pointer hover:bg-slate-100 dark:hover:bg-thickdark transition-all w-full" key={index}>
                                <div className="">
                                    <img src={image?.image} alt="" className="size-9" />
                                </div>
                                <div className="">
                                    <div className="capitalize font-bold">{item.name}</div>
                                    <div className="uppercase text-xs font-bold text-zinc-500">{balance ? 0 : ""} {item.short}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
        </div>
    )
}

export default ModalSelector