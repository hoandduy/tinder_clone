import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from "@mui/icons-material/Replay"
import CloseIcon from "@mui/icons-material/Close"
import StarRateIcon from "@mui/icons-material/StarRate"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FlashOnIcon from "@mui/icons-material/FlashOn"
import IconButton from "@material-ui/core/IconButton"

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_repeat">
        <ReplayIcon fontSize="small" />
      </IconButton>
      <IconButton className="swipeButtons_left">
        <CloseIcon fontSize="small" />
      </IconButton>
      <IconButton className="swipeButtons_star">
        <StarRateIcon fontSize="small" />
      </IconButton>
      <IconButton className="swipeButtons_right">
        <FavoriteIcon fontSize="small" />
      </IconButton>
      <IconButton className="swipeButtons_lightning">
        <FlashOnIcon fontSize="small" />
      </IconButton>
    </div>
  )
}

export default SwipeButtons