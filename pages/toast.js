import React from 'react'
// import Information from '../components/toast/Information'
// import Warning from '../components/toast/Warning'
// import Success from '../components/toast/Success'
import Error from '../components/toast/Error'

const toast=() =>{
  return (
    <div>
        {/*  always make sure to leave just one style uncommented in other to check out the style */}

        {/* <Success sucMsg='Success' sucDetails='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis quis diam laoreet feugiat turpis a ullamcorper interdum. '/> */}
        
        
        {/* uncomment to check information style */}

        {/* <Information infoMsg='Information' infoDetails='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis quis diam laoreet feugiat turpis a ullamcorper interdum. '/> */}
    

       {/* uncomment to check  error style */}

        <Error errMsg='Error'  errDetails='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis quis diam laoreet feugiat turpis a ullamcorper interdum. '/>


        {/* uncomment to check  warning style */}

        {/* <Warning warningMsg='Warning' warningDetails='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis quis diam laoreet feugiat turpis a ullamcorper interdum. '/> */}
    </div>

  )
}

export default toast