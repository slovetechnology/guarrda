import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa6'
import { Menu, Button } from '@mantine/core';

function Multiselection({ Options, error, LoadContent, defaultValue, contentValue, source }) {
    const getDefaultValue = Options.find(ele => ele.short === defaultValue)
    const getDefaultValueImage = source.find(ele => ele.short === defaultValue)
    const [opened, setOpened] = useState(false);
    const [content, setContent] = useState(getDefaultValue ?? {})
    const [text, setText] = useState('')
    const [values, setValues] = useState(Options || [])
    const [img, setImg] = useState(getDefaultValueImage?.image ?? null)

    function ManageCurrent(item) {
        const getSource = source.find(ele => ele.short === item.short)
        setImg(getSource?.image)
        setContent(item)
        setOpened(false)
        LoadContent(item.short)
    }

    function HandleSearch(e) {
        const val = e.target.value
        setText(val)
        if (val) {
            const findItem = Options.filter(ele => ele.short.toLowerCase().includes(val.toLowerCase()))
            setValues(findItem)
        } else {
            setValues(Options)
        }
    }

    return (
        <div className="relative">
            <div className="text-sm">{contentValue}</div>
            <Menu shadow="md" classNames='relative p-0 mt-20' width={"25rem"} opened={opened} onChange={setOpened}>
                <Menu.Target>
                    <div>
                        <div className={`border ${error ? 'border-red-500' : 'border-zinc-300'} bg-white rounded-md grid grid-cols-2 items-center py-3 px-2 cursor-pointer`}>
                            {content?.short ? <div className='flex items-center gap-2'> {img && <img src={img} alt="" className="size-7" />} {content.short} </div> :
                                <div className='flex items-center gap-2'>  <div><div className="size-7 rounded-full bg-primary"></div> </div> <div className="w-full h-4 bg-slate-300 rounded-sm"></div> </div>}
                            <div className="text-sm w-fit ml-auto"> <FaCaretDown /> </div>
                        </div>
                        {error && <div className="text-sm text-red-500">{error}</div>}
                    </div>
                </Menu.Target>

                <Menu.Dropdown className='p-0 h-[18rem]'>
                    <div>
                        <input value={text} onChange={HandleSearch} type="text" className="border-b outline-none p-2 text-sm w-full block" placeholder='search' />
                        <div className="text-sm text-slate-500 p-3">Countries</div>
                    </div>
                    <div className="h-[12.5rem] overflow-y-auto scrolls">
                        {values.map((item, index) => {
                            const imageIcon = source.find(ele => ele.short === item.short)?.image ?? null
                            return (
                                <div onClick={() => ManageCurrent(item)} key={index} className="py-1.5 px-2 hover:bg-zinc-100 cursor-pointer rounded-md flex items-center gap-2">
                                   {imageIcon && <img src={imageIcon} alt="" className="size-9" /> }{item.short}
                                </div>
                            )
                        })}
                    </div>
                </Menu.Dropdown>
            </Menu>
        </div>
    )
}

export default Multiselection

