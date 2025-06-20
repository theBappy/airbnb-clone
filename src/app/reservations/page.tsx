
import EmptyState from '../components/EmptyState'
import getCurrentUser from '../actions/getCurrentUser'
import getReservations from '../actions/getReservations'
import ClientOnly from '../components/ClientOnly'
import ReservationsClient from './ReservationsClient'


const ReservationPage = async() => {
  const currentUser = await getCurrentUser()
  if(!currentUser) {
    return (
        <ClientOnly>
            <EmptyState 
            title='Unauthorized'
            subtitle='Please login'
            />
        </ClientOnly>
    )
  }  

  const reservations = await getReservations({
    authorId: currentUser.id
  })
  if(reservations.length === 0){
    return (
        <ClientOnly>
            <EmptyState 
            title="No reservation found"
            subtitle='Looks like you&apos;ve no reservations on your property'
            />
        </ClientOnly>
    )
  }


  return (
    <ClientOnly>
        <ReservationsClient 
        reservations={reservations}
        currentUser={currentUser}
        />
    </ClientOnly>
  )
}

export default ReservationPage