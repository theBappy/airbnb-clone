'use client'

import Select from 'react-select'
import useCountries from '@/app/hooks/useCountries';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
}

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;

}

function getEmojiFlag(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

const CountrySelect  = ({value, onChange}:CountrySelectProps) => {
  const { getAll } = useCountries()
  return (
    <div>
        <Select 
        placeholder="Anywhere"
        isClearable
        options={getAll()} 
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className='flex flex-row items-center gap-3'>
            <div className="">
              {getEmojiFlag(option.value) || option.value}
            </div>
            <div className="">
              {option.label}{' '} 
              <span className='text-neutral-500 ml-1'>{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => `p-3 border-2`,
          input: () => `text-lg`,
          option: () => `text-lg`
        }}
        theme={(theme) => ({
          ...theme, 
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6'
          }
        })}
        />
    </div>
  )
}

export default CountrySelect 