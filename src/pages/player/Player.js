import React from 'react'
import { playersList } from '../../db/PlayersList';
import { useParams } from 'react-router-dom';
import Table from '../../components/table/Table';
import Reports from '../../components/table/Reports';
function Player() {
    const { userId } = useParams();
    const player = playersList[1];
    return (
        <div>
            {/* {playersList.filter((player) => player?.id === userId).map((player) => { */}

            <div div className='shadow-xl sm:rounded-lg p-4 border border-solid border-current'>
                <div className='flex h-60 sm:rounded-lg'>
                    <div className=' w-[20%] p-4'>
                        <img src={player?.image} alt="user" width={150} height={150} className='rounded-lg' />
                    </div>
                    <div className='p-4 w-[80%]'>
                        <div class="grid grid-cols-3 items-center gap-4 h-[50%]">
                            <div className='flex flex-col  px-4'>
                                <h4 className='text-slate-500'>Full Name</h4>
                                <h4 className='text-stone-800'>{`${player?.first_name} ${player?.last_name}`}</h4>
                            </div>
                            <div className='flex flex-col px-4'>
                                <h4 className='text-slate-500'>Date Of Birth</h4>
                                <h4 className='text-stone-800'>{player?.birth_date}</h4>
                            </div>
                            <div className='flex flex-col  px-4'>
                                <h4 className='text-slate-500'>Height</h4>
                                <h4 className='text-stone-800'>{`${player?.height_feet} feet ${player?.height_inches} inches`}</h4>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 items-center gap-4 h-[50%]">
                            <div className='flex flex-col  px-4'>
                                <h4 className='text-slate-500'>Level</h4>
                                <h4 className='text-stone-800'>{player?.level}</h4>
                            </div>
                            <div className='flex flex-col px-4'>
                                <h4 className='text-slate-500'>Organization</h4>
                                <h4 className='text-stone-800'>{player?.organization}</h4>
                            </div>
                            <div className='flex flex-col  px-4'>
                                <h4 className='text-slate-500'>Club</h4>
                                <h4 className='text-stone-800'>{player?.club}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <Table data={player?.pitching_stats} title="Pitching Stats" allowedKeys={["year","term","games","wins","losses","hits","runs","era"]}/>
                <Table data={player?.upcoming} title="Upcoming Events" allowedKeys={["date","home","away","time","venue"]}/>
                <Reports data={player?.reports}/>
            </div>
            {/* })
            } */}
        </div>
    )
}

export default Player