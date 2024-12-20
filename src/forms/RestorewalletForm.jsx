
import React, { useCallback, useEffect, useRef, useState } from 'react'
import gimg38 from "assets/gimg38.svg"
import gimg36 from "assets/gimg36.svg"
import Forminput from '../components/Forminput'
import Formbutton from '../components/Formbutton'
import { useSelector } from 'react-redux'
import { CoinFlags, returnError, tokenName, TrackCode } from '../utils/utils'
import { Apis, geturl, Posturl } from '../utils/Apis'
import Multiselection from '../components/Multiselection'
import img from "assets/gimg4.svg"
import { FaRegTimesCircle } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import Cookies from "js-cookie"


const TopMenu = [
    "Restore from Guarrda Backup",
    "Import from Currency",
    "Import Mnemonic",
]


function RestoreFromBackup() {
    const navigate = useNavigate()
    const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm({
        defaultValues: {
            password: '',
            email: '',
        },
    })

    async function SubmitDataForm(values) {
        try {
            const response = await Posturl(Apis.user.login, values)
            if (response.status !== 200) return toast.error(response.message)
            localStorage.setItem(TrackCode, values.email)
            toast.success(response.message)
            Cookies.set(tokenName, response.token)
            navigate('/app')
        } catch (error) {
            returnError(error)
        }
    }
    return (
        <form onSubmit={handleSubmit(SubmitDataForm)}>
            <Forminput
                {...register("email", { required: 'Email address is required' })}
                error={errors.email}
                errorMessage={errors.email?.message}
                placeholder="Email address" />
            <Forminput
                {...register("password", { required: 'Password is required' })}
                error={errors.password}
                errorMessage={errors.password?.message}
                type='password'
                placeholder="Enter password" />
            <div className="w-2/5 mx-auto">
                <Formbutton title="Restore" loading={isSubmitting} />
            </div>
        </form>
    )
}

function RestorewalletForm() {
    const { theme } = useSelector(state => state.data)
    const [active, setActive] = useState(TopMenu[0])
    const [currencies, setCurrencies] = useState([])
    const [country, setCountry] = useState("")
    const [error, setError] = useState("")
    const [image, setImage] = useState({ file: '', name: '' })
    const imageRef = useRef()


    const Fetchdata = useCallback(async () => {
        try {
            const response2 = await geturl(Apis.admin.all_wallet)
            return setCurrencies(response2.data)
        } catch (error) {
            returnError(error)
        }
    }, [])

    useEffect(() => { Fetchdata() }, [Fetchdata])

    function LoadContent(item) {
        setCountry(item)
        setError('')
    }

    function UploadImage(e) {
        const file = e.target.files[0]
        if (file.type !== 'text/plain') return false
        setImage({ file, name: file.name })
    }

    function CancelUpload() {
        setImage({ file: '', name: '' })
        imageRef.current.value = null
    }

    return (
        <div className="w-11/12 mx-auto max-w-2xl bg-white dark:bg-subdark mt-7">
            <div className="grid grid-cols-3">
                {TopMenu.map((item, index) => (
                    <div
                        onClick={() => setActive(item)}
                        className={`border-b-2 text-sm text-center dark:text-zinc-200 px-1 font-semibold cursor-pointer py-3 ${active === item ? 'border-primary' : 'dark:border-maindark'}`}
                        key={index}>{item}</div>
                ))}
            </div>
            <div className=" px-9 py-4">
                {active === TopMenu[0] && <>
                    <div className="text-center font-bold text-xl dark:text-zinc-300">Restore</div>
                    <div className="text-center text-sm mt-6 mb-3 dark:text-zinc-300">You will be able to restore your wallet by using a Backup if you are a user of Guarda Wallet.</div>
                    <div className="max-w-md mx-auto ">
                        <div className="w-fit ml-auto mb-2 text-sm"> <button className="border border-primary text-primary py-1 px-4 rounded-md">Enter backup text</button> </div>
                        <div className="border border-dashed border-zinc-400 rounded-lg h-[15rem]">
                            <div className="flex flex-col items-center w-full h-full gap-3 justify-center">
                                <div className=""> <img src={theme === 'dark' ? gimg36 : gimg38} alt="" className="size-28" /> </div>
                                <div>
                                    {!image.name ? <label>
                                        <div className="text-sm text-zinc-500 text-center mb-2">Drag and drop file or</div>
                                        <div className=""> <div className="bg-green-500 py-1 cursor-pointer mx-auto w-fit text-sm px-5 rounded-md text-white">Browse</div> </div>
                                        <input ref={imageRef} type="file" hidden onChange={UploadImage} />
                                    </label> :
                                        <div className="flex items-center justify-center dark:text-zinc-200 gap-2">{image.name?.slice(0, 20)}...  <FaRegTimesCircle className='cursor-pointer' onClick={CancelUpload} /> </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <RestoreFromBackup />
                    </div>
                </>}
                {active === TopMenu[1] && <>
                    <div className="font-bold text-xl dark:text-zinc-300">Import your funds</div>
                    <div className="text-sm mt-3 mb-3 dark:text-zinc-300">You can import the private keys from external wallets. This will allow you to receive, send, purchase and exchange crypto. Your private keys are held encrypted on this browser local storage, not by a company.</div>
                    <div className="bg-primary dark:bg-maindark/30 px-5 py-5 rounded-md">
                        <Multiselection source={CoinFlags} Options={currencies} defaultValue={country} error={error} LoadContent={LoadContent} />

                        <Forminput placeholder="Enter password" />

                        <div className="grid grid-cols-3 gap-5 mb-7 pt-6">
                            <div className="flex items-center gap-2">
                                <img src={img} alt="" className="size-4" />
                                <div className="text-xs text-white">Secure encryption</div>
                            </div>
                            <div></div>
                            <div className="">
                                <Formbutton title="Add wallet" bg="border-primary !text-primary dark:bg-transparent border" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 capitalize mb-3 font-bold text-xl p-3">wallets</div>
                    <div className="text-center text-zinc-400 font-medium mt-5">No wallet have been added</div>
                </>}
                {active === TopMenu[2] && <>
                    <div className="font-bold text-xl text-primary mb-5">Import Using Mnemonic Phrase</div>
                    <div className="text-sm mt-3 mb-3 dark:text-zinc-300">You can restore your crypto wallet using your mnemonic phrase. This enables you to manage, send, purchase, and swap your cryptocurrency seamlessly. Your mnemonic phrase remains encrypted in browser’s local storage and is not held by any third-party organization.</div>
                    <div className="bg-primary dark:bg-maindark/30 px-5 py-5 rounded-md">
                        <Forminput placeholder="Mnemonic" />

                        <div className="grid grid-cols-3 gap-5 mb-7 pt-6">
                            <div className="flex items-center gap-2">
                                <img src={img} alt="" className="size-4" />
                                <div className="text-xs text-white">Secure encryption</div>
                            </div>
                            <div className="col-span-2">
                                <Formbutton title="Add wallet by mnemonic" bg="border-primary text-primary dark:bg-transparent border" />
                            </div>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default RestorewalletForm