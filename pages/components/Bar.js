const Bar = (props) => {
  const {text} = props
 return (
  <>
  <div className="mainText">{text}</div>
  <div className='bars'>
    <div className="bar"></div>
    <div className="bar"></div>
  </div>
    <style jsx>{`
    .mainText{
      padding: 0 1.75rem 1rem;
      font-family: Gotham A,Gotham B,DIN,sans-serif;
      font-weight: 700;
      color: #464ea3;
      font-size: 2rem;
      letter-spacing: .05em;

    }
      .bars {
        display: flex;
        height: .4rem;
        padding: 0 1.75rem;
      }
      .bar{
        flex: 1;
        margin: 0 6px;
        height: .4rem;
        background-color: #464ea3;
      }
      `}</style>
  </>
)

}

export default Bar;