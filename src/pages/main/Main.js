import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Main = () => {
  const [sensorData, setSensorData] = useState();

  const navigate = useNavigate('');
  const goGraph = () => {
    navigate('/graph');
  };

  useEffect(() => {
    fetch('data/dataList.json')
      .then((res) => res.json())
      .then((data) => {
        setSensorData(data.data);
      });
  }, []);

  return (
    <Container>
      <div className='btnContainer'>
        <button onClick={goGraph}>GO GRAPH</button>
      </div>
      <table>
        <thead>
          <tr className='tableRow'>
            <th>#</th>
            <th>thingName</th>
            <th>Connected at</th>
            <th>Disconnected at</th>
            <th>Reason</th>
            <th>Gateway</th>
            <th>Raw sent</th>
            <th>Remain</th>
            <th>RSSI</th>
          </tr>
        </thead>
        <tbody>
          {sensorData?.map((data) => {
            return (
              <tr key={data.thingName}>
                <td>{data.thingName}</td>
                <td>{data.shadow.batLvl}</td>
                <td>{data.shadow.connAt}</td>
                <td>{data.shadow.connCardNum}</td>
                <td>{data.shadow.connGW}</td>
                <td>{data.shadow.disconnAt}</td>
                <td>{data.shadow.disconnReason}</td>
                <td>{data.shadow.fwVer}</td>
                <td>{data.shadow.hwVer}</td>
                <td>{data.shadow.rawSentCnt}</td>
                <td>{data.shadow.remainData}</td>
                <td>{data.shadow.rssi}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  .btnContainer {
    padding: 20px;
    text-align: left;
    background-color: ${({ theme }) => theme.mainBlue};

    button {
      color: white;
      margin-right: 1.563rem;
      border: 2px solid #fff;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.mainBlue};
      font-weight: 700;
      font-size: 1rem;
      &:active {
        background-color: #fff;
        color: ${({ theme }) => theme.mainBlue};
      }
    }
  }
`;
