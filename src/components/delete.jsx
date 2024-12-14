import React from 'react'

const deletesvg = () => {
  return (
    <div><svg
    width="100"
    height="100"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  
    <g id="delete-icon" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path id="lid" d="M8 6H16" />
      <path id="lid-handle" d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" />
      <path id="trash" d="M3 6H21" />
      <path id="bottom" d="M16 10V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H10C9.46957 21 8.96086 20.7893 8.58579 20.4142C8.21071 20.0391 8 19.5304 8 19V10M10 10V8C10 7.46957 10.2107 6.96086 10.5858 6.58579C10.9609 6.21071 11.4696 6 12 6V6C12.5304 6 13.0391 6.21071 13.4142 6.58579C13.7893 6.96086 14 7.46957 14 8V10M12 10V18" />
    </g>
    
    <animate
      xlink:href="#delete-icon"
      attributeName="transform"
      type="rotate"
      from="0 12 12"
      to="360 12 12"
      dur="3s"
      repeatCount="indefinite"
    />
  </svg>
  </div>
  )
}

export default deletesvg