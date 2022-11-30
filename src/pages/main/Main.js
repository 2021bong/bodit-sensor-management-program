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
        <div className='maxContainer'>
          <button onClick={goGraph}>GRAPH</button>
          <h2>MAIN</h2>
        </div>
      </div>
      <table className='table'>
        <thead className='tableHead'>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Battery</th>
            <th>Connected at</th>
            <th>Card No.</th>
            <th>Gateway</th>
            <th>Disconnected at</th>
            <th>Reason</th>
            <th>FwVer</th>
            <th>HwVer</th>
            <th>RawSentCnt</th>
            <th>Remain Data</th>
            <th>RSSI</th>
          </tr>
        </thead>
        <tbody className='tableBody'>
          {sensorData?.map((data, i) => {
            return (
              <tr key={data.thingName}>
                <td className='id'>{i + 1}</td>
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
    width: 100%;
    background-color: ${({ theme }) => theme.mainBlue};
    padding: 20px 28px;

    .maxContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1400px;
      margin: 0 auto;

      h2 {
        color: #fff;
        font-size: 1.563rem;
        font-weight: 700;
      }

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
  }

  .table {
    width: 100%;
    margin: 0 auto;

    .tableHead {
      background-color: #eee;
      color: ${({ theme }) => theme.mainBlue};

      th {
        padding: 10px;
        border-top: 1px solid #eee;
        border-right: 1px solid #fff;
        font-weight: 700;
        vertical-align: middle;
      }
    }

    .tableBody {
      width: 100%;
    }

    .id {
      font-weight: 700;
    }

    tr {
      border-bottom: 1px solid #eee;

      &:first-child {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
      }

      &:last-child {
        border: none;
      }

      &:hover {
        background-color: #eee;
        color: ${({ theme }) => theme.mainBlue};
        border: 1px solid #fff;

        td {
          border-right: 1px solid #fff;
        }
      }

      td {
        padding: 10px 5px;
        border-right: 1px solid #eee;
        text-align: center;
        vertical-align: middle;
      }
    }
  }
`;
