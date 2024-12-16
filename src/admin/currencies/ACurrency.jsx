import React, { useCallback, useEffect, useState } from 'react'
import Formbutton from '../../components/Formbutton'
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import Forminput from '../../components/Forminput';
import { MenuItem } from '@mui/material';
import { toast } from 'sonner';
import { useForm } from "react-hook-form"
import { CountriesTags, returnError } from '../../utils/utils';
import CustomSelect from '../../components/admin/CustomSelect';
import { Apis, Authgeturl, Authposturl } from '../../utils/Apis';
import moment from 'moment';

const Tables = [
  "",
  "name",
  "short",
  "active",
  "date created",
  "",
]

const Status = [
  "true",
  "false",
]

function ACurrency() {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, openedtag] = useDisclosure(false);
  const [country, setCountry] = useState('')
  const [error, setError] = useState('')
  const [data, setData] = useState({})
  const [single, setSingle] = useState({})
  const { handleSubmit, register, formState: { errors, isSubmitting }, watch, setValue } = useForm({
    defaultValues: {
      active: '',
      name: '',
    },
  })
  const watchform = watch(['active'])

  function LoadContent(item) {
    setCountry(item)
    setError('')
  }

  const Fetchdata = useCallback(async () => {
    try {
      const response = await Authgeturl(Apis.admin.all_currency)
      return setData(response)
    } catch (error) {
      returnError(error)
    }
  }, [])

  useEffect(() => { Fetchdata() }, [Fetchdata])

  function HandleOpen(item) {
    openedtag.open()
    setCountry(item.short)
    setValue('active', item.active)
    setValue('name', item.name)
    setSingle(item)
  }
  function HandleCreate(item) {
    open()
    setCountry("")
    setValue('active', '')
    setValue('name', '')
    setSingle({})
  }

  async function SubmitAction(values) {
    if (!country) return setError('Please select a country')
    setError('')
    const formData = {
      short: country,
      name: values.name,
      active: values.active,
      tag: single?.id ? 'update' : 'create',
      id: single?.id ?? ''
    }
    try {
      const response = await Authposturl(Apis.admin.manage_currency, formData)
      if (![201, 200].includes(response.status)) return toast.error(response.message)
      toast.success(response.message)
    if(single?.id) {
      openedtag.close()
    }else {
      close()
    }
      return Fetchdata()
    } catch (error) {
      returnError(error)
    }
  }

  function FormCompo() {
    return (
      <form onSubmit={handleSubmit(SubmitAction)}>
          <Forminput content="Name" {...register('name', { required: 'Country name is required' })} error={errors.name} errorMessage={errors.name?.message} />
          <CustomSelect contentValue="Select country" Options={CountriesTags} error={error} defaultValue={country} LoadContent={LoadContent} />
          <Forminput
            {...register('active', { required: 'Active status is required' })}
            error={errors.active}
            value={watchform[0] || ''}
            errorMessage={errors.active?.message}
            content="Currency Active Status" formtype="select">
            {Status.map((item, index) => (
              <MenuItem key={index} value={item}>{item}</MenuItem>
            ))}
          </Forminput>
          <Formbutton title="Submit" loading={isSubmitting} />
        </form>
    )
  }

  return (
    <>
    {/* create */}
      <Modal opened={opened} onClose={close} title="Create Currency" centered>
        <FormCompo />
      </Modal>
      {/* update */}
      <Modal opened={opened2} onClose={openedtag.close} title='Update' centered>
        <FormCompo />
      </Modal>
      <div className="mt-8 w-11/12 mx-auto max-w-[65rem]">
        <div className="w-fit ml-auto mb-5">
          <Formbutton title='+ add currency' onClick={HandleCreate} />
        </div>
        <div className="bg-white rounded-xl dark:bg-subdark border dark:border-subdark">
          <div className="overflow-x-auto scrollsdown">
            <table className="table w-full">
              <thead>
                <tr className='border-b'>
                  {Tables.map((item, index) => (
                    <th key={index} className="px-5 py-3 truncate text-sm font-medium capitalize text-center text-zinc-500 dark:text-zinc-200">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.data?.map((item, index) => (
                  <tr className='border-b last:border-none' key={index}>
                    <td className="text-sm font-medium capitalize text-center"> <img src={CountriesTags.find(ele => ele.short === item.short)?.image} alt="" className="size-8" /> </td>
                    <td className="px-5 py-3 text-sm font-medium capitalize text-center">{item.name}</td>
                    <td className="px-5 py-3 text-sm font-medium capitalize text-center">{item.short}</td>
                    <td className="px-5 py-3 text-sm font-medium capitalize text-center">{item.active}</td>
                    <td className="px-5 py-3 text-sm font-medium capitalize text-center">{moment(item.createdAt).format('DD-MM-YYYY hh:mm A')}</td>
                    <td className="px-5 py-3 text-sm font-medium capitalize text-center"> <button onClick={() => HandleOpen(item)} className="py-2 px-3 rounded-lg border capitalize hover:bg-slate-700 transition-all hover:text-white">manage</button> </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data.count > 0 && <div className="text-center text-sm text-zinc-500 py-10">No records found...</div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default ACurrency