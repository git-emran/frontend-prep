'use client'
import { data } from "@/data/search-filter-data"
import { useEffect, useState } from "react"



const SearchFilter = () => {
  const [search, setSearch] = useState("")
  const [throttle, setThrottle] = useState("")
  const [showResults, setShowResults] = useState(false)


  useEffect(() => {
    const throttleSearch = setTimeout(() => {
      setThrottle(search)
    }, 300)
    return () => clearTimeout(throttleSearch)
  }, [search])



  return (
    <main>
      <div>
        <div>
          <h1>Search and Filter</h1>
          <input type="search" value={search} onFocus={() => setShowResults(true)} onBlur={() => setShowResults(false)} onChange={(e) => setSearch(e.target.value)} />

        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {showResults && (
                data.filter((item) => {
                  return throttle.trim() === "" ||
                    item.first_name.toLowerCase().includes(throttle.toLowerCase()) ||
                    item.last_name.toLowerCase().includes(throttle.toLowerCase()) ||
                    item.email.toLowerCase().includes(throttle.toLowerCase())
                }).map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.email}</td>
                    </tr>

                  )
                })
              )}

            </tbody>
          </table>

        </div>

      </div>
    </main>
  )
}

export default SearchFilter
