import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { CommandDialog, CommandInput } from './ui/command';

const SearchCommand = ({ renderAs = 'button', label = 'Add stock', initialStocks }: SearchCommandProps) => {
    const [open, setOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(false)
    const [stocks, setStocks] = useState<StockWithWatchlistStatus[]>(initialStocks)
    
    const isSeachMode = !!searchTerm.trim()
    const displayStocks = isSeachMode ? stocks : stocks?.slice(0, 10)

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault()
                setOpen(v => !v)
            }
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [])

    const handleSearch = async() => {
        if(!isSeachMode) return setStocks(initialStocks)

        setLoading(true)
        try {
            
        } catch (error) {
            setStocks([])
        } finally {
            setLoading(false)
        }
    } 

    // const debouncedSearch = 
    
    return (
        <>
            {renderAs === 'text' ? (
                <span onClick={() => setOpen(true)} className='search-text'> 
                    {label}
                </span>
            ) : (
                <Button onClick={() => setOpen(true)} className='search-btn'>
                    {label}
                </Button>
            )}
            <CommandDialog open={open} onOpenChange={setOpen} className='search-dialog'>
                <div className='search-field'>
                    <CommandInput value={searchTerm} onValueChange={setSearchTerm} placeholder='Search Stocks...' className='search-input' />
                </div>
            </CommandDialog>
        </>
    )
}

export default SearchCommand