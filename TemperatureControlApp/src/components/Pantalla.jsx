import React from 'react'

export const Pantalla = ({ temperature }) => {
    const color = ['00', '00', '00']
    if (temperature <= 18) {
        color[0] = '00'
        color[1] = '70'
        color[2] = 90 - temperature
    } else if (temperature <= 24) {
        color[0] = '00'
        color[1] = '70'
        color[2] = '0' + (24 - temperature)
    } else if (temperature > 24) {
        color[0] = '90'
        color[1] = 70 - temperature
        color[2] = '10'
    }
    const rgb = color.toString().replace(/,/g, '').padStart(7, '#')
    return (
        <section className='w-48 h-48 rounded-full bg-slate-100 grid place-content-center mt-4 shadow-md shadow-slate-600 border-2 border-solid border-slate-800 pantalla' style={{ backgroundColor: rgb }}>
            <span className='text-5xl'>{temperature}°</span>
        </section>
    )
}
