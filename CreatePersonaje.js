import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/personaje'
const CreatePersonaje = () => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [species, setSpecies] = useState('')
    const [gender, setGender] = useState('')
    const [url, setUrl] = useState('')



    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {id: id, name: name, status: status, species: species, gender: gender, url: url})
        navigate('/')

    }
  return (
    <div>
        <h2>Creat a new personaje</h2>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>id</label>
                <input 
                    value={id} 
                    onChange={ (e)=> setId(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input 
                    value={name} 
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Status</label>
                <input 
                    value={status} 
                    onChange={ (e)=> setStatus(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Species</label>
                <input 
                    value={species} 
                    onChange={ (e)=> setSpecies(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Gender</label>
                <input 
                    value={gender} 
                    onChange={ (e)=> setGender(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Url</label>
                <input 
                    value={url} 
                    onChange={ (e)=> setUrl(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div> 

            <button type='submit' className='btn btn-success'>Save</button>
        </form>
    </div>
  )
}

export default CreatePersonaje
