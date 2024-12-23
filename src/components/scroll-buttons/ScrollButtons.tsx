"use client"
import React from 'react'
import "./scroll-buttons.css"
import Icon from '../icon/Icon'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

interface props {
    getCardWidth: ()=> number,
    getContainerWidth: ()=> number,
    cardsTotal: number,
    ref: React.RefObject<HTMLDivElement | null>,
    prevIsDisabled: boolean,
    nextIsDisabled: boolean
}

interface scrollVariables {
    containerWidth: number,
    cardWidth: number,
    scrollPosition: number,
    card: number,
    cardsOnRow: number,
    prevRemainder: number,
    nextRemainder: number,
    leftOuterResidual: number,
    leftInnerResidual: number,
    rightInnerResidual: number,
    rightOuterResidual: number,
}

const gap: number = 8
const ScrollButtons = ({getCardWidth, getContainerWidth, cardsTotal, prevIsDisabled, nextIsDisabled, ref}: props) => {

    const getScrollVariables = (): scrollVariables => {
        const containerWidth = getContainerWidth()
        const cardWidth = getCardWidth()
        const scrollPosition = ref.current?.scrollLeft || 0
        const card = cardWidth + gap
        const cardsOnRow = Math.floor(containerWidth / cardWidth )
        const prevRemainder = Math.floor(scrollPosition / cardWidth)
        const nextRemainder = cardsTotal - prevRemainder - cardsOnRow
        const leftOuterResidual = scrollPosition - card * prevRemainder
        const leftInnerResidual = cardWidth - leftOuterResidual
        const rightInnerResidual = containerWidth - ((leftInnerResidual + gap) + card * (cardsOnRow - 1))
        const rightOuterResidual = cardWidth - rightInnerResidual

        return {containerWidth, cardWidth, scrollPosition, card, cardsOnRow, prevRemainder, nextRemainder, leftOuterResidual, leftInnerResidual, rightInnerResidual, rightOuterResidual}
    }
   
    const handleNext = (): void => {
        const {nextRemainder, cardsOnRow, rightOuterResidual, card, containerWidth, rightInnerResidual, scrollPosition} = getScrollVariables()
        
        const x = nextRemainder < cardsOnRow 
        ? rightOuterResidual + card * nextRemainder
        : rightOuterResidual > 16
            ? containerWidth - rightInnerResidual
            : containerWidth + gap + rightOuterResidual

        const newScrollPosition = scrollPosition + x
        ref.current?.scroll(newScrollPosition, 0);
    }

    const handlePrev = (): void => {
        const {prevRemainder, cardsOnRow, leftOuterResidual, leftInnerResidual, card, containerWidth, scrollPosition} = getScrollVariables()

        const x = prevRemainder < cardsOnRow 
        ? leftOuterResidual + card * prevRemainder
        : leftOuterResidual > 16
            ? containerWidth - leftInnerResidual
            : containerWidth + gap + leftOuterResidual

        const newScrollPosition = scrollPosition - x
        ref.current?.scroll(newScrollPosition, 0);
    }


  return (
    <div className='scroll-buttons'>
        <Icon icon={KeyboardBackspaceIcon} disabled={prevIsDisabled} onClick={handlePrev} />
        <Icon icon={KeyboardBackspaceIcon} onClick={handleNext} disabled={nextIsDisabled} />
    </div>
  )
}

export default ScrollButtons

// This works for just click. I drafted this for larger screen sizes without the touch feature. Considered larger screen sizes with touch feature and figured that using the scroll position to check for remainders and residuals was the better way to go. Therefore, i came up with the one currently in use.

// interface scrollByClickStateType {
//     page: number,
//     nextRemainder: number,
//     prevRemainder: number,
//     scrollPosition: number,
//     scrollTL: Array<number>,
//     cardsOnRow: number
// }

// const maxCardsonDisplay: number = 3

 // const [{page, nextRemainder, prevRemainder, scrollPosition, scrollTL, cardsOnRow}, setScrollByClick] = useState<scrollByClickStateType>({
    //     page: 1,
    //     nextRemainder: cardsTotal,
    //     prevRemainder: 0,
    //     scrollPosition: 0,
    //     scrollTL: [0],
    //     cardsOnRow: 0
    // })

// const handleForwardClick = () => {
//     const containerwidth = getContainerWidth()
//     const cardWidth = getCardWidth()
//     const cardsOnRow = Math.floor(containerwidth / cardWidth )
//     if (nextRemainder < cardsOnRow) {return}
//     const newNextRemainder = nextRemainder - cardsOnRow
//     const newPrevRemainder = prevRemainder + cardsOnRow
//     const innerResidual = containerwidth - (cardWidth + gap) * cardsOnRow
//     const outerResidual = cardWidth - innerResidual

//     const getXByCardsOnRow: () => number = () => {
//         if(cardsOnRow === maxCardsonDisplay) {
//             return newNextRemainder >= maxCardsonDisplay 
//             ? containerwidth + gap 
//             : containerwidth - (cardWidth + gap)*newNextRemainder
//         } else if (cardsOnRow === 1) {
//             return newNextRemainder > 1 
//             ? page === 1
//                 ? 0.5*containerwidth + 0.5*cardWidth - innerResidual
//                 : cardWidth + gap
//             : outerResidual
//         } else {
//             return newNextRemainder > cardsOnRow 
//             ? containerwidth - innerResidual 
//             : outerResidual + (cardWidth + gap) * (newNextRemainder - 1)
//         }
//     }

//     const x: number = getXByCardsOnRow() ;
//     const newScrollPosition = scrollPosition + x

//     ref.current?.scroll(newScrollPosition, 0);
//     setScrollByClick({page: page+1, nextRemainder: newNextRemainder,prevRemainder: newPrevRemainder, scrollPosition: newScrollPosition, scrollTL: [...scrollTL, x], cardsOnRow })
// }

// const handleBackwardClick = () => {
//     if (prevRemainder <= 0) {return}
//     const newNextRemainder = nextRemainder + cardsOnRow
//     const newPrevRemainder = prevRemainder - cardsOnRow

//     const x: number = scrollTL[scrollTL.length - 1 ];
//     const newScrollPosition = scrollPosition - x

//     ref.current?.scroll(newScrollPosition, 0);
//     setScrollByClick({page: page-1, nextRemainder: newNextRemainder, prevRemainder: newPrevRemainder, scrollPosition: newScrollPosition, scrollTL: scrollTL.slice(0, -1), cardsOnRow} )
// }