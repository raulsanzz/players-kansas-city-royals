import React, { useState } from 'react'
import { playersList } from '../../db/PlayersList';
import { Link } from "react-router-dom";
function AllPlayers() {
    const [searchValue, setSearchValue] = useState('');
    return (

        <div class="relative shadow-xl sm:rounded-lg p-4 border border-solid border-current">
            <div class="flex justify-between items-center pb-4 bg-white dark:bg-gray-900">
                <div />
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input onChange={(e) => setSearchValue(e.target.value)} type="text" id="table-search-users" class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Image
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Position
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Organization
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Club
                        </th>
                    </tr>
                </thead>
                <tbody class='over-flow-auto'>
                    {
                        playersList?.filter((player) => player?.first_name?.toLowerCase().includes(searchValue.toLowerCase()) || player?.first_name?.toLowerCase().includes(searchValue.toLowerCase())).map((player, i) => {
                            return <tr key={player} class="bg-white border-b dark:bg-gray-800  hover:bg-gray-50 cursor-pointer dark:hover:bg-gray-600">
                                <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img class="w-10 h-10 rounded-full" src={player.image} alt="Jese" />
                                    <div class="pl-3 flex flex-col">
                                        <div class="text-base font-semibold text-gray-500">{`${player?.first_name} ${player?.last_name}`}</div>
                                        <div class="font-normal text-gray-500">{player?.birth_date}</div>
                                    </div>
                                </th>
                                <td class="py-4 px-6">
                                    <Link to={`/players/${player?.id}`}>{`${player?.first_name} ${player?.last_name}`}</Link>
                                </td>
                                <td class="py-4 px-6">
                                    {player?.position}
                                </td>
                                <td class="py-4 px-6">
                                    {player?.organization}
                                </td>
                                <td class="py-4 px-6">
                                    {player?.club}
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllPlayers