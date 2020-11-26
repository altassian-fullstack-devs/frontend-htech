const TagElement = ({datatag,tagname}) => {

  return (
    <li data-tag={datatag}>
        <div>{tagname}</div>
    </li>
  )
}

export default  TagElement 